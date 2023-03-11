
const btns = document.querySelectorAll('.btn');
const qas = document.querySelector('.qas');


btns.forEach((e)=>{
    e.addEventListener('click',()=>{
        //  const qas = e.parentElement.parentElement;
         const a = qas.querySelector('.answer').classList.toggle('show-answer');    
    })
})