module.exports.config = {
  name: 'سجل',
  version: '1.0.0',
  credits: 'Ιнaв',
  hasPermssion: 2,
  description: '',
usePrefix: false,
  commandCategory: '𝗔 𝗗 𝗠 𝗜 𝗡',
  usages: 'المجموعات',
  cooldowns: 15
};


module.exports.handleReply = async function({ api, event, args, Threads, handleReply }) {

  if (parseInt(event.senderID) !== parseInt(handleReply.author)) return;

  var arg = event.body.split(" ");
  var idgr = handleReply.groupid[arg[1] - 1];


  switch (handleReply.type) {

    case "reply":
      {
        if (arg[0] == "بان" || arg[0] == "تبنيد") {
          const data = (await Threads.getData(idgr)).data || {};
          data.banned = 1;
          await Threads.setData(idgr, { data });
          global.data.threadBanned.set(parseInt(idgr), 1);
          api.sendMessage(`[${idgr}] تم التبنيد!`, event.threadID, event.messageID);
          break;
        }

        if (arg[0] == "اخرج" || arg[0] == "اطلع") {
          api.removeUserFromGroup(`${api.getCurrentUserID()}`, idgr);
          api.sendMessage("الخروج من المجموعه : " + idgr + "\n" + (await Threads.getData(idgr)).name, event.threadID, event.messageID);
          break;
        }

      }
  }
};


module.exports.run = async function({ api, event, client }) { const permission = ["100073563467859"];
                          if (!permission.includes(event.senderID))
                                       return api.sendMessage("What are you going to break?", event.threadID, event.messageID);
  var inbox = await api.getThreadList(100, null, ['INBOX']);
  let list = [...inbox].filter(group => group.isSubscribed && group.isGroup);

  var listthread = [];

  //////////


  for (var groupInfo of list) {
    let data = (await api.getThreadInfo(groupInfo.threadID));

    listthread.push({
      id: groupInfo.threadID,
      name: groupInfo.name,
      sotv: data.userInfo.length,
    });

  } //for

  var listbox = listthread.sort((a, b) => {
    if (a.sotv > b.sotv) return -1;
    if (a.sotv < b.sotv) return 1;
  });

  let msg = '',
    i = 1;
  var groupid = [];
  for (var group of listbox) {
    msg += `${i++}. ${group.name}\n🎀TID: ${group.id}\ عدد : ${group.sotv}\n\n`;
    groupid.push(group.id);
  }

  api.sendMessage(msg + 'رد ب "اطلع" او "تبنيد" + رقم المجموعه!!', event.threadID, (e, data) =>
    global.client.handleReply.push({
      name: this.config.name,
      author: event.senderID,
      messageID: data.messageID,
      groupid,
      type: 'reply'
    })
  );
};