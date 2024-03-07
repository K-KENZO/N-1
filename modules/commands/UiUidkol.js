module.exports.config = {
    name: "آيدي_الكل",
    version: "1.0.5",
    hasPermssion: 0,
    credits: "Ιнaв",
    description: "قم بالحصول على كل الآيديات للمستخدمين في المجموعة مع الأسماء.",
  usePrefix: false,
    commandCategory: "𝗚 𝗥 𝗢 𝗜 𝗣",
    cooldowns: 2,
};
module.exports.run = async function ({ api, event, args, Users }) {
  
  function reply(d) {
    api.sendMessage(d, event.threadID, event.messageID)
  }
  var ep = event.participantIDs;
  msg = ""
  msgs = ""
  m = 0;
  for (let i of ep) {
    m += 1;
    const name = await Users.getNameUser(i);
    msg += m+". "+name+"\n🔮آيـدي: "+i+"\n📂 رابـط فيـسـبـوك: https://facebook.com/"+i+"\n\n";
  }
  msgs += "قـائـمـة كـل الـآيـديـات .\n\n"+msg;
  reply(msgs)
}