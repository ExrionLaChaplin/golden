const Discord = require('discord.js');
const db = require('quick.db')
const ayarlar = require('../ayarlar.json');
exports.run = async (client, message, args, member) => {
  
  if (message.author.id !== ayarlar.premium) {
      message.reply('Bu Komutu Sadece Premium Üyelerimiz Kullanabilir. Satın Almak İçin /premium');
  }else{

      if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0x2488E7)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Sadece herhangi bir sunucudan mesaj gönderebilirim.:relaxed: ')
    return message.author.sendEmbed(ozelmesajuyari); }

     if (!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send(':no_entry: Bu komudu kullanabilmek için `Sunucuyu Yönet` yetkisine sahip olmalısın!') 
     let mesaj = args.join(' ');
     if (!mesaj) return message.channel.send("⛔ Ototag ayarlamak için bir değer belirtmelisiniz.  `/ototag || - `"); 
     if (message.channel.type === "dm") return;
     if (message.author.bot) return;
      await db.set(`ototag_${message.guild.id}`, mesaj)
      return message.channel.send(`Sunucunuzda otomatik olarak verilecek tag \`${mesaj}\` olarak belirlenmiştir.`)
  
  
  }
}



exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ototag',
  description: 'nblm',
  usage: 'ototag'
};