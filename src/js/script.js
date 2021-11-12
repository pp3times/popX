var img = document.getElementById("popcat1");
var count = document.getElementById("score");
var MyScore = 0;
var score;

const ASSET_PATH = "./assets/image";
const SOUND_PATH = "./assets";
const audio = new Audio(`${SOUND_PATH}/pop.mp3`);

// mouseclick event
document.body.addEventListener("mousedown", function () {
  increaseScore();
  if (score > 100) {
    img.src = `${ASSET_PATH}/popcat2.png`;
    audio.play();
  } else if (score > 80) {
    img.src = `${ASSET_PATH}/2vaccine2.png`;
    audio.play();
  } else if (score > 50) {
    img.src = `${ASSET_PATH}/catvaccine2.png`;
    audio.play();
  } else if (score > 30) {
    img.src = `${ASSET_PATH}/catmask2.png`;
    audio.play();
  } else {
    img.src = `${ASSET_PATH}/maincat2.png`;
    audio.play();
  }
});

document.body.addEventListener("mouseup", function () {
  if (score > 100) {
    img.src = `${ASSET_PATH}/popcat1.png`;
    audio.play();
  } else if (score > 80) {
    img.src = `${ASSET_PATH}/2vaccine1.png`;
    audio.play();
  } else if (score > 50) {
    img.src = `${ASSET_PATH}/catvaccine1.png`;
    audio.play();
  } else if (score > 30) {
    img.src = `${ASSET_PATH}/catmask1.png`;
    audio.play();
  } else {
    img.src = `${ASSET_PATH}/maincat1.png`;
    audio.play();
  }
});

// touch event
document.body.addEventListener("touchstart", function () {
  increaseScore();
  img.src = `${ASSET_PATH}/popcat2.png`;
  audio.play();
});

document.body.addEventListener("touchmove", function () {
  img.src = `${ASSET_PATH}/popcat1.png`;
  audio.play();
});

function increaseScore() {
  score++;
  count.innerHTML = score;
  document.cookie = `count=${score}`;
  const sb = document.querySelector("#majar");
  const Index = sb.selectedIndex;

  fetch(`/api/updateValue/UPDATE_ID_${Index}.php`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    });
}

const fetchingNewValue = () => {
  const time = new Date().getTime();
  fetch(`/src/api/getValue/getCurrentValue.php?t=${Math.floor(time / 1000)}`)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      updateCurrentValue(data);
      fetchingNewValue();
    });
};

const updateCurrentValue = ({ nuea, klang, esan, tai }) => {
  document.getElementById("demo_1").innerHTML = nuea;
  document.getElementById("demo_2").innerHTML = klang;
  document.getElementById("demo_3").innerHTML = esan;
  document.getElementById("demo_4").innerHTML = tai;
  // todo: update the total value ui
  document.getElementById("total").innerHTML = nuea + klang + esan + tai;
};

fetchingNewValue();
