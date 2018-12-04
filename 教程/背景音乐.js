var bgmusic = document.getElementById('bgmusic');
bgmusic.addEventListener('canplay', function(){
	this.play();
}, false);
window.addEventListener('load', function(){
	window.addEventListener('touchstart', once, false);
}, false);
function once(){
	bgmusic.play();
	window.removeEventListener('touchstart', once, false);
}
