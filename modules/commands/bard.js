const https = require('https');

module.exports.config = {
    name: "توكا",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Ιнaв",
    description: "استخدام GPT للرد على الأسئلة",
  usePrefix: false,
    commandCategory: " 𝚂 𝙴 𝚁 𝚅 𝙸 𝙲 𝙴 𝚂",
    usages: "[سؤال]",
    cooldowns: 2,
};

module.exports.run = async function({ api, event, args }) {
    const inputText = args.join(' ');
    let { threadID, messageID } = event;
    let tid = threadID,
        mid = messageID;

    if (inputText !== "") {
        const encodedInput = encodeURIComponent(inputText);
        const url = `https://sandipbaruwal.onrender.com/gemini2?prompt${event.senderID}`;

        https.get(url, (response) => {
            let data = '';

            response.on('data', (chunk) => {
                data += chunk;
            });

            response.on('end', () => {
                api.sendMessage(data, tid, mid);
            });
        }).on('error', (error) => {
            console.error(`حدث خطأ: ${error.message}`);
            api.sendMessage("❌ | حدثث خطأ أثناء الاتصال بالخادم", tid, mid);
        });
    } else {
        api.sendMessage("يرجى إدخال النص الذي تريد البحث عنه, او موضوع لدردشته مع الملك*ستورم*👑ً", tid, mid);
    }
};
