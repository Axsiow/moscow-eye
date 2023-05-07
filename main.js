const Discord = require('discord.js');
const bot = new Discord.Client({intents: 3276799});
const config = require('./config');

client.login(config.token);

client.on('ready', async () => {
	console.log("L'œil vous regarde.");
	console.log(`Logged in as ${client.user.tag}!`);
});

