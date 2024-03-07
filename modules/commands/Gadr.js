module.exports.config = {
    name: "غادر",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Ιнaв",
    description: "يغادر من جروبات",
usePrefix: false,
    commandCategory: "𝗔 𝗗 𝗠 𝗜 𝗡",
    usages: "out [id]",
    cooldowns: 10,
};

module.exports.run = async function({ api, event, args }) {
        if (!args[0]) return api.removeUserFromGroup(api.getCurrentUserID(), event.threadID);
        if (!isNaN(args[0])) return api.removeUserFromGroup(api.getCurrentUserID(), args.join(" "));
}