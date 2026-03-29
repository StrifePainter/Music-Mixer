console.log("JavaScript File is linked");

// Variables
const albumCovers = document.querySelectorAll("#album-art img");
const audioPlayer = document.querySelector('audio');
const playButton = document.querySelector('#playButton');
const pauseButton = document.querySelector('#pauseButton');
const rewind = document.querySelector('#rewindButton');
const volSlider = document.querySelector('#volumeControl');
const dropZones = document.querySelectorAll(".drop-zone");
const dragItems = document.querySelectorAll(".drag-icon");

console.log(volSlider);




// functions

function loadAudio() {
    console.log("Audio Loaded Called");
    theAudioEl.src = `audio/${this.dataset.trackref}.mp3`
    theAudioEl.load();
    playAudio();
}

function playAudio{
    theAudioEl.play();
}

function pauseAudio() {
    theAudioEl.pause();
}

function restartAudio() {
    theAudioEl.currentTime = 0;
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
}

function dropped(e){
    e.preventDefault();
     draggedItem.classList.add("hidden");
  // console.log(draggedItem.dataset.instrument);
  const newImage = document.createElement("img");
  // dynamically recreate image path
  newImage.src = `images/${draggedItem.dataset.instrument}.jpg`;

  // error handling if error doesn't exist
  // if(!newImage){
  //   return;
  // }

  // add image to target zone
  this.appendChild(newImage);

  // reset the referenced item
  draggedItem = null;

  // create audio element just like creating the image element
  // dynamically set src attribute 
  // load it
  // append it
  // make it loop
  // make it play
}


// Event liSTENERS

//when item is dropped into drop zone run play audio function

albumCovers.foreEach(cover => {
    cover.addEventListener("click", loadAudio)
});
covers.forEach(cover => cover.addEventListener('click', loadAudio));

// add event handling for the custom controls
playbtn.addEventListener('click', playAudio);
rewindbtn.addEventListener('click', restartAudio);
pausebtn.addEventListener('click', pauseAudio);
vol.addEventListener('change', setVolume);
