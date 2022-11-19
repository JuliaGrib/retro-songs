let question;
let score;
let randomNum;

//start
const wrapperStart = document.createElement('div');
const logoStart = document.createElement('img');
const buttonsWrapper = document.createElement('div');
const buttonStartMain = document.createElement('button');
const buttonResultMain = document.createElement('button');
const buttonGalleryMain = document.createElement('button');
const buttonAboutMain = document.createElement('button');

wrapperStart.classList.add('wrapper__start');
logoStart.classList.add('logo__start');
buttonsWrapper.classList.add('buttons__start');
buttonStartMain.classList.add('btn__start');
buttonResultMain.classList.add('btn__result');
buttonGalleryMain.classList.add('btn__gallery');
buttonAboutMain.classList.add('btn__about');

logoStart.src = 'song.png';
buttonStartMain.innerHTML = 'Start';
buttonResultMain.innerHTML = 'Result';
buttonGalleryMain.innerHTML = 'Gallery';
buttonAboutMain.innerHTML = 'About';

//result
const wrapperResult = document.createElement('div');
const containerResult = document.createElement('div');
const headerResult = document.createElement('p');
const textResult = document.createElement('p');
const imgResult = document.createElement('img');
const backBtn = document.createElement('button');

wrapperResult.classList.add('wrapper__result');
containerResult.classList.add('result__container');
headerResult.classList.add('result__header');
textResult.classList.add('result__text');
imgResult.classList.add('result__img');
backBtn.classList.add('backBtn');

imgResult.src = 'disco.gif';
headerResult.innerHTML = 'Congratulations!';
textResult.innerHTML = 'You scored 20 points out of 20 possible.';
backBtn.innerHTML = 'Back';


makeStart();

function makeStart() {
    document.body.appendChild(wrapperStart);
    wrapperStart.appendChild(logoStart);
    wrapperStart.appendChild(buttonsWrapper);
    buttonsWrapper.appendChild(buttonStartMain);
    buttonsWrapper.appendChild(buttonResultMain);
    buttonsWrapper.appendChild(buttonGalleryMain);
    buttonsWrapper.appendChild(buttonAboutMain);
}

function delStart(){
    document.body.removeChild(wrapperStart);
}

function makeResult(){
    document.body.appendChild(wrapperResult);
    wrapperResult.appendChild(containerResult);
    containerResult.appendChild(headerResult);
    containerResult.appendChild(textResult);
    containerResult.appendChild(imgResult);
    containerResult.appendChild(imgResult);
    containerResult.appendChild(backBtn);

}

function delResult(){
    document.body.removeChild(wrapperResult);
}




/////// Game

const wrapperMain = document.createElement('div');
const headerMain = document.createElement('header');
const headerInfoMain = document.createElement('div');
const logoMain = document.createElement('div');
const logoImgMain = document.createElement('img');
const scoreHeaderMain = document.createElement('div');
const scoreInfoHeader = document.createElement('p');
const nav = document.createElement('nav');
const ulHeader = document.createElement('ul');
const headerElem = document.createElement('li');
const playerWrapper = document.createElement('div');
const cover = document.createElement('div');
const coverMain = document.createElement('img');
const playerMain = document.createElement('div');
const title = document.createElement('p');
const control = document.createElement('div');
const playBtn = document.createElement('img');
const audio = document.createElement('audio');
const progressContainer = document.createElement('div');
const progressLine = document.createElement('div');
const progress = document.createElement('input');
const timeMain = document.createElement('div');
const timeStart = document.createElement('p');
const timeEnd = document.createElement('p');
const rangeWrapper = document.createElement('div');
const volumeMain = document.createElement('input');
const contentMain = document.createElement('div');
const variantMain = document.createElement('variant');
const variantList = document.createElement('div');
const yesSong = document.createElement('audio');
const noSong = document.createElement('audio');
const nextBtn = document.createElement('button');
const chooseMain = document.createElement('div');
const chooseTitle = document.createElement('p');
const chooseInfo = document.createElement('div');
const sideabarCover = document.createElement('img');
const sideabarSongName = document.createElement('p');
const choosePlayer = document.createElement('div');
const chooseControl = document.createElement('div');
const choosePlayBtn = document.createElement('img');
const chooseAudio = document.createElement('audio');
const chooseProgressContainer = document.createElement('choose__progress__container');
const chooseProgress = document.createElement('div');
const chooseRangeWrapper = document.createElement('div');
const chooseVolume = document.createElement('input');
const chooseAbout = document.createElement('div');
const chooseText = document.createElement('p');

wrapperMain.classList.add('wrapper');
headerMain.classList.add('header');
headerInfoMain.classList.add('header__info');
logoMain.classList.add('logo');
logoImgMain.classList.add('logo__img');
scoreHeaderMain.classList.add('score');
scoreInfoHeader.classList.add('score_info');
nav.classList.add('header__nav');
ulHeader.classList.add('header_list');
playerWrapper.classList.add('player__wrapper');
cover.classList.add('cover');
coverMain.classList.add('cover__img');
playerMain.classList.add('player');
title.classList.add('title');
control.classList.add('control');
playBtn.classList.add('song__btn');
audio.classList.add('audio');
progressContainer.classList.add('progress__container');
progressLine.classList.add('progress__line');
progress.classList.add('progress');
timeMain.classList.add('main__time');
timeStart.classList.add('start');
timeEnd.classList.add('end');
rangeWrapper.classList.add('range_wrapper');
volumeMain.classList.add('range');
contentMain.classList.add('content');
variantMain.classList.add('variant');
variantList.classList.add('variant__list');
yesSong.classList.add('yes');
noSong.classList.add('no');
nextBtn.classList.add('next');
chooseMain.classList.add('choose');
chooseTitle.classList.add('choose__title');
chooseInfo.classList.add('choose__info');
sideabarCover.classList.add('choose__img');
sideabarSongName.classList.add('choose__song-name');
choosePlayer.classList.add('choose__player');
chooseControl.classList.add('choose__control');
choosePlayBtn.classList.add('choose__song__btn');
chooseAudio.classList.add('choose__audio');
chooseProgressContainer.classList.add('choose__progress__container');
chooseProgress.classList.add('choose__progress');
chooseRangeWrapper.classList.add('choose__range-wrapper');
chooseVolume.classList.add('choose__range');
chooseAbout.classList.add('choose__about');
chooseText.classList.add('choose__text');


logoImgMain.src = 'logo.png';
// scoreInfoHeader.innerHTML = 'Score: 0';
ulHeader.innerHTML = `<li class="header__elem">60's</li>
<li class="header__elem">70's</li>
<li class="header__elem">80's</li>
<li class="header__elem">90's</li>`;
coverMain.src = 'question.jpg';
title.innerHTML = '***';
playBtn.src = 'play.svg';
progress.type = 'range';
progress.step = '1';
progress.min = '1';
progress.max = '100';
progress.value = '0';
volumeMain.type = 'range';
volumeMain.min = '0';
volumeMain.max = '100';
volumeMain.id = 'volume';
variantList.innerHTML = `<li class="variant__elem"></li>
<li class="variant__elem"></li>
<li class="variant__elem"></li>
<li class="variant__elem"></li>
<li class="variant__elem"></li>
<li class="variant__elem"></li>`;
yesSong.src = 'yes2.mp3';
noSong.src = 'no55.mp3';
nextBtn.innerHTML = 'Next';
chooseTitle.innerHTML = 'Selected song..';
sideabarCover.src = 'question.jpg';
sideabarSongName.innerHTML = 'Listen to the player <br>Choose a song';
choosePlayBtn.src = 'noplay.svg';
chooseVolume.type = 'range';
chooseVolume.id = 'volume';
chooseVolume.min = '0';
chooseVolume.max = '100';
chooseText.innerHTML = 'About song...';



function makeGame() {
    document.body.appendChild(wrapperMain);
    wrapperMain.appendChild(headerMain);
    headerMain.appendChild(headerInfoMain);
    headerInfoMain.appendChild(logoMain);
    logoMain.appendChild(logoImgMain);
    headerInfoMain.appendChild(scoreHeaderMain);
    scoreHeaderMain.appendChild(scoreInfoHeader);
    headerMain.appendChild(nav);
    nav.appendChild(ulHeader);

    wrapperMain.appendChild(playerWrapper);
    playerWrapper.appendChild(cover);
    cover.appendChild(coverMain);
    playerWrapper.appendChild(playerMain);
    playerMain.appendChild(title);
    playerMain.appendChild(control);
    control.appendChild(playBtn);
    control.appendChild(audio);
    control.appendChild(progressContainer);
    progressContainer.appendChild(progressLine);
    progressContainer.appendChild(progress);
    playerMain.appendChild(timeMain);
    timeMain.appendChild(timeStart);
    timeMain.appendChild(timeEnd);
    playerMain.appendChild(rangeWrapper);
    rangeWrapper.appendChild(volumeMain);

    wrapperMain.appendChild(contentMain);
    contentMain.appendChild(variantMain);
    variantMain.appendChild(variantList);

    contentMain.appendChild(chooseMain);
    chooseMain.appendChild(chooseTitle);
    chooseMain.appendChild(chooseInfo);
    chooseInfo.appendChild(sideabarCover);
    chooseInfo.appendChild(sideabarSongName);
    chooseMain.appendChild(choosePlayer);  
    choosePlayer.appendChild(chooseControl);
    chooseControl.appendChild(choosePlayBtn);  
    chooseControl.appendChild(chooseAudio); 
    chooseControl.appendChild(chooseProgressContainer); 
    chooseProgressContainer.appendChild(chooseProgress); 
    choosePlayer.appendChild(chooseRangeWrapper);
    chooseRangeWrapper.appendChild(chooseVolume);
    chooseMain.appendChild(chooseAbout);
    chooseAbout.appendChild(chooseText);

    wrapperMain.appendChild(nextBtn);


    question = 0;
    score = 0;
    scoreInfoHeader.innerHTML = `Score: ${score}`;
    const yearsList = document.querySelectorAll('.header__elem');
    const variantElem = document.querySelectorAll('.variant__elem');
    variantElem.forEach(elem => {
        elem.classList.remove('win');
        elem.classList.remove('default');
        elem.classList.remove('no-choose');
    });
    


    startGame();

    function startGame(){
        makeRandomNum(question);
        makeStartSong(question);
        makeSongsList(question);
        changeYear(question);
    }
    function changeYear(question){
        yearsList.forEach(elem => {
            elem.classList.remove('active');
        })
        yearsList[question].classList.add('active');
    }
       // //генерация случайного числа по текущему вопросу
    function makeRandomNum(question){
        //вычисляем длину массива нынешних песен
        let countSongs = songs[question].length - 1;
        randomNum = Math.floor(Math.random() * countSongs);
        return randomNum;
    }

    // //функция по запуску песни
    function makeStartSong(question) {
        audio.src = songs[question][randomNum].songSrc;
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

    playBtn.addEventListener('click', isPlaying);

    function isPlaying(){
        const isPlaying = control.classList.contains('play');
        if(isPlaying) {
            pauseSong();
        } else {
            playSong();
        }
    }

    //progress bar
    function updateProgress(e){
        const {duration, currentTime} = e.srcElement;

        let a = String(Math.round(currentTime));
        if(a == '30'){
            a = '0';
            document.querySelector('.start').innerHTML = `00:0${a}`;
        } else if (a.length == 2) {
            document.querySelector('.start').innerHTML = `00:${Math.round(currentTime)}`;
        } else if (a.length == 1){
        
            document.querySelector('.start').innerHTML = `00:0${a}`;
        }
        
        document.querySelector('.end').innerHTML = Math.round(duration);
        let progresPercent = (currentTime / duration) *100;
        // console.log(progresPercent);
        if(isNaN(progresPercent)){
            progresPercent = 0;
        } else if(progresPercent == 100) {
            progresPercent = 0;
            pauseSong();
        }
        // console.log(progresPercent);
        progress.value = progresPercent;
        document.querySelector('.progress__line').style.width = `${(Math.round(progresPercent))}%`;

    }

    audio.addEventListener('timeupdate', updateProgress);

    //бегунок
    function setProgress(e){
        const width = this.clientWidth;
        const clickX = e.offsetX;
        const duration = audio.duration;
        audio.currentTime = (clickX / width) * duration;
    }

    // progressContainer.addEventListener('click', setProgress);

    //настройка звука
    function soundVolume() {
        let v = this.value;
        audio.volume = v / 100;
    }

    volumeMain.oninput = soundVolume;
   
    // //функция по заполнению списка песен
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

    //Фукнция заполнения фото и названия при победе
    function rightSong(elem){
        coverMain.src = `assets/img/${yearsArr[question]}/${elem}.jpg`;
        title.innerHTML = elem;
    }

    //какую кнопку кликнули
    variantElem.forEach(elem => {
        elem.addEventListener('click', () => {
            chooseProgress.style.width = '0px';
            let currentName = songs[question][randomNum].songName;
            let chooseName = elem.innerHTML;
            showSongSidebar(chooseName);
            makeChooseSong(chooseName);
            if(currentName === chooseName && !(elem.classList.contains('win'))) {
                rightSong(chooseName);
                rightAnswer(elem);
            }
            else {
                if(!(elem.classList.contains('default')) && !(elem.classList.contains('no-choose')) && !(elem.classList.contains('win'))){
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
            scoreInfoHeader.innerHTML = `Score: ${score}`
        }
        else if (arr.length == 1) {
            score += 4;
            scoreInfoHeader.innerHTML = `Score: ${score}`
        }
        else if (arr.length == 2) {
            score += 3;
            scoreInfoHeader.innerHTML = `Score: ${score}`
        }
        else if (arr.length == 3) {
            score += 2;
            scoreInfoHeader.innerHTML = `Score: ${score}`
        }
        else if (arr.length == 4) {
            score += 1;
            scoreInfoHeader.innerHTML = `Score: ${score}`
        }
        else if (arr.length == 5) {
            score += 0;
            scoreInfoHeader.innerHTML = `Score: ${score}`
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

    // функция по перезагрузке контента main
    function startMainSong(){
        title.innerHTML = "***";
        coverMain.src = 'question.jpg';
    }

    nextBtn.addEventListener('click', forNext);

    function forNext(){
        question++;
        nextBtn.classList.remove('next-active');
        chooseControl.classList.remove('play');
        chooseProgress.style.width = '0px';
        let last = yearsList.length;
        if (question == last){
            playBtn.removeEventListener('click', isPlaying);
            nextBtn.removeEventListener('click', forNext);
            chooseAudio.removeEventListener('timeupdate', chooseUpdateProgress);
            chooseProgressContainer.removeEventListener('click', chooseSetProgress);
            
            // variantElem.forEach(elem => {
            //     elem.removeEventListener('click', () => {});
            // })

            delGame();
            startMainSong();
            makeResult();
            pauseSong();
            startSideBar();
            

        }
        else {
            startGame();
            startMainSong();
            startSideBar();
            pauseSong();
        
            variantElem.forEach(elem => {
                elem.classList.remove('win');
                elem.classList.remove('default');
                elem.classList.remove('no-choose');
            });
        }
    }

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

    function startSideBar() {
        sideabarSongName.innerHTML = 'Listen to the player <br>Choose a song';
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


}

function delGame() {
    document.body.removeChild(wrapperMain);
   
}









buttonStartMain.addEventListener('click', () => {
    delStart();
    makeGame();
})

buttonResultMain.addEventListener('click', () => {
    delStart();
    makeResult();
});

backBtn.addEventListener('click', () => {
    delResult();
    makeStart();
})










// //////////////const control = document.querySelector('.control');
// //////////////const title = document.querySelector('.title');
// /////////////const audio = document.querySelector('.audio');
// ///////////const playBtn = document.querySelector('.song__btn');
// ////////////const progressContainer = document.querySelector('.progress__container');
// ////////////const progress = document.querySelector('.progress');
// ////////////const volume = document.querySelector('#volume');

// ////////////////const coverMain = document.querySelector('.cover__img');

// ///////////////const scoreInfo = document.querySelector('.score_info');
// /////////////const sideabarCover = document.querySelector('.choose__img');
// c////////////onst sideabarSongName = document.querySelector('.choose__song-name');


//////// const btnStart = document.querySelector('.btn__start');
// ///////////////const wrapperMain = document.querySelector('.wrapper');
// ///////////////const wrapperResult = document.querySelector('.wrapper__result');
// const resultText = document.querySelector('.result__text ');





















// //второй плеер
// /////////const chooseControl = document.querySelector('.choose__control');
// /////////const chooseTitle = document.querySelector('.title');
// c/////////onst chooseAudio = document.querySelector('.choose__audio');
// ////////////const choosePlayBtn = document.querySelector('.choose__song__btn');
// ////////////const chooseProgressContainer = document.querySelector('.choose__progress__container');
// ////////////const chooseProgress = document.querySelector('.choose__progress');
// ////////////const chooseVolume = document.querySelector('.choose__range');
// ///////////const chooseText = document.querySelector('.choose__text');




