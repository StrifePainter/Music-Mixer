console.log("JavaScript File is linked");

// Variables

const audioPlayer = document.querySelector('audio');
const playBtn = document.querySelector('#playButton');
const pauseBtn = document.querySelector('#pauseButton');
const rewindBtn = document.querySelector('#rewindButton');
const volSlider = document.querySelector('#volumeControl');
const dropZones = document.querySelectorAll(".drop-zone");
const dragItems = document.querySelectorAll(".loop");
const resetBtn = document.querySelector("#resetButton");
const iconsDiv = document.querySelector("#drag-icons-con");
const dragReset = document.querySelectorAll(".drag-icon");
let draggedItem = null;

// making js aware of all audio loops
// making an object of all loops
const allLoops = {
    pluck : "music/pluck.mp3",
    drums : "music/drums.mp3",
    bass : "music/bass.mp3",
    brightPiano : "music/bright-piano.mp3",
    guitar : "music/guitar.mp3",
    monarchPiano : "music/monarch-piano"
}

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
    audioPlayer.volume = (this.value/100);
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
    // can't drop more than 1
    if(this.children.length >= 1){
    return;
  }
    
  // add image to target zone
  this.appendChild(draggedItem);

  loadAudio();

  // reset the referenced item
  draggedItem = null;
}

function resetPage() {
    // console.log("resetti");
    // console.log(dragItems);

    // dragReset.forEach(icon => {
    //     iconsDiv.appendChild(icon);
    // });
     window.location.reload();
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
resetBtn.addEventListener('click', resetPage);
