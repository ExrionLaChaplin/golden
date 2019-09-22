  const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

let botid = ('617077962562600964') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        .setAuthor(`${client.user.username} `, client.user.avatarURL)
        .setColor('0x36393E')
        .setTitle(`__**Premium Komutlar !**__`)
        .addField(`EX İT`,`Çıktı! Hemen [Ekle](https://discordapp.com/api/oauth2/authorize?client_id=617077962562600964&permissions=2147483127&scope=bot)`)
        .setDescription(`/ototag , /ototagkanal , /tagrolver`)
        .setThumbnail(client.user.avatarURL)
        .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/api/oauth2/authorize?client_id=617077962562600964&permissions=2147483127&scope=bot) **|** [Destek Sunucusu]( ) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
        .setFooter(`${message.author.username} Tarafından İstendi.| prefix /`, message.author.avatarURL)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'premium',
  description: '',
  usage: 'premium'
};
   