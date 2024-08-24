var myCarousel = document.querySelector("#carouselExample");
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 2000, // Muda para a próxima imagem a cada 2 segundos
  wrap: true,
});
const audios = ["audio1", "audio2", "audio3"];
let currentAudioIndex = 0;

function playCurrentAudio() {
  const audioElement = document.getElementById(audios[currentAudioIndex]);

  // Se o áudio estiver silenciado, remove o mute após iniciar
  if (audioElement.muted) {
    audioElement.muted = false;
  }

  audioElement.play().catch((error) => {
    console.log("Erro ao tocar o áudio: ", error);
  });

  audioElement.onended = function () {
    currentAudioIndex++;
    if (currentAudioIndex >= audios.length) {
      currentAudioIndex = 0; // Reinicia a playlist
    }
    playCurrentAudio(); // Toca o próximo áudio
  };
}

// Iniciar reprodução ao carregar a página
window.addEventListener("load", playCurrentAudio);
