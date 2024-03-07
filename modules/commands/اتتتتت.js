module.exports.config = {
    name: "المتجر_العجيب",
    version: "1.0.0",
    hasPermission: 0,
    credits: "Ιнaв",
    description: "قم برؤية العناصر في المتحر.",
  usePrefix: false,
    commandCategory: "𝗚 𝗔 𝗠 𝗘 𝗦",
    cooldowns: 2,
};
const axios = require("axios");

const items = [
    { name: "ماس", type: "قابل للتحصيل", rarity: "منتشر", stock: 5, emoji: "💎", imgurLink: "https://i.imgur.com/WMmUACy.gif" },
    { name: "بوصلة المغامرة", type: "قابل للتحصيل", rarity: "منتشر", stock: 5, emoji: "🧭", imgurLink: "https://i.imgur.com/0HPRKGb.gif" },
    // ... (other items)
    { name: "حزمة مكافحة السرقة", type: "قابل للتحصيل", rarity: "نادر", stock: 5, emoji: "🛡️", imgurLink: "https://i.imgur.com/Y723Y0X.png" },
    { name: " زهرة اثيريكس", type: "قابل للتحصيل", rarity: "نادر", stock: 5, emoji: "🌸", imgurLink: "https://i.imgur.com/2sP9CSq.png" },
    { name: "ذخيرة", type: "قابل للتحصيل", rarity: "نادر", stock: 5, emoji: "🔫", imgurLink: "https://i.imgur.com/NLjMowD.png" },
    { name: "مشروع جرة النبات", type: "قابل للتحصيل", rarity: "نادر جدا", stock: 1, emoji: "🍀", imgurLink: "https://i.imgur.com/HsZpfDD.gif" }
];

const itemsPerPage = 1;

module.exports.run = async function({ api, event, args }) {
    const { threadID, messageID } = event;

    try {
        if (args[0] === "صفحة" && args[1]) {
            const page = parseInt(args[1]);
            const startIndex = (page - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;

            if (page < 1 || startIndex >= items.length) {
                api.sendMessage("  ❌ | رقم الصفحة غير صالح.", threadID, messageID);
                return;
            }

            let shopMessage = `عناصر متحر العجائب (صفحة ${page}):\n\n`;
            const displayedItems = items.slice(startIndex, endIndex);
            for (const item of displayedItems) {
                const image = (await axios.get(item.imgurLink, {
                    responseType: "stream"
                })).data;

                shopMessage += `${item.emoji} ${item.name}\nالنوع: ${item.type}\nالندرة: ${item.rarity}\nالمخزن: ${item.stock}\n`;
                api.sendMessage({ attachment: image }, threadID);
                shopMessage += "\n\n";
            }

            api.sendMessage(shopMessage, threadID, messageID);
        } else {
            api.sendMessage(" ⚠️ | صفحة غير صحيحة إستخدم. متجر_العجائب صفحة <رقم الصفحة>.", threadID, messageID);
        }
    } catch (error) {
        api.sendMessage(" ❌ | حدث خطأ أثناء معالجة طلبك.", threadID, messageID);
    }
};
     