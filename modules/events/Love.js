module.exports.config = {
	name: "leave",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "Ιнaв",
	description: "left notification",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};

module.exports.run = async function({ api, event, Users, Threads }) {
	if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
	const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
	const { join } =  global.nodemodule["path"];
  const axios = global.nodemodule["axios"];
    const request = global.nodemodule["request"];
    const fs = global.nodemodule["fs-extra"];
	const { threadID } = event;
	const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
	const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
	const type = (event.author == event.logMessageData.leftParticipantFbId) ? " " : "\n\nقٌآم آلُِمسؤوولُِ بَطُردِ ☻✨{name}";
  (typeof data.customLeave == "undefined") ? msg = "*⦓        ⦓🧿⦔            ⦔*\nوداعا يا {name}\nݪحــ۫‌ـظـَٰـَٰات اݪوُدِاعـ‌๋‏ـۂ، ݪحــ۫‌ـظـَٰـَٰات شـٰـ‌ُـُٰـبـيهة بـاݪصـ‌ـًدِقٰཻــ‌ـً، ڪثـَٰـَٰـيفــ‌ـة اݪفــ‌ـضــٰـ‌ُـًُوُݪ بـاݪغــِْــٰة اݪتوُتࢪ، تخــ۫‌ـتزًݪ فــ‌ـيها اݪتفــ‌ـاصـ‌ـًيݪ اݪتافــ‌ـهة وُتتعـ‌๋‏ـۂامـٰݪ مـٰعـ‌๋‏ـۂ اݪجـوُاهࢪ، تتأݪقٰཻــ‌ـً اݪبـصـ‌ـًيࢪة وُتتوُهجـ اݪࢪوُحــ۫‌ـ\n*⦓        ⦓🧿⦔            ⦔*" : msg = data.customLeave;
	msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type);
  
  var link = [  
"https://i.imgur.com/UJUEcbH.gif",
"https://i.imgur.com/FAoGQwB.gif",
  ];
  var callback = () => api.sendMessage({ body: msg, attachment: fs.createReadStream(__dirname + "/cache/leiamnashO.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/leiamnashO.gif"));
    return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname + "/cache/leiamnashO.gif")).on("close", () => callback());
    }