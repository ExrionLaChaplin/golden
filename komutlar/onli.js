const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    
var OGON = message.guild.members.find("id", "526315434752999440");
if(message.member !== OGON)return message.channel.send("Bu komutu kullanmak için uygun izniniz yok.");
if(OGON) {
client.user.setStatus("online");
message.channel.send('Durum **Çevrim içi** olarak değiştirildi.');
}


}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'online',
  description: 'Rastgele tavşan resmi gönderir.',
  usage: 'idle'
};
//XiR