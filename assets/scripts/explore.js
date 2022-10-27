// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const speechsynth = window.speechSynthesis;
  const voiceoptions = speechsynth.getVoices();

  const voiceselect = document.getElementById("voice-select");
  const text = document.getElementById("text-to-speak");
  const button = document.getElementsByTagName("button")[0];
  const img = document.getElementsByTagName("img")[0];

  setInterval(() => 
  {
    if(speechsynth.speaking) img.src = "assets/images/smiling-open.png";
    else     img.src = "assets/images/smiling.png";
  }, 100);

  for(var i = 0; i < voiceoptions.length; i++){
    var node = document.createElement('option');
    node.value = voiceoptions[i].name;
    node.innerHTML = voiceoptions[i].name;
    voiceselect.appendChild(node);
  }

  button.addEventListener("click", (event)=>{
    console.log(voiceselect.value);
    let utterance = new SpeechSynthesisUtterance(text.value);
    utterance.voice = voiceoptions.find((a,b,c)=>{a.name == voiceselect.value});
    speechsynth.speak(utterance);
  });

}