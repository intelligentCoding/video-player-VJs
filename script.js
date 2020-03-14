//first thing to do is to get all dom elements

const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


//Play and Pause the video
function toggleVideoStatus(){
	if(video.paused){
		video.play();
	} else{
		video.pause();
	}
}

//update icons when click on play and pause
function updatePlayIcon(){
	if(video.paused){
		play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
	} else {
		play.innerHTML = '<i class="fa fa-pause fa-2x"></i>';
	}
}

//this function wil update the progres bar of the video
function updateProgress(){

	progress.value = (video.currentTime / video.duration) * 100;
	console.log(Math.floor(video.currentTime % 60));

	//We will need to get the minutes
	let mins = Math.floor(video.currentTime / 60);
	//get seconds
	let secs = Math.floor(video.currentTime % 60);
	timestamp.innerHTML = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

//When users clicks on the progress bar, update the progres then
function setVideoProgress(){
	video.currentTime = (+progress.value * video.duration) / 100;
}

//to stop the video
function stopVideo(){
	video.currentTime=  0;
	video.pause();
}

// create event listeners
video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);


play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);

