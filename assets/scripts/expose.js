// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const jsConfetti = new JSConfetti()

  const hornselector = document.getElementById("horn-select");
  const volselector = document.getElementById("volume");
  const hornimg = document.querySelector("[alt='No image selected']");
  const volimg = document.querySelector("[alt='Volume level 2']");
  const audioplayer = document.getElementsByClassName("hidden")[0];
  const button = document.getElementsByTagName("button")[0];

  var vol = volselector.value/100;

  audioplayer.volume = vol;

  if(vol == 0) volimg.setAttribute("src","assets/icons/volume-level-0.svg");
  else if(vol < 0.33) volimg.setAttribute("src","assets/icons/volume-level-1.svg");
  else if(vol < 0.67) volimg.setAttribute("src","assets/icons/volume-level-2.svg");
  else volimg.setAttribute("src","assets/icons/volume-level-3.svg");

  hornimg.setAttribute("src","assets/images/"+hornselector.value+".svg");
  audioplayer.setAttribute("src","assets/audio/"+hornselector.value+".mp3");
  //console.log(volselector);

  hornselector.addEventListener('change', (event)=>{
    hornimg.setAttribute("src","assets/images/"+event.target.value+".svg");
    audioplayer.setAttribute("src","assets/audio/"+event.target.value+".mp3");
  });

  volselector.addEventListener('input', (event)=>{
    vol = event.target.value/100;
    //console.log(vol);

    audioplayer.volume = vol;
    
    if(vol == 0) volimg.setAttribute("src","assets/icons/volume-level-0.svg");
    else if(vol < 0.33) volimg.setAttribute("src","assets/icons/volume-level-1.svg");
    else if(vol < 0.67) volimg.setAttribute("src","assets/icons/volume-level-2.svg");
    else volimg.setAttribute("src","assets/icons/volume-level-3.svg");
  });

  button.addEventListener('click', (event)=>{
    audioplayer.play();
    if(hornselector.value = "party-horn") jsConfetti.addConfetti();
  });
}