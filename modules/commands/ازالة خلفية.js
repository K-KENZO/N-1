module.exports.config = {
	name: "لقب",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Ιнaв",
	description: "يضع لك كنيه عشوائيه",
  usePrefix: false,
	commandCategory: "𝗦 𝗘 𝗥 𝗩 𝗜 𝗖 𝗘 𝗦",
	cooldowns: 5,
	dependencies: {
		"request": ""
	},
	envConfig: {
		"APIKEY": "mi451266190"
	}
};

module.exports.run = async ({ api, event }) => {
	return global.nodemodule["request"](`https://www.behindthename.com/api/random.json?usage=jap&gender=f&key=${global.configModule[this.config.name].APIKEY}`, (err, response, body) => {
		const data = JSON.parse(body);
		api.changeNickname(`${data.names[0]} ${data.names[1]}`, event.threadID, event.senderID);
	});
}