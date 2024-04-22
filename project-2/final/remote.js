var isTVOn = false;
var videoPlaybackTime = 0;
var videos = ["spongebob-elders.mp4"];
var currentVideoSrc = "";

// Function to toggle TV image, static image, and video
function toggleTV() {
     if (!isTVOn) {
        document.getElementById('tv').src = "img/tv-transition.png";
        isTVOn = true;

        // Show static gif when TV powers on
        staticTransition();
        
        setTimeout(function() {

            playVideo();

        }, 500);

    } else {
        document.getElementById('tv').src = "img/tv.png";
        isTVOn = false;

        pauseVideo();
    }
}

// ---VIDEO--- ///

// display a randomly selected video with a faint static overlay 
function playVideo() {

    // Show video after static ends
    var videoElement = document.querySelector('.tv-video');
    videoElement.style.display = 'block';

    // Resume playback from previous position if the same video is still selected
    if (videoElement.src === currentVideoSrc) {
        videoElement.currentTime = videoPlaybackTime;
    } else {
        // randomly select a video
        var randomIndex = Math.floor(Math.random() * videos.length);
        var randomVideo = videos[randomIndex];
        videoElement.src = "gif-vids/" + randomVideo;
        currentVideoSrc = videoElement.src; // Update current video source
        videoElement.currentTime = 0; // Reset playback time for new video
    }
    videoElement.play();

    // constantly show other static gif above video playing
    document.getElementById('static-overlay').style.display = 'block';

}

// pauses the video and saves where the user stopped
function pauseVideo() {

    // Pause the video and store current playback time
    var videoElement = document.querySelector('.tv-video');
    videoPlaybackTime = videoElement.currentTime;
    videoElement.pause();
    // hide static above video playing
    document.getElementById('static-overlay').style.display = 'none';

}

// ---STATIC--- //

// plays a transition gif of static when TV powers on/off or when channel switches
function staticTransition() {
    document.getElementById('static').style.display = 'block';

    var staticAudio = document.getElementById('static-audio');
    staticAudio.volume = 0.05;
    staticAudio.play();

    setTimeout(function() {

        document.getElementById('static').style.display = 'none';

    }, 500);
}

// ---POWER--- //

// testing: check if spacebar is pressed, toggles TV on/off
document.addEventListener('keyup', function(event) {
    console.log("key up");
    if (event.key === " ") {
        toggleTV();
        togglePowerButton();
    }
});

// when user clicks on power button, switch the img correspondingly
function togglePowerButton() {
    var powerButton = document.getElementById('power-button');
    if (isTVOn) {
        powerButton.src = "img/power-button-on.png";
        playButtonPressSound();
    } else {
        powerButton.src = "img/power-button-off.png";
        playButtonPressSound();
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
});

// ---DIAL--- ///

// rotates the dial image and switches to a random channel/video
function rotateDial() {
    var dialImage = document.getElementById('channel-knob');
    var currentRotation = dialImage.style.transform;
    var angle = (currentRotation.match(/rotate\(([-\d]+)deg\)/) || [])[1] || 0;
    var newAngle = parseInt(angle) + 10; // Adjust rotation here
    dialImage.style.transform = "translateX(-90%) translateY(-0%) rotate(" + newAngle + "deg)";
}
document.getElementById('channel-knob').addEventListener('click', function() {
    rotateDial();
    console.log("dial move");
    if (isTVOn) {
        staticTransition();
        pauseVideo();
        playVideo();// Switch the channel
    }
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
