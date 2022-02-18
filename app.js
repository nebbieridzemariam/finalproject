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
{
  const sliders = document.querySelectorAll(".slider");
  // interval between switching images
  // can't be less than your animation duration in css!
  const interval = 2800;
  // if you don't want to first animation last longer than other animations  
  // set animDuration (in miliseconds) to your value of animation duration in css
  const animDuration = 600;

  for (let i = 0; i < sliders.length; ++i) {
    const slider = sliders[i];
    const dots = slider.querySelector(".dots");
    const sliderImgs = slider.querySelectorAll(".img");

    let currImg = 0;
    let prevImg = sliderImgs.length - 1;
    let intrvl;
    let timeout;

    // Creates dots and add listeners to them
    for (let i = 0; i < sliderImgs.length; ++i) {
      const dot = document.createElement("div");
      dot.classList.add("dot");
      dots.appendChild(dot);
      dot.addEventListener("click", dotClick.bind(null, i), false);
    }

    const allDots = dots.querySelectorAll(".dot");
    allDots[0].classList.add("active-dot");

    sliderImgs[0].style.left = "0";
    timeout = setTimeout(() => {
      animateSlider();
      sliderImgs[0].style.left = "";
      intrvl = setInterval(animateSlider, interval);
    }, interval - animDuration);   

    /**
     * Animates images
     * @param {number} [nextImg] - index of next image to show
     * @param {boolean} [right = false] - animate to right
     */
    function animateSlider(nextImg, right) {
      if (!nextImg)
        nextImg = currImg + 1 < sliderImgs.length ? currImg + 2 : 1;

      --nextImg;
      sliderImgs[prevImg].style.animationName = "";

      if (!right) {
        sliderImgs[nextImg].style.animationName = "leftNext";
        sliderImgs[currImg].style.animationName = "leftCurr";
      } 
      else {
        sliderImgs[nextImg].style.animationName = "rightNext";
        sliderImgs[currImg].style.animationName = "rightCurr";
      }

      prevImg = currImg;
      currImg = nextImg;

      currDot = allDots[currImg];
      currDot.classList.add("active-dot");
      prevDot = allDots[prevImg];
      prevDot.classList.remove("active-dot");
    }

    /**
     * Decides if animate to left or right and highlights clicked dot
     * @param {number} num - index of clicked dot
     */
    function dotClick(num) {
      if (num == currImg)
        return false;

      clearTimeout(timeout);
      clearInterval(intrvl);

      if (num > currImg)
        animateSlider(num + 1);
      else
        animateSlider(num + 1, true);

      intrvl = setInterval(animateSlider, interval);
    }
  }
}