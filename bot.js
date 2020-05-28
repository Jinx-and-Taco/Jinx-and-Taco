const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

bot.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS IS THE @Liquid Chris COMMAND

client.on('message', message => {
    if (message.content === 'Liquid Chris') {
    	message.text('She is the best mod!');
  	}
});

// THIS IS THE HELP COMMAND

client.on('message', message => {

  if (message.content === 'jat!help') {
   
    const embed = new MessageEmbed()
      
      .setTitle('Commands:')
     
      .setColor(0xff0000)
      
      .setDescription('- !Liquid Chris');
  
    message.channel.send(embed);
  }
});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);
