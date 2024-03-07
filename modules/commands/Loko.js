module.exports.config = {
    name: "لوكو",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Ιнaв",
    description: `${global.config.PREFIX}avatar ID|TEXT|TEXT`,
usePrefix: false,    commandCategory: "𝗣 𝗜 𝗖 𝗧 𝗜 𝗥 𝗘 𝗦",
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
	const content = args.join(" ").split("|").map(item => item = item.trim());
let text1= encodeURI(content[2])
let text = encodeURI(content[1])
let num = parseInt(content[0])
if (!text)
    return api.sendMessage("يرجى إدخال رقم وليس حرف |🎀", event.threadID, event.messageID);
    if (!text1)
    return api.sendMessage("يرجى إدخال رقم وليس حرف |💀", event.threadID, event.messageID);
    if (!num)
    return api.sendMessage("يرجى إدخال رقم وليس حرف |🎀", event.threadID, event.messageID);
    if (num > 882) return api.sendMessage("[💀] الحد الأقصى هو 882", event.threadID, event.messageID);
    if (isNaN(num)) {
    return api.sendMessage("[💀] الإدخال في الهوية ليس رقم !!! من فضلك ضع رقما", event.threadID, event.messageID);
    }
    api.sendMessage("⏱️|جاري معالجة، الأمر يرجى الإنتظار قليلاً من فضلك", event.threadID, event.messageID);
	 var callback = () => api.sendMessage({body:``,attachment: fs.createReadStream(__dirname + "/cache/avt1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/avt1.png"),event.messageID);
	 return request(encodeURI(`https://sakibin.sinha-apiv2.repl.co/taoanhdep/avatarwibu?id=${num}&chu_nen=${text1}&chu_ky=${text}`)).pipe(fs.createWriteStream(__dirname+'/cache/avt1.png')).on('close',() => callback());     
}}