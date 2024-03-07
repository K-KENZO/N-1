module.exports.config = {
    name: "المطور",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "usePrefix: false,",
    description: "War In Chatbox",
usePrefix: false,
    commandCategory: "𝗚 𝗥 𝗢 𝗜 𝗣",
    usages: "noprefix",
    cooldowns: 5,
    dependencies: {
        "fs-extra": "",
        "axios": ""
    }
}

module.exports.run = async function({ api, args, Users, event}) {
 var mention = Object.keys(event.mentions)[0];
    
 let name =  event.mentions[mention];
    var arraytag = [];
        arraytag.push({id: mention});
    var a = function (a) { api.sendMessage(a, event.threadID); }
a("👑🍷𝙊𝙒𝙉𝙀𝙍 𝙄𝙉𝙁𝙊🍷👑\n\n ☆࿐ཽ༵͜͜͜⸙𝖌𝖎𝖑𝖌𝖆𝖒𝖊𝖘𝖍ᵝᵃᵈ⸜⸌⸃᜴\ (مسؤول البوت إيـهـاب|اللقب:كـيـنـزو\n\n𝐀𝐠𝐞 : 16\n\n𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 𝐖𝐢𝐭𝐡 : ☆࿐ཽ༵͜͜͜⸙𝖌Ⓡⓐⓑⓐⓗ ⓢⓞⓛⓞ⸃᜴\n\n𝐅𝐫𝐨𝐦 :Egypte \n\n𝐒𝐭𝐮𝐝𝐲 : 𝐂𝐨𝐦𝐩𝐮𝐭𝐞𝐫 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐢𝐧𝐠\n\n𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 :https://www.facebook.com/m.ihab685 \n\n ※→اΙнaв");


}