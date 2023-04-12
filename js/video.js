var video = document.getElementById("player1");
var play_btn = document.querySelector("#play");
var pause_btn = document.querySelector("#pause");
var slower_btn = document.querySelector("#slower");
var faster_btn = document.querySelector("#faster");
var skip_btn = document.querySelector("#skip");
var mute_btn = document.querySelector("#mute");
var slider_btn = document.querySelector("#slider");
var vintage_btn = document.querySelector("#vintage");
var orig_btn = document.querySelector("#orig");

if (video) {
	window.addEventListener("load", function() {
		console.log("Good job opening the window");
		video.load();
		video.autoplay = false;
		video.loop = false;
		console.log("Page load");
	});

	if (play_btn) {
		document.querySelector("#play").addEventListener("click", function() {
			console.log("Play Video");
			//play vid
			video.play();
			//update volume info
			volume.innerHTML = document.getElementById("slider").value + "%";
		});
	}

	if (pause_btn) {
		document.querySelector("#pause").addEventListener("click", function() {
			console.log("Pause Video");
			//pause vid
			video.pause();
		});
	}

	if (slower_btn) {
		document.querySelector("#slower").addEventListener("click", function() {
			console.log("Slow Down");
			//slow vid
			video.playbackRate *= 0.9;
			console.log("New playback rate is: " + video.playbackRate);
		});
	}

	if (faster_btn) {
		document.querySelector("#faster").addEventListener("click", function() {
			console.log("Speed Up");
			//slow vid
			video.playbackRate /= 0.9;
			console.log("New playback rate is: " + video.playbackRate);
		});
	}

	if (skip_btn) {
		document.querySelector("#skip").addEventListener("click", function() {
			console.log("Skip Ahead");
			video.currentTime += 10;

			if (video.ended) {
				video.currentTime = 0;
			}
			console.log("Current loaction is " + video.currentTime);
		});
	}

	if (mute_btn) {
		document.querySelector("#mute").addEventListener("click", function() {
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
	}

	if (slider_btn) {
		document.querySelector("#slider").addEventListener("click", function() {
			//volume is percentile
			video.document.getElementById("volume").value = slider.value / 100;
			//
			volume.innerHTML = slider.value + "%";
		});
	}

	if (vintage_btn) {
		document.querySelector("#vintage").addEventListener("click", function() {
			video.classList.add("oldSchool");
		});
	}

	if (orig_btn) {
		document.querySelector("#orig").addEventListener("click", function() {
			video.classList.remove("oldSchool");
		});
	}
}