module.exports.config = {
  name: "الاوامر",
  version: "1.0.2",
  hasPermission: 0,
  credits: "Ιнaв",
  description: "For Beginner Guide",
  usePrefix: false,
  commandCategory: "𝗚 𝗥 𝗢 𝗜 𝗣",
  usages: "Commands will be showed",
  cooldowns: 0,
  envConfig: {
    delayUnsend: 60
  }
};

module.exports.languages = {
  en: {
    moduleInfo:
      "「 %1 」\n%2\n\n❯ Usage: %3\n❯ Category: %4\n❯ Waiting time: %5 seconds(s)\n❯ Permission: %6\n\n» Module code by %7 ",
    helpList:
      `◖هناك %1 أوامر و %2 فئات في هذا الروبوت 👑ً
من تطوير سيدي الذكي
 •~الـإسـم:𝗜𝗛𝗔𝗕✓
•~الـلقـب: 𝗞𝗘𝗡𝗭𝗢✓`,
    guideList:
      `◖Use: "%1${this.config.name} ‹command›" to know how to use that command!\n◖Type: "%1${this.config.name} ‹page_number›" to show that page contents!`,
    user: "User",
    adminGroup: "Admin group",
    adminBot: "Admin bot",
  },
};


module.exports.handleEvent = function ({ api, event, getText }) {
  const { commands } = global.client;
  const { threadID, messageID, body } = event;  

  if (!body || typeof body == "undefined" || body.indexOf("القائمة") != 0)
    return;
  const splitBody = body.slice(body.indexOf("اوامر")).trim().split(/\s+/);
  if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const command = commands.get(splitBody[1].toLowerCase());
  const prefix = threadSetting.hasOwnProperty("PREFIX")
    ? threadSetting.PREFIX
    : global.config.PREFIX;
  return api.sendMessage(
    getText(
      "moduleInfo",
      command.config.name,
      command.config.description,
      `${prefix}${command.config.name} ${
        command.config.usages ? command.config.usages : ""
      }`,
      command.config.commandCategory,
      command.config.cooldowns,
      command.config.hasPermission === 0
        ? getText("user")
        : command.config.hasPermission === 1
        ? getText("adminGroup")
        : getText("adminBot"),
      command.config.credits
    ),
    threadID,
    messageID
  );
};

module.exports.run = async function ({ api, event, args, getText }) {
  const { commands } = global.client;
  const { threadID, messageID } = event;
  const command = commands.get((args[0] || "").toLowerCase());
  const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
  const { autoUnsend, delayUnsend } = global.configModule[this.config.name];
  const prefix = threadSetting.hasOwnProperty("PREFIX")
    ? threadSetting.PREFIX
    : global.config.PREFIX;

  if (!command) {
    const commandList = Array.from(commands.values());
    const categories = new Set(commandList.map((cmd) => cmd.config.commandCategory.toLowerCase()));
    const categoryCount = categories.size;

    const categoryNames = Array.from(categories);
    const itemsPerPage = 10;
    const totalPages = Math.ceil(categoryNames.length / itemsPerPage);

    let currentPage = 1;
    if (args[0]) {
      const parsedPage = parseInt(args[0]);
      if (
        !isNaN(parsedPage) &&
        parsedPage >= 1 &&
        parsedPage <= totalPages
      ) {
        currentPage = parsedPage;
      } else {
        return api.sendMessage(
          `◖  أُووبس! لقد ذهبت بعيداً جداً! الرجاء اختيار صفحة بين 1 و ${totalPages}◗ `,
          threadID,
          messageID
        );
      }
    }
    const startIdx = (currentPage - 1) * itemsPerPage;
    const endIdx = startIdx + itemsPerPage;
    const visibleCategories = categoryNames.slice(startIdx, endIdx);

    let msg = "";
    for (let i = 0; i < visibleCategories.length; i++) {
      const category = visibleCategories[i];
      const categoryCommands = commandList.filter(
        (cmd) =>
          cmd.config.commandCategory.toLowerCase() === category
      );
      const commandNames = categoryCommands.map((cmd) => cmd.config.name);
      const numberFont = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
      ];
      msg += `┌───────═━┈━────────┐\n╰┈➤ 『 ${numberFont[i]} 』  ${ 
        category.charAt(0).toUpperCase() + category.slice(1)
      }\n╰┈➤ 『 وصف 』 :\n${commandNames.join(", ")}\n\n`;
    }

    const numberFontPage = [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",

    ];
    msg += `┌───────═━
   『 𝑷𝑨𝑮𝑬 ${numberFontPage[currentPage - 1]} of ${
numberFontPage[totalPages - 1] } 』\n\n`;                                        msg += getText("helpList", commands.size, categoryCount, prefix);

    const axios = require("axios");
    const fs = require("fs-extra");
    const imgP = [];
    const img = [
      "https://i.imgur.com/p0uTnbj.png",
"https://i.imgur.com/WKmkZLk.png",
"https://i.imgur.com/yzGS912.png",
"https://i.imgur.com/u7xcjxw.png",
"https://i.imgur.com/CMijHJl.png",
"https://i.imgur.com/pxcHN5d.png",
"https://i.imgur.com/L5ZEBYU.png",
"https://i.imgur.com/SJ3oIWn.png",
    ];
    const path = __dirname + "/cache/menu.png";
    const rdimg = img[Math.floor(Math.random() * img.length)];

    const { data } = await axios.get(rdimg, {
      responseType: "arraybuffer",
    });

    fs.writeFileSync(path, Buffer.from(data, "utf-8"));
    imgP.push(fs.createReadStream(path));
    const config = require("./../../config.json")
    const msgg = {
  body: `『 قـائـمـة أوامـر سـتـورم  』\n‣ 『 الـأوامـر 』 : 🎀 \n\n` + msg + `\n\n◖إجمالي الصفحات المتاحة: ${totalPages}.\n`,attachment: imgP,
};

    const sentMessage = await api.sendMessage(msgg, threadID, messageID);

    if (autoUnsend) {
      setTimeout(async () => {
        await api.unsendMessage(sentMessage.messageID);
      }, delayUnsend * 1000);
    }
  } else {
    return api.sendMessage(
      getText(
        "moduleInfo",
        command.config.name,
        command.config.description,
        `${prefix}${command.config.name} ${
          command.config.usages ? command.config.usages : ""
        }`,
        command.config.commandCategory,
        command.config.cooldowns,
        command.config.hasPermission === 0
          ? getText("user")
          : command.config.hasPermission === 1
          ? getText("adminGroup")
          : getText("adminBot"),
        command.config.credits
      ),
      threadID, messageID
    );
  }
};