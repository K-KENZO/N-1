const axios = require("axios");

async function translate(text, sourceLang, targetLang) {
  try {
    const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=${sourceLang}&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
    const res = await axios.get(url);
    const translation = res.data[0].map((item) => item[0]).join("");
    return translation;
  } catch (error) {
    console.error(error);
    throw new Error('Error translating text');
  }
}


module['exports']['config'] = {
    name: "ارسم",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Ιнaв",
    description: "رسم بالذكاء الاصطناعي.",
  usePrefix: false,
    commandCategory: "𝗔 𝗗 𝗗 𝗜 𝗧 𝗜 𝗢 𝗡 𝗔 𝗟",
    usages:  "ارسم قطة",
    cooldowns: 0
};

const fs = require("fs");
const { get } = require("axios");

module['exports']['run'] = async function({ api, event, args }) {
    let path = __dirname + "/cache/image.png";
    const tzt = args.join(" ").split("-").map(item => item.trim());
    let txt = tzt[0];
    let txt2 = tzt[1];

    let tid = event.threadID;
    let mid = event.messageID;

    if (!args[0] || !txt || !txt2) return api.sendMessage("♻️ | يـرجـى كـتـابـة مـحـتـوى الـرسـم! \n ==كـيفـية الإسـتعـمـال==\n••مـثـال••\nارسم قطة - 2", tid, mid);

    try {
        api.sendMessage("⏳ | جـاري الإنـشـاء…", tid, mid);

        let enc = await translate(txt, "ar", "en");
let enctxt = encodeURI(enc)
        let url = `https://arjhil-prodia-api.arjhilbard.repl.co/generate?prompt=${enctxt}&model=${txt2}`;

        let result = (await get(url, { responseType: "arraybuffer" })).data;
        fs.writeFileSync(path, Buffer.from(result, "utf-8"));
        api.sendMessage({ attachment: fs.createReadStream(path) }, tid, () => fs.unlinkSync(path), mid);
    } catch (e) {
        return api.sendMessage(e.message, tid, mid);
    }
};