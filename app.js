
/** navbar 
const toggle = document.querySelector('#toggleBtn');
const link = document.querySelector('.link');

toggle.addEventListener('click',function(){
    link.classList.toggle("show-link");
});*/

/** sidebar */
const side = document.querySelector('.side');
const btns = document.querySelector('#btn');
btns.addEventListener('click',function(){
    if(side.classList.contains('show')){
        side.classList.remove('show');}
    else{
    side.classList.add("show");
    console.log(side.classList);
}
});


