/////////////////////////////////////////////////////////////////////////////////////

const songs = [
  {
    path: "assets/1.mp3",
    displayName: "Tu hai kahan",
    cover: "assets/1.jpeg",
    artist: "AUR",
  },
  {
    path: "assets/2.mp3",
    displayName: "Sajjan Razi",
    cover: "assets/2.webp",
    artist: "Satinder Sartaj",
  },
  {
    path: "assets/3.mp3",
    displayName: "Akhiyaan Gulaab",
    cover: "assets/3.jpg",
    artist: "Mitraz",
  },
  {
    path: "assets/4.mp3",
    displayName: "Deewane Hum Nahi",
    cover: "assets/4.jpg",
    artist: "Aditya Yadav",
  },
  {
    path: "assets/5.mp3",
    displayName: "Ik Tera",
    cover: "assets/5.jpg",
    artist: "Maninder Buttar",
  },
  {
    path: "assets/6.mp3",
    displayName: "Do Kabhi Jo Badal Barse",
    cover: "assets/6.jpg",
    artist: " Arijit Singh & Samira Koppikar",
  },
  {
    path: "assets/7.mp3",
    displayName: "Menu Tere Naal Ho Gaya Pyar",
    cover: "assets/7.jpg",
    artist: "Najam Sheraz",
  },
  {
    path: "assets/8.mp3",
    displayName: "Kesariya",
    cover: "assets/8.jpeg",
    artist: "Arjit Singh",
  },
  {
    path: "assets/9.mp3",
    displayName: "Saware",
    cover: "assets/9.jpeg",
    artist: "Pritam & Arijit Singh",
  },
  {
    path: "assets/10.mp3",
    displayName: "You and me",
    cover: "assets/10.jpg",
    artist: "Shubh",
  },
  {
    path: "assets/11.mp3",
    displayName: "O Bedardiya",
    cover: "assets/11.jpeg",
    artist: "Arjeet Singh",
  },
  {
    path: "assets/12.mp3",
    displayName: "Apnaa Mujhe Tu Lagaa",
    cover: "assets/12.jpg",
    artist: "Sonu Nigam",
  },
  {
    path: "assets/13.mp3",
    displayName: "Toota Jo Kabhi Tara",
    cover: "assets/13.jpg",
    artist: "Atif Aslam & Sumedha Karmahe",
  },
  {
    path: "assets/14.mp3",
    displayName: "Tum Hi Ho",
    cover: "assets/14.jpeg",
    artist: "Arjeet Singh",
  },
  {
    path: "assets/15.mp3",
    displayName: "Tu Aake Dekhle",
    cover: "assets/15.jpg",
    artist: "King",
  },
  {
    path: "assets/16.mp3",
    displayName: "Ehsaas Tujhe Bhi",
    cover: "assets/16.jpg",
    artist: "Arjeet Singh",
  },
  {
    path: "assets/17.mp3",
    displayName: "Bella Ciao",
    cover: "assets/17.jpeg",
    artist: "Money Heist",
  },
  {
    path: "assets/18.mp3",
    displayName: "Tera Fitoor",
    cover: "assets/18.jpeg",
    artist: "Arjeet Singh",
  },
];

const image = document.getElementById("cover"),
  title = document.getElementById("music-title"),
  artist = document.getElementById("music-artist"),
  currentTimeEl = document.getElementById("current-time"),
  durationEl = document.getElementById("duration"),
  progress = document.getElementById("progress"),
  playerProgress = document.getElementById("player-progress"),
  prevBtn = document.getElementById("prev"),
  nextBtn = document.getElementById("next"),
  playBtn = document.getElementById("play"),
  background = document.getElementById("bg-img");
const disk = document.getElementById("player-img");

const music = new Audio();

let musicIndex = 0;
let isPlaying = false;

function togglePlay() {
  if (isPlaying) {
    pauseMusic();
  } else {
    playMusic();
  }
}

function playMusic() {
  isPlaying = true;
  // Change play button icon
  playBtn.classList.replace("fa-play", "fa-pause");
  // Set button hover title
  playBtn.setAttribute("title", "Pause");
  music.play();
  // document.body.querySelector(".player-img").classList.add("animate")
  toggleAnimation(true);
}

function toggleAnimation(play) {
  if (play) {
    disk.style.animationPlayState = "running";
  } else {
    disk.style.animationPlayState = "paused";
  }
}
function pauseMusic() {
  isPlaying = false;
  // Change pause button icon
  playBtn.classList.replace("fa-pause", "fa-play");
  // Set button hover title
  playBtn.setAttribute("title", "Play");
  music.pause();
  // document.body.querySelector(".player-img").classList.remove("animate")
  toggleAnimation(false);
}

function loadMusic(song) {
  music.src = song.path;
  title.textContent = song.displayName;
  artist.textContent = song.artist;
  image.src = song.cover;
  background.src = song.cover;
  resetDiskAnimation();
}

function resetDiskAnimation() {
  disk.style.animation = "none";
  void disk.offsetWidth;
  disk.style.animation = "rotate 40s linear infinite paused";
}

function changeMusic(direction) {
  musicIndex = (musicIndex + direction + songs.length) % songs.length;
  loadMusic(songs[musicIndex]);
  playMusic();
}

function updateProgressBar() {
  const { duration, currentTime } = music;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;

  const formatTime = (time) => String(Math.floor(time)).padStart(2, "0");
  durationEl.textContent = `${formatTime(duration / 60)}:${formatTime(
    duration % 60
  )}`;
  currentTimeEl.textContent = `${formatTime(currentTime / 60)}:${formatTime(
    currentTime % 60
  )}`;
}

function setProgressBar(e) {
  const width = playerProgress.clientWidth;
  const clickX = e.offsetX;
  music.currentTime = (clickX / width) * music.duration;
}

playBtn.addEventListener("click", togglePlay);
prevBtn.addEventListener("click", () => changeMusic(-1));
nextBtn.addEventListener("click", () => changeMusic(1));
music.addEventListener("ended", () => changeMusic(1));
music.addEventListener("timeupdate", updateProgressBar);
playerProgress.addEventListener("click", setProgressBar);

loadMusic(songs[musicIndex]);

resetDiskAnimation();
