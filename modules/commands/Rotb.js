module.exports.config = {
	name: "إسم_جروب",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "Ιнaв",
	description: "تغير اسم المجموعة",
  usePrefix: false,
	commandCategory: "𝗚 𝗥 𝗢 𝗜 𝗣", 
	usages: "groupname [الاسم]", 
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args }) {
	var name = args.join(" ")
	if (!name) api.sendMessage("❌ ادخل الامر وبعدها الاسم", event.threadID, event.messageID)
	else api.setTitle(name, event.threadID, () => api.sendMessage(`🤖قام البوت بتغير اسم المجموعة إلى: ${name}`, event.threadID, event.messageID));
}