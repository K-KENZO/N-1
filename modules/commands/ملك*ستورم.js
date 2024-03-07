const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "الملك-ستورم",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "Ιнaв",
  description: "",
usePrefix: false,
  commandCategory: "𝗚 𝗥 𝗢 𝗜 𝗣",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["تفضل تفضل","نعم يا أخي","أنا هنا بما أساعدك","أكتب الاوامر لعرض الفئات المتاحة",];
 var rand = tl[Math.floor(Math.random() * tl.length)]

  if ((event.body.toLowerCase() == "مفتقدك") || (event.body.toLowerCase() == "حثتيني")) {
     return api.sendMessage("️حياتي بدونك ولا شئ 🙃💞", threadID, messageID);
   };
  if ((event.body.toLowerCase() == "احبك") || (event.body.toLowerCase() == "بحبك")) {
     return api.sendMessage("️شكرا, انا اريد حبيبة تكون قوية لتكون آميرة السلطان اي انا هل انتي هي؟☺️🎀", threadID, messageID);
   };
   
  if ((event.body.toLowerCase() == "ملل") || (event.body.toLowerCase() == "ملل يجيب شلل")) {
     return api.sendMessage("️ليه ماعندك حبيبة ولا ايه؟ وفي رأيك ليش انا موجود هون😐🔪", threadID, messageID);
   };
  
if ((event.body.toLowerCase() == " كيوت") || (event.body.toLowerCase() == "كيوتت")) {
     return api.sendMessage("️تف عليك تشوفني ناعم متلك😐🔪", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "بوت غبي") || (event.body.toLowerCase() == "بوت فاشل")) {
     return api.sendMessage("️مش اكثر منك 😏", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ما اسمك") || (event.body.toLowerCase() == "اسمك")) {
     return api.sendMessage("️إسمي بكل تواضع *الملك* «ستورم»", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "كيفكم") || (event.body.toLowerCase() == "كيفك")) {
     return api.sendMessage("️انا بخير وانت اتمنى تكون بخير دومك يارب🎀😊", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "السلام عليكم") || (event.body.toLowerCase() == "سلام عليكم")) {
     return api.sendMessage("️ وعليكم السلام ورحمه الله وبركاته", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "جيت") || (event.body.toLowerCase() == "رجعت")) {
     return api.sendMessage("️منور", threadID, messageID);
   };
   if ((event.body.toLowerCase() == "منوره ") || (event.body.toLowerCase() == " منور")) {
     return api.sendMessage("️نورك الأصل الأصيل بلا منازع او مثيل ✨", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "😂") || (event.body.toLowerCase() == "😹")) {
     return api.sendMessage("️دوم ضـحـكتك إنشـاءالله🎀😊", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "هدية") || (event.body.toLowerCase() == "عمل")) {
     return api.sendMessage("️يجب عليك اللعب للحصول على بعض المال 🐢🎀", threadID, messageID);
   };
   
if ((event.body.toLowerCase() == "تعطل") || (event.body.toLowerCase() == "مات")) {
     return api.sendMessage("️في أحلامك الوردية، الملك ☆ستورم☆ لا يموت ولا يتعطل أبداً، يبقى ساهر على راحتكم يا أعزائي🎀", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "كهف") || (event.body.toLowerCase() == "هديه")) {
     return api.sendMessage("️يجب عليك اللعب لجمع المال$🐢", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "رح اغير نفسي") || (event.body.toLowerCase() == "اريد اغير من نفسي")) {
     return api.sendMessage("️اذا فكرت في ان تغير نفسك يوما فعليك ان تعرف اسطوره شادي وميسون الاثنين يلي عاشو 1000 سنه وما اتغيرو اصلا 😂😂", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ايرين كلب") || (event.body.toLowerCase() == "ايرين الكلب")) {
     return api.sendMessage("️يب حصل ايرين هو كلب حءير صمموه لينجرد ويسب ويصيح في نهار رمضان", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "ستروم") || (event.body.toLowerCase() == "يا بوت")) {
     return api.sendMessage("️يا كلب يا حقير يا حيوان اسمي ستورم قائدك🤧🖤", threadID, messageID);
   };
   
   if ((event.body.toLowerCase() == "امين") || (event.body.toLowerCase() == "amine")) {
     return api.sendMessage("king anime brb", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "من هي ريم") || (event.body.toLowerCase() == "الوحش الكيوت")) {
     return api.sendMessage("️هي بنت متوحشه كيوت تحل مشاكل الناس وتستمتع بالايموجيز المستفزة ", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "من هي اميره") || (event.body.toLowerCase() == "الجرذ المعفن")) {
     return api.sendMessage("️هي بنت نتنه مش بتستحم وريحتها طالعه للمجره", threadID, messageID);
   };
   
    if ((event.body.toLowerCase() == "إيهاب") || (event.body.toLowerCase() == "ايهاب")) {
     return api.sendMessage("️مـرحباً سـيدي الـذكي إيـهـاب غـير نـشط حالياً 🎀😊") };
   mess = "{name}"
  
  if (event.body.indexOf("هيرو") == 0 || (event.body.indexOf("هيرو") == 0)) {
    var msg = {
      body: ` ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
