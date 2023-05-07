const Discord = require('discord.js');
const bot = new Discord.Client({intents: 3276799});
const load_commands = require('./loaders/load_commands');
const load_events = require('./loaders/load_events');
const config = require('./config');

bot.commands = new Discord.Collection();

bot.login(config.token);
load_commands(bot);
load_events(bot);

bot.on('messageCreate', async message => {
	if(message.content === "!ping") return bot.commands.get('ping').run(bot, message)
});