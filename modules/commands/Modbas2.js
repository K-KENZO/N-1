module.exports.config = {
	name: "مورس",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Ιнaв",
	description: "تحويل نص الى شفره مورس فقط انجليزي",
  usePrefix: false,
  usages: "[النص بنجليزي]",
	commandCategory: "𝗔 𝗗 𝗗 𝗜 𝗧 𝗜 𝗢 𝗡 𝗔 𝗟",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
const axios = global.nodemodule["axios"];
let juswa = args.join(" ");
const res = await axios.get(`https://api.popcat.xyz/texttomorse?text=${juswa}`);
var morse = res.data.morse;
return api.sendMessage(`${morse}`, event.threadID, event.messageID)
}