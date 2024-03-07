module.exports.config = {
	name: "الشعار",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Ιнaв",
	description: "صانع الشعارات",
	commandCategory: "𝗣 𝗜 𝗖 𝗧 𝗜 𝗥 𝗘 𝗦",
	usages: "[نص] [شعار]",
  usePrefix:false,
	cooldowns: 1,
	
	}; // Credits fot the api:Sensui
			
module.exports.run = async ({ api, event, args }) => {
	const axios = require('axios');
	const request = require('request');
	const fs = require("fs");
	const req = args[1];
	if (!args[0]) return api.sendMessage("[⚔️] بحاجة إلى نمط الشعار للمضي قدما.", event.threadID, event.messageID);
	if (args[0] == "الحديد") {
	axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/create-3d-liquid-metal-text-effect-1112.html&text=${encodeURI(req)}`).then(res => {
		let callback = function () {
					api.sendMessage({
						body: `»» تم إنشاء الشعار:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "ناروتو") {
    axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/create-naruto-logo-style-text-effect-online-1125.html&text=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `»» تم إنشاء الشعار:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "الغيمة") {
    axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html&text=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `»» تم إنشاء الشعار:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "بلاك_بينك") {
    axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/create-blackpink-logo-style-online-1001.html&text=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `»» تم إنشاء الشعار:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "فن_الورق") {
    axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/create-art-paper-cut-text-effect-online-1022.html&text=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `»» تم إنشاء الشعار:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "الزجاج1") {
    axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/blue-glass-text-effect-908.html&text=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `»» تم إنشاء الشعار:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "الزجاج2") {
    axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/orange-glass-text-effect-911.html&text=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `»» تم إنشاء الشعار:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "الرعب_الأخضر") {
    axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/create-green-horror-style-text-effect-online-1036.html&text=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `»» تم إنشاء الشعار:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "القمر_أخضر") {
    axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/green-neon-text-effect-874.html&text=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `»» تم إنشاء الشعار:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "ضوء_النانو") {
    axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/neon-light-text-effect-online-882.html&text=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `»» تم إنشاء الشعار:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "ماتريكس") {
    axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/matrix-style-text-effect-online-884.html&text=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `»» تم إنشاء الشعار:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "النانو") {
    axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/neon-text-effect-online-879.html&text=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `»» تم إنشاء الشعار:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "مستقبل_النانو") {
    axios.get(`https://logo-maker-api.codersensui.repl.co/create?theme=https://textpro.me/create-a-futuristic-technology-neon-light-text-effect-1006.html&text=${encodeURI(req)}`).then(res => {
	let callback = function () {
					api.sendMessage({
						body: `»» تم إنشاء الشعار:`,
						attachment: fs.createReadStream(__dirname + `/cache/logo.jpg`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/logo.jpg`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/logo.jpg`)).on("close", callback);
			})
	return;
	};
	if (args[0] == "مساعدة") return api.sendMessage(`»» الشعارات المتاحة\n»» ${global.config.PREFIX}شعار حديد {نص}\n»» ${global.config.PREFIX}شعار ناروتو {نص}\n»» ${global.config.PREFIX}شعار الغيمة {نص}\n»» ${global.config.PREFIX}شعار بلاك_بينك {نص}\n»» ${global.config.PREFIX}شعار فن_الورق {text}\n»» ${global.config.PREFIX}شعار الزجاج1 {نص}\n»» ${global.config.PREFIX}شعار الزجاج2 {نص}\n»» ${global.config.PREFIX}شعار القمر_الأخضر {نص}\n»» ${global.config.PREFIX}شعار ضوء_النانو {نص}\n»» ${global.config.PREFIX}شعار ماتريكس {نص}\n»» ${global.config.PREFIX}شعار النانو {نص}\n»» ${global.config.PREFIX}شعار مستقبل_النانو نص\n\n تم   التعديل بواسطة إيهاب\nApi Credits: Sensui.`, event.threadID, event.messageID);
}