const Discord = require('discord.js');

module.exports = {
	name: "ping",
	description: "show ping of bot",
	permission: "NONE",
	dm: true,

	async run(bot, message) {
		await message.reply(`Ping : \`${bot.ws.ping}ms\``)
	}
}