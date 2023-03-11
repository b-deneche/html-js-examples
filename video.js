const play = document.querySelector('#play');
const pause = document.querySelector('#pause');
const vid = document.querySelector('#vid');

play.addEventListener('click',()=>{
    vid.play();
});
pause.addEventListener('click',()=>{
    vid.pause();
})
