const request = require('request');
const fs = require('fs');
const path = require('path');

module.exports.config = {
    name: "boss",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "SHANKAR SUMAN",
    description: "no prefix",
    usePrefix: false,
    commandCategory: "No command marks needed",
    usages: "Yo Yo",
    cooldowns: 5,
};

const gif = "https://i.imgur.com/uNRzgxh.jpeg";
const message = "● ======= 𝐇𝐄𝐋𝐋𝐎 𝐁𝐀𝐁𝐘 ======= ●                                                          ☟  ========== ☟ ==========  ☟.                                                         ●============================●                              𝐎𝐰𝐧𝐞𝐫 ➻  ────    𝐊𝐡𝐚𝐧  𝐒𝐚𝐡𝐚𝐛";

module.exports.handleEvent = async function({ api, event, client, Users, __GLOBAL }) {
    var { threadID, messageID } = event;
    const lowerCaseMessage = event.body.toLowerCase();

    if (lowerCaseMessage.startsWith("khan") || 
        lowerCaseMessage.startsWith("khan") || 
        lowerCaseMessage.startsWith("khan")) { 

        const downloadPath = path.join(__dirname, 'Boss-Jpg-Images.jpg');

        // Download image from Imgur
        request(gif).pipe(fs.createWriteStream(downloadPath)).on('close', () => {
            var msg = {
                body: message,
                attachment: fs.createReadStream(downloadPath)
            };
            api.sendMessage(msg, threadID, messageID);
            api.setMessageReaction("😘", event.messageID, (err) => {}, true);
        });
    }
}

module.exports.run = function({ api, event, client, __GLOBAL }) {

}
