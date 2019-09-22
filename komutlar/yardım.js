const Discord = require('discord.js');
const loglar = require('../loglar.json');

var prefix = loglar.prefix;

exports.run = async (client, message, params, args) => {

  const yardım = new Discord.RichEmbed()
  .setColor(0x36393E)
      .setAuthor(`EX İT`, client.user.avatarURL)
      .setThumbnail(client.user.avatarURL)
      .addField('``EX İT™️ - Yardım``', ':white_small_square: | **/yetkili**: Sunucuyu yönetmek için gerekli olan komutlar!  :white_small_square:| **/kullanıcı** Kullanıcılar İçin Gerekli Komutlar!')
      .setFooter(`${message.author.username} tarafından istendi.`, message.author.avatarURL)
  return message.channel.sendEmbed(yardım);

};


  
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['komut', 'komutlar', 'command', 'yardım', 'help', 'halp', 'y', 'h', 'commands'],
    permLevel: 0
  };
  
  exports.help = {
    name: 'yardım',
    description: 'yardım',
    usage: 'yardım'
  };