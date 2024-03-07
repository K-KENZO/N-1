module.exports.config = {
	name: "طرق",
	version: "1.0.2",
	hasPermssion: 0,
	credits: "Ιнaв",
	description: "اهدم المعارضين واكسب المال في اللعبة!",
  usePrefix: false,
	commandCategory: "𝗚 𝗔 𝗠 𝗘 𝗦",
	cooldowns: 120,
	envConfig: {
		cooldownTime: 120  // 20 minutes in milliseconds
	}
};

module.exports.languages = {
	"en": {
		"rewarded": "لقد ضربت %1 بإستخدام %2 وقمت بكسب مبلغ يقدر ب :  دولار %3.",
		"workInfo": "لقد قمت بضرب  %1 بإستخدام  %2 و قمت بكسب مبلغ يقدر ب :  دولار %3.\n\nمكافأة اللعبة : %4%"
	}
};

module.exports.run = async ({ event, api, Currencies, getText }) => {
	const { threadID, messageID, senderID } = event;

	const cooldown = global.configModule[this.config.name].cooldownTime;
	let data = (await Currencies.getData(senderID)).data || {};
	if (typeof data !== "undefined" && cooldown - (Date.now() - data.workTime) > 0) {
		return; // Do nothing if still on cooldown
	} else {
		const opponents = [
			"جون دوه",
			"جان سميث",
			"ميكل جونسون",
			"سامانثا ويليام",
			"كريس جيريكو",
			"إيميلي ديمستري",
			"دايڤيد مارتينيز",
			"أماندا أندرسون",
			"كيڤن لي",
			"جيسيكا باركر",
			"روبرت ويلسون",
			"سارة جونز",
			"ماثيو تومبسون",
			"أوليڤيا ستار"
		];

		const weapons = [
			{ name: "كرة البايسبول", emoji: "⚾" },
			{ name: "سكين المطبخ", emoji: "🔪" },
			{ name: "مسدس", emoji: "🔫" },
			{ name: "بندقية", emoji: "🤠" },
			{ name: "بندقية", emoji: "🔫🔫" },
			{ name: "قوسو النشاب", emoji: "🏹" },
			{ name: "المنشار", emoji: "🪚" },
			{ name: "سيف الساموراي", emoji: "🗡️" }
		];

		const selectedOpponent = opponents[Math.floor(Math.random() * opponents.length)];
		const selectedWeaponObj = weapons[Math.floor(Math.random() * weapons.length)];
		const selectedWeapon = selectedWeaponObj.name;
		const weaponEmoji = selectedWeaponObj.emoji;

		const gameBonus = (Math.random() * 78) + 2; // Random game bonus from 2% to 80%
		const amount = Math.floor(Math.random() * 1000) + 500;
		const totalEarnings = amount * (gameBonus / 100);

		const workInfo = getText("workInfo", selectedOpponent, `${weaponEmoji} ${selectedWeapon}`, totalEarnings.toFixed(2), gameBonus.toFixed(2));

		await Currencies.increaseMoney(senderID, totalEarnings);
		data.workTime = Date.now();
		await Currencies.setData(senderID, { data });

		return api.sendMessage(workInfo, threadID, messageID);
	}
};
      