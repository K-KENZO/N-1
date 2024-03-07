module.exports.config = {
    name: "joinNoti",
    eventType: ["log:subscribe"],
    version: "1.0.4",
    credits: "Ιнaв",
    description: "Thông báo bot hoặc người vào nhóm",
usePrefix: false,
    dependencies: {
        "fs-extra": ""
    }
};

module.exports.run = async function({ api, event, Users, Threads }) {
   var fullYear = global.client.getTime("fullYear");
    var getHours = await global.client.getTime("hours");
      var session = `${getHours < 3 ? "بعد منتصف الليل" : getHours < 8 ? "الصباح الباكر" : getHours < 11 ? "وقت الظهيرة" : getHours < 16 ? "قبل الظهر" : getHours < 23 ? "الليل" : "منتصف الليل"}`
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
  const { PREFIX } = global.config;
    console.log(2)
    if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
        console.log(1)
        return api.sendMessage("[👑]~ تم التفعيل بنجاح", threadID, async () => {
            let check = true;
            while (check) {
                setTimeout(() => check = false, 30 * 1000);
                const threadData = (await Threads.getInfo(threadID)) || {};
                if (threadData.hasOwnProperty("adminIDs")) {
                    check = false;
                    api.sendMessage("", threadID, (err, info) => {
                        global.client.handleReply.push({
                            name: "langChoose_0x01042022",
                            messageID: info.messageID,
                            adminIDs: threadData.adminIDs
                        });
                    });
                }
            }
            api.changeNickname(`[ . ] • ${(!global.config.BOTNAME) ? "Made by 𝒊𝒉𝒂𝒃" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
            api.sendMessage(`نجح الاتصال😛🎀⚔️
•⊱┈──╌✾╌──┈⊰•
°•𓆩✾𓆪•°°•𓆩✾𓆪•°°•𓆩✾𓆪•°
مرحبا بك في عالمي الخاص🎀
دعوني أرحب لكم بنفسي أنا الملك ✯ستورم✯🎀
✾ممنوع السبام و أفتعال المشاكل🎀
 ~ستورم~ عمك و إيهاب عم أعمامك🎀
┈⊰مـعـلـومـات الـمـطـور و الـبـوت•⊱┈
⌫الـبـادئـة: «  »
✾لـرؤيـة قـواعـد 𝐁𝐎𝐓 - أكـتـب القاعدة 
✾الـصـانـع:https://www.facebook.com/m.ihab685 ➪
❦إسـم الـمـطـور: 𝙄𝙃𝘼𝘽 ➪ 
❦الـلـقـب: 𝙆𝙀𝙉𝙕𝙊 ➪
❦إسـم الـبـوت: 𝓢𝓣𝓞𝓡𝓜
°•𓆩✾𓆪•°°•𓆩✾𓆪•°°•𓆩✾𓆪•°
•⊱┈──╌╌──┈⊰•`, threadID);
    }); 
  }
    else {
        try {
            const { createReadStream, existsSync, mkdirSync } = global.nodemodule["fs-extra"];
            let { threadName, participantIDs } = await api.getThreadInfo(threadID);

            const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      const path = join(__dirname, "cache", "joinGif");
      const pathGif = join(path, `hi5.jpg`);

      var mentions = [], nameArray = [], memLength = [], i = 0;

      for (id in event.logMessageData.addedParticipants) {
        const userName = event.logMessageData.addedParticipants[id].fullName;
        nameArray.push(userName);
        mentions.push({ tag: userName, id });
        memLength.push(participantIDs.length - i++);

        if (!global.data.allUserID.includes(id)) {
          await Users.createData(id, { name: userName, data: {} });
          global.data.userName.set(id, userName);
          global.data.allUserID.push(id);
        }
      }
      memLength.sort((a, b) => a - b);

      (typeof threadData.customJoin == "undefined") ? msg = " {name} :مرحبا\n في مجموعه  {threadName} \n{type} انا ستورم الملك متشرف بوجودك معنا 😛🎀" : msg = threadData.customJoin;
      msg = msg
      .replace(/\{name}/g, nameArray.join(', '))
      .replace(/\{type}/g, (memLength.length > 1) ?  'các bạn' : '')
      .replace(/\{soThanhVien}/g, memLength.join(', '))
      .replace(/\{threadName}/g, threadName);

      if (existsSync(path)) mkdirSync(path, { recursive: true });

      if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
      else formPush = { body: msg, mentions }

      return api.sendMessage(formPush, threadID);
    } catch (e) { return console.log(e) };
  }
}
