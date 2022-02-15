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

// setTimeout(function start (){
  
//   $('.bar').each(function(i){  
//     var $bar = $(this);
//     $(this).append('<span class="count"></span>')
//     setTimeout(function(){
//       $bar.css('width', $bar.attr('data-percent'));      
//     }, i*100);
//   });
 
// $('.count').each(function () {
//     $(this).prop('Counter',0).animate({
//         Counter: $(this).parent('.bar').attr('data-percent')
//     }, {
//         duration: 2000,
//         easing: 'swing',
//         step: function (now) {
//             $(this).text(Math.ceil(now) +'%');
//         }
//     });
// });
 
// }, 500)
// start ();
