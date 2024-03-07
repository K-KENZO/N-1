const fs = require("fs");

module.exports.config = {
  name: "ضبط",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Ιнaв",
  description: "فم بتغيير البادئة بدون الذهاب إلى الإعدادات",
usePrefix: false,
  commandCategory: "𝗔 𝗗 𝗠 𝗜 𝗡",
  usages: ["ضبط البادئة [بادئة جديدة]"],
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, senderID } = event;

  const getUserInfo = async (api, userID) => {
    try {
      const userInfo = await api.getUserInfo(userID);
      return userInfo[userID].name;
    } catch (error) {
      console.error(`Error fetching user info: ${error}`);
      return "";
    }
  };

  const userName = await getUserInfo(api, senderID);

  if (args.length === 0) {
    const currentPrefix = global.config.PREFIX;
    const response = `🤖 أوه مرحبا آمل أنك بخير يا, ${userName}! بادئتي الحالية هي ${currentPrefix}. هل ترغب في تغيير البادئة ؟ يمكنك إستخدام “ضبط البادئة[بادئة جديدة]” من أجل الحصول على يطب.`;
    api.sendMessage(response, threadID, event.messageID);
    return;
  }

  if (args.length !== 2 || args[0] !== "البادئة") {
    api.sendMessage(`⚠️ إستخدام غير صالح ، إستخدم: “ضبط البادئة [بادئة جديدة]”`, threadID, event.messageID);
    return;
  }

  const newPrefix = args[1];
  global.config.PREFIX = newPrefix;

  fs.writeFileSync("config.json", JSON.stringify(global.config, null, 2));

  api.sendMessage(`✅ تم تغيير البادئة إلى: ${newPrefix}`, threadID, event.messageID);
};