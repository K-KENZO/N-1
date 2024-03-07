module.exports.config = {
	name: "تيد",
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "Ιнaв",
	description: "ايدي الكروب",
  usePrefix: false,
	commandCategory: "𝗦 𝗘 𝗥 𝗩 𝗜 𝗖 𝗘 𝗦",
	usages: "ا",
	cooldowns: 5, 
	dependencies: '',
};

module.exports.run = async function({ api, event }) {
  api.sendMessage(event.threadID, event.threadID);
};
