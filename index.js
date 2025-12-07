const { Client, GatewayIntentBits, AttachmentBuilder } = require("discord.js");
const backup = require("discord-backup");
const path = require("path");
const fs = require("fs");

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.login(process.env.DISCORD_TOKEN);

client.once("ready", () => {
  console.log(`Bot conectado como ${client.user.tag}`);
});

client.on("messageCreate", async (message) => {
  if (message.author.bot) return;

  if (message.content === "!backup") {
    backup.create(message.guild, {
      jsonSave: true,
      jsonBeautify: true,
      saveImages: "base64"
    }).then((backupData) => {
      const backupPath = path.join(process.cwd(), "backups", backupData.id + ".json");
      if (fs.existsSync(backupPath)) {
        const attachment = new AttachmentBuilder(backupPath, { name: backupData.id + ".json" });
        message.channel.send({
          content: "Backup creado con ID: `" + backupData.id + "`",
          files: [attachment]
        });
      } else {
        message.channel.send("Backup creado con ID: `" + backupData.id + "`");
      }
    }).catch((err) => {
      message.channel.send("Error al crear backup: " + err.message);
    });
  }

  if (message.content.startsWith("!restore")) {
    const id = message.content.split(" ")[1];
    if (!id) {
      message.channel.send("Uso: !restore <id>");
      return;
    }
    backup.load(id, message.guild).then(() => {
      message.channel.send("Backup restaurado.");
    }).catch(() => {
      message.channel.send("ID de backup inválida.");
    });
  }
});
