# rust-discord-bot
This is just a mess around bot for me and some friends. This is not meant to be anything serious.

Huge thanks to [Liam Cottle](https://github.com/liamcottle) as without a bunch of extra effort to initially make
and also maintain a way of talking to the Rust+ API 

## Env arguments

This is entirely just an implementation to automate with a bot for https://github.com/liamcottle/rustplus.js

DISCORD_TOKEN = Token for the bot to use for discord (Please use bot tokens not user tokens)  

The following arguments can be retrieved easily by looking in [Server Pairing](#pairing).
PLAYER_TOKEN needs to follow this, but the others can be done without.

SERVER_IP = Server IP (or hostname)  
SERVER_PORT = Server App Port  
STEAM_ID = Your Steam ID  
PLAYER_TOKEN = Player Token (Token from [Server Pairing](#pairing))

## Pairing
You can follow the info [here](https://github.com/liamcottle/rustplus.js/blob/master/README.md#using-the-cli-pair-tool)
though as long as you have the modules installed you can use

```
cd node_modules/rustplus-api
npm install
node pair.js
```

Don't worry about re-pairing, everything before is still there, if you have paired already just click "resend",
when you click it as long as you have the command line tool running a response will appear in the command line containing the following needed info.

```
{
  port: 'use for SERVER_PORT',
  ip: 'use for SERVER_IP',
  playerId: 'use for STEAM_ID',
  playerToken: 'use for PLAYER_TOKEN',

}
```


## Plans
###I am planning to do
 * Looking to set up automation of the in game chat with team chat
 * Send messages when linked smart alarms are triggered
 * Control smart devices via discord messages or possibly emotes (Useful if you make info chats like we do)
 * Get an image of the map (and maybe add variants that show the shops and other info on it e.g. player markers just because)

###Not planning to do
This was mentioned in the original git repo though I amm not planning for my uses to do the following
 * Send messages to Discord when Cargo, Heli or Crate events spawn on the map.

If there are people who want this feature added I can though it's not really worth the effort for me if only I am using it.

### Will be looking into
If the CCTV part of the api is enabled by default I will be looking into grabbing screenshots via commands.
I will also explore routine screenshots and pairing it with machine learning to possibly create a security logging system,
if that be a webpage you can browse the screenshot logs or realtime alerts possibly, so you can see when people are near your
base when offline. It may be useful to possibly trigger alerts if weapons or things such as C4 charges and other things are detected in camera.

Though this is solely for the sake of research and fun and may be a bit cheaty. Though would be no different from
quite actively checking the Rust+ APP if the feature is enabled.

I just want an excuse to try to improve my data science skills, and it seems like a fun practical way to both show off my skills and improve them.

## Hey Facepunch!
Same really as https://github.com/liamcottle/rustplus.js feel free to email me or send me a dm on Twitter.
I will happily take the project down though none of this is really designed to abuse anything.

