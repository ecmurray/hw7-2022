var video = document.getElementById("player1");
if (video) {
	window.addEventListener("load", function() {
		console.log("Good job opening the window");
		video.load();
		video.autoplay = false;
		video.loop = false;
		console.log("Page load");
	});

	document.querySelector("#play").addEventListener("click", function() {
		console.log("Play Video");
		//play vid
		video.play();
		//update volume info
		volume.innerHTML = document.getElementById("slider").value + "%";
	});

	document.querySelector("#pause").addEventListener("click", function() {
		console.log("Pause Video");
		//pause vid
		video.pause();
	});

	document.querySelector("#slower").addEventListener("click", function() {
		console.log("Slow Down");
		//slow vid
		video.playbackRate *= 0.9;
		console.log("New playback rate is: " + video.playbackRate);
	});

	document.querySelector("#faster").addEventListener("click", function() {
		console.log("Speed Up");
		//slow vid
		video.playbackRate /= 0.9;
		console.log("New playback rate is: " + video.playbackRate);
	});

	document.querySelector("#skip").addEventListener("click", function() {
		console.log("Skip Ahead");
		video.currentTime += 10;

		if (video.ended) {
			video.currentTime = 0;
		}
		console.log("Current loaction is " + video.currentTime);
	});

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

	document.querySelector("#slider").addEventListener("click", function() {
		//volume is percentile
		video.document.getElementById("volume").value = slider.value / 100;
		//
		volume.innerHTML = slider.value + "%";
	});

	document.querySelector("#volume").addEventListener("click", function() {
		
	});

	document.querySelector("#vintage").addEventListener("click", function() {
		video.classList.add("oldSchool");
	});

	document.querySelector("#orig").addEventListener("click", function() {
		video.classList.remove("oldSchool");
	});
}