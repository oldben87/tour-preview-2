var myAudio = document.getElementById("myAudio");
myAudio.volume = 0.7;
var myButton = document.getElementById("playerIcon");
var playerTime = document.getElementById("playerTime");

function sec2time(timeInSeconds) {
  var date = new Date(null);
  date.setSeconds(timeInSeconds);
  var sec = date.getSeconds();
  if (sec < 10) {
    sec = "0" + sec;
  }
  var min = date.getMinutes();

  let timeString = min + ":" + sec;

  return timeString;
}

function setDuration(e) {
  var currTime = Math.floor(e.currentTarget.currentTime);
  var currDur = Math.floor(e.currentTarget.duration);

  playerTime.textContent = "0:00 / " + sec2time(currDur);
}

function setTime(e) {
  var currTime = Math.floor(e.currentTarget.currentTime);
  var currDur = Math.floor(e.currentTarget.duration);

  playerTime.textContent = sec2time(currTime) + " / " + sec2time(currDur);
}
function resetPlayer(e) {
  myButton.src = "./play.svg";
  setDuration(e);
}

function togglePlay() {
  console.log("play paused pressed");
  if (myAudio.paused) {
    myAudio.play();
    myButton.src = "./pause.svg";
  } else {
    myAudio.pause();
    myButton.src = "./play.svg";
  }
}

myAudio.addEventListener("loadedmetadata", setDuration);
myAudio.addEventListener("timeupdate", setTime);
myAudio.addEventListener("ended", resetPlayer);
