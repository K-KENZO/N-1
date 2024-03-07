يmodule.exports.config = {
    name: "مضاربه",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Ιнaв",
    description: "لعبة مضاربة",
  usePrefix: false,
    commandCategory: "𝗚 𝗔 𝗠 𝗘 𝗦",
    usages: "مضاربة + المبلغ المضارب به",
    cooldowns: 5,
};

module.exports.languages = {
    "en": {
        "missingInput": "[مضاربة] يجب أن تدخل مبلغًا للرهان به.",
        "moneyBetNotEnough": "[مضاربة] المبلغ الذي ضاربت به أكبر من رصيدك!",
        "limitBet": "[مضاربة] المبلغ الذي ضاربت به قليل. يجب أن يكون على الأقل 50$.",
        "returnWin": "أنت فزت، وتمت إضافة 『%1』 إلى رصيدك نسبه ربحك 『%2%』",
        "returnLose": "لقد خسرت، وتم خصم 『%1』 من رصيدك نسبه خسارتك 『-%2%』."
    }
}

module.exports.run = async function({ api, event, args, Currencies, getText }) {
    const { threadID, messageID, senderID } = event;
    const { getData, increaseMoney, decreaseMoney } = Currencies;

    const moneyUser = (await getData(senderID)).money;

    var moneyBet = parseInt(args[0]);
    if (isNaN(moneyBet) || moneyBet <= 0) return api.sendMessage(getText("missingInput"), threadID, messageID);
    if (moneyBet > moneyUser) return api.sendMessage(getText("moneyBetNotEnough"), threadID, messageID);
    if (moneyBet < 50) return api.sendMessage(getText("limitBet"), threadID, messageID);

  var win = Math.random() < 0.5;

    // حساب نسب الربح والخسارة عشوائياً بين -90 و90
    var profitLossPercentage = Math.floor(Math.random() * 181) - 90;
    var moneyChange = Math.round((moneyBet * profitLossPercentage) / 100);

    switch (win) {
        case true: {
            api.sendMessage(getText("returnWin", moneyChange, profitLossPercentage), threadID, messageID);
            await increaseMoney(senderID, moneyChange);
            break;
        }
        case false: {
            api.sendMessage(getText("returnLose", moneyChange, profitLossPercentage), threadID, messageID);
            await decreaseMoney(senderID, moneyChange);
            break;
        }
    }
}
