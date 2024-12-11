const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA5VUW5OqOBj8L3nFOXK/WDVVC4iiKOJ4G93ahwgBEQgYAohT/vctnJk6s1V7zs6+pQLpdLr76zeA87hEDmrB4A0UJK4hRd2StgUCA2BUYYgI6IEAUggGwDT1M3M77POCkeErlVm9MLa8ZqeGrl8YM5qNUdW+BtpuJD6Dew8U1TGN/d8AVg66QemKlyXdF4YdhiG5eqvVqD0umeRCCqtvqGNvyl9fJ8/g3iHCmMQ4sooTyhCBqYNaD8bke/Q3EzqOJLV9Oe/DwA5sbmkNGTJkHEPe4umaM5RIH7aCtNh9k/7IWavLyx5LacbH4+MyEOZzZdFyTr6zhvb5uFpmZ5QwQzWdv9Mv4wijYBIgTGPaflt3fn4+5vbhpukRMpuMjOV4PprNp0bO1ZS9sFE0GlmXtWdt2e8RZ2+ZO0ttDPNi4ZpBOto6p0NzW6XzLFI4UaX7uV6PJXRd/YO4Rz6zkvwf3Zsx2a74ZnuQFTX3d+eiXi8gv9vrVugIV6NsJomDZ+nEGs2/R18Ut+tdIdiLW3raC9PMzvfnHRljU95I+HXGTFxjvLjBsD5/oQ9pRX7HMjNHw5GgB8xVWqq5XBnCLFxMo8Om0l2z2bETlZ9FKFgP5dTdpxGB1+zaOJGa3tZbhk8Wa6FOckFkHdc7UW16tYpFozfPjxclqJ0EYMDde4CgKC4pgTTO8WNP0XoABvUK+QTRh7xAV4i21WbbfqAeG1uiYphIuN0q/NnINOcF65Kdbpaqd5b0Z9ADBcl9VJYosOOS5qSdo7KEESrB4M+/egCjK303rrtO4HogjElJN7gq0hwGn65+foS+n1eYrlrsm90CETBgf24jSmMclZ2OFYbEP8U1Mk+QlmAQwrRE9x4IUB37qMMDUYCrp6k0W5umtZQ9vBcaLVt2lE85fv9FVTSOF7Xgiee04EnkNPYJqrLwJIgQCqIqQFZlQQ/EHzPTnfmlhTa33KhnPZLnkwuTx+Qw5nI7nWyLaP+w4V17RFAABpRUqAeO0E+qYp0nCP8GF460l1paVcLs0iovNGgSfpKnR5fF6hfcd0/B4O1nT5l50OHJvDTXDYEDPZA9Ihh3L+cFUWMVRVY0WVYGivZH+aPplIRF8QMj2gF/qN4dCRCFcVp2LeyOldzTDcsd8tIsH491K9LNSAc/XfqM+3ucPNm3LntG5cR9Jl5bbeUlFTOaKYzCXacSHvXPl13cz112LD7/CwgYgEO/cOvrgVRiuI6pMPEOVR8ql9eTopT7Pp/wBq3xJMGNxUGrTKZHt/AqadvefHF9WmuVKRyWXPIST+J8aMlbO+JQf9jNxmdavl62SqDlmNfNfnmhzcIJl3ZJVurWbBvGLXypHtne7lZ5BySYq8kucxin7y6G5pbkbvwS+uTkN5XanAq23eHTdXXpr63JcPk+iI8iSD8KOH6MyNtHtsIYPfoMw86j/3Tna87Ze+8LyEdF/iJLxprBhpN5tYvG02ru15uzNKtPK6Zfaf4KHa6hKKd5LQ8DowL3+189UKSQhjnJuiDigORxAHoghSXVf47qOs5QSWFWdIUiCBrLcRJ7/xsPsZyi4AcAAA==',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "OnyekesiAfamefuna",
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

