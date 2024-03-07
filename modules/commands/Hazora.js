module.exports.config = {
	name: "حزورة",
	version: "2.0.0",
	credits: "Ιнaв",
	hasPermssion: 0,
	description: "يعطيك سؤال تجاوب بنعم او لا",
  usePrefix: false,
	commandCategory: "𝗚 𝗔 𝗠 𝗘 𝗦",
	cooldowns: 5,
	dependencies: {
		"axios": ""
	}
};

module.exports.handleReaction = ({ api, event, handleReaction }) => {
	if (!event.userID == handleReaction.author) return;
	let response = "";
	if (event.reaction != "👍" && event.reaction != "😢") return;
	if (event.reaction == "👍") response = "True"
	else if (event.reaction == "😢") response = "False";
	if (response == handleReaction.answer) api.sendMessage("إجابتك صحيحة ✅", event.threadID, () => {
					
					setTimeout(function(){ api.unsendMessage(handleReaction.messageID); }, 5000);
				});

	else api.sendMessage("إجابتك غير صحيحة ❎", event.threadID);
	const indexOfHandle = client.handleReaction.findIndex(e => e.messageID == handleReaction.messageID);
	global.client.handleReaction.splice(indexOfHandle, 1);
	handleReaction.answerYet = 1;
	return global.client.handleReaction.push(handleReaction);
}

module.exports.run = async ({  api, event, args }) => {
	const axios = global.nodemodule["axios"];
	const request = global.nodemodule["request"];	
	let difficulties = ["easy", "medium", "hard"];
	let difficulty = args[0];
	(difficulties.some(item => difficulty == item)) ? "" : difficulty = difficulties[Math.floor(Math.random() * difficulties.length)];
	let fetch = await axios(`https://opentdb.com/api.php?amount=1&encode=url3986&type=boolean&difficulty=${difficulty}`);
	if (!fetch.data) return api.sendMessage("حدث خطأ", event.threadID, event.messageID);
	let decode = decodeURIComponent(fetch.data.results[0].question);
	return request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ar&dt=t&q=${decode}`), (err, response, body) => {
	if (err) return api.sendMessage("- حدث خطاء!", event.threadID, event.messageID);
	var retrieve = JSON.parse(body);
	var text = '';
	retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
	var fromLang = (retrieve[2] === retrieve[8][0][0]) ? retrieve[2] : retrieve[8][0][0]
	return api.sendMessage(`- ${text}\n\n   👍: صح       😢: خطأ`, event.threadID, async (err, info) => {
		global.client.handleReaction.push({
			name: "حزورة",
			messageID: info.messageID,
			author: event.senderID,
			answer: fetch.data.results[0].correct_answer,
			answerYet: 0
		});
		await new Promise(resolve => setTimeout(resolve, 20 * 1000));
		const indexOfHandle = global.client.handleReaction.findIndex(e => e.messageID == info.messageID);
		let data = global.client.handleReaction[indexOfHandle];
		if (data.answerYet !== 1) {
			api.sendMessage(`- انتهى الوقت , والأجابة الصحيحة هي : ${fetch.data.results[0].correct_answer}`, event.threadID, info.messageID);
			return global.client.handleReaction.splice(indexOfHandle, 1);
		}
		else return;
	});
})
}
