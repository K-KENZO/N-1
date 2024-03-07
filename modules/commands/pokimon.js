module.exports.config = {
    name: "بوكيمون",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Ιнaв",
    description: "قم برؤية المعلومات حول أي بوكيمون إنطلاقا من إسمه",
    commandCategory: "𝗚 𝗔 𝗠 𝗘 𝗦",
    usePrefix:false,
    usages: "[إسم البوكيمون]",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, utils  })  {
const axios = global.nodemodule['axios'];  
const request = global.nodemodule["request"];	
const namePoke = args.join(" ");
if (!namePoke) return api.sendMessage('🌻الرجاء إدخال اسم نوع البوكيمون!!!', event.threadID, event.messageID)
try {
const res = await axios.get(`https://some-random-api.ml/pokedex?pokemon=${namePoke}`);
const data = res.data;
const stt = data.stats
return request(encodeURI(`https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=${data.description}`), (err, response, body) => {
        if (err) return api.sendMessage("حدث خطأ!",event.threadID, event.messageID);
        var retrieve = JSON.parse(body);
        var text = '';
        retrieve[0].forEach(item => (item[0]) ? text += item[0] : '');
        var fromLang = (retrieve[2] === retrieve[8][0][0]) ? retrieve[2] : retrieve[8][0][0]
return api.sendMessage(`
» اٌلِـإسُمِـ: ${data.name.charAt(0).toUpperCase() + data.name.slice(1)}
» اٌلِـﻧَوِعٍ: ${data.type}
» اٌلِـجِيٌـلِـ: ${data.generation}
» اٌلِـصٍـﻧَفّ: ${data.species.join(', ')}
» بّـيٌـضُةُ اٌلِـمِـجِمِـوِعٍةُ: ${data.egg_groups.join(', ')}
» اٌلِـقْدّرُةُ: ${data.abilities.join(', ')}
» اٌلِـطًوِلِـ: ${data.height}
» اٌلِـوِزٍﻧَ: ${data.weight}
» اٌلِـحٍاٌلِـةُ: اٌلِـصٍـحٍةُ ${stt.hp}, اٌلِـهٌجِوِمِـ: ${stt.attack}, اٌلِـدّفّاٌعٍ: ${stt.defense}, اٌلِـسُرُعٍةُ: ${stt.speed}
» اٌلِـتْطًوِرُ: ${data.family.evolutionLine.join(' => ')}
» اٌلِـوِصٍـفّ: ${text}`, event.threadID, event.messageID)
})
} catch {
            return api.sendMessage('🌻لم يتم العثور على اسم البوكيمون!!!', event.threadID, event.messageID);
        }
  }
  