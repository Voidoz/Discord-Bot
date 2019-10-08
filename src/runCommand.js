// const process = require("./process.json");

module.exports = function(client, message, args, command, taggedUser, avatarList) {
    try {
        if (!message.content.startsWith(process.env.prefix) || message.author.bot) return;
        const cmd = require(`./commands/${command}/${command}.js`);
        cmd(client, message, args, command, taggedUser, avatarList);
    }
    catch (e) {
        console.log(`${e}`);
        message.channel.send("There was an error with that command!");
    }
};