const axios = require("axios");

// Goimagesearch 
async function searchImages(query) {
  const google = global.nodemodule["googlethis"];
  try {
    const options = {
      page: 1,
      safe: false,
    };
    let result = await google.image(query, options);
    return result;
  } catch (error) {
    console.log("خطأ في البحث عن الصور:", error);
    return [];
  }
}

// Eric
async function searchEric(query, api, event) {
  const google = require("googlethis");
  let results = "";
  try {
    const options = {
      page: 0,
      safe: false,
      additional_params: {
        hl: "en",
      },
    };
    api.sendMessage(`🔎 | جاري البحث عن "${query}" المرحو الإنتظار...`, event.threadID, event.messageID);
    const response = await google.search(`الموقع:eric.ed.gov ${query}`, options);

    for (let i = 0; i < 10; i++) {
      let title = response.results[i].title;
      let description = response.results[i].description;
      let url = response.results[i].url;
      results += `📌 ${i + 1}:\n\nالعنوان: ${title}\n\nالوصف: ${description}\n\nالرابط: ${url}\n\n------------------\n\n`;
    }

    api.sendMessage(results, event.threadID, event.messageID);
  } catch (error) {
    console.error("🚫 خطأ!\n\nحدث خطأ أثناء جلب واجهة برمجة التطبيقات:", error);
    api.sendMessage("حدث خطأ أثناء جلب البيانات من Eric Ed Gov.", event.threadID);
  }
}

// Conversational AI
async function chatWithAI(api, event, text) {
  try {
    const introduction = "🤖 محادثة الذكاء الاصطناعي:\n\n";
    // Place your Bard or ChatGPT API here
    const url = `ضع تحميلات واجهة برمجة التطبيقات هنا ولا تكن غبيًا هههه'=${encodeURIComponent(text)}`;
    const resAI = await axios.get(url);
    const response = resAI.data.content;
    api.sendMessage(introduction + `أنت: ${text}\n\nالذكاء الإثطناعي: ${response}`, event.threadID, event.messageID);
  } catch (error) {
    console.log("خطأ في محادثة الذكاء الاصطناعي:", error);
    api.sendMessage("🚫 حدث خطأ أثناء المحادثة مع الذكاء الاصطناعي.", event.threadID, event.messageID);
  }
}

module.exports.config = {
  name: "متعدد",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Ιнaв",
  description: "أداة ترفيهية تعمل بالذكاء الاصطناعي يمكنها إرسال الصور والمعلومات والمشاركة في المحادثات.", 
// Please have respect, but if you don't have respect because you're just ignorant and idiot, then OKAY, change it. I don't really mind hahahah //
  commandCategory: "𝗚 𝗥 𝗢 𝗜 𝗣",
usePrefix: false,
  usages: "متعدد [صورة|دردشة|اريك] [سؤال]",
  cooldowns: 5,
};

module.exports.run = async function ({ api, event, args }) {
  const command = args[0];
  const query = args.slice(1).join(" ");

  if (!command || !query) {
    api.sendMessage(
      "أرجوكم بإستخدام هكذا:\n\nمتعدد [صورة | دردشة | إريك] [سؤال]",
      event.threadID,
      event.messageID
    );
    return;
  }

  try {
    if (command === "صورة") {
      let images = await searchImages(query);
      if (images.length === 0) {
        api.sendMessage(`⚠️ لم يتم إيجاد أي صور "${query}".`, event.threadID, event.messageID);
        return;
      }

      let streams = [];
      let counter = 0;

      for (let image of images) {
        if (counter >= 20) break; // this section as you can see..the image counter is limited to 30 only..but you can change it if you want to..just don't do it in the credits section😀
        let url = image.url;
        if (!url.endsWith(".jpg") && !url.endsWith(".png")) continue;

        let path = __dirname + `/cache/image-${counter}.jpg`;

        try {
          let response = await axios.get(url, { responseType: "arraybuffer" });
          global.nodemodule["fs-extra"].writeFileSync(path, Buffer.from(response.data, "binary"));
        } catch (error) {
          console.log("خطأ في تنزيل الصور:", error);
          continue;
        }

        streams.push(
          global.nodemodule["fs-extra"].createReadStream(path).on("end", () => {
            if (global.nodemodule["fs-extra"].existsSync(path)) {
              global.nodemodule["fs-extra"].unlinkSync(path);
            }
          })
        );

        counter += 1;
      }

      if (streams.length === 0) {
        api.sendMessage(`⚠️ لا صور صالحة وجدت ل "${query}".`, event.threadID, event.messageID);
        return;
      }

      api.sendMessage({ body: `🖼️ صور ل "${query}":`, attachment: streams }, event.threadID, () => {});
    } else if (command === "دردشة") {
      chatWithAI(api, event, query);
    } else if (command === "إريك") {
      searchEric(query, api, event);
    } else {
      api.sendMessage(
        `⚠️ أمر خاطئ. الرجاء استخدام أحد هذه الأوامر: صورة, دردشة, إريك`,
        event.threadID,
        event.messageID
      );
    }
  } catch (error) {
    console.log("خطأ في الأمر متعدد:", error);
    api.sendMessage("🚫 حدث خطأ في الأمر متعدد.", event.threadID, event.messageID);
  }
};
