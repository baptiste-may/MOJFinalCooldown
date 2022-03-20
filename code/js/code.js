
const timestamp = 1650751200;

var time = timestamp * 1000;
var date = new Date(time - Date.now());

var j = 0;
var h = 0;
var m = 0;
var s = 0;

function getS(e) {
    if (e > 1) {
        return "s"
    } else {
        return "";
    }
}

function updateTime() {
    date = new Date(time - Date.now());
    
    j = Math.floor(date / (1000 * 60 * 60 * 24))
    h = date.getHours() - 1;
    m = date.getMinutes();
    s = date.getSeconds();

    if (j < 0) {
        document.getElementById("cooldown").textContent = "C'est le dernier jour";
        document.title = " | The last day";
    } else {
        document.getElementById("cooldown").textContent = j + " jour" + getS(j) + " - " + h + " heure" + getS(h) + " - " + m + " minute" + getS(m) + " - " + s + " seconde" + getS(s);
        document.title = " | " + j + "j / " + h + "h / " + m + "m / " + s + "s";
    }
}

updateTime()

setInterval(() => {
    updateTime();
}, 1000);
