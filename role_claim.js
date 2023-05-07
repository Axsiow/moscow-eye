const main = require('./main');
const { Message } = require("discord.js");
const { MessageReaction } = require("discord.js");

module.exports.run = (client, message, args) => {
	const role_adherent = message.guild.roles.cache.get('1100755523441270834');
	const emoji_adherent = message.guild.emoji.cache.get('1104071452656934922');
	
	const role_adherentE = message.guild.roles.cache.get('1100753510229872640');
	const emoji_adherentE = message.guild.emoji.cache.get('1104072595508301906');

	const role_bureau = message.guild.roles.cache.get('1100756328403697674');
	const emoji_bureau = message.guild.emoji.cache.get('1104405807791099976');

	// const role_etudiant = message.guild.roles.cache.get('ID_ROLE_ETUDIANT');
	// const emoji_etudiant = message.guild.emoji.cache.get('ID_EMOJI_ETUDIANT');

	// const role_lyceen = message.guild.roles.cache.get('ID_ROLE_LYCEEN');
	// const emoji_lyceen = message.guild.emoji.cache.get('ID_EMOJI_LYCEEN');

	// const role_referent_groupe = message.guild.roles.cache.get('ID_ROLE_REFERENT_GROUPE');
	// const emoji_referent_groupe = message.guild.emoji.cache.get('ID_EMOJI_REFERENT_GROUPE');

	const embed = new MessageEmbed()
		.setTitle('Rôles')
		.setDescription('Cliquez sur les réactions ci-dessous pour obtenir les rôles correspondants.\n\n')
		.setColor('#dc143c')
		.addField('Les rôles disponibles sont :',
			`
			${emoji_adherent} - ${role_adherent.toString()}
			${emoji_adherentE} - ${role_adherentE.toString()}
			${emoji_bureau} - ${role_bureau.toString()}`
			// ${emoji_etudiant} - ${role_etudiant.toString()}
			// ${emoji_lyceen} - ${role_lyceen.toString()}
			// ${emoji_referent_groupe} - ${role_referent_groupe.toString()}
			
		);

		message.channel.send(embed).then(async msg => {
			await msg.react(emoji_adherent);
			await msg.react(emoji_adherentE);
			await msg.react(emoji_bureau);
			// await msg.react(emoji_etudiant);
			// await msg.react(emoji_lyceen);
			// await msg.react(emoji_referent_groupe);
		})
};

module.exports.help = {
	name: 'allroles',
	aliases: ['allroles'],
	description: 'Renvoie un message avec des réactions',
	cooldown: 10,
	usage: '',
	permissions: true,
	isUserAdmin: false,
	args: false,
};