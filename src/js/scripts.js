var myCarousel = document.querySelector("#carouselExample");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000, // Muda para a próxima imagem a cada 2 segundos
  wrap: true,
});

// Seleciona o botão e os elementos de áudio
const playButton = document.getElementById('playButton');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
const audios = ["audio1", "audio2", "audio3"];
let currentAudioIndex = 0;
let isPlaying = false; // Variável para controlar o estado da reprodução

// Função para tocar o áudio atual
function playCurrentAudio() {
  const audioElement = document.getElementById(audios[currentAudioIndex]);
  audioElement.play();
  isPlaying = true;
  playButton.textContent = 'Pause Music';
}

// Função para pausar o áudio atual
function pauseCurrentAudio() {
  const audioElement = document.getElementById(audios[currentAudioIndex]);
  audioElement.pause();
  isPlaying = false;
  playButton.textContent = 'Play Music';
}

// Event listener para o botão
playButton.addEventListener('click', () => {
  if (isPlaying) {
    pauseCurrentAudio();
  } else {
    playCurrentAudio();
  }
});

// Função para ir para a próxima música
function nextTrack() {
  const currentAudio = document.getElementById(audios[currentAudioIndex]);
  currentAudio.pause();
  currentAudio.currentTime = 0;
  currentAudioIndex = (currentAudioIndex + 1) % audios.length;
  playCurrentAudio();
}

// Função para ir para a música anterior
function prevTrack() {
  const currentAudio = document.getElementById(audios[currentAudioIndex]);
  currentAudio.pause();
  currentAudio.currentTime = 0;
  currentAudioIndex = (currentAudioIndex - 1 + audios.length) % audios.length;
  playCurrentAudio();
}

// Event listeners para os botões de próxima e anterior
nextButton.addEventListener('click', nextTrack);
prevButton.addEventListener('click', prevTrack);