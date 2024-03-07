module.exports.config = {
	name: "الإنتظار",
	version: "1.0.5",
	credits: "Ιнaв",
	hasPermssion: 2,
	description: "في_الإنتظار [قائمة]",
usePrefix: false,
	commandCategory: "𝗔 𝗗 𝗠 𝗜 𝗡",
	cooldowns: 5
};

module.exports.languages = {
    "vi": {
        "invaildNumber": "%1 không phải là một con số hợp lệ",
        "cancelSuccess": "Đã từ chối thành công %1 nhóm!",
        "notiBox": "Box của bạn đã được admin phê duyệt để có thể sử dụng bot",
        "approveSuccess": "Đã phê duyệt thành công %1 nhóm!",

        "cantGetPendingList": "Không thể lấy danh sách các nhóm đang chờ!",
        "returnListPending": "「PENDING」❮ Tổng số nhóm cần duyệt: %1 nhóm ❯\n\n%2",
        "returnListClean": "「PENDING」Hiện tại không có nhóm nào trong hàng chờ"
    },
    "en": {
        "invaildNumber": "%1 ليس رقما صالحا",
        "cancelSuccess": "تم رفض %1 من المجموعات!",
        "notiBox": "➤ تـمـت الـموافـقـة عـلـى الـمـجـمـوعـة بـنـجـاح✅\n\n ➤بـواسـطـة الـمـطـور: 𝙸𝙷𝙰𝙱",
        "approveSuccess": "تمت الموافقة بنجاح على  %1 من المجموعات!",

        "cantGetPendingList": "لا يمكن الحصول على قائمة الإنتظار!",
        "returnListPending": "»「في الإنتظار」«❮ عدد المجموعات التي تحتاج الموافقة هي: %1 مجموعة ❯\n\n%2",
        "returnListClean": "「في الإنتظار」لا توجد أي مجموعة في قائمة الإنتظار"
    }
}

module.exports.handleReply = async function({ api, event, handleReply, getText }) {
    if (String(event.senderID) !== String(handleReply.author)) return;
    const { body, threadID, messageID } = event;
    var count = 0;

    if (isNaN(body) && body.indexOf("c") == 0 || body.indexOf("cancel") == 0) {
        const index = (body.slice(1, body.length)).split(/\s+/);
        for (const singleIndex of index) {
            console.log(singleIndex);
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(getText("invaildNumber", singleIndex), threadID, messageID);
            api.removeUserFromGroup(api.getCurrentUserID(), handleReply.pending[singleIndex - 1].threadID);
            count+=1;
        }
        return api.sendMessage(getText("cancelSuccess", count), threadID, messageID);
    }
    else {
        const index = body.split(/\s+/);
        for (const singleIndex of index) {
            if (isNaN(singleIndex) || singleIndex <= 0 || singleIndex > handleReply.pending.length) return api.sendMessage(getText("invaildNumber", singleIndex), threadID, messageID);
            api.sendMessage(getText("notiBox"), handleReply.pending[singleIndex - 1].threadID);
            count+=1;
        }
        return api.sendMessage(getText("approveSuccess", count), threadID, messageID);
    }
}

module.exports.run = async function({ api, event, getText }) {
	const { threadID, messageID } = event;
    const commandName = this.config.name;
    var msg = "", index = 1;

    try {
		var spam = await api.getThreadList(100, null, ["OTHER"]) || [];
		var pending = await api.getThreadList(100, null, ["PENDING"]) || [];
	} catch (e) { return api.sendMessage(getText("cantGetPendingList"), threadID, messageID) }

	const list = [...spam, ...pending].filter(group => group.isSubscribed && group.isGroup);

    for (const single of list) msg += `${index++}/ ${single.name}(${single.threadID})\n`;

    if (list.length != 0) return api.sendMessage(getText("returnListPending", list.length, msg), threadID, (error, info) => {
		global.client.handleReply.push({
            name: commandName,
            messageID: info.messageID,
            author: event.senderID,
            pending: list
        })
	}, messageID);
    else return api.sendMessage(getText("returnListClean"), threadID, messageID);
          }