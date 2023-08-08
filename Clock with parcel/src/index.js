const { DateTime } = require("luxon");

const updateTime = () => {
let date = document.querySelector(".date");
date.innerHTML = DateTime.now().toFormat("dd/MM/yyyy");

let time = document.querySelector(".time");
time.innerHTML=DateTime.now().toFormat("HH:mm:ss");
};

setInterval(updateTime, 1000);
