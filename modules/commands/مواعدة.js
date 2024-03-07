module.exports.config = {
	name: "بيانات",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Ιнaв",
	description: "عرض جميع معلومات البوت",
  usePrefix: false,
	commandCategory: "𝗦 𝗘 𝗥 𝗩 𝗜 𝗖 𝗘 𝗦",
	cooldowns: 5,
	dependencies: {
		"pidusage": ""
	}
};

function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async ({ api, event }) => {
	const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);

	const pidusage = await global.nodemodule["pidusage"](process.pid);

	const timeStart = Date.now();
	return api.sendMessage("", event.threadID, () => api.sendMessage(`وقت التشغيل ${hours}  ساعة و ${minutes} دقيقة و ${seconds} ثانية.\n\n❯ عدد المستخدمين: ${global.data.allUserID.length}\n❯ عدد المجموعات: ${global.data.allThreadID.length}\n❯ استخدام المعالج: ${pidusage.cpu.toFixed(1)}%\n❯ استخدام الرام: ${byte2mb(pidusage.memory)}\n❯ البينج: ${Date.now() - timeStart} ملي ثانية`, event.threadID, event.messageID));
}