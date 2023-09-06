/*fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!*/

// Scrivo la data che mi interessa

let newDate = new Date("September 6, 2023 9:30:00").getTime();

// Scrivo l'intervallo
const clock = setInterval(function () {
  let now = new Date().getTime();

  let lessonTime = Number(newDate - now);
  var hours = Math.floor(
    (lessonTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  var minutes = Math.floor((lessonTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((lessonTime % (1000 * 60)) / 1000);
  let countDown = hours + minutes + seconds;
  document.querySelector(".countdown").innerHTML =
    "-> " + hours + " ore, " + minutes + " minuti, " + seconds + " secondi.";

  // stoppo il countdown
  if (countDown < 0) {
    clearInterval(clock);
    alert("Inizia la lezione!");
    document.querySelector(".countdown").innerHTML =
      "-> " + 0 + " ore, " + 0 + " minuti, " + 0 + " secondi.";
  } else {
    countDown--;
  }
}, 1000);
