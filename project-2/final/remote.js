var isTVOn = false;
var videoPlaybackTime = 0;
var videos = ["spongebob-elders.mp4", "oldman-dancing.mp4", "clean-laptop.mp4", 
"green-ramp.mp4", "gartic.mp4", "lebron.mp4", "wolf-simp.mp4", 
"simpsons-talking.mp4", "pizza-aggressive.mp4", "jynxzi-cav.mp4",
"average-yasuo.mp4", "why-civil.mp4", "glasses.mp4", "deep-voice.mp4", "be-man.mp4",
"better-gamer.mp4", "dominican.mp4", "beluga.mp4", "brazil-dog.mp4", "shyboy.mp4",
"theboys.mp4", "theboys.mp4", "jorge-face.mp4", "jorge-face2.mp4", "jorge-sleep.mp4",
"glaze.mp4"];
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

// used when tv is powered on/off
function playVideo() {
    console.log("playVideo() called");
    try {
        var videoElement = document.querySelector('.tv-video');
        videoElement.style.display = 'block';

        console.log("Current video source:", videoElement.src); 

        // Resume playback from previous position when tv powers back on
        if (videoElement.src === "") {
            // randomly select a video
            var randomIndex = Math.floor(Math.random() * videos.length);
            var randomVideo = videos[randomIndex];
            console.log("Selected video:", randomVideo);
            videoElement.src = "gif-vids/" + randomVideo;
            currentVideoSrc = videoElement.src; // Update current video source
            videoElement.load();
            videoElement.currentTime = 0;
        } else {
            currentVideoSrc = videoElement.src; // Update current video source
            videoElement.currentTime = videoPlaybackTime;
        }

        // when the video naturally ends
        videoElement.addEventListener('ended', function() {
            staticTransition();
            playRandomVideo();
        });

        videoElement.volume = 0.1;
        videoElement.play();
        document.getElementById('static-overlay').style.display = 'block';
    } catch (error) {
        console.error("Error in playVideo():", error);
    }
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
    staticAudio.volume = 0.02;
    staticAudio.play();

    setTimeout(function() {

        document.getElementById('static').style.display = 'none';

    }, 500);
}

// ---POWER--- //

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
    buttonPressSound.volume = 0.2;
    buttonPressSound.play();
}

// when user clicks on power button, turn on/off tv and switch button img
document.getElementById('power-button').addEventListener('click', function() {
    toggleTV();
    togglePowerButton();
});
// testing: check if spacebar is pressed, toggles TV on/off
document.addEventListener('keyup', function(event) {
    if (event.key === " ") {
        console.log("spacebar up");
        toggleTV();
        togglePowerButton();
    }
});


// ---DIAL--- ///

// rotates the dial image and switches to a random channel/video
function rotateDial() {
    var dialImage = document.getElementById('channel-knob');
    var currentRotation = dialImage.style.transform;
    var angle = (currentRotation.match(/rotate\(([-\d]+)deg\)/) || [])[1] || 0;
    var newAngle = parseInt(angle) + 10;
    dialImage.style.transform = "translateX(-90%) rotate(" + newAngle + "deg)";

    console.log("dial move");
    playDialTurnSound();
    if (isTVOn) {
        staticTransition();
        pauseVideo();
        playRandomVideo();
    }
}
document.getElementById('channel-knob').addEventListener('click', rotateDial);

// plays audio for dial turning
function playDialTurnSound() {
    var dialTurnSound = document.getElementById('dial-turn-sound');
    dialTurnSound.volume = 0.2;
    dialTurnSound.play();
}

// Variable to store the index of the last played video
var lastVideoIndex = -1;

// plays a random video in the list, used for the dial function
function playRandomVideo() {
    console.log("playRandomVideo() called");
    try {
        var videoElement = document.querySelector('.tv-video');
        videoElement.style.display = 'block';

        console.log("Current video source:", videoElement.src); 

        // randomly select a video
        var randomIndex;
        do {
            randomIndex = Math.floor(Math.random() * videos.length);
        } while (randomIndex === lastVideoIndex); // Repeat until a different index is selected
        
        var randomVideo = videos[randomIndex];
        console.log("Selected video:", randomVideo);
        videoElement.src = "gif-vids/" + randomVideo;
        currentVideoSrc = videoElement.src; // Update current video source
        videoElement.load();
        videoElement.currentTime = 0;

        videoElement.play();
        document.getElementById('static-overlay').style.display = 'block';

        // Update the last video index
        lastVideoIndex = randomIndex;
    } catch (error) {
        console.error("Error in playRandomVideo():", error);
    }
}
// testing: check if left or right arrow key is pressed, same function as dial
document.addEventListener('keyup', function(event) {
    if (event.key === "ArrowLeft" || event.key ==="ArrowRight") {
        rotateDial();
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
