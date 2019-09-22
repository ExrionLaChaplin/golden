const Discord = require('discord.js');

let botid = ('617077962562600964') //bu yere botun id'sini yapıştırın.
//eğer botunuz dbl(discord bot list) de yoksa Bota Oy Ver (Vote) olmucaktır.

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setAuthor(`${client.user.username} Yetkili Komutları`)
    .addField('/giriş-çıkış-ayarla [#kanal]', 'Herhangi Bir Kişi Sunucuya Giriş veya Çıkış yaptığında belirlenen kanala yazar.')//ne kadar yetkili komutunuz varsa o kadar .addField('prefix+komut', 'açıklama/kullanım amacı') koyun
    .addField('/capslock-engelleme [aç/kapat]', 'Bu Özellik Açıldığında Sunucudaki Büyük Harf kullaısmını engeller.')
    .addField('/mod-log-ayarla [#kanal]', 'Belirtilen Kanal Sunucuda Gerçekleşen Eylemlerin Hepsi Kaydedilir.')
    .addField('/reklam-taraması', 'Sunucudaki Üyelerin Oynuyor kısmında Reklam yapıp yapmadığını inceler.')
    .addField('/reklamengelle [aç/kapat]', 'Sunucuda Reklam Yapılmasını Engeller.')
   // .addField('/tag [tag]', 'Bu Özellık Sayesinde Yeni Gelenlerin İsminin Başına Belirlediğiniz Tag`ı Ayarlarsınız.')
    .addField('/sayaç-ayarla [#kanal]', 'Sunucunuzda Belirlediğiniz hedefe kaç kişi kaldığını gösterir.')
    .addField('/sayaç-sıfırla', 'Sayaç Özelliğini Devre Dışı bırakır.')
    .addField('/ses-kanal-aç', 'Ses Kanalı Açar')
    .addField('/metin-kanal-aç', 'Metin Kanalı Açar')
    .addField('/temizle', 'Belirtilen Kadar Mesaj Siler')
    .addField('/rol-ver', 'Rol Verir')
    .addField('/oylama', 'Oylama yapar')
    .addField('/kick', 'Kick Atar')
    .addField('/ban', 'Ban Atar')
    .addField('/unban', 'Ban Kaldırır')
    .addField('/mute', 'Mute Atar')
    .addField('/unmute', 'Mute Kaldırır')
    .addField(`» Linkler`, `[Bot Davet Linki](https://discordapp.com/oauth2/authorize?client_id=${botid}&scope=bot&permissions=8) **|** [Destek Sunucusu]( ) **|** [Bota Oy Ver (Vote)](https://discordbots.org/bot/${botid}/vote)`)//websiteniz yoksa  **|** [Web Sitesi]() yeri silebilirsiniz
    message.channel.sendEmbed(embed);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'yetkili',
  description: '',
  usage: 'yetkili'
};