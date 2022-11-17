const control = document.querySelector('.control');
const title = document.querySelector('.title');
const audio = document.querySelector('.audio');
const playBtn = document.querySelector('.song__btn');
const progressContainer = document.querySelector('.progress__container');
const progress = document.querySelector('.progress');
const volume = document.querySelector('#volume');
const variantElem = document.querySelectorAll('.variant__elem');
const coverMain = document.querySelector('.cover__img');
const yesSong = document.querySelector('.yes');
const noSong = document.querySelector('.no');
const scoreInfo = document.querySelector('.score_info');
const sideabarCover = document.querySelector('.choose__img');
const sideabarSongName = document.querySelector('.choose__song-name');
const nextBtn = document.querySelector('.next');
const yearsList = document.querySelectorAll('.header__elem');

//Определяет номер вопроса
let question = 0;
//Объявляем переменную случайного числа
let randomNum;
let score = 0;

//запускаем работу
function startGame(){
    makeRandomNum(question);
    makeStartSong(question);
    makeSongsList(question);
    changeYear(question);
}

startGame();

//переключение года
function changeYear(question){
    yearsList.forEach(elem => {
        elem.classList.remove('active');
    })
    yearsList[question].classList.add('active');
}

//генерация случайного числа по текущему вопросу
function makeRandomNum(question){
    //вычисляем длину массива нынешних песен
    let countSongs = songs[question].length - 1;
    randomNum = Math.floor(Math.random() * countSongs);
    return randomNum;
}

//функция по запуску песни
function makeStartSong(question) {
    audio.src = songs[question][randomNum].songSrc;
}
// функция по перезагрузке контента main
function startMainSong(){
    title.innerHTML = "What's song?";
    coverMain.src = 'question.jpg';
}
//Фукнция заполнения фото и названия при победе
function rightSong(elem){
    coverMain.src = `assets/img/${yearsArr[question]}/${elem}.jpg`;
    title.innerHTML = elem;
}

//функция по заполнению списка песен
function makeSongsList(question){
    let arrList = [];
    arrList.push(songs[question][randomNum].songName);  //пушим рандомное число сразу в массив

    for(let i = 0; arrList.length < 6; i++) {
        let n = Math.floor(Math.random() * (songs[question].length - 1));  //рандомное числo
        if(!(arrList.includes(songs[question][n].songName))){ //проверка есть ли эта песня в массиве
            arrList.push(songs[question][n].songName);
        }    
    }

    arrList.sort(makeRandomArr);  //перемешиваем массив

    for(let i = 0; i < variantElem.length; i++){
        variantElem[i].innerHTML = arrList[i];
    }
}

//функция перемешивания
function makeRandomArr(a, b) {
  return Math.random() - 0.5;
}

//какую кнопку кликнули
variantElem.forEach(elem => {
    elem.addEventListener('click', () => {
        chooseProgress.style.width = '0px';
        let currentName = songs[question][randomNum].songName;
        let chooseName = elem.innerHTML;
        showSongSidebar(chooseName);
        makeChooseSong(chooseName);
        if(currentName === chooseName) {
            rightSong(chooseName);
            rightAnswer(elem);
        }
        else {
            if(!(elem.classList.contains('default'))){
                vrongAnswer(elem);
            }
        }
        
    })
})

//верный ответ
function rightAnswer(elem) {
    elem.classList.add('win');
    yesSong.play();
    pauseSong();
    nextBtn.classList.add('next-active');

    let arr = [];
    variantElem.forEach(elem => {
        if(elem.classList.contains('default')){
            arr.push(elem);
        }
    });
    if(arr.length == 0) {
        score += 5;
        scoreInfo.innerHTML = `Score: ${score}`
    }
    else if (arr.length == 1) {
        score += 4;
        scoreInfo.innerHTML = `Score: ${score}`
    }
    else if (arr.length == 2) {
        score += 3;
        scoreInfo.innerHTML = `Score: ${score}`
    }
    else if (arr.length == 3) {
        score += 2;
        scoreInfo.innerHTML = `Score: ${score}`
    }
    else if (arr.length == 4) {
        score += 1;
        scoreInfo.innerHTML = `Score: ${score}`
    }
    else if (arr.length == 5) {
        score += 0;
        scoreInfo.innerHTML = `Score: ${score}`
    }
    
    for(let i = 0; i < variantElem.length; i++){
        if(!(variantElem[i].classList.contains('default')) && !(variantElem[i].classList.contains('win'))){
            variantElem[i].classList.add('no-choose');
        }
        
    }
    
    return elem;   
}

//неверный ответ
function vrongAnswer(elem){
    noSong.play();
    return elem.classList.add('default');
}






//////////////////////// sidebar

//песня сбоку
function showSongSidebar(elem){
    sideabarCover.src = `assets/img/${yearsArr[question]}/${elem}.jpg`;
    sideabarSongName.innerHTML = elem;
}



// Переключение вопроса

//функция по запуску песни choose
function makeChooseSong(elem) {
    showChooseSong();
    chooseAudio.src = `assets/music/${yearsArr[question]}/cut/${elem}.mp3`;

    for(let i = 0; i < songs[question].length - 1; i++) {
        if(elem === songs[question][i].songName){
            chooseText.innerHTML = songs[question][i].en;
        }
    }

}

nextBtn.addEventListener('click', () => {
    question++;
    nextBtn.classList.remove('next-active');
    chooseControl.classList.remove('play');
    chooseProgress.style.width = '0px';
    progress.style.width = '0px';
    startGame();
    startMainSong();
    startSideBar();


    variantElem.forEach(elem => {
        elem.classList.remove('win');
        elem.classList.remove('default');
        elem.classList.remove('no-choose');
    })
})


function startSideBar() {
    sideabarSongName.innerHTML = 'Song name';
    sideabarCover.src = 'question.jpg';
    chooseText.innerHTML = 'About song';
    chooseAudio.src = '';
    choosePlayBtn.src = 'noplay.svg';
    choosePlayBtn.style.pointerEvents = 'none';
    chooseProgressContainer.style.pointerEvents = 'none';
    chooseProgress.style.pointerEvents = 'none';
}

function showChooseSong() {
    choosePlayBtn.src = 'play.svg';
    choosePlayBtn.style.pointerEvents = 'all';
    chooseProgressContainer.style.pointerEvents = 'all';
    chooseProgress.style.pointerEvents = 'all';
}












//плеер
function playSong() {
    control.classList.add('play');
    audio.play();
    playBtn.src = 'pause.svg';
}

function pauseSong() {
    control.classList.remove('play');
    audio.pause();
    playBtn.src = 'play.svg';
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



//второй плеер
const chooseControl = document.querySelector('.choose__control');
const chooseTitle = document.querySelector('.title');
const chooseAudio = document.querySelector('.choose__audio');
const choosePlayBtn = document.querySelector('.choose__song__btn');
const chooseProgressContainer = document.querySelector('.choose__progress__container');
const chooseProgress = document.querySelector('.choose__progress');
const chooseVolume = document.querySelector('.choose__range');
const chooseText = document.querySelector('.choose__text');

function choosePlaySong() {
    chooseControl.classList.add('play');
    chooseAudio.play();
    choosePlayBtn.src = 'pause.svg';
}

function choosePauseSong() {
    chooseControl.classList.remove('play');
    chooseAudio.pause();
    choosePlayBtn.src = 'play.svg';
}

choosePlayBtn.addEventListener('click', () => {
    const isPlaying = chooseControl.classList.contains('play');
    if(isPlaying) {
        choosePauseSong();
    } else {
        choosePlaySong();
    }
});



//progress bar
function chooseUpdateProgress(e){
    const {duration, currentTime} = e.srcElement;
    const progresPercent = (currentTime / duration) *100;
    chooseProgress.style.width = `${progresPercent}%`;

}

chooseAudio.addEventListener('timeupdate', chooseUpdateProgress);

//бегунок
function chooseSetProgress(e){
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = chooseAudio.duration;
    chooseAudio.currentTime = (clickX / width) * duration;
    console.log(duration);
}

chooseProgressContainer.addEventListener('click', chooseSetProgress);

//настройка звука
function chooseSoundVolume() {
    let v = this.value;
    chooseAudio.volume = v / 100;
}

chooseVolume.oninput = chooseSoundVolume;