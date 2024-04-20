var isTVOn = false;
var videoPlaybackTime = 0;

// Function to toggle TV image, static image, and video
function toggleTV() {
     if (!isTVOn) {
        document.getElementById('tv').src = "img/tv-transition.png";
        isTVOn = true;

        // Show static gif during transition with delay
        document.getElementById('static').style.display = 'block';
           
        setTimeout(function() {
            document.getElementById('static').style.display = 'none';

            // Show video after static ends
            var videoElement = document.querySelector('.tv-video');
            videoElement.style.display = 'block';
            // Save video playback time for when user returns to video
            videoElement.currentTime = videoPlaybackTime;
   
            videoElement.play();

            // show static above video playing
            document.getElementById('static-overlay').style.display = 'block';
        }, 500);

        // Play static gif audio with lower volume
        var staticAudio = document.getElementById('static-audio');
        staticAudio.volume = 0.05; // Adjust volume level here
        staticAudio.play();
    } else {
        document.getElementById('tv').src = "img/tv-resize.png";
        isTVOn = false;

        // Pause the video and store current playback time
        var videoElement = document.querySelector('.tv-video');
        videoPlaybackTime = videoElement.currentTime;
        videoElement.pause();
        // hide static above video playing
        document.getElementById('static-overlay').style.display = 'none';
    }
}

// ---POWER--- //

// testing: check if spacebar is pressed, toggles TV on/off
document.addEventListener('keyup', function(event) {
    console.log("key up");
    if (event.key === " ") {
        toggleTV();
    }
});

// when user clicks on power button, switch the img correspondingly
function togglePowerButton() {
    var powerButton = document.getElementById('power-button');
    if (isTVOn) {
        powerButton.src = "img/power-button-on.png";
    } else {
        powerButton.src = "img/power-button-off.png";
    }
}

// plays audio for power button
function playButtonPressSound() {
    var buttonPressSound = document.getElementById('power-button-sound');
    buttonPressSound.volume = 1;
    buttonPressSound.play();
}

// when user clicks on power button, turn on/off tv and switch button img
document.getElementById('power-button').addEventListener('click', function() {
    toggleTV();
    togglePowerButton();
    playButtonPressSound();
});



// ---RESPONSIVE--- ///

// sets tv-container element to size of tv img
document.addEventListener("DOMContentLoaded", function() {

    window.addEventListener("resize", ()=>{
        getTVImageHeight()
    })

    const getTVImageHeight = () => {
        const img = document.getElementById("tv");
        const imgHeight = img.clientHeight;
        document.documentElement.style.setProperty('--tv-height', `${imgHeight}px`)
    }
    getTVImageHeight()
});
