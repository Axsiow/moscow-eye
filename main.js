const { Client, Collection} = require('discord.js');
const { token } = require('./config.json');
const client = new Client({intents: 3276799});

client.commands = new Collection();

["commands"].forEach((handler) => {
	require(`./handlers/${handler}`);
});

client.on('ready', () => {
	console.log(`${client.user.tag} vous regarde.`);
});

client.login(token);