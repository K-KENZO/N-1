module.exports.config = {
  name: "رابط",
  version: "30.0.10",
  hasPermssion: 0,
  credits: "Ιнaв",
  description: "رابط مختصر للصوره الترد عليها",
  usePrefix: false,
  commandCategory: "𝗚 𝗥 𝗢 𝗜 𝗣",
  usages: "[رد عا صوره]",
  cooldowns: 5,
  dependencies: {
    "axios": ""
  }
};

module.exports.run = async ({ api, event }) => {
  const axios = global.nodemodule['axios'];
  let link2;

  if (event.type === "message_reply" && event.messageReply.attachments.length > 0) {
    link2 = event.messageReply.attachments[0].url;
  } else if (event.attachments.length > 0) {
    link2 = event.attachments[0].url;
  } else {
    return api.sendMessage('قم بالرد على المرفق او الصورة التي تريد رابطه', event.threadID, event.messageID);
  }

  const res = await axios.get(`https://bot.api-johnlester.repl.co/imgur?link=${encodeURIComponent(link2)}`);
  const link = res.data.uploaded.image;
  return api.sendMessage(`تفضل هذا هو رابط الصورة التي اشرت لها:\n\n${link}`, event.threadID, event.messageID);
};