const Discord = require('discord.js');

module.exports = {
	name: "ping",
	description: "show ping of bot",
	permission: "None",
	dm: true,

	async run(bot, message) {
		await message.reply(`Ping : \`${bot.ws.ping}ms\``)
	}
}