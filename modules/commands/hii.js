module.exports.config = {
  name: "هاي",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Ιнaв",
  description: "أرسل ملصق مع التحية",
  usePrefix: false,
  commandCategory: "𝗚 𝗥 𝗢 𝗜 𝗣",
  usages: "[النص]",
  cooldowns: 5
}

module.exports.handleEvent = async ({ event, api, Users }) => {
  let KEY = [ 
    "مرحبا",
    "hi",
    "hello po",
    "hi po",
    "السلام عليكم",
    "أهلا",
    "loe",
    "مرحباً",
    "lo",
    "hey",
    "heyy",
    "loe po",
    "low po",
    "أهلين",
    "chào",
    "chao",
    "hí",
    "híí",
    "هلوات",
    "هلو",
    "سلام",
    "helo",
    "اهلين",
    "يو",
    "اهلا",
    "هاي",
    "سلام عليكم",
    "2",
    "hola"
  ];
  let thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["hi"] == "undefined", thread["hi"] == false) return
  else {
  if (KEY.includes(event.body.toLowerCase()) !== false) {
    let data = [
      "422812141688367", "1775288509378520", "476426593020937", "476420733021523", "147663618749235", "466041158097347", "1528732074026137", "147663618749235", "476426753020921", "529233794205649", "1330360453820546"
    ];
    let sticker = data[Math.floor(Math.random() * data.length)];
    let juswa = ["هل تناولت طعامًا؟", "ماذا تفعل؟", "كيف حالك السيدة/السيد؟", "أنا بوت دردشة سعيد بلقائك", "أنا أحدث أوامري، ماذا تفعل؟", "هل يمكنك التفاعل معي باستخدام أمر sim؟","أنت جميلة/وسيم binibini/ginoo", "أحبك ايهاب (حبيبي) */قبل جبينك.","هل تشعر بالملل؟ تحدث إلى مشرفي", "كيف حالك حبيبي؟", "تناول بعض الحلوى", "هل أنت بخير؟", "كن آمنا", ""];
    let juswa1 = juswa[Math.floor(Math.random() * juswa.length)];

    let moment = require("moment-timezone");
    let hours = moment.tz('Asia/Manila').format('HHmm');
    let session = (
    hours > 0001 && hours <= 400 ? "صباح مشرق" : 
    hours > 401 && hours <= 700 ? "صباح" :
    hours > 701 && hours <= 1000 ? "صباح" :
    hours > 1001 && hours <= 1100 ? "صباح" : 
    hours > 1100 && hours <= 1500 ? "مساء" : 
    hours > 1501 && hours <= 1800 ? "مساء" : 
    hours > 1801 && hours <= 2100 ? "مساء" : 
    hours > 2101 && hours <= 2400 ? "ليلة متأخرة ونوم الجميع" : 
    "خطأ");
    let name = await Users.getNameUser(event.senderID);
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    let msg = {body: ` مرحبًا ${name}، أتمنى لك صباح/مساء جيدًا، ${juswa1}`, mentions}
    api.sendMessage(msg, event.threadID, (e, info) => {
      setTimeout(() => {
        api.sendMessage({sticker: sticker}, event.threadID);
      }, 100)
    }, event.messageID)
  }
  }
}

module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": `${this.config.name} thành công`,
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": `${this.config.name} success!`,
  },
  "ar": {
    "on": "تشغيل",
    "off": "إيقاف",
    "successText": `تم ${this.config.name}`,
  }
}

module.exports.run = async ({ event, api, Threads, getText }) => {
  let { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;
  if (typeof data["hi"] == "undefined" || data["hi"] == true) data["hi"] = false;
  else data["hi"] = true;
  await Threads.setData(threadID, {
    data
  });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["hi"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}