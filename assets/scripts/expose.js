// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // change image

  const hornSelect = document.getElementById("horn-select");
  const hornImg = document.querySelector("[alt='No image selected']");
  const hornAudio = document.getElementsByClassName("hidden")[0];
  const volSelect = document.getElementById("volume");
  const volImg = document.querySelector("[alt='Volume level 2']");
  const button = document.getElementsByTagName("button")[0];
  const confetti = new JSConfetti();

  var audioVol = volSelect.value/100;
  hornAudio.volume = audioVol;
  
  // change image and audio
  hornSelect.addEventListener('change', (event) => {
      if (hornSelect.value === 'air-horn') {
        hornImg.src = 'assets/images/air-horn.svg';
        hornAudio.src = 'assets/audio/air-horn.mp3';
      } else if (hornSelect.value === 'car-horn') {
        hornImg.src = 'assets/images/car-horn.svg';
        hornAudio.src = 'assets/audio/car-horn.mp3';
      } else if (hornSelect.value === 'party-horn') {
        hornImg.src = 'assets/images/party-horn.svg';
        hornAudio.src = 'assets/audio/party-horn.mp3';
      }
  })

  //change volume
  volSelect.addEventListener('input', (event) => {
    audioVol = event.target.value/100;
    hornAudio.volume = audioVol;

    if(audioVol == 0){
      volImg.src = 'assets/icons/volume-level-0.svg';
    } else if (audioVol < 0.33) {
      volImg.src = 'assets/icons/volume-level-1.svg';
    } else if (audioVol < 0.67) {
      volImg.src = 'assets/icons/volume-level-2.svg';
    } else {
      volImg.src = 'assets/icons/volume-level-3.svg';
    }
  } )

  // click play button
  button.addEventListener('click', (event) => {
    hornAudio.play();
    if(hornSelect.value === "party-horn"){
      confetti.addConfetti();
    }
  })


}