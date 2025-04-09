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
        title: "<:cabiflylogo:1353539280923787274> Actividad en 10 minutos! <:cabiflylogo:1353539280923787274>",
        description:
          "## 🚌┃**Bus Urbano (Ruta A)**.\n✨┃Actividad #1.\n🗓️┃Siguiente Actividad:\n⏱️┃01:00 - 02:00 <:gtahub:1353557954565242920> | Traslado de cliente VIP.",
        color: 13434624,
        footer: {
          text: "Cabifly Co. | Nunca dejes de moverte."
        },
        image: {
          url: "https://i.imgur.com/IvQGzKt.png"
        }
      };

      channel.send({
        content: "<@&1353466885307629638>",
        embeds: [embed],
      });
    }
  }, 60 * 1000); // Cada 1 minuto para pruebas
});

app.get('/', (req, res) => {
  res.send('Bot corriendo');
});
app.listen(3000, () => {
  console.log('🌐 Web server activo');
});

client.login(TOKEN);