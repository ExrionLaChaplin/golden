const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

exports.run = (client, message, args) => {
  
  
  if (message.author.id !== ayarlar.premium) {
      message.reply('Bu Komutu Sadece Premium Üyelerimiz Kullanabilir. Satın Almak İçin /premium');
  }else{
  
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
  
  const tag = args[0]
  let rol = message.mentions.roles.first()
  const memberss = message.guild.members.filter(member => member.user.username.includes(tag));
  
  if(!tag) return message.reply(`:warning: Bir Tag Girmelisiniz Örnek Kullanım; \n \`${ayarlar.prefix}tag-yetki tag @rol\``)
  if(!rol) return message.reply(`:warning: Bir Rol Girmelisiniz Örnek kullanım; \n \`${ayarlar.prefix}tag-yetki tag @rol\``)
  
  
  const embed = new Discord.RichEmbed()
  .addField(`Kullanıcı Adında ${tag} Tagı Olan Kullanıcılara Yetkilerini Veriyorum...`, memberss.map(member => `${member} = ${member.user.username}`).join("\n") || `Kimsenin kullanıcı Adında \`${tag}\` Tagı Bulunmuyor.`)
  .setColor("RANDOM")
  message.channel.send({embed})
  message.guild.members.forEach(u => {
    if(u.user.username.includes(tag)) {
      u.addRole(rol.id)
    }
  });
  }
}

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['taga-yetki-ver', 'tagayetkiver', 'tagyetki', 'tagayetki', 'taga-yetki'],
    permLevel: 0
}

exports.help = {
    name: 'tagrolver',
    description: 'Kullanıcıların kullanıcı adını tarayıp onlara yetki verir.',
    usage: 'tagrolver <tag> <rol>'
}