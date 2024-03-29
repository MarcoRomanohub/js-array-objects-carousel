const carouselImages = document.querySelector('.my-carousel-images');
console.log(carouselImages);
const thumbnails = document.querySelector('.my-thumbnails');
console.log(thumbnails);

const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },

    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
];

let counterImg = 0;

for(let key in images){

    carouselImages.innerHTML += `
    <div class="my-carousel-item">
        <img class="img-fluid" src="${images[key].url}" alt="${images[key].title} picture">
        <div class="item-description px-3">
            <h2>${images[key].title}</h2>
            <p>${images[key].description}</p>
        </div>
    </div>
`
    thumbnails.innerHTML += `
    <div class="my-thumbnail">
        <img class="img-fluid" src="${images[key].url}" alt="Thumbnail of ${images[key].title} picture"> 
    </div>
`
}

const itemsCollection = document.getElementsByClassName('my-carousel-item');
const miniatureCollection = document.getElementsByClassName('my-thumbnail');
itemsCollection[counterImg].classList.add('active');
miniatureCollection[counterImg].classList.add('active');

const next = document.querySelector('.my-next');
const prev = document.querySelector('.my-previous');

next.addEventListener('click', function(){

    itemsCollection[counterImg].classList.remove('active')
    miniatureCollection[counterImg].classList.remove('active')

    counterImg++;
    
    if(counterImg === images.length){
    counterImg = 0;
    }

    itemsCollection[counterImg].classList.add('active')
    miniatureCollection[counterImg].classList.add('active')

})

prev.addEventListener('click', function(){

    itemsCollection[counterImg].classList.remove('active')
    miniatureCollection[counterImg].classList.remove('active')

    counterImg--;
    
    if(counterImg < 0){
        counterImg = images.length - 1;
    }

    itemsCollection[counterImg].classList.add('active')
    miniatureCollection[counterImg].classList.add('active')
})

let counter = 0;
// ogni 3 secondi incremento il contatore
const contatoreAutomatico = setInterval(()=>{
itemsCollection[counterImg].classList.remove('active')
miniatureCollection[counterImg].classList.remove('active')

counterImg++;

if(counterImg === images.length){
counterImg = 0;
}

itemsCollection[counterImg].classList.add('active')
miniatureCollection[counterImg].classList.add('active')


},3000)