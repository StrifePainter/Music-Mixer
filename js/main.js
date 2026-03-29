console.log("JavaScript File is linked");

// Variables
// const albumCovers = document.querySelectorAll("#album-art img");
const audioPlayer = document.querySelector('audio');
const playBtn = document.querySelector('#playButton');
const pauseBtn = document.querySelector('#pauseButton');
const rewindBtn = document.querySelector('#rewindButton');
const volSlider = document.querySelector('#volumeControl');
const dropZones = document.querySelectorAll(".drop-zone");
const dragItems = document.querySelectorAll(".loop");
let draggedItem = null;

console.log(dragItems);


// functions

function loadAudio() {
    console.log("Audio Loaded Called");
    audioPlayer.src = `music/${draggedItem.dataset.trackref}.mp3`
    audioPlayer.load();
    playAudio();
}

function playAudio() {
    audioPlayer.play();
}

function pauseAudio() {
    audioPlayer.pause();
}

function restartAudio() {
    audioPlayer.currentTime = 0;
    playAudio();
}

function setVolume() {
    theAudioEl.volume = (this.value/100);
}

function dragStart() {
    draggedItem = this;
}

function dragOver(e){
    e.preventDefault();
    console.log("dragover");
}

function dropped(e){

    console.log("dropped");
    e.preventDefault();

    //failsafe
    if (!draggedItem) return;
 
    loadAudio();
    
  // add image to target zone
  this.appendChild(draggedItem);

  // reset the referenced item
  draggedItem = null;
}


// Event liSTENERS

//when item is dropped into drop zone run play audio function

dragItems.forEach(icon => {
    icon.addEventListener("click", loadAudio);
    icon.addEventListener('dragstart' , dragStart);
});

dropZones.forEach (zone => {
    zone.addEventListener('dragover' , dragOver);
    zone.addEventListener('drop' , dropped)
});



// add event handling for the custom controls
playBtn.addEventListener('click', playAudio);
rewindBtn.addEventListener('click', restartAudio);
pauseBtn.addEventListener('click', pauseAudio);
volSlider.addEventListener('change', setVolume);
