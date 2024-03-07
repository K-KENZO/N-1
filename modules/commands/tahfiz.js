module.exports.config = {
    name: "زخرف",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Ιнaв",
    description: "زخرفة - يزخرف النص العربي",
  usePrefix: false,
    commandCategory: "𝗦 𝗘 𝗥 𝗩 𝗜 𝗖 𝗘 𝗦",
    usages: "زخرفة [النص]",
    cooldowns: 0
};

module.exports.run = async function({ api, event, args }) {
    const { threadID, messageID } = event;
    const text = args.join(" ");

    if (!text) {
        return api.sendMessage("الرجاء إدخال نص لزخرفته.", threadID, messageID);
    }

    const arabicLetters = {
        ا: "آ",
        ب: "بہ",
        ت: "تہ",
        ث: "ٿ",
        ج: "جہ",
        ح: "حہ",
        خ: "خہ",
        د: "د",
        ذ: "ذ",
        ر: "ر",
        ز: "ز",
        س: "سہ",
        ش: "شہ",
        ص: "صہ",
        ض: "ضہ",
        ط: "طہ",
        ظ: "ظہ",
        ع: "عہ",
        غ: "غہ",
        ف: "فہ",
        ق: "قہ",
        ك: "كہ",
        ل: "ل",
        م: "مہ",
        ن: "نہ",
        ه: "هہ",
        و: "وٌ",
        ى: "ى",
        ي: "يہ"
    };

    let msgText = "";

    for (const letter of text) {
        if (arabicLetters[letter]) {
            msgText += arabicLetters[letter];
        } else {
            msgText += letter;
        }
    }

    return api.sendMessage(msgText, threadID, messageID);
};
