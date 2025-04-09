const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const app = express();

const TOKEN = process.env.TOKEN;
const CHANNEL_ID = process.env.CHANNEL_ID;

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ]
});

client.once('ready', () => {
  console.log(`✅ Bot conectado como ${client.user.tag}`);

  setInterval(() => {
    const channel = client.channels.cache.get(CHANNEL_ID);
    if (channel) {
      channel.send('⏰ ¡Mensaje automático cada 2 horas!');
    }
  }, 2 * 60 * 60 * 1000); // Cada 2 horas
});

app.get('/', (req, res) => {
  res.send('Bot corriendo');
});
app.listen(3000, () => {
  console.log('🌐 Web server activo');
});

client.login(TOKEN);