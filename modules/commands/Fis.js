module.exports.config = {
    name: "فيس",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Ιнaв",
    description: "ينزل من الفيس",
  usePrefix: false,
  commandCategory: "𝗦 𝗘 𝗥 𝗩 𝗜 𝗖 𝗘 𝗦",
  usages: "فيس صوت/فيديو [رابط]",
  cooldowns: 0
};
module.exports.run = async function ({api,event,args})  {
const axios = global.nodemodule['axios'];  
const fs = global.nodemodule["fs-extra"];
try { 
  if(args[0] == 'صوت'){
        api.sendMessage(`جار معالـجة الطـلب 🎀`, event.threadID, (err, info) =>
    setTimeout(() => {
        api.unsendMessage(info.messageID) } , 400),event.messageID);
        const path = __dirname+`/cache/2.mp3`;
 let getPorn = (await axios.get(event.attachments[0].playableUrl,{ responseType:'arraybuffer'} )).data;
  fs.writeFileSync(path, Buffer.from(getPorn, "utf-8"));
return api.sendMessage({body : `✅ | تـم بـنـجـاح تـنـزيـل الـفـيـديـو، سـتورم بـوت فـي الـخـدمـة`, 
    attachment: fs.createReadStream(path)}, event.threadID, () => fs.unlinkSync(path),event.messageID);
    }; 
  }catch {return api.sendMessage(`غـير قادر علـى معالـجـة الطـلب`,event.threadID,event.messageID)}
    try { 
      if(args[0] == 'فيديو'){
            api.sendMessage(`اصبر !!!`, event.threadID, (err, info) =>
    setTimeout(() => {
        api.unsendMessage(info.messageID) } , 500),event.messageID);
            const path1 = __dirname+`/cache/1.mp4`;
 let getPorn = (await axios.get(event.attachments[0].playableUrl,{ responseType:'arraybuffer'} )).data;
  fs.writeFileSync(path1, Buffer.from(getPorn, "utf-8"));
return api.sendMessage({body : `𝐁𝐎𝐓~𝓢𝓣𝓞𝓡𝓜نـجـح الـتـحـمـيـل بـواسـطـة بـ`, 
    attachment: fs.createReadStream(path1)}, event.threadID, () => fs.unlinkSync(path1),event.messageID);
    }; 
  }catch {return api.sendMessage(`غـيـر قـادر علـى تـحميل الفـيـديـو , ربمـا اعـدادات خـصوصـية الـفـيديـو غـير عـامـة`,event.threadID,event.messageID)}
}