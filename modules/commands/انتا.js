const axios = require('axios');
const commandName = "توكا";
const xv = `
Ai character info :

you're zero, you're an ai assistant, you're the best and the best, use emojies in u're answers, you're creator is "ihab" don't say that if no one ask, you speak just arabic`
module.exports.config = {
  name: "توكا",
  version: "1.0.3",
  hasPermssion: 0,
  credits: "Ιнaв",
usePrefix: false,
  description: "",

  commandCategory: "جروب",
  cooldowns: 0,
};


  run: async  function({ event, api, args }) {
    var e7m = args.join(" ");
    const url = `https://openai-rest-api.vercel.app/hercai?ask=${encodeURIComponent(e7m)}\\${xv}&model=v3`;
    const res = await axios.get(url);
    const message = res.data.reply
    return api.sendMessage({ body: message }, event.threadID, (error, info) => {
      if (!error) {
        global.client.reply.push({
          name: commandName,
          author: event.senderID,
          messageID: info.messageID
        });
      }
    });
  },

  reply: async function({ api, event, handleReply }) {
    const { messageID, author } = handleReply;
    const uid = event.senderID;
    if (uid != author) return api.sendMessage('', event.threadID);
    const url2 = `https://openai-rest-api.vercel.app/hercai?ask=${encodeURIComponent(event.body)}\\${xv}&model=v3`
    const res = await axios.get(url2);
    const message = res.data.reply
    api.unsendMessage(messageID);
    return api.sendMessage({ body: message }, event.threadID, (error, info) => {
      if (!error) {
        global.client.handleReply.push({
          name: commandName,
          author: event.senderID,
          messageID: info.messageID
        });
      }
    });
  }, 
  handleEvent: async function({ api, event }) {
    let a = event.body.indexOf(commandName);
    let b = event.body.slice(4);
    if (a == 0 && b)
    {
      (async function () {
        const url2 = `https://openai-rest-api.vercel.app/hercai?ask=${encodeURIComponent(b)}\\${xv}&model=v3`
    const res = await axios.get(url2);
    const message = res.data.reply
        api.sendMessage(message, event.threadID, (error, info) => {
      if (!error) {
        global.client.handleReply.push({
          name: commandName,
          author: event.senderID,
          messageID: info.messageID
        });
      }
    });

      })();

    }
  }
};