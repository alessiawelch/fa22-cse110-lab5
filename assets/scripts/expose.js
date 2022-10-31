// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {

//All variables
const selectElement = document.getElementById('horn-select');
const selectImage = document.querySelector('img');
const selectSound = document.querySelector('audio');
const button = document.querySelector('button');
const selectSoundLevel = document.getElementById('volume');
const showConfetti = new JSConfetti();

//for when an element is chosen from drop down
selectElement.addEventListener('change', (event) => {
  if(selectElement.value == 'air-horn'){
    selectImage.src = "assets/images/air-horn.svg";
    selectSound.src = "assets/audio/air-horn.mp3";
  }
  else if (selectElement.value == 'car-horn'){
    selectImage.src = "assets/images/car-horn.svg";
    selectSound.src = "assets/audio/car-horn.mp3";
  }
  else if (selectElement.value == 'party-horn'){
    selectImage.src = "assets/images/party-horn.svg";
    selectSound.src = "assets/audio/party-horn.mp3";
  }
});

//for when sound level is chosen
selectSoundLevel.addEventListener('change', (event) => {
  const selectSoundImage = document.querySelector('div img');
  if(selectSoundLevel.value >= 67){
    selectSoundImage.src = "assets/icons/volume-level-3.svg";
    selectSoundImage.alt = "Volume Level 3";
  }
  else if (selectSoundLevel.value >= 33){
    selectSoundImage.src = "assets/icons/volume-level-2.svg";
    selectSoundImage.alt = "Volume Level 2";
  }
  else if (selectSoundLevel.value >= 1){
    selectSoundImage.src = "assets/icons/volume-level-1.svg";
    selectSoundImage.alt = "Volume Level 1";
  }
  else{
    selectSoundImage.src = "assets/icons/volume-level-0.svg";
    selectSoundImage.alt = "Volume Level 0";
  }
  selectSound.volume = selectSoundLevel.value/100;
});

//for when button is clicked
button.addEventListener('click', (event) => {
  selectSound.play();
  if(selectElement.value == 'party-horn'){
    showConfetti.addConfetti();
  }
});
}