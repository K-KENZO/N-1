module.exports.config = {
    name: "معلومات_البوت",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Ιнaв",
    description: "رؤبة قاعدة البوت",
  usePrefix: false,
    commandCategory: "𝗚 𝗥 𝗢 𝗜 𝗣",
    usages: "قاعدة البوت",
    cooldowns: 5,
    dependencies: {
        "request": "",
        "fs-extra": "",
        "axios": ""
    }
};

module.exports.run = async({ api, event, args, client, Users, Threads, __GLOBAL, Currencies }) => {
    const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
    var ZiaRein3 = (`⌈℘مـعـلـومـات الـبـوت℘⌋

♤¦✗¦← الـإسـم: 𝚂𝚃𝙾𝚁𝙼
♤¦✗¦← الـلـقـب: 𝑯𝑰𝑹𝑶
♤¦✗¦← الـعـمـر: 16 ᴀɴs
♤¦✗¦←الـبـادئـة: «  »
♤¦✗¦←أستخدم الاوامر لرؤية الفئات المتاحه
♤¦✗¦←لرؤية قواعد البوت أكتب "القاعدة"
♤← مـلاحـظـة→♤
- البوت يعمل بدون بادئة👑ً
-أكتب المطور لرؤية حساب الصانع لو تريد الدردشة معه سيسره ذالك👑ً`);
   var ZiaRein = [
"https://i.imgur.com/x7aHx01.jpg",
"https://i.imgur.com/eQhofmX.jpg",
"https://i.imgur.com/JGscGpG.jpg",
    ];
    var ZiaRein2 = () => api.sendMessage({ body: ZiaRein3, attachment: fs.createReadStream(__dirname + "/cache/ZiaRein1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ZiaRein1.jpg"), event.messageID);
    return request(encodeURI(ZiaRein[Math.floor(Math.random() * ZiaRein.length)])).pipe(fs.createWriteStream(__dirname + "/cache/ZiaRein1.jpg")).on("close", () => ZiaRein2());
};
