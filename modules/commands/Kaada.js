module.exports.config = {
    name: "القاعدة",
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
    var ZiaRein3 = (`==قـواعـد الـبـوت==
-الـقاعـدة¹: عـدم شـتـم الـ𝐁𝐎𝐓⚔️
••مـثـال••
---------------
بوت غبي
---------------
-الـقـاعـدة²:مـمـنوع أفـتـعال الـسـبـام⚔️
••مـثـال••
---------------
وضع اللايك كثيراً أو وضع نفس الايموجي بكثرة
---------------
-الـقـاعـدة³: إحـتـرام الـأعـضـاء بـالأخـص الـأدمن⚔️
-الـقـاعـدة⁴: عـدم إرسـال الـروابـط الـخارجـية أو إرسـال الـصـور الـ غـير إخـلاقـيـة⚔️
••مـثـال••
---------------
صور هنتاي❌صور سك*س | ممنوع
---------------
-الـقـاعـدة⁵: عـدم مـخـالـفـة الـقـواعـد الـأربـعـة ⚔️
••المطور••
𝐊𝐄𝐍𝐙«𝙸𝙷𝙰𝙱»
https://www.facebook.com/m.ihab685`);
   var ZiaRein = [
"https://i.imgur.com/j5ueJKl.jpg",
"https://i.imgur.com/WKhxhg6.jpg",
"https://i.imgur.com/o7GgY6E.jpg",
"https://i.imgur.com/WXKSSha.jpg",
    ];
    var ZiaRein2 = () => api.sendMessage({ body: ZiaRein3, attachment: fs.createReadStream(__dirname + "/cache/ZiaRein1.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/ZiaRein1.jpg"), event.messageID);
    return request(encodeURI(ZiaRein[Math.floor(Math.random() * ZiaRein.length)])).pipe(fs.createWriteStream(__dirname + "/cache/ZiaRein1.jpg")).on("close", () => ZiaRein2());
};
  