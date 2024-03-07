module.exports.config = {
  name: "تخيل2",
  version: "1.0.",
  hasPermssion: 0,
  credits: "Ιнaв",
  description: "مدري",
  usePrefix: false,
  commandCategory: "𝗦 𝗘 𝗥 𝗩 𝗜 𝗖 𝗘 𝗦",
  usages: "ننص",
  cooldowns: 2,
};

module.exports.run = async ({api, event, args }) => {
const axios = require('axios');
const fs = require('fs-extra');
 let { threadID, messageID } = event;
  let query = args.join(" ");
  if (!query) return api.sendMessage("الـأمـر ونـص", threadID, messageID);
let path = __dirname + `/cache/pol4i.png`;

  const translationResponse = await axios.get(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${encodeURIComponent(query)}`);
  const translation = translationResponse.data[0][0][0];

  const poli = (await axios.get(`https://image.pollinations.ai/prompt/${translation}`, {
    responseType: "arraybuffer",
  })).data;
  fs.writeFileSync(path, Buffer.from(poli, "utf-8"));
  api.sendMessage({
    body: "==مـلاحـظـة==\nسـتـحـذف الـصـورة بـعـد سـاعـة 🎀",
    attachment: fs.createReadStream(path) }, threadID, () => fs.unlinkSync(path), messageID);
};