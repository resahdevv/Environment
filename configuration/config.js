/**
 * Source Code By RezaDevv
 * Don't Forget Smile
 * This Bot Telegram Using Api Official
 * Thank You
 */

const fs = require("fs");
const chalk = require("chalk");
const { indonesia, english } = require("../src");

global.APIs = {
    zenz: "https://api.zahwazein.xyz",
    lol: "https://api.lolhuman.xyz"
};

global.APIKeys = {
    "https://api.zahwazein.xyz": "zenzkey_d1532f1c81a5",
    "https://api.lolhuman.xyz": "c237b9317e6fbc79f353d6e7",
};

let http = require('http')
http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
  resp.on('data', function(ip) {
    (global.ipserver = ip);
  })
})

global.LANGUAGE_IND = indonesia;
global.LANGUAGE_ENG = english;
global.KEY_OPENAI = "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";
global.BOT_TOKEN = "6111192867:AAGA-HMvtyPjImmf_K7nsaOA8YLROFg2-9o";
global.BOT_NAME = "Aze-Bot";
global.OWNER_NAME = "RezaDevv";
global.OWNER_NUMBER = "6285742632270";
global.OWNER = ["https://t.me/ezasarah"];
global.OWNERID = '1283353379';
global.THUMBNAIL = "./src/thumb.jpg";
global.DONASI = "./src/donasi.jpg";
global.PRICE = "./src/price.jpg";


let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(chalk.redBright(`Update ${__filename}`));
  delete require.cache[file];
  require(file);
});