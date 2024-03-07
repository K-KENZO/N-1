const axios = require("axios");
const fs = require("fs");

module.exports.config = {
  name: "جات",
  version: "4.9",
  hasPermssion: 0,
  credits: "Ιнaв",
  description: "( 𝙶𝚃𝙰-𝚅 )",
  usePrefix: false,
  commandCategory: "𝚗𝚘 𝚙𝚛𝚎𝚏𝚒𝚡",
  usages: "( 𝙼𝚘𝚍𝚎𝚕 - 𝚂𝙳𝚇𝙻 - 𝙶𝚃𝙰-𝚅 )",
  cooldowns: 3,
};

module.exports.handleEvent = async function ({ api, event }) {
  if (!(event.body.indexOf("gta") === 0 || event.body.indexOf("جات") === 0)) return;
  const args = event.body.split(/\s+/);
  args.shift();

  const prompt = args.join(" ");  

  api.setMessageReaction("📸", event.messageID, (err) => {}, true);

  if (!prompt) {
    api.sendMessage("✨ 𝙷𝚎𝚕𝚕𝚘 𝚝𝚘 𝚞𝚜𝚎 𝚂𝚍𝚡𝚕 𝙶𝚃𝙰-𝚅.\n\n𝙿𝚕𝚎𝚊𝚜𝚎 𝚞𝚜𝚎: 𝚐𝚝𝚊 [ 𝚙𝚛𝚘𝚖𝚙𝚝 ]", event.threadID);
    return;
  }

  api.sendMessage("🕟 | 𝙶𝚃𝙰-𝚅 𝙶𝚎𝚗𝚎𝚛𝚊𝚝𝚒𝚗𝚐 𝙿𝚛𝚘𝚖𝚙𝚝, 𝙿𝚕𝚎𝚊𝚜𝚎 𝚠𝚊𝚒𝚝...", event.threadID);

  try {
    const response = await axios.get('https://codemerge-api.hazeyy0.repl.co/sdxl/gta5/api', {
      params: {
        prompt: prompt,  
      },
    });

    console.log('🤖 𝙶𝚃𝙰-𝚅 𝚁𝚎𝚜𝚙𝚘𝚗𝚜𝚎:', response.data);

    if (response.data.output) {
      const imageData = response.data.output;

      if (imageData && Array.isArray(imageData)) {
        const item = imageData[0];
        const image = await axios.get(item, { responseType: "arraybuffer" });
        const path = __dirname + "/cache/" + Math.floor(Math.random() * 999999) + ".jpg";

        const promptMessage = `🤖 𝐆𝐓𝐀-𝐕 ( 𝐀𝐈 )\n\n🖋️ 𝙰𝚜𝚔: '${prompt}'\n\n✨ 𝙿𝚛𝚘𝚖𝚙𝚝 𝙶𝚎𝚗𝚎𝚛𝚊𝚝𝚎𝚍:`;

        fs.writeFileSync(path, image.data);

        api.sendMessage({ body: promptMessage, attachment: fs.createReadStream(path) }, event.threadID, () => {
          fs.unlinkSync(path);
        });
      }
    } else {
      api.sendMessage('🚫 𝙰𝚗 𝚎𝚛𝚛𝚘𝚛 𝚘𝚌𝚌𝚞𝚛𝚎𝚍 𝚍𝚞𝚛𝚒𝚗𝚐 𝚝𝚑𝚎 𝙿𝚒𝚡𝙰𝚛𝚝 𝚙𝚛𝚘𝚌𝚎𝚜𝚜.', event.threadID);
    }
  } catch (error) {
    console.error('🚫 𝙴𝚛𝚛𝚘𝚛:', error);
    api.sendMessage('🚫 𝙰𝚗 𝚎𝚛𝚛𝚘𝚛 𝚘𝚌𝚌𝚞𝚛𝚎𝚍 𝚠𝚑𝚒𝚕𝚎 𝚐𝚎𝚗𝚎𝚛𝚊𝚝𝚒𝚗𝚐 𝚝𝚑𝚎 𝚒𝚖𝚊𝚐𝚎.', event.threadID);
  }
};

module.exports.run = async function({ api, event }) {};