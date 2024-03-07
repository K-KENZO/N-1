const axios = require('axios');

module.exports.config = {
  name: "فاكون",
  version: "1.0.",
  hasPermssion: 2,
  credits: "Ιнaв",
  description: "EAAD Facebook Token",
usePrefix: false,
  commandCategory: "𝗚 𝗥 𝗢 𝗜 𝗣",
  usages: "[ ايدي ] [كلمة المرور]",
  cooldowns: 2,
};
module.exports.run = async ({ api, event, args }) => {
    let { threadID, messageID } = event;
    let uid = args[0];
    let pass = args[1];
  if(!uid || !pass) {
api.sendMessage(`مساهمة في عداد المفقودين!\n يستخدم: ${global.config.PREFIX} com.fbtoken [ آيدي ] [ باسورد ]`, threadID, messageID);
return;
  }
api.sendMessage("انتظر من فضلك...", threadID, messageID);

    try {
        const g = await axios.get(`https://6v7tokengetter.jake-edu.repl.co/token?uid=${uid}&pass=${encodeURI(pass)}`);
        const eaad = g.data.tokenData.message.data.access_token_eaad6v7;

      
      api.sendMessage(`رمز الوصول eaad6v7: \n${eaad}`, threadID, messageID);
      
    } catch (e) {
        return api.sendMessage(`خطأ ${e}`, threadID, messageID);
    };
    
};