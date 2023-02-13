// local reviews data
const reviews = [
    {
      id: 1,
      name: 'susan smith',
      job: 'web developer',
      img: 'https://images2.imgbox.com/e0/57/qI5bbwvg_o.jpeg',
      text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
    },
    {
      id: 2,
      name: 'anna johnson',
      job: 'web designer',
      img: 'https://images2.imgbox.com/2e/6e/JAMvTZ56_o.jpeg',
      text: 'Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.',
    },
    {
      id: 3,
      name: 'peter jones',
      job: 'intern',
      img: 'https://images2.imgbox.com/56/88/oJvFN3l5_o.jpeg',
      text: 'Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.',
    },
    {
      id: 4,
      name: 'bill anderson',
      job: 'the boss',
      img: 'https://images2.imgbox.com/8b/1c/vwWNTsCd_o.jpeg',
      text: 'Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ',
    },
  ];

  
const prev = document.querySelector('.fa-chevron-left')
const next = document.querySelector('.fa-chevron-right')
const rnd = document.querySelector('.random-btn')

const auth = document.querySelector('.author');
const job = document.querySelector('#job');
const info = document.querySelector('#info');

let currentItem = 0;

const showPerson = (person)=>{
  const item = reviews[person];
  auth.textContent = item.name;
  job.textContent = item.job;
  info.textContent = item.text;
}

window.addEventListener('DOMContentLoaded',()=>{
  showPerson(currentItem);
})

prev.addEventListener('click',()=>{
  showPerson(Math.abs(currentItem--)%4);
})

next.addEventListener('click',()=>{
  showPerson(Math.abs(currentItem++)%4);
})

rnd.addEventListener('click',()=>{
  
  currentItem = Math.round((Math.random()*100)%3);
  console.log(currentItem);
  showPerson(currentItem);
})




