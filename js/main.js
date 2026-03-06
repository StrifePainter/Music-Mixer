console.log("JavaScript File is linked");

// Variables
const albumCovers = document.querySelectorAll("#album-art img");
const audioPlayer = document.querySelector('audio');
const playButton = document.querySelector('#playButton');
const pauseButton = document.querySelector('#pauseButton');
const rewind = document.querySelector('#rewindButton');
const volSlider = document.querySelector('#volumeControl');

console.log(volSlider);




// functions

function loadAudio() {
    console.log("Audio Loaded Called");
}



// Event liSTENERS
albumCovers.foreEach(cover => {
    cover.addEventListener("click", loadAudio)
});
covers.forEach(cover => cover.addEventListener('click', loadAudio));

// add event handling for the custom controls
playbtn.addEventListener('click', playAudio);
rewindbtn.addEventListener('click', restartAudio);
pausebtn.addEventListener('click', pauseAudio);
vol.addEventListener('change', setVolume);