require("dotenv").config();
const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.TOKEN);

// var cron = require("node-cron");

// const { message } = require('telegraf/filters')

let frase = "Síp, he creado un bot que espamea frases de Chuck Norris cada 30 segundos, eso sí, en inglés."

// Yo

setInterval(() => {
  const fetchData = async () => {
    const response = await fetch("https://api.chucknorris.io/jokes/random");
    const newData = await response.json();
    frase = newData.value;
  };
  fetchData();
  bot.telegram.sendMessage(1361344505, `${frase}`);
}, 30000);

// grupo amigos

// setInterval(() => {
//   const fetchData = async () => {
//     const response = await fetch("https://api.chucknorris.io/jokes/random");
//     const newData = await response.json();
//     frase = newData.value;
//   };
//   fetchData();
//   bot.telegram.sendMessage( -63326172, `${frase}`);
// }, 30000);

// grupo familia

// setInterval(() => {
//   const fetchData = async () => {
//     const response = await fetch("https://api.chucknorris.io/jokes/random");
//     const newData = await response.json();
//     frase = newData.value;
//   };
//   fetchData();
//   bot.telegram.sendMessage(-409035699, `${frase}`);
// }, 30000);

bot.launch()
