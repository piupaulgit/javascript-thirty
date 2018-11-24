const player = document.querySelector('.player')
const video = document.querySelector('.player__video')
const playBtn = document.querySelector('.player__button') 
const rangeBtn = document.querySelectorAll('.player__slider')
const progressBar = document.querySelector('.progress__filled')
const skipBtns = document.querySelectorAll('.player__button')
const toggle = player.querySelector('.toggle');

// functions
function playvideo(){
    const method = (video.paused) ? 'play' : 'pause';
    video[method]();
}

function updateBtn(){
    const icon = this.paused ? '►' : '❚ ❚';
    toggle.textContent = icon;
}

function skip(){
    video.currentTime += parseFloat(this.dataset.skip);
}
function handleRangeUpdate(){
    video[this.name] = this.value;
}
function scrub(e) {
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}

function handleProgress() {
const percent = (video.currentTime / video.duration) * 100;
progressBar.style.flexBasis = `${percent}%`;
}
// binding events
playBtn.addEventListener('click', playvideo)
video.addEventListener('click', playvideo)
video.addEventListener('play', updateBtn)
video.addEventListener('pause', updateBtn)
video.addEventListener('timeupdate', handleProgress);

skipBtns.forEach(skipBtn => skipBtn.addEventListener('click', skip))
rangeBtn.forEach(rangeBtn => rangeBtn.addEventListener('change', handleRangeUpdate))
let mousedown = false;
progressBar.addEventListener('click', scrub);
progressBar.addEventListener('mousemove', (e) => mousedown && scrub(e));
progressBar.addEventListener('mousedown', () => mousedown = true);
progressBar.addEventListener('mouseup', () => mousedown = false);
