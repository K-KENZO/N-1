module.exports.config = {
	name: "رست",
	version: "1.0.2",
	hasPermssion: 2,
	credits: "Ιнaв",
	description: "اعاده تشغيل البوت",
  usePrefix: false,
	commandCategory: "𝗔 𝗗 𝗠 𝗜 𝗡",
	cooldowns: 5000,
	dependencies: {
		"eval": ""
	}
};

module.exports.run = async ({ api, event, args, client, utils }) => {
    const eval = require("eval");
    const permission = [`100073563467859`,`100073563467859`];                  
    if (!permission.includes(event.senderID)) return api.sendMessage("ليس لديك الصلاحية", event.threadID, event.messageID);
    return api.sendMessage("جـاري إعـادة تـشـغـيـل 𝐒𝐓𝐎𝐑𝐌 𝗕𝗢𝗧…⏳🕞", event.threadID, () => eval("module.exports = process.exit(1)", true), event.messageID);

   }
