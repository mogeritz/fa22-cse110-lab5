// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  // TODO
  // const button = document.getElementsByTagName("button")[0];
  // const textInput = document.getElementById("text-to-speak");
  // const faceImg = document.querySelector("[alt='Smiling face']");
  // const synth = window.speechSynthesis;
  // // const voices = synth.getVoices();
  // const voiceList = document.getElementById("voice-select");
  // let voices = [];

  // populateVoices();

  // if(speechSynthesis !== undefined){
  //   speechSynthesis.onvoiceschanged = populateVoices;
  // }

  // function populateVoices(){
  //   voices = synth.getVoices();
  //   voiceList.innerHTML = '';
  //   voices.forEach((voice) => {
  //     let listItem = document.createElement('option');
  //     listItem.textContent = voice.name;
  //     voiceList.appendChild(listItem);
  //   })

  // }
  const button = document.getElementsByTagName("button")[0];
  const synth = window.speechSynthesis;
  const textInput = document.getElementById("text-to-speak");
  const voices = speechSynthesis.getVoices();

  function populateVoiceList() {
    if (typeof speechSynthesis === 'undefined') {
      return;
    }
  
    
  
    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      // if (voices[i].default) {
      //   option.textContent += ' — DEFAULT';
      // }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      document.getElementById("voice-select").appendChild(option);
    }
  }
  
  populateVoiceList();
  if (typeof speechSynthesis !== 'undefined' && speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  // speak
  button.addEventListener('click', (event) => {
    const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
    const selectedOption =
      voiceSelect.selectedOptions[0].getAttribute("data-name");
  })
  voices.forEach((voice) => {
    if (voice === selectedOption){
      utterThis.voice = voice;
    }
  })
  synth.speak(utterThis);
  // function speak(){
  //   if(synth.speaking){
  //     console.error("error");
  //   }

  //   if (textInput.value !== ""){
  //     const utterThis = new SpeechSynthesisUtterance(inputTxt.value);
  //     const selectedOption =
  //     voiceSelect.selectedOptions[0].getAttribute("data-name");
  //     for (let i = 0; i < voices.length; i++) {
  //       if (voices[i].name === selectedOption) {
  //         utterThis.voice = voices[i];
  //         break;
  //       }
  //     }
  //     synth.speak(utterThis);
  //   }
  //   button.onsubmit = function (event){
  //     speak();
  //   }
  // }
}