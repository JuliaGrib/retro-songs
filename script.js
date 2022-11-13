const control = document.querySelector('.control');
const title = document.querySelector('.title');
const audio = document.querySelector('.audio');
const playBtn = document.querySelector('.song__btn');
const progressContainer = document.querySelector('.progress__container');
const progress = document.querySelector('.progress');
const volume = document.querySelector('#volume');

//случайное число

let songsLength = songs[0].length - 1;
let randomNum = Math.floor(Math.random() * songsLength);

//генерация случайной песни по случайному числу
audio.src = songs[0][randomNum].songSrc;


//плеер
function playSong() {
    control.classList.add('play');
    audio.play();
    playBtn.src = '/pause.svg';
}

function pauseSong() {
    control.classList.remove('play');
    audio.pause();
    playBtn.src = '/play.svg';
}

playBtn.addEventListener('click', () => {
    const isPlaying = control.classList.contains('play');
    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})

//progress bar
function updateProgress(e){
    const {duration, currentTime} = e.srcElement;
    const progresPercent = (currentTime / duration) *100;
    progress.style.width = `${progresPercent}%`;

}

audio.addEventListener('timeupdate', updateProgress);

//бегунок
function setProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
    console.log(duration);
}

progressContainer.addEventListener('click', setProgress);

//настройка звука
function soundVolume() {
    let v = this.value;
    audio.volume = v / 100;
}

volume.oninput = soundVolume;


//конец плеера

//генерация случайного массива
// //случайное число

// let songsLength = songs[0].length - 1;
// let randomNum = Math.floor(Math.random() * songsLength);

// //генерация случайной песни по случайному числу
// audio.src = songs[0][randomNum].songSrc;

let arrNum = [randomNum];
for (let i = 0; arrNum.length < 6; i++){
    let n = Math.floor(Math.random() * songsLength);
    
    if(!(arrNum.includes(n))){
        arrNum.push(n);
    }
}

const elems = document.querySelectorAll('.variant__elem');

for(let i = 0; i < 6; i++){
    elems[i].innerHTML = songs[0][arrNum[i]].songName;
}

elems.forEach(elem => {
    elem.addEventListener('click', ()=> {
        let currentName = songs[0][randomNum].songName;
        let chooseName = elem.innerHTML;
        if(currentName === chooseName) {
            elem.classList.add('win');
        }
        else {
            elem.classList.add('default');
        }
    })
})

