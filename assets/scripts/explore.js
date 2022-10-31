// explore.js

window.addEventListener('DOMContentLoaded', init);

//I referenced the site below and adapted the code accordingly to explore.html
//https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis
function init() {

  const button = document.querySelector('button');
  const selectSmiling = document.querySelector('img');
  const selectVoice = document.getElementById("voice-select");
  let voices =  [];


  function populateVoiceList() {
    if (typeof speechSynthesis === 'undefined') {
      return;
    }
    voices = speechSynthesis.getVoices();

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      selectVoice.appendChild(option);
    }
  }
  
  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }


  button.addEventListener('click', (event) => {
    const textToRead = document.querySelector('textarea');
    const toSpeak = new SpeechSynthesisUtterance(textToRead.value);
    const voiceLang = selectVoice.selectedOptions[0].getAttribute('data-name');
    for (let i = 0; i < voices.length ; i++) {
      if (voices[i].name === voiceLang) {
        toSpeak.voice = voices[i];
      }
    }
    selectSmiling.src = "assets/images/smiling-open.png";
    speechSynthesis.speak(toSpeak);
    textToRead.blur();
    toSpeak.onend = changeSmile;

  });

  function changeSmile(){
    selectSmiling.setAttribute('src', "assets/images/smiling.png");
  }


}