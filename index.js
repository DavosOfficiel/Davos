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
        console.log(`${member.displayName} à rejoind le serveur Jabboh.fr.`)
    }).catch(console.error)
});

bot.on('message', msg => {
    if (msg.content === "!Frank Bonjour"){
        msg.reply("Heureux de te revoir parmis nous.")
    }
    if (msg.content === "!Frank Contact"){
        msg.reply(", tu peut envoyer ici un mail à notre équipe: service.jabboh.fr@outlook.fr !")
    }
    if (msg.content === "!Frank Réglement"){
        msg.reply(",Le réglement n'a pas encore été placé !")
    }
    if (msg.content === "!Frank Pub"){
        msg.reply(",Non je ne pub pas mais toi tu peux !")
    }
    
});

bot.login(token);
