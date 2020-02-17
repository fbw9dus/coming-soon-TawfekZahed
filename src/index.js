var moment = require("moment")
var endDate = "2020-07-15"
var timeLeft = moment(endDate) - moment()
timeLeft = moment.duration(timeLeft,"milliseconds")
console.log("left:",timeLeft.days(),timeLeft.hours(),timeLeft.minutes(),timeLeft.seconds())
var myBerthday = document.getElementById("text1").innerHTML = "Days :" + timeLeft.days()
var myBerthday = document.getElementById("text2").innerHTML =  "Houers:" + timeLeft.hours()
var myBerthday = document.getElementById("text3").innerHTML =  "minutes:" + timeLeft.minutes()
var myBerthday = document.getElementById("text4").innerHTML = "seconds:" + timeLeft.seconds()
