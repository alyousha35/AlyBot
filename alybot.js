var Discord = require("discord.js");
var bot = new Discord.Client();

bot.on("message", function(message)
{
    if(message.content === "Hi")
    {
        bot.reply(message, "Hi.");
    }
    
});

bot.login("alyousha357@gmail.com", "8TL~=kn@xH8MS(KN");


