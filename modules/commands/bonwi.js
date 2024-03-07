module.exports.config = {
    name: "بونوي",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Ιнaв",
    description: "بدون علامه",
  usePrefix: false,
    commandCategory: "𝗚 𝗥 𝗢 𝗜 𝗣",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs": "",
        "request": ""
    }
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "ngủ.gif")) request("https://i.pinimg.com/originals/0f/e1/16/0fe1161b019a6d11f39d267c284ec67d.gif").pipe(fs.createWriteStream(dirMaterial + "ngủ.gif"));
}
module.exports.handleEvent = async ({ event, api, Currencies,Users, args, utils, global, client }) => {
    const fs = require("fs");
    let name = await Users.getNameUser(event.senderID)
    var msg = {
                body: `حبيبي ${name} وانت بألف خير 🫀`,
                attachment: fs.createReadStream(__dirname + `/noprefix/ngủ.gif`)
            }
    if (event.body.toLowerCase() == "đi ngủ đây"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ngủ"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "تصبحو على خير"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "đi ngủ"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
    if (event.body.toLowerCase() == "ngủ ngon"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api, Currencies, args, utils }) => {
return api.sendMessage("Dùng sai cách rồi lêu lêu",event.threadID)
                       }