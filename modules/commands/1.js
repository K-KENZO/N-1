module.exports.config = {
	name: "فيديو",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Ιнaв",
	description: "تنزيل الفيديوات من اليوتيوب عبر الربط او البحث",
  usePrefix: false,
	commandCategory: "𝗦 𝗘 𝗥 𝗩 𝗜 𝗖 𝗘 𝗦",
	usages: "https://youtube.com/shorts/iOCOysvvYuc",
	cooldowns: 20,
	dependencies: {
		"ytdl-core": "",
		"simple-youtube-api": "",
		"fs-extra": "",
		axios: ""
	},
	envConfig: {
		YOUTUBE_API: "AIzaSyDEE1-zZSRVI8lTaQOVsIAQFgL-_BJKvhk"
	}
}, module.exports.handleReply = async function({
	api: e,
	event: t,
	handleReply: a
}) {
	const n = global.nodemodule["ytdl-core"],
		{
			createReadStream: i,
			createWriteStream: s,
			unlinkSync: o,
			statSync: d
		} = global.nodemodule["fs-extra"];
	n.getInfo(a.link[t.body - 1]).then((a => {
		let n = a.videoDetails.title;
		e.sendMessage(`جريا تحميل لفيديو……👻\n-----------------------------------------------\n${n}\n-----------------------------------------------\nارجوك انتظر !`, t.threadID, ((t, a) => setTimeout((() => {
			e.unsendMessage(a.messageID)
		}), 1e5)))
	}));
	try {
		n.getInfo(a.link[t.body - 1]).then((r => {
			let l = r.videoDetails.title;
			n(a.link[t.body - 1]).pipe(s(__dirname + `/cache/${a.link[t.body-1]}.mp4`)).on("close", (() => d(__dirname + `/cache/${a.link[t.body-1]}.mp4`).size > 26214400 ? e.sendMessage("😅اسف الفديو كبير جدا لايمكن ارساله", t.threadID, (() => o(__dirname + `/cache/${a.link[t.body-1]}.mp4`)), t.messageID) : e.sendMessage({
				body: `${l}`,
				attachment: i(__dirname + `/cache/${a.link[t.body-1]}.mp4`)
			}, t.threadID, (() => o(__dirname + `/cache/${a.link[t.body-1]}.mp4`)), t.messageID))).on("error", (a => e.sendMessage(`حدثت مشكلة أثناء معالجة الطلب ، خطأ: \n${a}`, t.threadID, t.messageID)))
		}))
	} catch {
		e.sendMessage("تعذر معالجة طلبك!", t.threadID, t.messageID)
	}
	return e.unsendMessage(a.messageID)
}, module.exports.run = async function({
	api: e,
	event: t,
	args: a
}) {
	const n = global.nodemodule["ytdl-core"],
		i = global.nodemodule["simple-youtube-api"],
		{
			createReadStream: s,
			createWriteStream: o,
			unlinkSync: d,
			statSync: r
		} = global.nodemodule["fs-extra"],
		l = new i(global.configModule[this.config.name].YOUTUBE_API),
		m = global.configModule[this.config.name].YOUTUBE_API;
	if (0 == a.length || !a) return e.sendMessage("الرجاء كتابة إسم الاغنية التي تريد سماعها…!🥰", t.threadID, t.messageID);
	const c = a.join(" ");
	if (/^(http(s)?:\/\/)?((w){3}.)?youtu(be|.be)?(\.com)?\/.+/gm.test(a[0])) try {
		var g = a[0].split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
		g = void 0 !== g[2] ? g[2].split(/[^0-9a-z_\-]/i)[0] : g[0], n(a[0]).pipe(o(__dirname + `/cache/${g}.mp4`)).on("close", (() => r(__dirname + `/cache/${g}.mp4`).size > 26214400 ? e.sendMessage(" لا يمكن إرسال الملف لانه أكبر من25MB.😅", t.threadID, (() => d(__dirname + `/cache/${g}.mp4`)), t.messageID) : e.sendMessage({
			attachment: s(__dirname + `/cache/${g}.mp4`)
		}, t.threadID, (() => d(__dirname + `/cache/${g}.mp4`)), t.messageID))).on("error", (a => e.sendMessage(`حدثت مشكلة أثناء معالجة الطلب ، خطأ: \n${a}`, t.threadID, t.messageID)))
	} catch {
		e.sendMessage("تعذر معالجة طلبك !", t.threadID, t.messageID)
	} else try {
		var h = [],
			u = "",
			p = 0,
			y = 0,
			f = [],
			$ = await l.searchVideos(c, 6);
		for (let e of $) {
			if (void 0 === e.id) return;
			h.push(e.id);
			e.id;
			let t = (await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${e.id}&key=${m}`)).data.items[0].contentDetails.duration.slice(2),
				a = (await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${e.id}&key=${m}`)).data.items[0].snippet.channelTitle,
				n = __dirname + `/cache/${y+=1}.png`,
				i = `https://img.youtube.com/vi/${e.id}/maxresdefault.jpg`,
				s = (await axios.get(`${i}`, {
					responseType: "arraybuffer"
				})).data;
			fs.writeFileSync(n, Buffer.from(s, "utf-8")), f.push(fs.createReadStream(__dirname + `/cache/${y}.png`)), u += `${p+=1}. ${e.title}\nTime: ${t}\nKênh: ${a}\n-----------------------\n`
		}
		var b = `🎼  لديك ${h.length} نتائج تطابق بحثك :\n👇👇👇👇👇\n${u}\nرجاء رد على الرسالة برقم الفيديو الذي تريد تحميله`;
		return e.sendMessage({
			attachment: f,
			body: b
		}, t.threadID, ((e, a) => global.client.handleReply.push({
			name: this.config.name,
			messageID: a.messageID,
			author: t.senderID,
			link: h
		})), t.messageID)
	} catch (a) {
		const n = global.nodemodule["fs-extra"],
			i = global.nodemodule.axios;
		h = [], u = "", p = 0, y = 0, f = [], $ = await l.searchVideos(c, 6);
		for (let e of $) {
			if (void 0 === e.id) return;
			h.push(e.id);
			e.id;
			let t = __dirname + `/cache/${y+=1}.png`,
				a = `https://img.youtube.com/vi/${e.id}/hqdefault.jpg`,
				s = (await i.get(`${a}`, {
					responseType: "arraybuffer"
				})).data,
				o = (await i.get(`https://www.googleapis.com/youtube/v3/videos?part=contentDetails&id=${e.id}&key=${m}`)).data.items[0].contentDetails.duration.slice(2),
				d = (await i.get(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${e.id}&key=${m}`)).data.items[0].snippet.channelTitle;
			n.writeFileSync(t, Buffer.from(s, "utf-8")), f.push(n.createReadStream(__dirname + `/cache/${y}.png`)), u += `${p+=1}. ${e.title}\nTime: ${o}\nKênh: ${d}\n-----------------------\n`
		}
		b = `تم لعثور على ${h.length}فيديوهات💀⚔️\n-----------------------------------------------\n ${u}\n-----------------------------------------------\n💀رد برقم الفيديو لتحميله…!`;
		return e.sendMessage({
			attachment: f,
			body: b
		}, t.threadID, ((e, a) => global.client.handleReply.push({
			name: this.config.name,
			messageID: a.messageID,
			author: t.senderID,
			link: h
		})), t.messageID)
	}
	for (let e = 1; e < 7; e++) d(__dirname + `/cache/${e}.png`)
};