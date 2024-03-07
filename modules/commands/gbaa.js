module.exports.config = {
	name: "ذكائي",
	version: "1.0.1", 
	hasPermssion: 0,
  credits: "Ιнaв",
	description: "كم نسبه ذكائك",
  usePrefix: false,
  commandCategory: "𝗔 𝗗 𝗗 𝗜 𝗧 𝗜 𝗢 𝗡 𝗔 𝗟",
	usages: "", 
	cooldowns: 0,
	dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {

    var tle = Math.floor(Math.random() * 101);
    var tle1 = Math.floor(Math.random() * 101);
    var tle2 = Math.floor(Math.random() * 101);
    var name = (await Users.getData(event.senderID)).name
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
  var link = [
"https://i.imgur.com/85hKBOl.jpg",
"https://i.imgur.com/eN6Lx0T.jpg",
"https://i.imgur.com/C85A0qg.jpg",
"https://i.imgur.com/dRTNRXJ.jpg",
  ];
  var callback = () => api.sendMessage({body:`🤓 ${name}\n نـسـبـة ذكـائـك هـي : ${tle}%`,attachment: fs.createReadStream(__dirname + "/cache/5.jpg")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/5.jpg")); 
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/5.jpg")).on("close",() => callback());
   };