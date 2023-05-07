const Discord = require('discord.js');
const bot = new Discord.Client({intents: 3276799});
const load_commands = require('./loader/load_commands');
const config = require('./config');

bot.commands = new Discord.Collection();

bot.login(config.token);
load_commands(bot);

bot.on('messageCreate', async message => {
	if(message.content === "!ping") return bot.commands.get('ping').run(bot, message)
});

bot.on('ready', async () => {
	console.log("L'œil vous regarde.");
	console.log(`Logged in as ${bot.user.tag}!`);
})