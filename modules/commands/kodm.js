var hiro = "Atsushi Nakajima";
const axios = require("axios");
const request = require("request");
const fs = require("fs-extra");

module.exports.config = {
  name: "كودم",
  version: "1",
  hasPermssion: 0,
  credits: `Ιнaв`, // Credits to Grey for the banner I just putted all of them
  description: "إنشاء شعار كودم",
  usePrefix: false,
  commandCategory: "𝗔 𝗗 𝗗 𝗜 𝗧 𝗜 𝗢 𝗡 𝗔 𝗟",
  usages: "<نص>",
  cooldowns: 2,
};
module.exports.run = async function ({ api, event, args, Users }) {
  let { messageID, senderID, threadID } = event;

  if (args.length === 1 && args[0] === "قائمة") {
    const bannerTypes = [
      "كود1", "كود2", "كود3"];
    return api.sendMessage(` كل أنواع الخلفيات:\n\n${bannerTypes.join(", ")}`, threadID, messageID);
  }

  if (args.length < 2) {
    return api.sendMessage(`تنسيق الأمر غير صالح! إستخدم: -خلفية كودم <نوع كودم> <الإسم>\nمن أجل رؤية كل خلفيات كودم: -قائمة خلفيات كودم`, threadID, messageID);
  }

  let type = args[0].toLowerCase();
  let name = args[1];
  let name2 = args.slice(2).join(" ");
  let pathImg = __dirname + `/cache/${type}_${name}.png`;
  let apiUrl, message;

  switch (type) {
    case "كود1":
      apiUrl = `https://canvastest.heckerman06.repl.co/burat?name=${name}`;
      message = "خلفية كال أوف ديتي فد تم إنشائها:";
      break;
    case "كود2":
      apiUrl = `https://canvastest.heckerman06.repl.co/burat1?name=${name}`;
      message = "خلفية كال أوف ديتي قد تم إنشائها:";
      break;
    case "كود3":
      apiUrl = `https://canvastest.heckerman06.repl.co/burat3?name=${name}`;
      message = "خلفية كال أوف ديتي قد تم إنشائها:";
      break;
     default:
      return api.sendMessage(`استخدام لافتة خاطئة: -قائمة خلفية كودم لإظهار جميع اللافتات`, threadID, messageID);
  }
  api.sendMessage("إنتظر..", threadID, messageID);
  let response = await axios.get(apiUrl, { responseType: "arraybuffer" });
  let logo = response.data;
  fs.writeFileSync(pathImg, Buffer.from(logo, "utf-8"));
  return api.sendMessage(
    {
      body: message,
      attachment: fs.createReadStream(pathImg),
    },
    threadID,
    () => fs.unlinkSync(pathImg),
    messageID
  );
};