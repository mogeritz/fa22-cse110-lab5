// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  
  const textInput = document.getElementById("text-to-speak");
  const voiceList = document.getElementById("voice-select");
  const button = document.getElementsByTagName("button")[0];
  const faceImg = document.querySelector("[alt='Smiling face']");
  const synth = window.speechSynthesis;
  let voices = [];

  function populateVoiceList() {
    if (typeof speechSynthesis === 'undefined') {
      return;
    }

    const voices = synth.getVoices();
    
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      // if (voices[i].default) {
      //   option.textContent += ' — DEFAULT';
      // }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      voiceList.appendChild(option);
    }
  };
  
  // call function
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // speak
  button.addEventListener('click', (event) => {
    voices = synth.getVoices();
    event.preventDefault();

    const utterThis = new SpeechSynthesisUtterance(textInput.value);
    // if(voiceList.value){
    //   utterThis.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == voiceSelect.value; })[0];
    // }
    const selectedOption =
      voiceList.selectedOptions[0].getAttribute("data-name");
    voices.forEach((voice) => {
      if (voice === selectedOption){
        utterThis.voice = voices[i];
      }
    });

    synth.speak(utterThis);
    faceImg.src = "assets/images/smiling-open.png";

    // stop speaking
    utterThis.addEventListener('end', (event) => {
      faceImg.src = "assets/images/smiling.png";
    });
  });
}