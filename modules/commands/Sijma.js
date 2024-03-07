const fs = require("fs");
const moment = require("moment-timezone");

module.exports.config = {
    name: "مضاد_إضافة_البوت",
    version: "1.2.0",
    hasPermssion: 2,
    credits: "Ιнaв",
    description: "منع المستخدمين من إضافة ستورم البوت إلى مجموعات أخرى دون موافقة.",
  usePrefix: false,
    commandCategory: "𝗔 𝗗 𝗠 𝗜 𝗡",
    cooldowns: 0
};

module.exports.handleEvent = async function({ api, event }) {
    if (event.type === "thread-add" && event.author) {
        const authorID = event.author;
        const threadID = event.threadID;
        const botAdmins = getBotAdmins();
        const botOwnerID = botAdmins[0]; 

        if (botAdmins.includes(authorID)) {
            return;
        }

        api.sendMessage("ليس لديك الإذن لتضيفني إلى مجموعات أخرى.", authorID);

        const threadInfo = await api.getThreadInfo(threadID);
        const threadName = threadInfo.threadName || "this group";
        const timestamp = moment.tz("Africa/Casablanca").format("YYYY-MM-DD HH:mm:ss");
        const adminMessage = `${event.senderID} يحاول إضافتي إلى مجموعة ${threadName} في ${timestamp}.`;
        api.sendMessage(adminMessage, botOwnerID);
    }
};

function getBotAdmins() {
    try {
        const data = fs.readFileSync(__dirname + "/bot_admins.json", "utf-8");
        return JSON.parse(data);
    } catch (error) {
        return [];
    }
  }
  