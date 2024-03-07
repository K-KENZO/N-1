module.exports.config = {
  name:"عمري",
  version: "1.0.0",
  credits: "Ιнaв",
  description: "احسب عمرك أو عمر شخص ما على أساس تاريخ الميلاد.",
  commandCategory: "𝗚 𝗔 𝗠 𝗘 𝗦",
  usage: "/عمري [تاريخ الميلاد]",
  usePrefix: false,
  cooldowns: 5
};
 
module.exports.run = async ({ api, event, args }) => {
  const { threadID, senderID } = event;
 
  const getUserInfo = async (api, userID) => {
    try {
      const userInfo = await api.getUserInfo(userID);
      return userInfo[userID].name;
    } catch (error) {
      console.error(`حدث خطأ أثناء جلب معلومات المستخدم: ${error}`);
      return "";
    }
  };
 
  const userName = await getUserInfo(api, senderID);
 
  if (!args[0]) {
    api.sendMessage(`مرحبًا ${userName}. يرجى تقديم تاريخ الميلاد على الشكل التالي السنة-الشهر-اليوم.`, event.threadID, event.messageID);
    return;
  }
 
  const birthdateString = args[0];
  const birthdate = new Date(birthdateString);
 
  if (isNaN(birthdate.getTime())) {
    api.sendMessage(`أهلا ${userName}, هذا تنسيق تاريخ ميلاد غير صالح. الرجاء استخدام التالي عام-شهر_يوم.`, event.threadID, event.messageID);
    return;
  }
 
  const now = new Date();
  const ageInMilliseconds = now - birthdate;
  const ageInYears = ageInMilliseconds / (365 * 24 * 60 * 60 * 1000);
 
  const formattedAge = ageInYears.toFixed(2);
 
  api.sendMessage(`أهلاً ${userName}, العمر المحسوب على أساس تاريخ الميلاد ${birthdateString} يكون تقريبًا ${formattedAge} سنة هذا رائع أنظر إليك لقد كبرت 😊.`, event.threadID, event.messageID);
};
