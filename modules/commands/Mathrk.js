const axios = require('axios');
const fs = require('fs');

module.exports.config = {
  name: 'صورة_متحركة',
  version: '1.0.0',
  hasPermssion: 0,
  credits: 'Ιнaв',
  description: 'يقوم بإرسال صور متحركة يعد البحث عنهم في جيفي و يرسلهم على شكل مرفق.',
  commandCategory: '𝗚 𝗔 𝗠 𝗘 𝗦',
  usePrefix: false,
  usages: ['صورة_متحركة [الشيء المراد البحث عنه]'],
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, messageID } = event;

  if (args.length === 0) {
    api.sendMessage('المرجو أن تقوم بوضع الكلمة المراد البحث عنها.', threadID, messageID);
    return;
  }

  const query = args.join(' ');
  const apiKey = 'QHv1qVaxy4LS3AmaNuUYNT9zr40ReFBI';

  try {
    const response = await axios.get(`https://api.giphy.com/v1/gifs/search`, {
      params: {
        q: query,
        api_key: apiKey,
        limit: 6,
        rating: 'g',
      },
    });

    if (response.data.data && response.data.data.length > 0) {
      const gifResults = response.data.data;

      const gifAttachments = [];
      for (let i = 0; i < gifResults.length; i++) {
        const gifData = gifResults[i];
        const gifURL = gifData.images.original.url;

        const path1 = __dirname + `/cache/giphy${i}.gif`;
        const getContent = (await axios.get(gifURL, { responseType: 'arraybuffer' })).data;
        fs.writeFileSync(path1, Buffer.from(getContent, 'utf-8'));
        gifAttachments.push(fs.createReadStream(path1));
      }

      api.sendMessage(
        {
          attachment: gifAttachments,
        },
        threadID
      );
    } else {
      api.sendMessage('لم يتم العثور على أي صورة متحركة من الكلمة التي أدخلتها.', threadID, messageID);
    }
  } catch (error) {
    console.error(error);
    api.sendMessage('حدث خطأ أثناء البحث عن صور_متحركة.', threadID, messageID);
  }
};