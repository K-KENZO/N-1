const axios = require("axios");
const fs = require("fs");

module.exports.config = {
  name: "إنشاء",
  version: "3.2",
  hasPermssion: 0,
  credits: "Ιнaв",
  description: "( 𝙿𝚕𝚊𝚢𝚐𝚛𝚘𝚞𝚗𝚍 - 𝚟2 )",
  usePrefix: false,
  commandCategory: "𝗦 𝗘 𝗥 𝗩 𝗜 𝗖 𝗘 𝗦",
  usages: "( 𝙼𝚘𝚍𝚎𝚕 - 𝙿𝚕𝚊𝚢𝚐𝚛𝚘𝚞𝚗𝚍 1024𝚙𝚡 - 𝚊𝚎𝚜𝚝𝚑𝚎𝚝𝚒𝚌 )",
  cooldowns: 3,
};

module.exports.handleEvent = async function ({ api, event }) {
  if (!(event.body.indexOf("إنشاء") === 0 || event.body.indexOf("انشاء") === 0)) return;
  const args = event.body.split(/\s+/);
  args.shift();

  const prompt = args.join(" ");  

  api.setMessageReaction("📸", event.messageID, (err) => {}, true);

  if (!prompt) {
    api.sendMessage("✨ مرحباً بك سيدي\n للأنشاء يرجى وضع نص أنجليزي [ نص ]", event.threadID);
    return;
  }

  api.sendMessage("🕟 | جـاري إنــشـاء الـصـورة إنـتـظـر قلـيلاً مـن فـضـلـك.", event.threadID);

  try {
    const response = await axios.get('https://codemerge-api.hazeyy0.repl.co/play/api', {
      params: {
        prompt: prompt,  
      },
    });

    console.log('🤖 STORM BOT:', response.data);

    if (response.data.output) {
      const imageData = response.data.output;

      if (imageData && Array.isArray(imageData)) {
        const item = imageData[0];
        const image = await axios.get(item, { responseType: "arraybuffer" });
        const path = __dirname + "/cache/" + Math.floor(Math.random() * 999999) + ".jpg";

        const promptMessage = `🤖 𝐒𝐓𝐎𝐑𝐌 ( 𝐀𝐈 )\n\n🖋️ 𝙰𝚜𝚔: '${prompt}'\n\n✨ نـتـيـجـة الـإنـشـاء:`;

        fs.writeFileSync(path, image.data);

        api.sendMessage({ body: promptMessage, attachment: fs.createReadStream(path) }, event.threadID, () => {
          fs.unlinkSync(path);
        });
      }
    } else {
      api.sendMessage('🚫| فشل التحميل يرجى المحاولة لاحقاً', event.threadID);
    }
  } catch (error) {
    console.error('🚫| خطأ:', error);
    api.sendMessage('🚫| فشل التحميل يرجى المحاولة لاحقاً', event.threadID);
  }
};

module.exports.run = async function({ api, event }) {};