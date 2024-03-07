module.exports.config = {
    name: "وحشي",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Ιнaв",
    description: "الدببة الشمسية وحدها معًا :))",
    commandCategory: "𝗚 𝗔 𝗠 𝗘 𝗦",
    usages: "تسجيل/تسوق/متجر/معركة/وحوش",
   usePrefix:false,
    cooldowns: 0,
    dependencies: {
        "request":"",
        "fs-extra":""
    }
};
/*==================== MESSAGE ======================*/
module.exports.run = ({ event, api, args, client, utils }) => {
    if (!args[0]) {
        api.sendMessage(`أرحوك قم بالإختيار من بين هذه الكلمات التالية: تسجيل/تسوق/متجر/معركة/وحوش`, event.threadID);
    } else {
        switch(args[0]) {
            case "تسجيل": {
            return api.sendMessage(
                "تم التسجيل بنجاح ✅ !!!\nأنت قد أصبحت رسميا من المطاردين"
            , event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "-r"
                });
            }, event.messageID);
        }
        case "تسوق": {
            return api.sendMessage(
                "==== متجر ضع وحشك ====\n1.طعام\n2.الأسلحة\n3.درع\n4.حيوان"
            , event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "-s"
                });
            }, event.messageID);
        }
        case "الوحوش": {
            return api.sendMessage(
                "1.وحش الرياح\n2.وحش الماء\n3.وحش الأرض\n4.وحش الفولاذ\n5.وحش الضوء\n6.وحش القذارة"
            , event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "-l"
                });
            }, event.messageID);
        }
        case "معركة": {
            return api.sendMessage(
                "قريبا..."
            , event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "-p"
                });
            }, event.messageID);
        }
            default:
            return utils.throwError("petmonsters", event.threadID, event.messageID); break;
        }
    }
};
/*====================== REPLY =========================*/
module.exports.handleReply = async function({ api, event, handleReply, client }) {
  switch(handleReply.type) {
    case "متجر":
      switch(event.body) {
        case "1":
        return api.sendMessage(
                "===[الطعام]===\n1.السمك(100$)\nقم بوضعها في السلة إذا أردت شرائها!!!\n2.بروكلي(100$)\nقم بوضعه في العبة من أجل الشراء!!!\n3.فاكهة(100$)\nقم بوضعها 😢 في السلة من أجل شرائها!!!"
            , event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "FOOD"
                });
            }, event.messageID);
        case "2":
          return api.sendMessage(
                "===[WEAPONS]===\n1.السيوف\n2.الأسلحة\n3.الدروع\n4.الحيوان"
            , event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "WEAPONS"
                });
            }, event.messageID);
          case "3":
          return api.sendMessage(
                "===[Armor]===\n1.درع الفولاذ\n2.الدرع الذهبي"
            , event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "ARMOR"
                });
            }, event.messageID);
          case "4":
          return api.sendMessage("Comming soon...",  event.threadID, (error, info) => {
                global.client.handleReply.push({
                    name: this.config.name,
                    messageID: info.messageID,
                    author: event.senderID,
                    type: "PET"
                });
            }, event.messageID);
                  }
      case "معلومات":
      switch(event.body) {
        case "1":
        return api.sendMessage("الإسم: ثلاثة كبار الكلب\nتوليد: النار\nاليوغا: 120\nAدالهجوم: 350\nمهارات خاصة: ينفث النار", event.threadID); break;
        case "2":
          return api.sendMessage("الإسم: التمساح قلاثي الرأس المرعب\nتوليد: الماء\nدم: 120\nالهجوم: 120\nالمهارات الخاصة: يقوم ب رش الماء", event.threadID); break;
          case "3":
          return api.sendMessage("الإسم: الدب الكلب\nتوليد: تربة\nدم: 120\n الهجوم: 50\nمهارات خاصة: يقوم بحفر الأرض مع حبه لنوم", event.threadID); break;
          case "4":
          return api.sendMessage("الإسم: الثعبان العملاق\nتوليد: العشب\nالدم: 120\nالهجوم: 100\nالمهارات الخاصة: يقوم بلإلتفاف بالضحية حتى يقتله ثم يأكل الضحية و هي حية", event.threadID); break;
          case "5":
          return api.sendMessage("الإسم: التنين ثلاثي الرووس\nتوليد: الصوء\nدم: 120\nالهجوم: 200\nمهارات خاصية: يقوم بإطلاق شرارات الضوء كالبرق", event.threadID); break;
          case "6":
          return api.sendMessage("الإسم : الشيطان\nالنوع: الظلام\nدم: 120\nالهجوم: 500\nمهارات خاصة: يقوم بجلب الظلام و إطفاء البصر و إحضار الشر إلى البشرية جت ", event.threadID); break;
      }
  }
    }