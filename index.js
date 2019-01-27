const Discord = require('discord.js');
const bot = new Discord.Client();
const token = process.env.token;
const m = await message.channel.send("Ping?");
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
    if(command === "ping") {
    m.edit(`Pong! Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }
});

bot.login(token);
