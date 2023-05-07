const { Message } = require("discord.js");
const { MessageReaction } = require("discord.js");

module.exports.run = (client, message, args) => {
	const role_adherent = message.guild.roles.cache.get('ID_ROLE_ADHERENT');
	const emoji_adherent = message.guild.emoji.cache.get('ID_EMOJI_ADHERENT');
	
	const role_adherentE = message.guild.roles.cache.get('ID_ROLE_ADHERENT_E');
	const emoji_adherentE = message.guild.emoji.cache.get('ID_EMOJI_ADHERENT_E');

	const role_bureau = message.guild.roles.cache.get('ID_ROLE_BUREAU');
	const emoji_bureau = message.guild.emoji.cache.get('ID_EMOJI_BUREAU');

	const role_etudiant = message.guild.roles.cache.get('ID_ROLE_ETUDIANT');
	const emoji_etudiant = message.guild.emoji.cache.get('ID_EMOJI_ETUDIANT');

	const role_lyceen = message.guild.roles.cache.get('ID_ROLE_LYCEEN');
	const emoji_lyceen = message.guild.emoji.cache.get('ID_EMOJI_LYCEEN');

	const role_referent_groupe = message.guild.roles.cache.get('ID_ROLE_REFERENT_GROUPE');
	const emoji_referent_groupe = message.guild.emoji.cache.get('ID_EMOJI_REFERENT_GROUPE');
};

module.exports.help = {
	name: 'allroles',
	aliases: ['allroles'],
	category: 'reactions',
	description: 'Renvoie un message avec des réactions',
	cooldown: 10,
	usage: '',
	permissions: true,
	isUserAdmin: false,
	args: false,
};

module.exports = (client, MessageReaction, user) => {
	console.log('Logged in as ${client.user.tag}!');
};