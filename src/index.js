
const Discord = require('discord.js');

const RustPlus = require('rustplus-api');

const rustPlus = new RustPlus(process.env.SERVER_IP, process.env.SERVER_PORT, process.env.STEAM_ID, process.env.PLAYER_TOKEN);

const client = new Discord.Client();

let rustPlusReady = false;
let discordReady = false;

// Will be changed to be able to be set with commands
const discordChatChannel = process.env.DISCORD_CHANNEL;

rustPlus.on('connected', () => {
    console.log("Rust+ API connected");
    rustPlusReady = true;
    setupBot();
});

client.once('ready', () => {
    console.log("Discord bot ready");
    client.user.setActivity(`screaming at walls`);
    discordReady = true;
    setupBot();
});

function setupBot() {
    if(!discordReady || !rustPlus) return;

    rustPlus.sendTeamMessage(`§Bot connected (Message needed to setup connection rust -> discord)`);

    rustPlus.on('message', (message) => {
        // To stop it replaying the bot messages
        if(message.broadcast && message.broadcast.teamMessage && !message.broadcast.teamMessage.message.message.startsWith('§')) {
            let teamMessage = message.broadcast.teamMessage;
            client.send(discordChatChannel, `${teamMessage.message.name}: ${teamMessage.message.message}`);
        }
    });

    client.on('message', msg => {
        if (msg.author.bot) {
            return;
        }
        if((msg.channel.id === discordChatChannel && msg.cleanContent.length > 0) || msg.channel.type === "dm") {
            rustPlus.sendTeamMessage(`§${msg.author.username}: ${msg.cleanContent}`);
        }
    });
}

client.send = async function (id, content, options) {
    let channel = await client.channels.fetch(id);
    channel.send(content, options);
};

client.login(process.env.DISCORD_TOKEN);
