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