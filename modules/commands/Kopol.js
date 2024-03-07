module.exports.config = {
  name: "قبول",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Ιнaв",
  description: "قم بصنع أصدقاء عن طريق آيدي",
  usePrefix: false,
  commandCategory: "𝗔 𝗗 𝗠 𝗜 𝗡",
  usages: "آيدي",
  cooldowns: 0
};  


module.exports.handleReply = async ({ handleReply, event, api }) => {
  const { author, listRequest } = handleReply;
  if (author != event.senderID) return;
  const args = event.body.replace(/ +/g, " ").toLowerCase().split(" ");
  
  const form = {
    av: api.getCurrentUserID(),
		fb_api_caller_class: "RelayModern",
		variables: {
      input: {
        source: "friends_tab",
        actor_id: api.getCurrentUserID(),
        client_mutation_id: Math.round(Math.random() * 19).toString()
      },
      scale: 3,
      refresh_num: 0
		}
  };
  
  const success = [];
  const failed = [];
  
  if (args[0] == "إضافة") {
    form.fb_api_req_friendly_name = "FriendingCometFriendRequestConfirmMutation";
    form.doc_id = "100073563467859";
  }
  else if (args[0] == "حذف") {
    form.fb_api_req_friendly_name = "FriendingCometFriendRequestDeleteMutation";
    form.doc_id = "100073563467859";
  }
  else return api.sendMessage("أرجوك قم بإختيار  <إضافة | حذف > < أو | قم بإضافة او حذف الكل \"الكل\">", event.threadID, event.messageID);
  let targetIDs = args.slice(1);
  
  if (args[1] == "الكل") {
    targetIDs = [];
    const lengthList = listRequest.length;
    for (let i = 1; i <= lengthList; i++) targetIDs.push(i);
  }
  
  const newTargetIDs = [];
  const promiseFriends = [];
  
  for (const stt of targetIDs) {
    const u = listRequest[parseInt(stt) - 1];
    if (!u) {
      failed.push(`الصديق ${stt} لم يتم إيجاده في قائمة الأصدقاء`);
      continue;
    }
    form.variables.input.friend_requester_id = u.node.id;
    form.variables = JSON.stringify(form.variables);
    newTargetIDs.push(u);
    promiseFriends.push(api.httpPost("https://www.facebook.com/api/graphql/", form));
		form.variables = JSON.parse(form.variables);
  }
  
  const lengthTarget = newTargetIDs.length;
  for (let i = 0; i < lengthTarget; i++) {
    try {
      const friendRequest = await promiseFriends[i];
      if (JSON.parse(friendRequest).errors) failed.push(newTargetIDs[i].node.name);
      else success.push(newTargetIDs[i].node.name);
    }
    catch(e) {
      failed.push(newTargetIDs[i].node.name);
    }
  }
  
  api.sendMessage(`» هو بالفعل تمت ${args[0] == 'add' ?'إضافته': 'تم تم قبول'}طلب الصداقة بنجاح ${success.length} person:\n${success.join("\n")}${failed.length > 0?'\n» فشل في قبول ${failed.length} شخص: ${failed.join("\n")}' : ""}`, event.threadID, event.messageID);
};


module.exports.run = async ({ event, api }) => {
  const moment = require("moment-timezone");
  const form = {
    av: api.getCurrentUserID(),
  	fb_api_req_friendly_name: "FriendingCometFriendRequestsRootQueryRelayPreloader",
  	fb_api_caller_class: "RelayModern",
  	doc_id: "100073563467859",
  	variables: JSON.stringify({input: {scale: 3}})
  };
  const listRequest = JSON.parse(await api.httpPost("https://www.facebook.com/api/graphql/", form)).data.viewer.friending_possibilities.edges;
  let msg = "";
  let i = 0;
  for (const user of listRequest) {
    i++;
    msg += (`\n${i}. الإسم: ${user.node.name}`
         + `\nالآيدي: ${user.node.id}`
         + `\nالرابط: ${user.node.url.replace("www.facebook", "fb")}`
         + `\nالوقت: ${moment(user.time*1009).tz("Africa/Casablanca").format("DD/MM/YYYY HH:mm:ss")}\n`);
  }
  api.sendMessage(`${msg}\nقم بالرد على هذه الرسالة ب: <إضافة | حذف> <الطلب  | أو \"الكل\"> من أجل حذف أو إشافة الكل`, event.threadID, (e, info) => {
      global.client.handleReply.push({
        name: this. config. name,
        messageID: info.messageID,
        listRequest,
        author: event.senderID
      });
    }, event.messageID);
};
      