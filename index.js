require('dotenv').config()
const token = process.env.TOKEN;

const PREFIX = ',';

 

express = require('express');
const app = express();

const port = 3000;

app.get('/', (req, res) => {
	res.send('ALIVE');
});

app.listen(port, () => {
	console.log(`Example app listening at Port: ${port}`);
});

const {Client, MessageEmbed } = require('discord.js');
const bot = new Client();


bot.on('ready', () => {
	console.log('Bot has come online.');
});

bot.on('message', message => {
	const ping = require('minecraft-server-util');

	let args = message.content.substring(PREFIX.length).split(' ');
	switch (args[0]) {
		case 'mc':
			if (!args[1]) return message.channel.send('**TYPE A SERVER IP AND PORT**');
			if (!args[2])
				return message.channel.send(
					'**TYPE A SERVER IP AND PORT E.G.(play.example.xyz 10000) **'
				);

			ping
				.status(args[1], {
					port: parseInt(args[2]),
					enableSRV: true,
					timeout: 50000,
				}) // These are the default options
				.then(response => {
const Embed = new MessageEmbed()
.setTitle('Bunnyfoy Network')
            .setThumbnail("https://cdn.discordapp.com/attachments/1105438740161232927/1201047705993084998/server-icon.png?ex=65c865d7&is=65b5f0d7&hm=2b8abc6863890025c1a887c6f46ff71c16bf31345b864795a5eab3d263ee1cd2&")
.setColor('YELLOW')
.addField('Server Status', '<a:online:1201044412403306536> **ONLINE**')
.addField('IP ADRESS', response.host)
.addField('PORT', response.port )
.addField('VERSION', response.version)
.addField('Online Players', response.onlinePlayers)
.addField('Max Players', response.maxPlayers);
          
					message.channel.send(Embed);
				})
				.catch(error => {
					console.error(error);
				});
	}
});

bot.login("MTIwMTA0MzQyNjEyNTI5NTYyNg.GhX4d5.BsEkh4Zih6NqWVMjof_dob2WfssCOjlv9Eq_tg");
