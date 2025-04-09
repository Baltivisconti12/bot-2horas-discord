const { Client, GatewayIntentBits, EmbedBuilder } = require('discord.js');
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
      const embed = {
        title: "🪴 Hay que regar las plantas! 🚿",
        description:
          "- No te olvides de regar las plantas, tienen sed. Tienes un rociador en la caja de herramientas roja. GRACIAS :D",
        color: 13434624,
        footer: {
          text: "I S R."
        },
        image: {
          url: "https://i.imgur.com/zgqPeW7.jpeg"
        }
      };

      channel.send({
        content: "<@&1357128921727897642>",
        embeds: [embed],
      });
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
