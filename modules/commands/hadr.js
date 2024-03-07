module.exports.config = {
	name: "مهرج",	
	version: "1.0.0", 
	hasPermssion: 0,
	credits: "Ιнaв",
	description: "image",
  usePrefix: false,
	commandCategory: "𝗣 𝗜 𝗖 𝗧 𝗜 𝗥 𝗘 𝗦",
	usages: "reply to image or put an image link",
	cooldowns: 5
};

module.exports.run = async function({ api, event, args }) {
const fs = global.nodemodule["fs-extra"];
const axios = require('axios');
	var linkUp = event.messageReply.attachments[0].url || args.join("");
	if(!linkUp) return api.sendMessage('من فضلك قم بالرد على صورة بالامر', event.threadID, event.messageID)
	try {
		const res = await axios.get(`https://api-1.huytran6868.repl.co/imgur?link=${encodeURIComponent(linkUp)}`)
		const link = res.data.uploaded.image
		var img = (await axios.get(`https://api.popcat.xyz/clown?image=${link}`, { responseType: "arraybuffer" })).data;
		fs.writeFileSync(__dirname + `/cache/pet.png`, Buffer.from(img, "utf-8"));
		return api.sendMessage({ body: `بوينك🤡`, attachment: fs.createReadStream(__dirname + `/cache/pet.png`)}, event.threadID, () => 
		fs.unlinkSync(__dirname + `/cache/pet.png`), event.messageID)
	} catch(e) {
		return api.sendMessage(e, event.threadID, event.messageID);
	}
}