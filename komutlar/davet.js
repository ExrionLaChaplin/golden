const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message) => {
  const davet = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor("» " + client.user.username + ' | Davet Linkleri')
.setDescription(`[Botu Sunucuna Eklemek İçin Tıkla!](https://discordapp.com/api/oauth2/authorize?client_id=617077962562600964&permissions=2147483127&scope=bot) \n[Botun Destek Sunucusuna Gelmek İçin Tıkla]()`)
message.channel.send(davet)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['linkler'],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'davet',
  category: 'bot',
  description: 'Botun davet linklerini gösterir.',
  usage: 'davet'
};
    