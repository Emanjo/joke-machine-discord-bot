const axios = require('axios');
const discord = require('discord.js');
const client = new discord.Client();
const http = require('http');

const port = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader('Contet-Type', 'text/html');
	res.end('<p>Joke Machine Bot is running!</p>');
});

server.listen(port, () => {
	console.log(`Server is running on port: ${port}`);
});


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