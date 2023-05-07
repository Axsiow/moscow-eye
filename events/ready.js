const Discord = require("discord.js");
const load_slashCommands = require('../loaders/load_slashCommands');

module.exports = async bot =>{

	await load_slashCommands(bot);

	console.log(`Logged in as ${bot.user.tag}!`);
	console.log("L'œil vous regarde.");
}