const Discord = require('discord.js');
const bot = new Discord.Client({intents: 3276799});
const roleClaim = require('./role-claim');
const config = require('./config');


bot.login(config.token);

bot.on('ready', async () => {
	console.log("L'œil vous regarde.");

	roleClaim(bot)
})