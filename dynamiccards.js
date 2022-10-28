const cards = [{

  img: 'img/mrosman.png',
  name: 'Jay Osman',
  title: 'full-stack developer',
  des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',

},
{
  img: 'img/jeongilnam.png',
  name: 'Jeon Gilnam',
  title: 'Web application developer',
  des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
},
{
  img: 'img/soyoungroh.png',
  name: 'Soyoung Roh',
  title: 'Front end developer',
  des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
},
{
  img: 'img/juliareda.png',
  name: 'Julia Reda',
  title: 'Back end developer',
  des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
},
{
  img: 'img/lailatretikov.png',
  name: 'Laila Tretikov',
  title: 'Web Designer ',
  des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
},
{
  img: 'img/ryanmerkley.png',
  name: 'Ryan Merkley',
  title: 'Game developer',
  des: 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. ',
},

];

function displayCards() {
  let result = '';

  cards.forEach((card) => {
    result += `
      <div class="contributors-bio-container">
      <div>
        <img src="${card.img}">
      </div>
      <div>
        <h3 class="fw-bold fs-500">${card.name}</h3>
        <div class="title-indicator"></div>
        <h3 class="text-accent-400 fw-bold">${card.title}</h3>
        <p class="">${card.des}</p>
      </div>
    </div>`;
  });

  document.querySelector('.contributors-container').innerHTML = result;
}

displayCards();