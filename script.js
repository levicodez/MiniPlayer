const image = document.getElementById("cover"),
  title = document.getElementById("music-title"),
  artist = document.getElementById("music-artit"),
  currentTimeEl = document.getElementById("current-time"),
  durationEl = document.getElementById("duration"),
  progress = document.getElementById("progress"),
  playerProgress = document.getElementById("player-progress"),
  prevBtn = document.getElementById("prev"),
  nextBtn = document.getElementById("next"),
  background = document.getElementById("bg-img");

const music = new Audio();

const songs = [
  {
    path: "assets/1.mp3",
    displayName: "Tu Hai Kaha",
    cover: "assets/1.jpeg",
    artist: "Usama Ali",
  },
  {
    path: "assets/1.mp3",
    displayName: "Tu Hai Kaha",
    cover: "assets/1.jpeg",
    artist: "Usama Ali",
  },
  {
    path: "assets/1.mp3",
    displayName: "Tu Hai Kaha",
    cover: "assets/1.jpeg",
    artist: "Usama Ali",
  },
];
