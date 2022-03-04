var index = 0;
show();
function show(){
    var i;
    var slides=document.getElementsByClassName("slide");
    for (i=0; i<slides.length; i++) {
        slides[i].style.display="none";
    }
    index = index+1;
    if (index>slides.length){
        index = 1;
    }
    slides[index-1].style.display="block";
    setTimeout(show, 3000);
}


id1 = document.getElementById("id1");
id2 = document.getElementById("id2");
id3 = document.getElementById("id3");
id4 = document.getElementById("id4");


var myScrollFunc = function () {
    var y = window.scrollY;
    if (y >= 300) {
        id1.className = "bar-one"
        id2.className = "bar-two"
        id3.className = "bar-three"
        id4.className = "bar-four"

    }
};

window.addEventListener("scroll", myScrollFunc);


let currentSlide = 0;
const slideOne = document.querySelectorAll('.slideOne');
const dots = document.querySelectorAll('.dot');

const init = n => {
  slideOne.forEach((slide, index) => {
    slide.style.display = 'none';
    dots.forEach((dot, index) => {
      dot.classList.remove('active');
    });
  });
  slideOne[n].style.display = 'block';
  dots[n].classList.add('active');
};
document.addEventListener('DOMContentLoaded', init(currentSlide));
const next = () => {
  currentSlide >= slideOne.length - 1 ? (currentSlide = 0) : currentSlide++;
  init(currentSlide);
};

const prev = () => {
  currentSlide <= 0 ? (currentSlide = slideOne.length - 1) : currentSlide--;
  init(currentSlide);
};

document.querySelector('.next').addEventListener('click', next);

document.querySelector('.prev').addEventListener('click', prev);

setInterval(() => {
  next();
}, 5000);

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    console.log(currentSlide);
    init(i);
    currentSlide = i;
  });
});

const filters = document.querySelectorAll('.filter');

filters.forEach(filter => { 

  filter.addEventListener('click', function() {

    let selectedFilter = filter.getAttribute('data-filter');
    let itemsToHide = document.querySelectorAll(`.projects .projectItem:not([data-filter='${selectedFilter}'])`);
    let itemsToShow = document.querySelectorAll(`.projects [data-filter='${selectedFilter}']`);

    if (selectedFilter == 'all') {
      itemsToHide = [];
      itemsToShow = document.querySelectorAll('.projects [data-filter]');
    }

    itemsToHide.forEach(el => {
      el.classList.add('hideOne');
      el.classList.remove('showOne');
    });

    itemsToShow.forEach(el => {
      el.classList.remove('hideOne');
      el.classList.add('showOne'); 
    });

  });
  });


const userForm = document.getElementById('form');
const userName = document.getElementById('name');
const userEmail = document.getElementById('email');
const userWebsite = document.getElementById('website');
const userMessage = document.getElementById('message');

userForm.addEventListener('submit', e =>{
    e.preventDefault();
    const userData ={
        name: userName.value,
        email: userEmail.value,
        website: userWebsite.value,
        message: userMessage.value,
    }
    console.log(userData);
    createUser(userData);
});

function createUser(userData){
    const createUserRequest = fetch('http://api.kesho.me/v1/user-test/contact',{
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
            'Content-type': 'application/json'
        }
    });
    createUserRequest.then(response =>{
        return response.json();
    }).then(data => {
        console.log(data);
    }).catch(error =>{
        console.log(error);
    });
}


const btn = document.getElementById('sendBtn');
const popUp = document.querySelector('.modal');
const close = document.querySelector('.close');


btn.addEventListener('click', e =>{
    popUp.style.display = 'block';
});
close.addEventListener('click', e=>{
    popUp.style.display = "none";
});
