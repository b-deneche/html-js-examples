const menu = [
    {
      id: 1,
      title: "buttermilk pancakes",
      category: "breakfast",
      price: 15.99,
      img: "./images/item-1.jpeg",
      desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
    },
    {
      id: 2,
      title: "diner double",
      category: "lunch",
      price: 13.99,
      img: "./images/item-2.jpeg",
      desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
    },
    {
      id: 3,
      title: "godzilla milkshake",
      category: "shakes",
      price: 6.99,
      img: "./images/item-3.jpeg",
      desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
    },
    {
      id: 4,
      title: "country delight",
      category: "breakfast",
      price: 20.99,
      img: "./images/item-4.jpeg",
      desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
    },
    {
      id: 5,
      title: "egg attack",
      category: "lunch",
      price: 22.99,
      img: "./images/item-5.jpeg",
      desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
    },
    {
      id: 6,
      title: "oreo dream",
      category: "shakes",
      price: 18.99,
      img: "./images/item-6.jpeg",
      desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
    },
    {
      id: 7,
      title: "bacon overflow",
      category: "breakfast",
      price: 8.99,
      img: "./images/item-7.jpeg",
      desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
    },
    {
      id: 8,
      title: "american classic",
      category: "lunch",
      price: 12.99,
      img: "./images/item-8.jpeg",
      desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
    },
    {
      id: 9,
      title: "quarantine buddy",
      category: "shakes",
      price: 16.99,
      img: "./images/item-9.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
    {
      id: 10,
      title: "bison steak",
      category: "dinner",
      price: 22.99,
      img: "./imag  es/item-10.jpeg",
      desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
    },
  ];
  
  const sectionCenter = document.querySelector('.section-center');
  const btnFilter = document.querySelector('.btn-container');
  
  /*** */
  function displayMenuItems(menu) {
    let displayMenu = menu.map(function f(item) {
      return `<article class="menu-item">
        <img src="menu-item.jpeg" class="img-fluid img-thumbnail photo border-dark" alt="${item.title}">
        <div class="item-info">
          <header>
            <h4>${item.title}</h4>
            <h4 class="price">${item.price}</h4>
          </header>
          <p class="item-text">
          ${item.desc}
          </p>
        </div>
    </article>`
    });
    displayMenu = displayMenu.join("");
    return displayMenu;
  }
  
  /*** */
  function filtreBtns(menu) {
    const categories = menu.reduce(
      function (values, item) {
        if (!values.includes(item.category)) {
          values.push(item.category);
        }
        return values;
      }, []
    );
  
    let btnCategories = categories.map((item) => {
      return `<button id='btn' class="filter-btn" data-id="${item}">${item}</button>`
    });
    return btnCategories = btnCategories.join("");
  }
  
  /*** */
  window.addEventListener("DOMContentLoaded", function () {
    sectionCenter.innerHTML = displayMenuItems(menu);
    btnFilter.innerHTML = `<button class="filter-btn" data-id="all">all</button>` + filtreBtns(menu);
    const arrbtn = document.querySelectorAll('.filter-btn'); console.log(arrbtn.length);
    /** */
  
    arrbtn.forEach((b) => {
      b.addEventListener('click', (e) => {
        const value = e.currentTarget.dataset.id;
        console.log(value);
  
        const categories = menu.filter((item) => {
          if (value === item.category) {
            return item;
          }
        })
        console.log(categories);
        if(value === "all"){
        sectionCenter.innerHTML = displayMenuItems(menu);
        }else{
          sectionCenter.innerHTML = displayMenuItems(categories);
        }      
      })
    });
  
  });
  
  const dark = document.querySelector('.darkbtn');
  const light = document.querySelector('.lightbtn');
  
  dark.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    light.classList.toggle('visible');
  });
  
  light.addEventListener('click', () => {
    document.body.classList.remove('dark');
    dark.classList.toggle('visible');
  })  