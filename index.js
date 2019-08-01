const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;
const prefix = ("?");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('rien').catch(console.error)
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur !' + member.displayName)
        console.log(`${member.displayName} à rejoind le serveur.`)
    }).catch(console.error)
});

bot.on('message', msg => {
    if (msg.content === "!bonjour"){
        msg.reply("Heureux de te revoir parmis nous.")
    }
    if (msg.content === prefix + "site"){
        msg.channel.send("https://alexpgm.000webhostapp.com/")
        console.log("Une personne a demandé pour aller sur ton site.")
    }
    if (msg.content === "!Salut"){
        msg.reply("Comment va tu ?.")
    }
    if (msg.content === "!Bien et toi ?"){
        msg.reply("Oui je vais bien.")
    }
    if (msg.content === 'ping') {
        msg.reply('pong !')
    }
  if (msg.content.startsWith('!play')) {
    let voiceChannel = msg.guild.channels
      .filter(function (Musique) { return channel.type === 'voice' })
      .first()
    let args = msg.content.split(' ')
    voiceChannel
      .join()
      .then(function (connection) {
        let stream = YoutubeStream(args[1])
        stream.on('error', function () {
          msg.reply("Je n'ai pas réussi à lire cette vidéo :(")
          connection.disconnect()
        })
        connection
          .playStream(stream)
          .on('end', function () {
            connection.disconnect()
          })
      })
  }
})

bot.login(token);
