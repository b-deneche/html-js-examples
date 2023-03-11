
const btns = document.querySelectorAll('.btn');
<<<<<<< HEAD
const qas = document.querySelector('.qas');

btns.forEach((e)=>{
    e.addEventListener('click',()=>{
        //  const qas = e.parentElement.parentElement;
         const a = qas.querySelector('.answer').classList.toggle('show-answer');    
    })
})

=======

btns.forEach((e)=>{
    e.addEventListener('click',()=>{
        const qas = e.parentElement.parentElement;
        const a = qas.querySelector('.answer').classList.toggle('show-answer');    
    })
    
})
>>>>>>> 5eb3ba6 (Questions)
