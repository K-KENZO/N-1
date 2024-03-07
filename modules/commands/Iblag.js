module.exports.config = {
	name: "الوقت",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "Ιнaв",//Ntr Ems Boosting
	description: "انظر ما هو الوقت",
	commandCategory: "𝗦 𝗘 𝗥 𝗩 𝗜 𝗖 𝗘 𝗦", 
	usages: "وقت", 
  usePrefix: false,
	cooldowns: 0,
	dependencies: [] 
};

module.exports.run = async function({ api, event, args, Currencies, utils, Users }) {
	const moment = require("moment");
	var time = moment.tz("Africa/Casablanca").format("HH:MM:ss L");
	let data = await api.getUserInfo(event.senderID);
    let name = await data[event.senderID].name
    return api.sendMessage(`👋 أهلاً ${name} طاب يومك !\nإنها الآن: ${time} 🛎`, event.threadID, event.messageID)
                                     }