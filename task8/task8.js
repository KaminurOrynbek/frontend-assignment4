const today = new Date();
const dateString = today.toDateString();
document.getElementById("currentDate").innerHTML = `<p>${dateString}</p>`;