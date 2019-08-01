const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;
const prefix = ("?");

bot.on('ready', function () {
    console.log("Je suis prêt à être utilisé.")
    bot.user.setActivity('Pikamon').catch(console.error)
});

bot.on('guildMemberAdd', member => {
    member.createDM().then(channel => {
        return channel.send('Bienvenue sur le serveur Pikamon!' + member.displayName)
        console.log(`${member.displayName} à rejoind le serveur Pikamon.`)
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
    if (msg.content === "!Qui est le meilleur ?"){
        msg.reply("Pas toi !")
    }
    if (msg.content === "!SmockPixel"){
        msg.reply(",Pourquoi me dit tu ce serveur ? je n'aime pas ce serveur. Pikachu attaque !")
    }
});

bot.login(token);
