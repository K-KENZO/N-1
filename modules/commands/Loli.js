module.exports.config = {
	name: "المرشد",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "Ιнaв",
	description: "يقوم بإرشادك",
  usePrefix: false,
	commandCategory: "𝗚 𝗥 𝗢 𝗜 𝗣",
	usages: "مرشد",
	cooldowns: 5
};

module.exports.run = async ({ api, event }) => {
  const allicon = ["💞","💖","💗","💜","🌸","💗","💝","🎀","🌹","🍁","🎊","🌟","🍁"];
const lol = allicon[Math.floor(Math.random()*allicon.length)];
const axios = require('axios');
    const request = require('request');
    const timeStart = Date.now();
  const dcm = process.uptime(); 
      var anh = Math.floor(dcm / (60 * 60));
	var la = Math.floor((dcm % (60 * 60)) / 60);
	var vtoan = Math.floor(dcm % 60);
  const fs = require("fs");
    const moment = require("moment-timezone");
  const timeNow = moment.tz("Africa/Casablanca").format("DD/MM/YYYY || HH:mm:ss");

   var thu = moment.tz('Africa/Casablanca').format('dddd');
  if (thu == 'Sunday') thu = 'الأحد'
  if (thu == 'Monday') thu = 'الإثنين'
  if (thu == 'Tuesday') thu = 'الثلاثاء'
  if (thu == 'Wednesday') thu = 'الأربعاء'
  if (thu == "Thursday") thu = 'الخميس'
  if (thu == 'Friday') thu = 'الجمعة'
  if (thu == 'Saturday') thu = 'السبت'
  const _0x43eeb8=_0x14ae;(function(_0x36bc23,_0x98ee2f){const _0xbf2553=_0x14ae,_0x468da5=_0x36bc23();while(!![]){try{const _0x5079d8=-parseInt(_0xbf2553(0x93))/0x1*(-parseInt(_0xbf2553(0x9e))/0x2)+parseInt(_0xbf2553(0x9b))/0x3*(parseInt(_0xbf2553(0xa1))/0x4)+parseInt(_0xbf2553(0x90))/0x5*(parseInt(_0xbf2553(0xa4))/0x6)+parseInt(_0xbf2553(0x91))/0x7*(-parseInt(_0xbf2553(0x92))/0x8)+parseInt(_0xbf2553(0x9a))/0x9+-parseInt(_0xbf2553(0xa3))/0xa+parseInt(_0xbf2553(0x9d))/0xb*(parseInt(_0xbf2553(0x99))/0xc);if(_0x5079d8===_0x98ee2f)break;else _0x468da5['push'](_0x468da5['shift']());}catch(_0x396e9d){_0x468da5['push'](_0x468da5['shift']());}}}(_0x362c,0xddb75));function _0x14ae(_0x1a1353,_0x443db2){const _0x362c8c=_0x362c();return _0x14ae=function(_0x14ae3d,_0x1736fa){_0x14ae3d=_0x14ae3d-0x90;let _0x3778f9=_0x362c8c[_0x14ae3d];return _0x3778f9;},_0x14ae(_0x1a1353,_0x443db2);}function _0x8eb9(_0xb66a78,_0x29e2c4){const _0x184a31=_0x409e();return _0x8eb9=function(_0x4cce7e,_0x43c146){_0x4cce7e=_0x4cce7e-0x1d9;let _0x537eab=_0x184a31[_0x4cce7e];return _0x537eab;},_0x8eb9(_0xb66a78,_0x29e2c4);}const _0x50c1a2=_0x8eb9;function _0x409e(){const _0x44657d=_0x14ae,_0x224e0b=['3174920fmrPRu',_0x44657d(0xa0),_0x44657d(0xa5),'417224CEdZQM','4773804KHMFgM',_0x44657d(0x9f),_0x44657d(0x96),'https://hehe.apibotchat.repl.co/text/cadao',_0x44657d(0x95),_0x44657d(0x97)];return _0x409e=function(){return _0x224e0b;},_0x409e();}(function(_0x59939f,_0x5900a3){const _0x3fcc81=_0x14ae,_0x45df09=_0x8eb9,_0x3b462c=_0x59939f();while(!![]){try{const _0x4bb81b=-parseInt(_0x45df09(0x1db))/0x1+parseInt(_0x45df09(0x1da))/0x2+-parseInt(_0x45df09(0x1e0))/0x3*(parseInt(_0x45df09(0x1dd))/0x4)+parseInt(_0x45df09(0x1e2))/0x5+-parseInt(_0x45df09(0x1de))/0x6+parseInt(_0x45df09(0x1df))/0x7+parseInt(_0x45df09(0x1dc))/0x8;if(_0x4bb81b===_0x5900a3)break;else _0x3b462c[_0x3fcc81(0x94)](_0x3b462c[_0x3fcc81(0xa2)]());}catch(_0x76aeb3){_0x3b462c[_0x3fcc81(0x94)](_0x3b462c[_0x3fcc81(0xa2)]());}}}(_0x409e,0xc9569));function _0x362c(){const _0x26d429=['24mrIzdD','get','data','5988WISHbU','7020828SteAtj','4669332NJHTIu','data','3872vcyusJ','18Sikdob','7017283VcXxhC','540482UqFHIb','4LbyLwa','shift','15900870cBCcPo','258sWvlEe','1584120xDgqqT','108870rcoJkx','7HtMjaH','8674856YpXsOW','14903JQuzev','push','1036505JrCLuP'];_0x362c=function(){return _0x26d429;};return _0x362c();}const res=await axios[_0x50c1a2(0x1d9)](_0x50c1a2(0x1e1));var tho=res[_0x43eeb8(0x9c)][_0x43eeb8(0x98)];
					api.sendMessage({
                                                body: `=== [ ستورم البوت  ] ===\n\nمرحبا ! نعم هذه البادئة الخاصة بي ماللذ تحتاجه\n إليك الوقت : ${timeNow}\nواليوم هو ${thu}  \n◆━━━◆『 ${lol} 』◆━━━◆\n\nحالة البوت: يكون متصلا حين يكون المطور متصلا أيضا \nسرعة المعالجة: ${Date.now() - timeStart} ثانية\nالبوت متصل إبتداءا من: ${anh} ساعة ${la} دقيقة ${vtoan} ثانية/ثواني.\nقم بالتفاعل ب لايك "👍" إلى هذه الرسالة من أجل مزيد من التفاصيل.\nالمطور: إيهاب`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.zeidbot.site/images/phongcanhimg')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
     }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
  const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "👍") return; 
 api.unsendMessage(handleReaction.messageID);
        var msg = `==== [ قائمة المعلومات ] ====\n𝟭- قائمة الأوامر الأكثر إستعمالا. \n𝟮- قائمة المعلومات حول البوت و المشرف.\n𝟯- روابط التواصل الاجتماعي للمطور.\n𝟰- معلومات البوت.\n𝟱. قواعد إستخدام البوت.\n6. معلومات حول المجموعة\n\nقم بالرد على هذه الرسالة بالرقم من أجل رؤية مزيد من التفاصيل.`
        return api.sendMessage({body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.zeidbot.site/images/phongcanhimg')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID,(error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies,
    __GLOBAL
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
        api.sendMessage(`Wait a minute`, event.threadID, (err, info) =>
	setTimeout(() => {api.unsendMessage(info.messageID) } , 100000));
  const request = require("request");
       const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
 
    
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
          case "" :
          case "":
        case "1": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: ` [ العديد من الأوامر الأكثر شيوعا ]\n\n— نيكس : يمكنك سؤال نيكس وهي ستجيبك .
    عمري :يحسب لك عمرك  \n— عكس: لعبة عكس الكلمات .\n— صور : يمكنك البحث عن أي صورة تريدها سيعرض عليك ستة صور ويمكنك ان   تزيدها مثلاً صور غوكو -12.\n— لوغو: يكتب اسمك او اساو اسم صديقك في صور جميلة الشكل [ وفي النهاية شكرا على إستخدام البوت الإستماع ]
 `, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.zeidbot.site/images/phongcanhimg')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "2": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `
=== [ مالـك البـوت و الـمـطـور ] ===
❯ الـإسـم: 𝗜𝗛𝗔𝗕
❯ الـلـقـب: 𝗞𝗘𝗡𝗭𝗢
❯ الـبـلـد: مـصـر🇪🇬
❯ الـعـمـر: 16سـنـة
❯ رابـط الـصـانـع: https://www.facebook.com/m.ihab685
  [ شكرا على إستخدام البوت الخاص بي ☺️!! ]`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.zeidbot.site/images/phongcanhimg')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "3": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `روابط التواصل الاجتماعي للمطور:\n—كـيـنـزو إيـهـاب : https://www.facebook.com/m.ihab685`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.zeidbot.site/images/phongcanhimg')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "4": {
const admin = config.ADMINBOT
    const ndh = config.NDH
          const namebot = config.BOTNAME
          const { commands } = global.client;
          const PREFIX = config.PREFIX
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `==== [ معلومات حول البوت ] ====
------------------\n\n🖥 الأوامر: هناك ${commands.size} أمر متاح على ستورم البوت\n📎 البادئة: [ ${PREFIX} ]\n💓 إيم البوت: ${namebot}\n💬 قائمة المجموعات: حاليا البوت موجود في  ${global.data.allThreadID.length} مجموعة\n👑ً مطور البوت: ${admin.length} مطور و  ${ndh.length} داعم للبوت\n------------------\n<ملاحظاتك>`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.zeidbot.site/images/phongcanhimg')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
          case "6": {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
  const moment = require("moment-timezone");
   const timeNow = moment.tz("Africa/Casablanca ").format("DD/MM/YYYY || HH:mm:ss");
  async function streamURL(url, mime='jpg') {
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`,
    downloader = require('image-downloader'),
    fse = require('fs-extra');
    await downloader.image({
        url, dest
    });
    setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
    return fse.createReadStream(dest);
};
          let threadInfo = await api.getThreadInfo(event.threadID);
            let img = threadInfo.imageSrc;
            var gendernam = [];
            var gendernu = [];
            var nope = [];
                for (let z in threadInfo.userInfo) {
      var gioitinhone = threadInfo.userInfo[z].gender;
      var nName = threadInfo.userInfo[z].name;
      if (gioitinhone == "MALE") {
        gendernam.push(z + gioitinhone)
      } else if (gioitinhone == "FEMALE") {
        gendernu.push(gioitinhone)
      } else {
        nope.push(nName)
      }
    }; 
                         var nam = gendernam.length;
             var nu = gendernu.length;
             var kxd = nope.length;
         let threadName = threadInfo.threadName;
            let qtv = threadInfo.adminIDs.length;
            let sl = threadInfo.messageCount;
             let icon = threadInfo.emoji;
                      let color = threadInfo.color;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "مطفئة" : sex == true ? "مفعلة" : "\n";
 
                  var i = 1;
                       var listad_msg = '';
  var adminIDs = threadInfo.adminIDs;
	for (let get of adminIDs) {
    const infoUsers = await Users.getInfo(get.id);
    listad_msg += `→ ${i++}. 𝐓𝐞̂𝐧: ${infoUsers.name}\n`
  }
 api.unsendMessage(handleReply.messageID); 
 var msg = `=====「 معلومات حول المجموعة 」=====\n\n🏘️ إسم المجموعة: ${threadName}\n⚙️ آيدي المجموعة: ${event.threadID}\n👥 الأعضاء: ${threadInfo.participantIDs.length}\n 🧑 أولاد: ${nam}\n👧 بنات : ${nu}\n💞 مشرفين المجموعة: ${qtv}\n 📚 قائمة مشرفين المجموعة: ${listad_msg}\n🌷 الموافقة: ${pd}\n😻 اللأيموجي: ${icon ? icon : 'لم يتم إستخدامه'}\n💝 رمز الواجهة: ${color}\n------------------\n🍑 إجمالي عدد الرسائل: ${sl}\n 📔 الوقت: ${timeNow}\n🎀 إستخدم معلومات المجموعة من أجل مزيد من التفاصيل`
return api.sendMessage({body: msg, attachment: await streamURL(threadInfo.imageSrc)},event.threadID,event.messageID)
  
                                                                                             }
          case "5": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `------قـواعـد الـجـروب------
الــصَـداقَــة هِــي أنْ تَــذهَـبْ وَتَــعُـود وَتَــجــد لِــ نَــفــسَـكْ “ مَــكـانـاً ” بِـيـنَـهُـمْ
قواعد وشروط الجروب♥
1-احترام آراء الآخرين وعدم التلفظ بألفاظ تخدش الحياء
2- الحفاظ على القيم والعادات والتقاليد
3- الحفاظ على تعاليم الدين الاسلامي
4- المرجو التعامل مع المنشورات الجديه بكل حزم وجد والمنشورات الاخرى
يتعامل فيها كل عضو بمايريد مع العلم ان التعليق يعبر عن شخصيتك
5 - عدم وضع صور إباحية ومثيرة جدا وذلك تفاديا لإثارة المشاكل من قبل بعض
الأعضاء
6- عدم إزعاج البنات بطلبات الأضافة داخل الجروب أو الرسائل غير
اللائقة.....يتم تنبيه العضو لمره واحده واذا لم يستجب العضو المعني يحذف
على الفور
7- عدم نشر اي صفحه او جروب في المجموعة
تنبيه العضو لمره واحده واذا لم يستجب العضو المعني يحذف على الفور
8- التشهير والتشويه لعضو ما او إنسان ما ؟ داخل الجروب يمنع منعا باتا
ويتحمل صاحب الموضوع الجزاء وهوا الحذف النهائي
9- يرجى عدم نشر المنشورات السياسية لكافة الدول العربية و اى عضو سينشر اى
منشور سياسى سيتم تحذيره مرة واحدة و بعد ذلك سيتم طرد العضو
10- أرجو الابلاغ فوراً عن أي شيء مخالف داخل الجروب
11- ممنوع نشر الصور الشخصيه على الجروب او كتابه ارقام الهواتف الخاصه بكم
11_السياسه ممنوعه منعا باتا ..................... وبكرر منمنوع السياسه
منعا باتا
12_ اى شاب يحاول الدخول باسم بنت مصيره #الطرد
.......اي شخص يسيء للجروب سيتم حظره
...... ? فأتمنى أن نبقى اخوة ? .....
لن نجبر أحداً على دخول المجموعة ولا على البقاء فيها !!!
ولكني ألتمس من الموجودين فيها إحترام قوانينها.
المجموعه منكم ولكم وانتم من يتصرف بمجريات الامور وكلنا تقة فيكم
ارجوا من الجميع الالتزام ولكم خالص الشكر والتقدير على التعاون
Admins`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api.zeidbot.site/images/phongcanhimg')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
          }
            

            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("→ أرجوك قم بإختيار أحد الأرقام", event.threadID, event.messageID);
            	if (choose > 6 || choose < 1) return api.sendMessage("→ هذا الخيار ليس على القائمة.", event.threadID, event.messageID); 
    }
    }
}
    }