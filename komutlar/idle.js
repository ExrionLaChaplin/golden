const Discord = require("discord.js");

module.exports.run = async (client,message,args) => {
    
var OGON = message.guild.members.find("id", "424587795248709643");
if(message.member !== OGON)return message.channel.send("Bu komutu kullanmak için uygun izniniz yok.");
if(OGON) {
client.user.setStatus("idle");
message.channel.send('Durum **Boşta** olarak değiştirildi.');
}


}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

module.exports.help = {
  name: 'idle',
  description: 'Rastgele tavşan resmi gönderir.',
  usage: 'idle'
};
//XiR