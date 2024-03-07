const fs = require("fs");

module.exports.config = {
  name: "الرمز",
  version: "1.0.1",
  hasPermssion: 2,
  credits: "Ιнaв",
  description: "بدون بادئة",
  commandCategory: "𝗔 𝗗 𝗠 𝗜 𝗡",
  usePrefix: false,
  usages: "...",
  cooldowns: 1,
};

module.exports.handleEvent = function ({ api, event, client, __GLOBAL }) {
  var { threadID, messageID } = event;
  if (
    event.body.indexOf("الرمز") == 0 ||
    event.body.indexOf("Prefix") == 0 ||
    event.body.indexOf("Ano prefix") == 0 ||
    event.body.indexOf("ano prefix") == 0
  ) {
    const moment = require("moment-timezone");
    var gio = moment.tz("Africa/Casablanca").format("HH:mm:ss || D/MM/YYYY");
    var msg = {
      body: `╭┈ ❒ [ STORM ] : البادئة\n╰┈➤ ${global.config.PREFIX}\n╭┈ ❒ لرؤية كافة الاوامر \n╰┈➤ أكتب مساعدة\n[ ${gio} ]`,
    };
    api.sendMessage(msg, threadID, messageID);
  }
};

module.exports.run = function ({ api, event, client, __GLOBAL }) {};