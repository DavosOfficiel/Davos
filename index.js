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
    if (msg.content === "!PM Bonjour"){
        msg.reply("Heureux de te revoir parmis nous.")
    }
    if (msg.content === "!PM ip"){
        msg.reply(", je ne peut pas te donner l'ip pour le moment.")
    }
    if (msg.content === "!PM réglement"){
        msg.reply(",Pour le réglement va dans le channel: ☑règlement")
    }
    if (msg.content === "!Huaca de la Luna"){
        msg.reply("Ce lieu est inconnu, il est juste très bizar")
    }
    
});

bot.login(token);
