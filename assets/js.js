var home = document.querySelector(".home");
var back = document.querySelector(".back");
var next = document.querySelector(".next");
var carousel = document.querySelectorAll(".carousel");

var index = 0 ;



function show(){
    for (var i = 0 ; i<carousel.length ; i++){
        carousel[i].classList.remove('active');
    }

    carousel[index].classList.add('active');
}

next.addEventListener('click',function(){
    index = index + 1 ;
    if(index > 2){
        index = 0;
    }
    show();
})

back.addEventListener('click',function(){
    index = index - 1 ;
    if(index < 0){
        index = 2;
    }
    show();
})


var menuBtn = document.querySelector(".menu img")
var menu  = document.querySelector(".navbar ul")
var listItems = document.querySelectorAll(".navbar ul li a");
menuBtn.addEventListener('click',function(){
    menu.classList.toggle("show")
})


for(var j= 0 ; j<listItems.length ; j++){
    listItems[j].addEventListener('click',function(){
        menu.classList.remove("show");
    })
}

