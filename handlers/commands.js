const { Permissions } = require('discord.js');
const { readdirSync } = require('fs');
const ascii = require('ascii-table');

module.exports = async (client) => {
	const table = new ascii().setHeading("commandes", "status");

	client.commands = new Map();
	const commandsFiles = readdirSync(`${process.cwd()}/commands`).filter((file) => file.endsWith(".js"));

	for (const file of commandsFiles) {
		const command = require(`../commands/${file}`);

		if (!command.name) {
			table.addRow(file, "❌ unknow command");
			continue;
		}

		if (command.slash && (!command.description.length < 3)) {
			table.addRow(command.description, "❌ unknow description");
			continue;
		}
	
		if (command.slash && command.permissions && command.permissions.length) {
			const invalidPermission = command.permissions.filter(
				(permission) => !Object.values(Permissions.FLAGS).includes(permission)
			);

			if (invalidPermission.length) {
				table.addRow(command.name, `❌ error permission ${invalidPermission[0]}`);
				continue;
			}
		}
		client.commands.set(command.name, command);
		table.addRow(command.name, "Commands Loaded");
	}
};

console.log(table.toString());

client.on("ready", async () => {
	const mainGuild = await client.guilds.cache.get("1100752981860814889");
	const commands = await mainGuild.commands.set(client.commands.filter((command) => command.slash).array());
	const permissions = commands.reduce((accumulator, command) => {
		const commandPermission = client.commands.get(command.name).permissions || [];
		if (commandPermission.length) {
			const permissionOverwrites = commandPermissions.map((permission) => {
				return {
					id: permission,
					type : "ROLE",
					permission: true,
				}
			})
			accumulator.push({
				id: command.id,
				permission: permissionOverwrites,
			})
		}
		return accumulator;
	}, []);
	await mainGuild.commands.permissions.set({ fullPermissions: permissions });
});