module.exports.config = {
  name: "تيكتوك",
  version: "1.0.0",
  hasPermssion: "0",
  credits: "Ιнaв",
  description: "قم بالبحث عن فيديو في التيك توك",
  usePrefix: false,
  commandCategory: "𝗚 𝗥 𝗢 𝗜 𝗣",
  usage: "[تيك <إسم البحث>]",
  cooldowns: 5,
};

const axios = require("axios");
const fs = require("fs");
const path = require("path");

module.exports.run = async function({ api, event, args }) {
  try {
    const searchQuery = args.join(" ");
    if (!searchQuery) {
      api.sendMessage("الـإسـتخـدام: تيـك <نـص البـحـث>", event.threadID);
      return;
    }
    
    api.sendMessage(" ⏱️ | جـاري البـحـث الـمـرجـو الـإنـتـظـار...", event.threadID);
    
    const response = await axios.get(`https://api-1.kimjosephdgbien.repl.co/tiktok/searchvideov2?keywords=${encodeURIComponent(searchQuery)}`);
    const videos = response.data.data.videos;
    
    if (!videos || videos.length === 0) {
      api.sendMessage("لـم يـتـم اـلعثـور علـى مـقـاطـع فيـديـو لـما قـمـت بـإدخـالـه .", event.threadID);
      return;
    }

    const videoData = videos[0];
    const videoUrl = videoData.play;
    
    const message = `نـتـيـجـة الـتـيـك تـوك✨:\n\nتم الـنـشـر مـن طـرف: ${videoData.author.nickname}\الـمـسـتـخـدم: ${videoData.author.unique_id}\n\nالـعـنـوان: ${videoData.title}`;
    
    const filePath = path.join(__dirname, `/cache/tiktok_video.mp4`);
    const writer = fs.createWriteStream(filePath);

    const videoResponse = await axios({
      method: 'get',
      url: videoUrl,
      responseType: 'stream'
    });

    videoResponse.data.pipe(writer);

    writer.on('finish', () => {
      api.sendMessage(
        { body: message, attachment: fs.createReadStream(filePath) },
        event.threadID,
        () => fs.unlinkSync(filePath)
      );
    });
  } catch (error) {
    console.error('Error:', error);
    api.sendMessage("❌ | حـدث خـطـأ أثـنـاء الـإنـشـاء.", event.threadID);
  }
};