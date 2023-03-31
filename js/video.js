var video = document.getElementById("player1");
var playBtn = document.getElementById("play");
var pauseBtn = document.getElementById("pause");
var slowerBtn = document.getElementById("slower");
var fasterBtn = document.getElementById("faster");
var skipBtn = document.getElementById("skip");
var muteBtn = document.getElementById("mute");
var slider = document.getElementById("slider");
var volume = document.getElementById("volume");


if (video) {
	window.addEventListener("load", function() {
		console.log("Good job opening the window");
		video.load();
		video.autoplay = false;
		video.loop = false;
	});
	
	// Play video and set volume info
	if (playBtn) {
		playBtn.addEventListener("click", function() {
			console.log("Play!");
			video.play();
			volume.innerHTML = slider.value;
		});
	}; // play
	
	// Pause video
	if (pauseBtn) {
		pauseBtn.addEventListener("click", function() {
			console.log("Pause!");
			video.pause();
		});
	}; // pause 
	
	// Slow video by 10% and log new speed
	if (slowerBtn) {
		slowerBtn.addEventListener("click", function() {
			console.log("Slower!");
			var currentPlaybackRate = video.playbackRate;
			var newPlaybackRate = currentPlaybackRate * .9;
			video.playbackRate = newPlaybackRate;
			console.log("New playback rate is: " + video.playbackRate);
		});
	}; // slower
	
	// Accelerate video by 10% and log new speed
	if (fasterBtn) {
		fasterBtn.addEventListener("click", function() {
			console.log("Faster!");
			var currentPlaybackRate = video.playbackRate;
			var newPlaybackRate = currentPlaybackRate / .9;
			video.playbackRate = newPlaybackRate;
			console.log("New playback rate is: " + video.playbackRate);
		});
	}; // faster
	
	// Skip ahead 10 seconds. If at end of video, set back to beginning
	if (skipBtn) {
		skipBtn.addEventListener("click", function() {
			console.log("Skip!");
			var time = video.currentTime;
			var newTime = time + 10;
			video.currentTime += 10;

			if (video.ended) {
				video.currentTime = 0;
				newTime = 0;
			}
			console.log("Time before skip: " + time);
			console.log("Time after skip: " + newTime);
		});
	} // skip

	// Mute and unmute, as well as change the button words
	if (muteBtn) {
		muteBtn.addEventListener("click", function() {
			if (video.muted) {
				video.muted = false;
				document.getElementById("mute").innerHTML = "Mute";
			}
			else {
				video.muted = true;
				document.getElementById("mute").innerHTML = "Unmute";
			}
		});
	};

	if (slider) {
		slider.addEventListener("click", function() {
			video.volume = slider.value / 100;
			volume.innerHTML = slider.value;
		});
	}
} // video