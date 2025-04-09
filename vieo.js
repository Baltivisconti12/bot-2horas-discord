// const express = require("express");
// const app = express();

// // Replit asigna un puerto automáticamente
// const port = process.env.PORT || 3000;

// // Endpoint básico para hacer ping
// app.get("/", (req, res) => {
//   res.send("¡Bot en funcionamiento!");
// });

// // Arrancar el servidor en el puerto asignado por Replit
// app.listen(port, "0.0.0.0", () => {
//   console.log(`Servidor escuchando en http://localhost:${port}`);
// });

// require("dotenv").config();
// const { Client, GatewayIntentBits } = require("discord.js");

// const client = new Client({
//   intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
// });

// client.once("ready", () => {
//   console.log(`✅ Bot conectado como ${client.user.tag}`);
// });

// // 📢 Enviar recordatorio 10 minutos antes de cada evento
// const eventos = [
//   {
//     hora: "03:12",
//     mensaje: "📢 ¡Atención! La actividad diaria comienza en 10 minutos.",
//   },
//   {
//     hora: "18:50",
//     mensaje: "🚀 ¡No olvides la actividad de la tarde en 10 minutos!",
//   },
// ];

// setInterval(() => {
//   const ahora = new Date();
//   const horaActual = ahora.toLocaleTimeString("es-ES", {
//     hour: "2-digit",
//     minute: "2-digit",
//   });

//   eventos.forEach((evento) => {
//     if (horaActual === evento.hora) {
//       const canal = client.channels.cache.get("1350603472684449894");
//       if (canal) canal.send(evento.mensaje);
//     }
//   });
// }, 60000); // Revisa cada minuto

// client.login(process.env.TOKEN);

const express = require("express");
const app = express();

// Replit asigna un puerto automáticamente
const port = process.env.PORT || 3000;

// Endpoint básico para hacer ping
app.get("/", (req, res) => {
  res.send("¡Bot en funcionamiento!");
});

// Arrancar el servidor en el puerto asignado por Replit
app.listen(port, "0.0.0.0", () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});

require("dotenv").config();
const { Client, GatewayIntentBits } = require("discord.js");

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages],
});

client.once("ready", () => {
  console.log(`✅ Bot conectado como ${client.user.tag}`);
});

// 📢 Enviar recordatorio a diferentes horas
const eventos = [
  {
    hora: "23:50", // UTC
    mensaje: {
      content: "<@&1353466885307629638>",
      tts: false,
      embeds: [
        {
          title:
            "<:cabiflylogo:1353539280923787274> Actividad en 10 minutos! <:cabiflylogo:1353539280923787274>",
          description:
            "## 🚌┃**Bus Urbano (Ruta A)**.\n✨┃Actividad #1.\n🗓️┃Siguiente Actividad:\n⏱️┃01:00 - 02:00 <:gtahub:1353557954565242920> | Traslado de cliente VIP.",
          color: 13434624,
          footer: {
            text: "Cabifly Co. | Nunca dejes de moverte.",
          },
          image: {
            url: "https://i.imgur.com/IvQGzKt.png",
          },
        },
      ],
    },
  },
  {
    hora: "00:50", // UTC
    mensaje: {
      content: "<@&1353466885307629638>",
      tts: false,
      embeds: [
        {
          title:
            "<:cabiflylogo:1353539280923787274> Actividad en 10 minutos! <:cabiflylogo:1353539280923787274>",
          description:
            "## 🚗┃**Traslado de cliente VIP**.\n✨┃Actividad #2.\n🗓️┃Siguiente Actividad:\n⏱️┃02:00 - 03:00 | Servicio de Taxi.",
          color: 13434624,
          footer: {
            text: "Cabifly Co. | Nunca dejes de moverte.",
          },
          image: {
            url: "https://i.imgur.com/YxoiBlO.png",
          },
        },
      ],
    },
  },
  {
    hora: "01:50", // UTC
    mensaje: {
      content: "<@&1353466885307629638>",
      tts: false,
      embeds: [
        {
          title:
            "<:cabiflylogo:1353539280923787274> Actividad en 10 minutos! <:cabiflylogo:1353539280923787274>",
          description:
            "## 🚕┃**Servicio de Taxi**.\n✨┃Actividad #3.\n🗓️┃Siguiente Actividad:\n⏱️┃03:00 - 04:00 | Servicio de Mudanza.",
          color: 13434624,
          footer: {
            text: "Cabifly Co. | Nunca dejes de moverte.",
          },
          image: {
            url: "https://i.imgur.com/TijKNWb.png",
          },
        },
      ],
    },
  },
  {
    hora: "02:50", // UTC
    mensaje: {
      content: "<@&1353466885307629638>",
      tts: false,
      embeds: [
        {
          title:
            "<:cabiflylogo:1353539280923787274> Actividad en 10 minutos! <:cabiflylogo:1353539280923787274>",
          description:
            "## 🚛┃**Servicio de Mudanza**.\n✨┃Actividad #4.\n🗓️┃Siguiente Actividad:\n⏱️┃05:00 - 06:00 | Servicio de Taxi.",
          color: 13434624,
          footer: {
            text: "Cabifly Co. | Nunca dejes de moverte.",
          },
          image: {
            url: "https://i.imgur.com/96OZjOB.png",
          },
        },
      ],
    },
  },
  {
    hora: "04:50", // UTC
    // hora: "05:44", // UTC
    mensaje: {
      content: "<@&1353466885307629638>",
      tts: false,
      embeds: [
        {
          title:
            "<:cabiflylogo:1353539280923787274> Actividad en 10 minutos! <:cabiflylogo:1353539280923787274>",
          description:
            "## 🚕┃**Servicio de Taxi**.\n✨┃Actividad #5.\n🗓️┃Siguiente Actividad:\n⏱️┃07:00 - 08:00 <:gtahub:1353557954565242920> | Servicio de Mudanza.",
          color: 13434624,
          footer: {
            text: "Cabifly Co. | Nunca dejes de moverte.",
          },
          image: {
            url: "https://i.imgur.com/TijKNWb.png",
          },
        },
      ],
    },
  },
  {
    hora: "06:50", // UTC
    mensaje: {
      content: "<@&1353466885307629638>",
      tts: false,
      embeds: [
        {
          title:
            "<:cabiflylogo:1353539280923787274> Actividad en 10 minutos! <:cabiflylogo:1353539280923787274>",
          description:
            "## 🚛┃**Servicio de Mudanza**.\n✨┃Actividad #6.\n🗓️┃Siguiente Actividad:\n⏱️┃08:00 - 09:00 <:gtahub:1353557954565242920> | Bus Interurbano (Ruta B).",
          color: 13434624,
          footer: {
            text: "Cabifly Co. | Nunca dejes de moverte.",
          },
          image: {
            url: "https://i.imgur.com/96OZjOB.png",
          },
        },
      ],
    },
  },
  {
    hora: "07:50", // UTC
    mensaje: {
      content: "<@&1353466885307629638>",
      tts: false,
      embeds: [
        {
          title:
            "<:cabiflylogo:1353539280923787274> Actividad en 10 minutos! <:cabiflylogo:1353539280923787274>",
          description:
            "## 🚌┃**Bus Interurbano (Ruta B)**.\n✨┃Actividad #7.\n🗓️┃Siguiente Actividad:\n⏱️┃11:00 - 12:00 <:gtahub:1353557954565242920> | Servicio de Taxi.",
          color: 13434624,
          footer: {
            text: "Cabifly Co. | Nunca dejes de moverte.",
          },
          image: {
            url: "https://i.imgur.com/Q1iLQ6B.png",
          },
        },
      ],
    },
  },
  {
    hora: "10:50", // UTC
    mensaje: {
      content: "<@&1353466885307629638>",
      tts: false,
      embeds: [
        {
          title:
            "<:cabiflylogo:1353539280923787274> Actividad en 10 minutos! <:cabiflylogo:1353539280923787274>",
          description:
            "## 🚕┃**Servicio de Taxi**.\n✨┃Actividad #8.\n🗓️┃Siguiente Actividad:\n⏱️┃12:00 - 13:00 <:gtahub:1353557954565242920> | Traslado de cliente VIP.",
          color: 13434624,
          footer: {
            text: "Cabifly Co. | Nunca dejes de moverte.",
          },
          image: {
            url: "https://i.imgur.com/TijKNWb.png",
          },
        },
      ],
    },
  },
  {
    hora: "11:50", // UTC
    mensaje: {
      content: "<@&1353466885307629638>",
      tts: false,
      embeds: [
        {
          title:
            "<:cabiflylogo:1353539280923787274> Actividad en 10 minutos! <:cabiflylogo:1353539280923787274>",
          description:
            "## 🚗┃**Traslado de cliente VIP**.\n✨┃Actividad #9.\n🗓️┃Siguiente Actividad:\n⏱️┃14:00 - 15:00 <:gtahub:1353557954565242920> | Servicio de Taxi.",
          color: 13434624,
          footer: {
            text: "Cabifly Co. | Nunca dejes de moverte.",
          },
          image: {
            url: "https://i.imgur.com/YxoiBlO.png",
          },
        },
      ],
    },
  },
  {
    hora: "13:50", // UTC
    mensaje: {
      content: "<@&1353466885307629638>",
      tts: false,
      embeds: [
        {
          title:
            "<:cabiflylogo:1353539280923787274> Actividad en 10 minutos! <:cabiflylogo:1353539280923787274>",
          description:
            "## 🚕┃**Servicio de Taxi**.\n✨┃Actividad #10.\n🗓️┃Siguiente Actividad:\n⏱️┃16:00 - 17:00 <:gtahub:1353557954565242920> | Servicio de Mudanza.",
          color: 13434624,
          footer: {
            text: "Cabifly Co. | Nunca dejes de moverte.",
          },
          image: {
            url: "https://i.imgur.com/TijKNWb.png",
          },
        },
      ],
    },
  },
  {
    hora: "15:50", // UTC
    mensaje: {
      content: "<@&1353466885307629638>",
      tts: false,
      embeds: [
        {
          title:
            "<:cabiflylogo:1353539280923787274> Actividad en 10 minutos! <:cabiflylogo:1353539280923787274>",
          description:
            "## 🚛┃**Servicio de Mudanza**.\n✨┃Actividad #11.\n🗓️┃Siguiente Actividad:\n⏱️┃17:00 - 18:00 <:gtahub:1353557954565242920> | Traslado de cliente VIP.",
          color: 13434624,
          footer: {
            text: "Cabifly Co. | Nunca dejes de moverte.",
          },
          image: {
            url: "https://i.imgur.com/96OZjOB.png",
          },
        },
      ],
    },
  },
  {
    hora: "16:50", // UTC
    mensaje: {
      content: "<@&1353466885307629638>",
      tts: false,
      embeds: [
        {
          title:
            "<:cabiflylogo:1353539280923787274> Actividad en 10 minutos! <:cabiflylogo:1353539280923787274>",
          description:
            "## 🚗┃**Traslado de cliente VIP**.\n✨┃Actividad #12.\n🗓️┃Siguiente Actividad:\n⏱️┃18:00 - 19:00 <:gtahub:1353557954565242920> | Bus Interurbano (Ruta D).",
          color: 13434624,
          footer: {
            text: "Cabifly Co. | Nunca dejes de moverte.",
          },
          image: {
            url: "https://i.imgur.com/YxoiBlO.png",
          },
        },
      ],
    },
  },
  {
    hora: "17:50", // UTC
    mensaje: {
      content: "<@&1353466885307629638>",
      tts: false,
      embeds: [
        {
          title:
            "<:cabiflylogo:1353539280923787274> Actividad en 10 minutos! <:cabiflylogo:1353539280923787274>",
          description:
            "## 🚌┃**Bus Interurbano (Ruta D)**.\n✨┃Actividad #13.\n🗓️┃Siguiente Actividad:\n⏱️┃19:00 - 20:00 <:gtahub:1353557954565242920> | Servicio de Taxi.",
          color: 13434624,
          footer: {
            text: "Cabifly Co. | Nunca dejes de moverte.",
          },
          image: {
            url: "https://i.imgur.com/HB86dgC.png",
          },
        },
      ],
    },
  },
  {
    hora: "18:50", // UTC
    mensaje: {
      content: "<@&1353466885307629638>",
      tts: false,
      embeds: [
        {
          title:
            "<:cabiflylogo:1353539280923787274> Actividad en 10 minutos! <:cabiflylogo:1353539280923787274>",
          description:
            "## 🚕┃**Servicio de Taxi**.\n✨┃Actividad #14.\n🗓️┃Siguiente Actividad:\n⏱️┃20:00 - 21:00 <:gtahub:1353557954565242920> | Servicio de Mudanza.",
          color: 13434624,
          footer: {
            text: "Cabifly Co. | Nunca dejes de moverte.",
          },
          image: {
            url: "https://i.imgur.com/TijKNWb.png",
          },
        },
      ],
    },
  },
  {
    hora: "19:50", // UTC
    mensaje: {
      content: "<@&1353466885307629638>",
      tts: false,
      embeds: [
        {
          title:
            "<:cabiflylogo:1353539280923787274> Actividad en 10 minutos! <:cabiflylogo:1353539280923787274>",
          description:
            "## 🚛┃**Servicio de Mudanza**.\n✨┃Actividad #15.\n🗓️┃Siguiente Actividad:\n⏱️┃21:00 - 22:00 <:gtahub:1353557954565242920> | Servicio de Taxi.",
          color: 13434624,
          footer: {
            text: "Cabifly Co. | Nunca dejes de moverte.",
          },
          image: {
            url: "https://i.imgur.com/96OZjOB.png",
          },
        },
      ],
    },
  },
  {
    hora: "20:50", // UTC
    mensaje: {
      content: "<@&1353466885307629638>",
      tts: false,
      embeds: [
        {
          title:
            "<:cabiflylogo:1353539280923787274> Actividad en 10 minutos! <:cabiflylogo:1353539280923787274>",
          description:
            "## 🚕┃**Servicio de Taxi**.\n✨┃Actividad #16.\n🗓️┃Siguiente Actividad:\n⏱️┃22:00 - 23:00 <:gtahub:1353557954565242920> | Traslado de cliente VIP y Servicio de Mudanza.",
          color: 13434624,
          footer: {
            text: "Cabifly Co. | Nunca dejes de moverte.",
          },
          image: {
            url: "https://i.imgur.com/TijKNWb.png",
          },
        },
      ],
    },
  },
  {
    hora: "21:53", // UTC
    mensaje: {
      content: "<@&1353466885307629638>",
      tts: false,
      embeds: [
        {
          title:
            "<:cabiflylogo:1353539280923787274> Actividad en 10 minutos! <:cabiflylogo:1353539280923787274>",
          description:
            "## 🚗┃**Traslado de cliente VIP**.\n✨┃Actividad #17.\n🗓️┃Siguiente Actividad:\n⏱️┃00:00 - 01:00 <:gtahub:1353557954565242920> | Bus Urbano (Ruta A).",
          color: 13434624,
          footer: {
            text: "Cabifly Co. | Nunca dejes de moverte.",
          },
          image: {
            url: "https://i.imgur.com/YxoiBlO.png",
          },
        },
      ],
    },
  },
  {
    hora: "21:53", // UTC
    mensaje: {
      content: "<@&1353466885307629638>",
      tts: false,
      embeds: [
        {
          title:
            "<:cabiflylogo:1353539280923787274> Actividad en 10 minutos! <:cabiflylogo:1353539280923787274>",
          description:
            "## 🚛┃**Servicio de Mudanza**.\n✨┃Actividad #18.\n🗓️┃Siguiente Actividad:\n⏱️┃00:00 - 01:00 <:gtahub:1353557954565242920> | Bus Urbano (Ruta A).",
          color: 13434624,
          footer: {
            text: "Cabifly Co. | Nunca dejes de moverte.",
          },
          image: {
            url: "https://i.imgur.com/96OZjOB.png",
          },
        },
      ],
    },
  },
];

setInterval(() => {
  const ahora = new Date();
  const horaActual = ahora.toLocaleTimeString("es-ES", {
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "UTC", // Hora UTC
  });

  eventos.forEach((evento) => {
    if (horaActual === evento.hora) {
      const canal = client.channels.cache.get("1350603472684449894"); // Cambia con tu ID de canal
      if (canal) {
        canal.send(evento.mensaje);
      }
    }
  });
}, 60000); // Revisa cada minuto

// Evitar que Replit suspenda el bot
setInterval(() => {
  console.log("✅ Bot sigue activo...");
}, 60000); // Cada 60 segundos

client.login(process.env.TOKEN);
