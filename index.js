const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready',() => {
	console.log('I\'m Online\nI\'m Online');
});

var prefix = "!"
client.on('message', message => {
	if (!message.content.startsWith(prefix)) return;
	if (message.author.bot) return;

	if (message.content.startsWith(prefix + 'help')) {
		  message.channel.sendMessage(`\`\`\`\nI dont know what you're expecting from me\`\`\``)
  } else
	if (message.content.startsWith(prefix + 'Testing')) {
      message.channel.sendMessage('\`\`\`css\nTest Success!\`\`\`')
	} else
 }
});

client.login(process.env.TOKEN);
