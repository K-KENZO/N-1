module.exports.config = {
    name: "زخرفة2",
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
        ا: "ٱ",
        ب: "بّےـ ـ",
        ت: "تُےـ",
        ث: "ثًےـ",
        ج: "جَےـ",
        ح: "حًےـ",
        خ: "خٌےـ",
        د: "دِ",
        ذ: "ذٌ",
        ر: "ر",
        ز: "ِّ",
        س: "سًےـ",
        ش: "شّےـ",
        ص: "صِےـ",
        ض: "ضےـ",
        ط: "طٌےـ",
        ظ: "ظٌےـ",
        ع: "عَےـ",
        غ: "غّےـ",
        ف: "فُےـ",
        ق: "قَےـ",
        ك: "كےـ",
        ل: "لَ",
        م: "مِےـ",
        ن: "نٌےـ",
        ه: "هےـِ",
        و: "وٌ",
        ى: "يّےـ",
        ي: "يّےـ"
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
