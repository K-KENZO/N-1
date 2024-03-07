const chalk = require('chalk');
module.exports.config = {
    name: "قرعة",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Ιнaв",
    description: "مقص المطرقة كم عدد اللاعبين",
    commandCategory: "𝗚 𝗔 𝗠 𝗘 𝗦",
    usages: "[إنشاء/إنضمام/مغادرة/بدأ/إنهاء]",
    usePrefix:false,
    cooldowns: 0
};
module.exports.onLoad = () => {
console.log(chalk.bold.hex("#FF00FF").bold("--SUCCESFULLY LOADED THE KEOBUABAO COMMAND--"));
  }
module.exports.handleEvent = async function ({
    api,
    event,
    Currencies
}) {
    const fs = require("fs-extra")
    const axios = require("axios")
    const {
        threadID,
        messageID,
        body,
        senderID
    } = event;
    if (!body) return;
    async function checkMoney(senderID, maxMoney) {
        var i, w;
        i = (await Currencies.getData(senderID)) || {};
        w = i.money || 0
        if (w < parseInt(maxMoney)) return false;
        else return true;
    }
    async function replace(item) {
        var bua = 'https://imgur.com/IiAhDRT.png',
    keo = 'https://imgur.com/9JIRw7Z.png',
    bao = 'https://imgur.com/1M9MlaV.png';
        if (item == "حجر") {
            var icon = "✊",
                path = "bua";
            let img_bua = (await axios.get(bua, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path}.png`, Buffer.from(img_bua, "utf-8"));
        }
        if (item == "مقص") {
            var icon = "✌️",
                path = "keo";
            let img_keo = (await axios.get(keo, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path}.png`, Buffer.from(img_keo, "utf-8"));
        }
        if (item == "ورقة") {
            var icon = "🖐️",
                path = "bao";
            let img_bao = (await axios.get(bao, {
                responseType: "arraybuffer"
            })).data;
            fs.writeFileSync(__dirname + `/cache/${path}.png`, Buffer.from(img_bao, "utf-8"));
        }
       
        var imgKbb = [];
        imgKbb.push(fs.createReadStream(__dirname + `/cache/${path}.png`));
        var msg = {
            body: `» النتيجة النهائية: ${icon}`,
            attachment: imgKbb
        }
        api.sendMessage(msg, threadID, messageID)
    }
    const typ = ['مقص', 'حجر', 'ورقة', 'مقص', 'حجر', 'ورقة'];

    const item = typ[Math.floor(Math.random() * typ.length)];

    var ketqua = [item]
    const choosee = body.split(" ")

    if (typ.includes(choosee[0].toLowerCase()) == true) {
        if (!global.kbb) return
        const gameThread = global.kbb.get(threadID) || {};
        if (!gameThread) return;
        if (gameThread.start != true) return;
        if (!choosee[1]) return api.sendMessage('الرجاء إدخال مبلغ الرهان!', threadID, messageID);
        if (await checkMoney(senderID, choosee[1]) == false) return api.sendMessage('ليس لديك ما يكفي من المال للمراهنة!', threadID, messageID)
        else {
            var playerGame = gameThread.player.length
            if (!gameThread.player.find(i => i.userID == senderID)) return;

            else {
                var s, q;
                var s = gameThread.player.findIndex(i => i.userID == senderID);
                var q = gameThread.player[s];
                if (q.choose.status == true) return api.sendMessage('⚠ بمجرد اختيارك، لا يمكنك الاختيار مرة أخرى!', threadID, messageID);
                else {
                    if (typ.includes(choosee[0].toLowerCase()) == true) {
                        gameThread.player.splice(s, 1);
                        gameThread.player.push({
                            name: q.name,
                            userID: senderID,
                            choose: {
                                status: true,
                                msg: choosee[0].toLowerCase(),
                                money: parseInt(choosee[1])
                            }
                        });
                        api.sendMessage(`👤 اللاعب ${q.name} قد إختار ${choosee[0].toLowerCase()} مع مبلغ الرهان ${choosee[1]}$`, threadID, messageID);
                    }
                    var vv = 0,
                        vvv = gameThread.player.length;
                    for (var c of gameThread.player) {
                        if (c.choose.status == true) vv++;
                    }
                    if (vv == vvv) {
                        let gifKbb = (await axios.get('https://imgur.com/yEFri7a.gif', {
                            responseType: "arraybuffer"
                        })).data;
                        fs.writeFileSync(__dirname + `/cache/gifkbb.gif`, Buffer.from(gifKbb, "utf-8"));
                        var gifkbb = [];
                        gifkbb.push(fs.createReadStream(__dirname + `/cache/gifkbb.gif`));
                        var msg1 = {
                            body: "» Đang chơi....",
                            attachment: gifkbb
                        }
                        api.sendMessage(msg1, threadID, async (error, info) => {
                            await new Promise(resolve => setTimeout(resolve, 3000));
                        
                            api.unsendMessage(info.messageID);
                        }, messageID);
                        await new Promise(resolve => setTimeout(resolve, 7000));
                        await replace(item)
                        await new Promise(resolve => setTimeout(resolve, 3000));
                        await checkWin(ketqua, gameThread);
                    } else return;
                }
            }
        }
    }
    async function checkWin(ketqua, gameThread) {
        var checkwin = gameThread.player.filter(i => ketqua.includes(i.choose.msg) == true)
        var checklose = gameThread.player.filter(i => ketqua.includes(i.choose.msg) == false)
        var msg;
        if(checkwin.length != 0) {
          msg = '[====الفائزون====]\n'
          for (let i of checkwin) {
              var checkItem = ketqua.filter(a => a == i.choose.msg)
              console.log(checkItem)
              await Currencies.increaseMoney(i.userID, parseInt(i.choose.money) * checkItem.length);
              msg += `👤: ${i.name} لقد راهنت ب ${i.choose.msg} + ${parseInt(i.choose.money) * checkItem.length}$\n`
          }
        }
        if(checklose.length != 0) {
          msg += '\n[====الخاسرون====]\n'
          for (let i of checklose) {
              await Currencies.decreaseMoney(i.userID, parseInt(i.choose.money));
              msg += `👤: ${i.name} لقد قمت بإختيار ${i.choose.msg} - ${i.choose.money}$\n`
          }
        }
        global.kbb.delete(threadID);
        return api.sendMessage(msg, threadID, messageID);
    }
}
module.exports.run = async function ({ api, event,args,Threads,Users,Currencies,getText}) {
    try {
        if (!global.kbb) global.kbb = new Map();
        const {
            threadID,
            messageID,
            senderID
        } = event;
              
    if (args.length == 0) return api.sendMessage(`===[ حجر ورقة مقص ]===\n» إنشاء:قم بإنشاء لعبة جديدة\n» إنضمام/-j: للإنضمام إلى اللعبة\n» مغادرة/-l: من أجل مغادرة اللعبة\n» بدأ/-s: من أجل بدأ اللعبة\n» إنهاء/-e: إنهاء و إغلاق اللعبة`, threadID, messageID);
        var gameThread = global.kbb.get(threadID);
        switch (args[0]) {
        case "إنشاء":
        case "جديد":
        case "-c": {
            if (await checkMoney(senderID, 50) == false) return api.sendMessage('الحد الأدنى المطلوب هو 50 دولارًا للمشاركة!', threadID, messageID)
            if (global.kbb.has(threadID)) return api.sendMessage('⚠ لقد فتحت هذه المجموعة طاولة اللعبة!', threadID, messageID);
            var name = await Users.getNameUser(senderID);
            global.kbb.set(threadID, {
                box: threadID,
                start: false,
                author: senderID,
                player: [{
                    name,
                    userID: senderID,
                    choose: {
                        status: false,
                        msg: null,
                        money: null
                    }
                }]
            });
            return api.sendMessage('تم بنجاح إنشاء اللعبة لللإنضمام قم بكتبابة إنضمام من أجل اللعب\n', threadID, messageID);
            break;
        }
        case "إنضمام":
        case "-j": {
            if (await checkMoney(senderID, 50) == false) return api.sendMessage('الحد الأدنى المطلوب هو 50 دولارًا للمشاركة!', threadID, messageID)
            if (!global.kbb.has(threadID)) return api.sendMessage('ليس هناك مقص ورق أو صخرة من أجل المشاركة!', threadID, messageID);
            if (gameThread.start == true) return api.sendMessage('لقد بدأت اللعبة بالفعل!', threadID, messageID);
            if (gameThread.player.find(i => i.userID == senderID)) return api.sendMessage('لقد شاركت من قبل!', threadID, messageID);
            var name = await Users.getNameUser(senderID);
            gameThread.player.push({
                name,
                userID: senderID,
                choose: {
                    stats: false,
                    msg: null,
                    money: null
                }
            });
            global.kbb.set(threadID, gameThread);
            return api.sendMessage('تم الإنضمام بنجاح!', threadID, messageID);
            break;
        }
        case "مغادرة":
        case "-l'": {
            if (!global.kbb.has(threadID)) return api.sendMessage('ليس هناك مقص ورق صخرة للمغادرة!', threadID, messageID);
            if (!gameThread.player.find(i => i.userID == senderID)) return api.sendMessage('أنت لم تنضم بعد لذلك لا يمكنك المغادرة!', threadID, messageID);
            if (gameThread.start == true) return api.sendMessage('لقد بدأت اللعبة بالفعل، لقد تأخرت قليلاً!', threadID, messageID);
            if (gameThread.author == senderID) {
                global.kbb.delete(threadID);
                var name = await Users.getNameUser(senderID);
                return api.sendMessage('⚠ لقد بدأت طاولة اللعبة ولا يمكن تركها!', threadID, messageID);
            } else {
                gameThread.player.splice(gameThread.player.findIndex(i => i.userID == senderID), 1);
                global.kbb.set(threadID, gameThread);
                var name = await Users.getNameUser(senderID);
                api.sendMessage('تمت المغادرة بنجاح!', threadID, messageID);
                return api.sendMessage(`${name} غادر، وعدد اللاعبين المتبقين هو ${gameThread.player.length}`, threadID);
            }
            break;
        }
        case "بدأ":
        case "-s": {
            if (!gameThread) return api.sendMessage('ليس هناك مقص ورق حجر لتبدأ اللعبة!', threadID, messageID);
            if (gameThread.author != senderID) return api.sendMessage('فقط المسؤول يمكن أن يبدأ!', threadID, messageID);
            if (gameThread.player.length <= 1) return api.sendMessage('يجب أن يكون عدد اللاعبين 2 أو أكثر!', threadID, messageID);
            if (gameThread.start == true) return api.sendMessage('كانت اللعبة قد بدأت من قبل', threadID, messageID);
            gameThread.start = true;
            global.kbb.set(threadID, gameThread);
            return api.sendMessage(`بداية ناجحة، عدد اللاعبين ${gameThread.player.length}\nالرجاء إدخال [مقص/حجر/ورقة] [مبلغ الرهان]`, threadID);
            break;
        }
        case "إنهاء":
        case "-e": {
            if (!gameThread) return api.sendMessage('لا يوجد  أو حجر أو ورق أو مقص للإنهاء!', threadID, messageID);
            if (gameThread.author != senderID) return api.sendMessage('فقط المنشئ يمكن أن ينهي اللعبة!', threadID, messageID);
            global.kbb.delete(threadID);
            return api.sendMessage(`إنتهت اللعبة بنجاح`, threadID, messageID);
            break;
        }break;
          
            
        }
    } catch (err) {
        return api.sendMessage(getText("خطأ", err), event.threadID, event.messageID);
    }
    async function checkMoney(senderID, maxMoney) {
        var i, w;
        i = (await Currencies.getData(senderID)) || {};
        w = i.money || 0
        if (w < parseInt(maxMoney)) return false;
        else return true;
    }
};