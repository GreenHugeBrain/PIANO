const btns = document.querySelectorAll('.btn');
const volumeDisplay = document.getElementById('volume-display');
let volume = 0.5;

function playSound(note) {
   const audio = new Audio(`sounds/${note}.mp3`);
   audio.volume = volume;
   audio.play();
}

function updateVolumeDisplay() {
   volumeDisplay.textContent = `Volume: ${Math.round(volume * 100)}%`;
}

btns.forEach(btn => {
   btn.addEventListener('click', function() {
      const note = this.getAttribute('data-note');
      playSound(note);
      this.classList.add('clicked');
      setTimeout(() => {
         this.classList.remove('clicked');
      }, 300);
   });
});

document.getElementById('volume-up').addEventListener('click', function() {
   if (volume < 1) {
      volume += 0.1;
      if (volume > 1) {
         volume = 1;
      }
      updateVolumeDisplay();
   }
});

document.getElementById('volume-down').addEventListener('click', function() {
   if (volume > 0) {
      volume -= 0.1;
      if (volume < 0) {
         volume = 0;
      }
      updateVolumeDisplay();
   }
});

updateVolumeDisplay();
