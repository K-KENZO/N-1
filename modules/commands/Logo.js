module.exports.config = {
    name: "لوجو",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Ιнaв",
    description: `${global.config.PREFIX}textpro [ID] [TEXT]`,
usePrefix: false,
    commandCategory: "𝗣 𝗜 𝗖 𝗧 𝗜 𝗥 𝗘 𝗦",
    cooldowns: 0,
    dependencies: {
        "fs-extra": "",
        "request": ""
    }
};
module.exports.run = async ({ api, event,args }) => {  {
    
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
	 const { threadID, messageID, senderID, body } = event;
	const num = args[0];
  const message = args.slice(1).join(' ');
  if (num > 181) return api.sendMessage("[!] 181 الحد الأقصى هو", event.threadID, event.messageID);
  if (isNaN(num)) return api.sendMessage("يرجى إدخال رقم وليس حرف💀", event.threadID, event.messageID);
if (!message)
    return api.sendMessage("لا تنسى الإسم🤦‍♂️", event.threadID, event.messageID);
    api.sendMessage("⏱️|جاري معالجة، الأمر يرجى الإنتظار قليلاً من فضلك…", event.threadID, event.messageID);

	 var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/textpro.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/textpro.png"),event.messageID);
	 return request(encodeURI(`https://sakibin.sinha-apiv2.repl.co/api/textpro?number=${num}&text=${message}&apikey=SAKIBIN-FREE-SY6B4X`)).pipe(fs.createWriteStream(__dirname+'/cache/textpro.png')).on('close',() => callback());     
}}