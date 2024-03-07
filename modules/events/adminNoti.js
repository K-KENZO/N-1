module.exports.config = {
    name: "adminNoti"
    , eventType: [
        "log:thread-admins"
        , "log:thread-name"
        , "log:user-nickname"
        , "log:thread-call"
        , "log:thread-icon"
        , "log:thread-color"
        , "log:link-status"
        , "log:magic-words"
        , "log:thread-approval-mode"
        , "log:thread-poll"
    ]
    , version: "1.0.1"
    , credits: "Kenzo IHAB"
    , description: "Group Information Update"
    , envConfig: {
        autoUnsend: true
        , sendNoti: true
        , timeToUnsend: 10
    }
};

module.exports.run = async function({
    event
    , api
    , Threads
    , Users
}) {
    const {
        author
        , threadID
        , logMessageType
        , logMessageData
    } = event;
    const {
        setData
        , getData
    } = Threads;
    const fs = require("fs");
    var iconPath = __dirname + "/cache/emoji.json";
    if (!fs.existsSync(iconPath)) fs.writeFileSync(iconPath, JSON.stringify({}));
    if (author == threadID) return;

    try {
        let dataThread = (await getData(threadID))
            .threadInfo;
        switch (logMessageType) {
            case "log:thread-admins": {
                if (logMessageData.ADMIN_EVENT == "add_admin") {
                    dataThread.adminIDs.push({
                        id: logMessageData.TARGET_ID
                    })
                    var id = logMessageData.TARGET_ID
                    api.sendMessage(`[ GROUP UPDATE ]\n❯ USER UPDATE ${Users.getNameUser(id)} BECAME A GROUP ADMIN`, threadID);
                } else if (logMessageData.ADMIN_EVENT == "remove_admin") {
                    dataThread.adminIDs = dataThread.adminIDs.filter(item => item.id != logMessageData.TARGET_ID);
                    api.sendMessage(`[ GROUP UPDATE ]\n❯ REMOVED USER ADMIN POSITION ${logMessageData.TARGET_ID}`, threadID);
                }
                break;
            }

            case "log:user-nickname": {
    if (logMessageData && logMessageData.participant_id && logMessageData.nickname) {
        const participantId = logMessageData.participant_id;
        const nickname = logMessageData.nickname;
        dataThread.nicknames = dataThread.nicknames || {};
        dataThread.nicknames[participantId] = nickname;
        const participantName = await Users.getNameUser(participantId);
        const formattedNickname = nickname || "deleted nickname";
        api.sendMessage(`[ GROUP ]\n❯ Updated nickname for ${participantName}: ${formattedNickname}.`, threadID);
    }
    break;
}



            case "log:thread-name": {
                dataThread.threadName = event.logMessageData.name || null;
                api.sendMessage(`[ GROUP UPDATE ]\n❯ ${(dataThread.threadName) ? `Updated Group Name to: ${dataThread.threadName}` : 'Cleared the Group Name'}.`, threadID);
                break;
            }
            case "log:thread-icon": {
                let preIcon = JSON.parse(fs.readFileSync(iconPath));
                dataThread.threadIcon = event.logMessageData.thread_icon || "👍";
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`[ GROUP UPDATE ]\n❯ ${event.logMessageBody.replace("emoji", "icon")}\n❯ Original Emoji: ${preIcon[threadID] || "unknown"}`, threadID, async (error, info) => {
                    preIcon[threadID] = dataThread.threadIcon;
                    fs.writeFileSync(iconPath, JSON.stringify(preIcon));
                    if (global.configModule[this.config.name].autoUnsend) {
                        await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 1000));
                        return api.unsendMessage(info.messageID);
                    } else return;
                });
                break;
            }

            case "log:thread-call": {
                if (logMessageData.event == "group_call_started") {
                    const name = await Users.getNameUser(logMessageData.caller_id);
                    api.sendMessage(`[ GROUP UPDATE ]\n❯ ${name} STARTED A ${(logMessageData.video) ? 'VIDEO ' : ''}CALL.`, threadID);
                } else if (logMessageData.event == "group_call_ended") {
                    const callDuration = logMessageData.call_duration;

                    //Transform seconds to hours, minutes and seconds
                    let hours = Math.floor(callDuration / 3600);
                    let minutes = Math.floor((callDuration - (hours * 3600)) / 60);
                    let seconds = callDuration - (hours * 3600) - (minutes * 60);

                    //Add 0 if less than 10
                    if (hours < 10) hours = "0" + hours;
                    if (minutes < 10) minutes = "0" + minutes;
                    if (seconds < 10) seconds = "0" + seconds;

                    const timeFormat = `${hours}:${minutes}:${seconds}`;

                    api.sendMessage(`[ GROUP UPDATE ]\n❯ ${(logMessageData.video) ? 'VIDEO ' : ''}CALL HAS ENDED.\n❯ CALL DURATION: ${timeFormat}`, threadID);

                } else if (logMessageData.joining_user) {
                    const name = await Users.getNameUser(logMessageData.joining_user);
                    api.sendMessage(`❯ [ GROUP UPDATE ]\n❯ ${name} JOINED THE ${(logMessageData.group_call_type == '1') ? 'VIDEO ' : ''}CALL.`, threadID);
                }
                break;
            }
            case "log:magic-words": {
                return api.sendMessage(`» [ GROUP UPDATE ] Theme ${event.logMessageData.magic_word} added effect: ${event.logMessageData.theme_name}\nEmoij: ${event.logMessageData.emoji_effect || "No emoji "}\nTotal ${event.logMessageData.new_magic_word_count} word effect added`, threadID)
            }
            case "log:thread-poll": {
                var str = event.logMessageData.question_json
                var obj = JSON.parse(str);
                if (event.logMessageData.event_type == "question_creation") {
                    return api.sendMessage(`${event.logMessageBody}`, threadID)
                }
                if (event.logMessageData.event_type == "update_vote") {
                    return api.sendMessage(`${event.logMessageBody}`, threadID)
                }
            }
            case "log:thread-approval-mode": {
                return api.sendMessage(event.logMessageBody, threadID)
            }
            case "log:thread-color": {
                dataThread.threadColor = event.logMessageData.thread_color || "🌤";
                if (global.configModule[this.config.name].sendNoti) api.sendMessage(`[ GROUP UPDATE ]\n❯ ${event.logMessageBody.replace("Theme", "color")}`, threadID, async (error, info) => {
                    if (global.configModule[this.config.name].autoUnsend) {
                        await new Promise(resolve => setTimeout(resolve, global.configModule[this.config.name].timeToUnsend * 1000));
                        return api.unsendMessage(info.messageID);
                    } else return;
                });
                break;
            }
        }
        await setData(threadID, {
            threadInfo: dataThread
        });
    } catch (e) {
        console.log(e)
    };
}