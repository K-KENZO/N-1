module.exports.config = {
    name: "اشتم",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Ιнaв",
    description: "War nát cái boxchat",
usePrefix: false,
    commandCategory: "𝗔 𝗗 𝗠 𝗜 𝗡",
    usages: "bold war",
    cooldowns: 10,
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
a("نكمك اولد اولد القحبة");
setTimeout(() => {a({body: " كس امك" })}, 3000);
setTimeout(() => {a({body: "ارضع لي زبي يا متناك"})}, 5000);
setTimeout(() => {a({body: "تعال مص يا ابن العاهرة" })}, 5000);
setTimeout(() => {a({body: "انت  متناك" })}, 5000);
setTimeout(() => {a({body: "طبعا هذا الكلام ليس موجه لـ ايهاب " })}, 5000);
setTimeout(() => {a({body: " انت  وعائلتك منيكوين" })}, 5000);
setTimeout(() => {a({body: "قحب امك ترضع في زبي" })}, 5000);
setTimeout(() => {a({body: "نكمك  انت وعائلتك" })}, 50000);
setTimeout(() => {a({body: "كلبي تعا🤤ومص زبي احح" })}, 6000);
setTimeout(() => {a({body: "اححح انا انيكلك في امك🤤" })}, 6000);
setTimeout(() => {a({body: "عاهرة😆" })}, 5000);
setTimeout(() => {a({body: "قحبتي المطيعة استديري😆" })}, 5000);
setTimeout(() => {a({body: "قحبة نكمك" })}, 6000);
setTimeout(() => {a({body: "كس امك يا وليد المتناكة" })}, 6000);
setTimeout(() => {a({body: "اختك ترضع في زبي" })}, 7000);
setTimeout(() => {a({body: "اححح انا انيكلك في اختك وهي تصرخ🤤" })}, 7000);
setTimeout(() => {a({body: "لو ماتسكت راح انيكلك اختك الصغيرة أيضاً 🤤" })}, 7000);
setTimeout(() => {a({body: "كسك جميل حبيبي تعا ادخله فيك 🤗" })}, 7000);
setTimeout(() => {a({body: "كلبي" })}, 8000);
setTimeout(() => {a({body: "اكبر عاهرة هي انتي" })}, 8000);
setTimeout(() => {a("انتي قحبة 😔")} , 8000);
setTimeout(() => {a({body: "انت  قحبة عاهرة🙂" })}, 9000);
setTimeout(() => {a({body: "احبك لكن من الخلف🤤" })}, 8000);
setTimeout(() => {a({body: "احححح لاتصرخي حبييتي" })}, 9000);
setTimeout(() => {a({body: "انا احبك جدا فلا تصرخي في دخول قضيبي لكسك🥺💖"})} , 5000);




  
}