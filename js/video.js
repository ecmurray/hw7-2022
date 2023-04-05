
// defines variables for various elements on the page
var video = document.getElementById("player1");
var playBtn = document.getElementById("play");
var pauseBtn = document.getElementById("pause");
var slowerBtn = document.getElementById("slower");
var fasterBtn = document.getElementById("faster");
var skipBtn = document.getElementById("skip");
var muteBtn = document.getElementById("mute");
var slider = document.getElementById("slider");
var volume = document.getElementById("volume");
var vintage = document.getElementById("vintage");
var orig = document.getElementById("orig");

//checks if video variable is defined
//sets up an event listener that logs a message to the console and loads the video when the window is loaded
if (video) {
	window.addEventListener("load", function() {
		console.log("Good job opening the window");
		//intialize vid elements
		video.load();
		//turn off autoplay
		video.autoplay = false;
		//turn off looping
		video.loop = false;
	});
	
	// when clicked button, event listener logs a message to console, plays video, updates volume display
	if (playBtn) {
		playBtn.addEventListener("click", function() {
			console.log("Play!");
			//play vid
			video.play();
			//update volume info
			volume.innerHTML = slider.value + "%";
		});
	} // play
	
	// Pause video
	if (pauseBtn) {
		pauseBtn.addEventListener("click", function() {
			console.log("Pause!");
			//pause vid
			video.pause();
		});
	} // pause 
	
	// event listener slows video playback speed by 10% and logs new rate to the console
	if (slowerBtn) {
		slowerBtn.addEventListener("click", function() {
			console.log("Slower!");
			var currentPlaybackRate = video.playbackRate;
			var newPlaybackRate = currentPlaybackRate * .9;
			video.playbackRate = newPlaybackRate;
			//logs new playback rate
			console.log("New playback rate is: " + video.playbackRate);
		});
	} // slower
	
	// event listener accelerates video playback speed by 10% and logs new rate to the console
	if (fasterBtn) {
		fasterBtn.addEventListener("click", function() {
			console.log("Faster!");
			var currentPlaybackRate = video.playbackRate;
			// increase video playback speed by 10%
			var newPlaybackRate = currentPlaybackRate / .9;
			video.playbackRate = newPlaybackRate;
			console.log("New playback rate is: " + video.playbackRate);
		});
	} // faster
	
	// event listener skips the video ahead 10 seconds and sets it back to beginning if reaches the end
	if (skipBtn) {
		skipBtn.addEventListener("click", function() {
			console.log("Skip!");
			video.currentTime += 10;

			if (video.ended) {
				video.currentTime = 0;
			}
			console.log("Current time is " + video.currentTime);
		});
	} // skip

	// event listener mutes and unmutes the video when clicked and updates button text accordingly
	if (muteBtn) {
		muteBtn.addEventListener("click", function() {
			if (video.muted) { //user clicks to unmute a muted vid
				video.muted = false;
				//update button to "mute" vid again
				document.getElementById("mute").innerHTML = "Mute";
			}
			else { //user clicks to mute an unmuted vid
				video.muted = true;
				//update button to "unmute" vid again
				document.getElementById("mute").innerHTML = "Unmute";
			}
		});
	} // mute
	
	// event listener updates the volume of the video as the slider is moved and updates volume display
	if (slider) {
		slider.addEventListener("click", function() {
			//volume is percentile
			video.volume = slider.value / 100;
			//
			volume.innerHTML = slider.value + "%";
		});
	} // slider

	// event listener adds CSS class oldSchool from video element, changing the appearance of the video player
	if (vintage) {
		vintage.addEventListener("click", function() {
			video.classList.add("oldSchool");
		});
	} // vintage

	// event listener disables CSS class oldSchool from video element, changing the appearance of the video player
	if (orig) {
		orig.addEventListener("click", function() {
			video.classList.remove("oldSchool");
		});
	} // orig
} // video
