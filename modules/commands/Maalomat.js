module.exports.config = {
    name: "معلومات",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Ιнaв",
    description: "",
  usePrefix: false,
    commandCategory: "𝗚 𝗥 𝗢 𝗜 𝗣",
    usages: "add bot",
    cooldowns: 4,
    dependencies: {
        "request": "",
        "fs": ""
    }
    
};

module.exports.run = async({api,event,args}) => {
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const threadSetting = global.data.threadData.get(parseInt(event.threadID)) || {};
    const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
     if (args.length == 0) return api.sendMessage(`يمكنك استخدام:\n\n${prefix}${this.config.name} المستخدم => سيقوم بعرض معلوماتك.\n\n${prefix}${this.config.name} المستخدم @[تاق] => سيقوم بعرض معلومات الصديق.\n\n${prefix}${this.config.name} المجموعة => سيقوم بعرض معلومات المجموعة (عدد الاعضاء, الاسم والمزيد,...)\n\n${prefix}${this.config.name} المجموعة او المستخدم[uid || tid] => سيقوم بمنحك معلومات عن المجموعة او المستخدم اللتي ادخلت الUid خاصته :\n\n${prefix}${this.config.name} الادمن => معلومات خاصة بمالك البوت`, event.threadID, event.messageID);
    if (args[0] == "المجموعة") {
           if(args[1]){ let threadInfo = await api.getThreadInfo(args[1]);
           let imgg = threadInfo.imageSrc;
           var gendernam = [];
            var gendernu = [];
                for (let z in threadInfo.userInfo) {
                var gioitinhone = threadInfo.userInfo[z].gender;
                if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
                }else{gendernu.push(gioitinhone)
                }};
             var nam = gendernam.length;
             var nu = gendernu.length;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "Turn off" : sex == true ? "turn on" : "NS";
       if(!imgg) api.sendMessage(`🧾اسم المجموعة: ${threadInfo.threadName}\nTID: ${args[1]}\n🎎طلبات الموافقة: ${pd}\nالايموجي: ${threadInfo.emoji}\n🪅معلومات: \n»${threadInfo.participantIDs.length}🎍 عضو و ${threadInfo.adminIDs.length} ادمن.\n»منهم ${nam} 🎋ولد و ${nu} فتاة.\n»📊عدد الرسائل: ${threadInfo.messageCount}.`,event.threadID,event.messageID);
        else var callback = () => api.sendMessage({body:`اسم المجموعة: ${threadInfo.threadName}\nTID: ${args[1]}\n🎎طلبات العضوية: ${pd}\n🪅الايموجي: ${threadInfo.emoji}\n🧾معلومات: \n»${threadInfo.participantIDs.length}🎍 عضو و ${threadInfo.adminIDs.length}ادمن.\n»منهم ${nam}🎋 ولد و ${nu} فتاة.\n»📊عدد الرسائل: ${threadInfo.messageCount}.`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID); 
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
      
      }
          
            let threadInfo = await api.getThreadInfo(event.threadID);
            let img = threadInfo.imageSrc;
            var gendernam = [];
            var gendernu = [];
                for (let z in threadInfo.userInfo) {
                var gioitinhone = threadInfo.userInfo[z].gender;
                if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
                }else{gendernu.push(gioitinhone)
                }};
             var nam = gendernam.length;
             var nu = gendernu.length;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "غير مفعل" : sex == true ? "مفعل" : "مفعل";
          if(!img) api.sendMessage(`🏧اسم المجموعة: ${threadInfo.threadName}\nTID: ${event.threadID}\n🎎طلبات العضوية: ${pd}\n🎍الايموجي: ${threadInfo.emoji}\n🧾معلومات: \n»${threadInfo.participantIDs.length} 🎋اعضاء و ${threadInfo.adminIDs.length} ادمن.\n»منهم ${nam} 🪅ولد و ${nu} 🎋فتاة .\n»عدد الرسائل: ${threadInfo.messageCount}.`,event.threadID,event.messageID)
          else  var callback = () => api.sendMessage({body:`اسم المجموعة: ${threadInfo.threadName}\nTID: ${event.threadID}\nالمتصفح: ${pd}\nالايموجي: ${threadInfo.emoji}\nالمعلومات: \n»${threadInfo.participantIDs.length} عضو و ${threadInfo.adminIDs.length} ادمن.\n»منهم ${nam} ولد و ${nu} بنت.\n»عدد الرسائل: ${threadInfo.messageCount}.`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"), event.messageID);   
      return request(encodeURI(`${threadInfo.imageSrc}`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
                    if (args.length == 0) return api.sendMessage(`يمكنك استخدام:\n\n${prefix}${this.config.name} user => سيقوم بعرض معلوماتك.\n\n${prefix}${this.config.name} user @[Tag] => سيقوم بعرض معلومات الصديق.\n\n${prefix}${this.config.name} box => سيقوم بعرض معلومات المجموعة (عدد الاعضاء, الاسم والمزيد,...)\n\n${prefix}${this.config.name} المجموعة او المستخدم [uid || tid] => سيقوم بمنحك معلومات عن المجموعة اللتي ادخلت الUid خاصتها :\n\n${prefix}${this.config.name} الادمن => معلومات خاصة بمالك البوت`, event.threadID, event.messageID);
    if (args[0] == "الادمن") {
      var callback = () => api.sendMessage(
  {body:`———»ADMIN BOT«———
   ❯ Name: Ιнaв
   ❯ Facebook: https://www.facebook.com/m.ihab685
   ❯ Thanks for using ${global.config.BOTNAME} bot`,
    attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => 
    fs.unlinkSync(__dirname + "/cache/1.png"));  
      return request(encodeURI(`https://scontent.frba4-2.fna.fbcdn.net/v/t39.30808-6/336358794_135972772493600_824513727462097442_n.jpg?stp=cp0_dst-jpg_e15_fr_q65&_nc_cat=108&ccb=1-7&_nc_sid=85a577&efg=eyJpIjoiYiJ9&_nc_eui2=AeFG7vWS20Ky9GHvNGK5slEbsfhF_qxNtByx-EX-rE20HFd9xlmymxYcogBZg8RnFsg&_nc_ohc=LyKTIy9yy_oAX8O0EXP&tn=nu0KMby9ODZpcfB5&_nc_zt=23&_nc_ht=scontent.frba4-2.fna&oh=00_AfCmH_7_mTtkSkjGccMJrHnn1vZywFmtR3OzgbxjZr-Qiw&oe=641B60FB`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    
      };

if (args[0] == "المستخدم") { 
    if(!args[1]){
    if(event.type == "message_reply") id = event.messageReply.senderID
    else id = event.senderID;
    let data = await api.getUserInfo(id);
    let url = data[id].profileUrl;
    let b = data[id].isFriend == false ? " للاسف لا ارسل طلب صداقة !" : data[id].isFriend == true ? "أجل !" : "بالطبع";
    let sn = data[id].vanity;
    let name = await data[id].name;
    var sex = await data[id].gender;
    var gender = sex == 2 ? "🙋🏻‍♂️ولد" : sex == 1 ? "فتاة🙋🏻‍♀️" : "🏳️‍🌈🤶🏻";
    var callback = () => api.sendMessage({body:`🗃️الاسم: ${name}` + `\n🏧رابط الملف الشخصي: ${url}` + `\n🧾اسم  المستخدم: ${sn}\nUID: ${id}\n🩸الجنس: ${gender}\n🫂الصداقة مع البوت: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID); 
       return request(encodeURI(`https://graph.facebook.com/${id}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   }
    else {
    
    if (args.join().indexOf('@') !== -1){
    var mentions = Object.keys(event.mentions)
    let data = await api.getUserInfo(mentions);
    let url = data[mentions].profileUrl;
    let b = data[mentions].isFriend == false ? "للاسف لسنا أصدقاء" : data[mentions].isFriend == true ? "نعم!" : "بالطبع";
    let sn = data[mentions].vanity;
    let name = await data[mentions].name;
    var sex = await data[mentions].gender;
    var gender = sex == 2 ? "ولد" : sex == 1 ? "فتاة" : "محايد";
    var callback = () => api.sendMessage({body:`الاسم: ${name}` + `\n📋رابط الملف الشخصي: ${url}` + `\n🧾اسم المستخدم: ${sn}\nUID: ${mentions}\n👥الجنس: ${gender}\n🫂الصداقة  مع البوت: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${mentions}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
    else {
    let data = await api.getUserInfo(args[1]);
    let url = data[args[1]].profileUrl;
    let b = data[args[1]].isFriend == false ? "للاسف لا ارسل طلب صداقة!" : data[args[1]].isFriend == true ? "اجل!" : "بالطبع";
    let sn = data[args[1]].vanity;
    let name = await data[args[1]].name;
    var sex = await data[args[1]].gender;
    var gender = sex == 2 ? "ولد" : sex == 1 ? "فتاة" : "🏳️‍🌈";
    var callback = () => api.sendMessage({body:`الاسم: ${name}` + `\nرابط الملف الشخصي: ${url}` + `\nاسم المستخدم: ${sn}\nUID: ${args[1]}\nالجنس: ${gender}\nالصداقة مع البوت: ${b}`,attachment: fs.createReadStream(__dirname + "/cache/1.png")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/1.png"),event.messageID);   
       return request(encodeURI(`https://graph.facebook.com/${args[1]}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
    }
     }
     }
              }