const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VU25KqOBT9l7zqOQqioFVdNYAiqOAFvLRT5yFAgHAJGG5il/8+hXZX98OcMz08pRKy9spaa+83QFKcoyVqwOQNZBRXsEDtsmgyBCZAKj0PUdAFLiwgmIClVrBRGkRufySRSrUZa32ydxc795LDXnYvGi24emzy9cl5AfcuyEo7xs4fANPSk7MTDc6dWV/QX1NBXcUVu7Wmlx2e96avKbfdQV9dDSPxBdxbRIgpJv4sC1CCKIyXqNlATL9HXxSnW3NbyIspHFROkHh7S97zZ/Ey4v3l7RKQ42VPlKE2VPbfoz/vuaysOo1Zi9lAMXdlqJhjJg4Oez6HfYFx+5Gewdm1lvZP+jn2CXI1F5ECF823ddeNG22sTZkztFqeoLR1iLTWVXkYKP1O2Ih2RCTjGNozJv0ecd+m84qvvEEfrzXVvg35VaTuSvu6OtUknJbEOma9q3BITtuvxDf0IyvR/9F9afjMTBnV62AtK7OSz0/LcNErYWIIx1pWmaqBJ38sDY/z/Hv0DWZ96elkbfb6jcZGeC5Q4TTPtg7NhoQTduiidGZchDVl9kkfFiX9E0usiNwZyzOJcwJL1QmVaS0yHTnJehe5ynRVZ2eqlWj2nB9mr1srWGeblXHsIWtkxeNmrgkHt+Gr2FxWB+FMrdDbTf365fGiCDWaCybMvQso8nFeUFjglDz2BLYLoFuZyKGoeMgLFqFE1rW7SKltB3wlkG1PPmpuDnkhnF99bTQQL0mItkKTvoAuyGjqoDxHrorzIqWNjvIc+igHk79/dQFB1+JpXFtuwHSBh2le7EmZxSl0P1z9OISOk5akMBviyO0CUTDpf26josDEz1sdSwKpE+AKyQEscjDxYJyjexe4qMIOavHAa45jOjsH5hrumURjb7ZtmtuWcpCS5y8cP7R5hh3/YL3R6AcHWfgDDjn+B+PBsdAXWGfEO6AL8HvPtHd+a2GTBDHxCCOOOQnuq82GkcK+emHYg/+w4ak9osgFk4KWqAts6ERlZqURIn/ADXvFQlgfDv6tVMShpm+aYzlX4uom1l9wn56CydvnnJJTt8UTVUs5m4YJuiB5RBC3L2cH3LjP8yN+PBrxE174K/9Zt0rCLPtJUNECv6veXnFRAXGcgwmQDZlPN6I0W1E6XKXzuRj5ouyL4NOlj7g/47QZObPLa0dguNeEuzZjcxOVHWXFd3jmuhgSpRdejriXGv059/IvIGACEiuylcNqtjtCxV36R6kyYJQd1gtNNi7c1tDny4Geh/7sEIZeyNbO0mCYc19rKomMAm4v6HC6N8xd5kXaERqBGCxjefvSVnum5WuxTGWYTDwNpDLwr+vU0yVOErm6d93MCcol7MW1Eo5rgnU6FcIRl+1vOnLU0/aaLSN2Bq/IjWC+dtlesseH27ikiuJvn434GATx+wDGjxZ5e8+Wh9FjnhHYevSf7nzNef/e/QLyPiJ/kyXJ6hBpmWwqA80Xpe5U+3C4qgKz0yvHjonOV48bxWk1mrpSCe73X12QxbDwUpqACYDEpSl2QRfEMC/Ez1a1cILyAiYZmDD8YCCMxzzb74KkEbPMLGDx0eFAbD91KYP7PxvhfQn9BwAA',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "Ibrahim Adams",
    NUMERO_OWNER : process.env.NUMERO_OWNER || " 2349077679667",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "no",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || 'Youngkiddo',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "no",
    PM_PERMIT: process.env.PM_PERMIT || 'yes',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "yes",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'yes',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'yes',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'no',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'no',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'yes',
                  AUTO_READ : process.env.AUTO_READ || 'no',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'no',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'no',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'yes',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

