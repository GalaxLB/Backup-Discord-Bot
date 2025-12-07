# Discord Backup Bot

Bot de Discord para crear y restaurar backups de servidores.
Programado en JavaScript usando Node.js
## Instalacion

1. Clona el repositorio
2. Instala dependencias:
   ```bash
   npm install
   ```
3. Crea un archivo `.env` con tus credenciales:
   ```
   DISCORD_TOKEN=tu_token_aqui
   CLIENT_ID=tu_client_id_aqui
   ```
4. Inicia el bot:
   ```bash
   npm start
   ```

## Comandos

- `!backup` - Crea un backup del servidor y envia el archivo JSON
- `!restore <id>` - Restaura un backup usando su ID

## Configuracion del Bot en Discord

1. Ve a [Discord Developer Portal](https://discord.com/developers/applications)
2. Crea una aplicacion o selecciona una existente
3. En la pestaña "Bot", habilita:
   - MESSAGE CONTENT INTENT
   - SERVER MEMBERS INTENT (opcional)
   - PRESENCE INTENT (opcional)
4. Copia el token del bot

## Invitar el bot a un servidor

1. Ve a OAuth2 > URL Generator
2. Selecciona: `bot`, `applications.commands`
3. Permisos: Administrator (o los que necesites)
4. Copia la URL generada y abrela en el navegador
