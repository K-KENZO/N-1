module.exports.config = {
	name: "مجموعة",
	version: "0.0.3",
	hasPermssion: 2,
	credits: "Ιнaв",
	description: "حظر أو إلغاء الحظر عن مجموعة ما",
  usePrefix: false,
	commandCategory: "𝗔 𝗗 𝗠 𝗜 𝗡",
	usages: "[إلغاء_الحظر/حظر/بحث] [آيدي أو نص]",
	cooldowns: 5
};

module.exports.handleReaction = async ({ event, api, Threads, handleReaction }) => {
	if (parseInt(event.userID) !== parseInt(handleReaction.author)) return;
	switch (handleReaction.type) {
		case "حظر": {
			const data = (await Threads.getData(handleReaction.target)).data || {};
			data.banned = 1;
			await Threads.setData(handleReaction.target, { data });
			global.data.threadBanned.set(parseInt(handleReaction.target), 1);
			api.sendMessage(`[${handleReaction.target}] تم حظرها بنجاح!`, event.threadID, () => api.unsendMessage(handleReaction.messageID));
			break;
		}
		case "إلغاء_الحظر": {
			const data = (await Threads.getData(handleReaction.target)).data || {};
			data.banned = 0;
			await Threads.setData(handleReaction.target, { data });
			global.data.threadBanned.delete(parseInt(handleReaction.target), 1);
			api.sendMessage(`[${handleReaction.target}] Successfully unbanned`, event.threadID, () => api.unsendMessage(handleReaction.messageID));
			break;
		}
		default:
			break;
	}
}

module.exports.run = async ({ event, api, args, Threads }) => {
    let content = args.slice(1, args.length);
	switch (args[0]) {
		case "حظر": {
			if (content.length == 0) return api.sendMessage("تحتاج أن تدخل آيدي المجموعة من أجل تقوم بحظرها!", event.threadID);
			for (let idThread of content) {
				idThread = parseInt(idThread);
				if (isNaN(idThread)) return api.sendMessage(`[${idThread}] ليس آيدي للمجموعة!`, event.threadID);
				let dataThread = (await Threads.getData(idThread.toString()));
				if (!dataThread) return api.sendMessage(`[${idThread}] المجموعة لاتتواجد في قاعدة البيانات!`, event.threadID);
				if (dataThread.banned) return api.sendMessage(`[${idThread}] تم حظرها من قبل`, event.threadID);
				return api.sendMessage(`[${idThread}] هل ترغب في حظر هذه المجموعة ؟\n\nأرحوك قم بالتفاعل مع هذه الرسالة لتأكيد متابعة الحظر!`, event.threadID, (error, info) => {
					global.client.handleReaction.push({
						name: this.config.name,
						messageID: info.messageID,
						author: event.senderID,
						type: "ban",
						target: idThread
					});
				})
			}
			break;
		}
		case "إلغاء_الحظر": {
			if (content.length == 0) return api.sendMessage("تحتاج إلى خال آيدي المجموعة التي تريد أن تلغي الحظر عنها!", event.threadID);
			for (let idThread of content) {
				idThread = parseInt(idThread);
				if (isNaN(idThread)) return api.sendMessage(`[${idThread}] ليس آيدي للمجموعة!`, event.threadID);
				let dataThread = (await Threads.getData(idThread)).data;
				if (!dataThread) return api.sendMessage(`[${idThread}] المجموعة لا توجد في قاعدة البيانات!`, event.threadID);
				if (dataThread.banned != 1) return api.sendMessage(`[${idThread}] لم يتم حظرها من قبل`, event.threadID);
				return api.sendMessage(`[${idThread}] هل ترغب في رفع الحظر عن هذه المجموعة ؟\n\nالمرجو التفاعل مع هذه الرسالة من أجل تأكيد متابعة عملية رفع الحظر!`, event.threadID, (error, info) => {
					global.client.handleReaction.push({
						name: this.config.name,
						messageID: info.messageID,
						author: event.senderID,
						type: "unban",
						target: idThread
					});
				})
			}
			break;
		}
		case "بحث": {
			let contentJoin = content.join(" ");
			let getThreads =  (await Threads.getAll(['threadID', 'name'])).filter(item => !!item.name);
			let matchThreads = [], a = '', b = 0;
			getThreads.forEach(i => {
				if (i.name.toLowerCase().includes(contentJoin.toLowerCase())) {
					matchThreads.push({
						name: i.name,
						id: i.threadID
					});
				}
			});
			matchThreads.forEach(i => a += `\n${b += 1}. ${i.name} - ${i.id}`);
			(matchThreads.length > 0) ? api.sendMessage(`هاهو ذا التطابق: \n${a}`, event.threadID) : api.sendMessage("لا نتائج وحدت للبحثك!", event.threadID);
			break;
		}
		default: {
			return global.utils.throwError(this.config.name, event.threadID, event.messageID)
		}
	}
}
