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
let draggedItem = null;
let loopStart = null;
// variable = object
const currentLoop = [];

// making js aware of all audio loops
// making an object of all loops
const allLoops = {
    pluck : "music/pluck.mp3",
    drums : "music/drums.mp3",
    bass : "music/bass.mp3",
    brightPiano : "music/bright-piano.mp3",
    guitar : "music/guitar.mp3",
    monarchPiano : "music/monarch-piano.mp3"
}

// functions

// had to research how to make the audio loops play over each other
function loadAudio() {
    const musicLoop = draggedItem.dataset.trackref;
    const newAudio = new Audio(`music/${musicLoop}.mp3`);
    newAudio.loop = true;
    newAudio.play();

    // push adds to the object []
    currentLoop.push(newAudio);
}

function playAudio() {
    currentLoop.forEach(audio => audio.play());
}

function pauseAudio() {
    // audioPlayer.pause();
    currentLoop.forEach(audio => audio.pause());
}

function restartAudio() {
    currentLoop.forEach(audio => {
        audio.currentTime = 0;
        audio.play();
    });
}

function setVolume(audio) {
    const volume = this.value / 100;
    currentLoop.forEach(audio => {
        audio.volume = volume;
    });
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
     window.location.reload();
}

// Event listeners

dragItems.forEach(icon => {
    icon.addEventListener("click", () => {
        draggedItem = icon;
        loadAudio();
    });

    icon.addEventListener('dragstart', dragStart);
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
