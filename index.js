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

	if (message.content.startsWith(prefix + 'Help')) {
		  message.channel.sendMessage(`\`\`\`css\nWassup Nigga;)\`\`\``)
  } else
	if (message.content.startsWith(prefix + 'Testing 1')) {
      client.users.get("430043260199763968").send("\`\`\`css\nWants To Buy Synapse!!\`\`\`" + message.author)
      message.channel.sendMessage('\`\`\`css\nHello! I Just Contacted The Founder!! Please Be Patient For A Reply!\`\`\`')
	} else

	if (message.content.startsWith(prefix + 'Buy_Bc_Month')) {
			client.users.get("410786604156977152").send("\`\`\`css\nWants To Buy BC Access For A Month!!\`\`\`" + message.author)
			message.channel.sendMessage('\`\`\`css\nYa-ha! Hello User I Just Contacted @RR#7152, Please Be Patient And Wait Until @RR#7152 Contacted You. If You Are Just Doing This For Fun, Testing, Or Troll You Will Receive A Mute, Thank You\`\`\`')
	} else

	if (message.content.startsWith(prefix + 'Buy_Bc_Lifetime')) {
			client.users.get("410786604156977152").send("\`\`\`css\nWants To Buy BC Access For A Lifetime!! OMG!!!\`\`\`" + message.author)
			message.channel.sendMessage('\`\`\`css\nYa-ha! Hello User I Just Contacted @RR#7152, Please Be Patient And Wait Until @RR#7152 Contacted You. If You Are Just Doing This For Fun, Testing, Or Troll You Will Receive A Mute, Thank You\`\`\`')
	} else

	if (message.content.startsWith(prefix + 'Buy_Tbc_Week')) {
			client.users.get("410786604156977152").send("\`\`\`css\nWants To Buy TBC Access For A Week!!\`\`\`" + message.author)
			message.channel.sendMessage('\`\`\`css\nYa-ha! Hello User I Just Contacted @RR#7152, Please Be Patient And Wait Until @RR#7152 Contacted You. If You Are Just Doing This For Fun, Testing, Or Troll You Will Receive A Mute, Thank You\`\`\`')
	} else

	if (message.content.startsWith(prefix + 'Buy_Tbc_Month')) {
			client.users.get("410786604156977152").send("\`\`\`css\nWants To Buy TBC Access For A Month!!\`\`\`" + message.author)
			message.channel.sendMessage('\`\`\`css\nYa-ha! Hello User I Just Contacted @RR#7152, Please Be Patient And Wait Until @RR#7152 Contacted You. If You Are Just Doing This For Fun, Testing, Or Troll You Will Receive A Mute, Thank You\`\`\`')
	} else

	if (message.content.startsWith(prefix + 'Buy_Tbc_Lifetime')) {
			client.users.get("410786604156977152").send("\`\`\`css\nWants To Buy TBC Access For A LifeTime!!!!!\`\`\`" + message.author)
			message.channel.sendMessage('\`\`\`css\nYa-ha! Hello User I Just Contacted @RR#7152, Please Be Patient And Wait Until @RR#7152 Contacted You. If You Are Just Doing This For Fun, Testing, Or Troll You Will Receive A Mute, Thank You\`\`\`')
	} else

	if (message.content.startsWith(prefix + 'Buy_Obc_Week')) {
			client.users.get("410786604156977152").send("\`\`\`css\nWants To Buy OBC Access For A Week!!\`\`\`" + message.author)
			message.channel.sendMessage('\`\`\`css\nYa-ha! Hello User I Just Contacted @RR#7152, Please Be Patient And Wait Until @RR#7152 Contacted You. If You Are Just Doing This For Fun, Testing, Or Troll You Will Receive A Mute, Thank You\`\`\`')
	} else

	if (message.content.startsWith(prefix + 'Buy_Obc_Month')) {
			client.users.get("410786604156977152").send("\`\`\`css\nWants To Buy OBC Access For A Month!!\`\`\`" + message.author)
			message.channel.sendMessage('\`\`\`css\nYa-ha! Hello User I Just Contacted @RR#7152, Please Be Patient And Wait Until @RR#7152 Contacted You. If You Are Just Doing This For Fun, Testing, Or Troll You Will Receive A Mute, Thank You\`\`\`')
	} else

	if (message.content.startsWith(prefix + 'Buy_Obc_Lifetime')) {
			client.users.get("410786604156977152").send("\`\`\`css\nWants To Buy OBC Access For A Lifetime!!\`\`\`" + message.author)
			message.channel.sendMessage('\`\`\`css\nYa-ha! Hello User I Just Contacted @RR#7152, Please Be Patient And Wait Until @RR#7152 Contacted You. If You Are Just Doing This For Fun, Testing, Or Troll You Will Receive A Mute, Thank You\`\`\`')
	} else

	if (message.content.startsWith(prefix + 'Buy_All_Week')) {
			client.users.get("410786604156977152").send("\`\`\`css\nWants To Buy All Access For A Week!!\`\`\`" + message.author)
			message.channel.sendMessage('\`\`\`css\nYa-ha! Hello User I Just Contacted @RR#7152, Please Be Patient And Wait Until @RR#7152 Contacted You. If You Are Just Doing This For Fun, Testing, Or Troll You Will Receive A Mute, Thank You\`\`\`')
	} else

	if (message.content.startsWith(prefix + 'Buy_All_Month')) {
			client.users.get("410786604156977152").send("\`\`\`css\nWants To Buy All Access For A Month!!\`\`\`" + message.author)
			message.channel.sendMessage('\`\`\`css\nYa-ha! Hello User I Just Contacted @RR#7152, Please Be Patient And Wait Until @RR#7152 Contacted You. If You Are Just Doing This For Fun, Testing, Or Troll You Will Receive A Mute, Thank You\`\`\`')
	} else

	if (message.content.startsWith(prefix + 'Buy_All_Lifetime')) {
			client.users.get("410786604156977152").send("\`\`\`css\nWants To Buy All Access For A Month!!\`\`\`" + message.author)
			message.channel.sendMessage('\`\`\`css\nYa-ha! Hello User I Just Contacted @RR#7152, Please Be Patient And Wait Until @RR#7152 Contacted You. If You Are Just Doing This For Fun, Testing, Or Troll You Will Receive A Mute, Thank You\`\`\`')
  } else

	if (message.content.startsWith(prefix + 'Prices')) {
		  message.channel.sendMessage('\`\`\`css\nThëClan [ Prices ]:\n\n\nBc Channel [ Access ]\n\nPer Week : [ 120 R$ ] [ 1.00$ ] [ 50 Php ]\nPer Month : [ 300 R$ ] [ 2.00$ ] [ 100 Php ]\n\nOne Time Payment : [ 500 R$ ] [ 3.00$ ] [ 200 Php ]\n\nTbc Channel [ Access ]\n\nPer Week : [ 200 R$ ] [ 1.50 $ ] [ 75 Php ]\nPer Month : [ 400 R$ ] [ 3.50 $ ] [ 150 Php ] \n\nOne Time Payment : [ 600 R$ ] [ 3.50 $ ] [ 250 Php ]\n\nObc Channel [ Access ]\n\nPer Week : [ 300 R$ ] [ 2.00$ ] [ 100 Php ]\nPer Month : [ 500 R$ ] [ 4.00$ ] [ 200 Php ]\n\nOne Time Payment : [ 750 R$ ] [ 4.00$ ] [ 300 Php ]\n\nAll Channel [ Access ]\n\nPer Week : [ 600 R$ ] [ 3.00$ ] [ 250 Php ]\nPer Month : [ 900 R$ ] [ 5.00$ ] [ 350 Php ]\n\nOne Time Payment : [ 1,200 R$ ] [ 7.00 $ ] [ 500 Php ]\n\nNotice : Only @RR#7152 Can Sell\`\`\`')
	 }
});

client.login(process.env.TOKEN);
