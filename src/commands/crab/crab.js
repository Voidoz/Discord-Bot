/* eslint-disable */
module.exports = async(client, message, args, command, taggedUser, avatarList) => {
    const Discord = require("discord.js");
    const snekfetch = require("snekfetch");
    const process = require("../../process.json")

    message.channel.send("Making video...");

    const get = await snekfetch.get("https://dankmemer.services/api/crab", {
        query: {
        text: args
        },
        headers: {
        Authorization:
            "b1fa7458afc30a59a7253bf1dc6956279355245937bc970ae128d51f969253b7"
        }
    });
    message.channel.send(new Discord.Attachment(get.body));

};