const axios = require('axios');

module.exports.config = {
    name: "رفع",
    usePrefix: false,
    version: "1.0",
    credits: "Ιнaв",
    cooldowns: 5,
    hasPermission: 0,
    description: "قم بتحميل الصورة أو الفيديو إلى إيمجور عن طريق الرد على الصورة أو الفيديو",
  commandCategory: "𝗚 𝗥 𝗢 𝗜 𝗣",
    usages: "إيمجور [صورة, فيديو]"
  },

  module.exports.run = async function ({ api, event }) {
    const link = event.messageReply?.attachments[0]?.url;
    if (!link) {
      return api.sendMessage(' ⚠️ |الرجاء الرد على الصورة أو الفيديو.', event.threadID, event.messageID);
    }

    try {
      const res = await axios.get(`https://rishadapi.rishad100.repl.co/imgur2?apikey=fuck&link=${encodeURIComponent(link)}`);
      const uploaded = res.data.uploaded;

      if (uploaded.status === "success") {
        return api.sendMessage(uploaded.url, event.threadID, event.messageID);
      } else {
        return api.sendMessage(' ❌ |فشل تحميل الصورة أو الفيديو إلى إيمجور.', event.threadID, event.messageID);
      }
    } catch (error) {
      console.error(error);
      return api.sendMessage(' ❌ |فشل تحميل الصورة أو الفيديو إلى إيمجوؤ.', event.threadID, event.messageID);
    }
};
