const axios = require('axios');
const discord = require('discord.js');
const client = new discord.Client();
require('dotenv').config();

client.on('message', msg => {

	if (msg.content === 'joke') {

		axios.get('https://geek-jokes.sameerkumar.website/api')
		.then(response => {

			msg.channel.sendMessage(response.data);

		})

	}

});

client.login(process.env.BOT_TOKEN);