const toggle=document.querySelector(".more");
const nav=document.querySelector(".nav");

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    document.body.classList.toggle("nav-open");
    //on css there's body.nav-open{overflow:hidden;}, this triggers that
});

var left = document.getElementsByClassName("left")[0];
var right = document.getElementsByClassName("right")[0];
var card = document.getElementsByClassName("card");

let i=0; //current slide index

function showSlide(index){
    //hide all slides that is not the current index
    for (let j=0; j<card.length; j++){
        card[j].classList.remove("active");
    }
    //for loop exp: start with variable j=0, goes on until j is less than the number of card divs in the collection, after each loop increases j by 1

    //show only the current index slide
    card[index].classList.add("active");
}

showSlide(i); //shows the first card when page initially loads

right.onclick = function(){
    if(i<card.length-1){
        i++;
        showSlide(i);
    }
} //if the div is less than the total number of div minus 1 so you don't go past the last card, move to the next card and show the card based on the new index

left.onclick = function(){
    if(i>0){
        i--;
        showSlide(i);
    }
} //the condition makes sure you don't go before the first card

const links = document.querySelectorAll(".nav a");

links.forEach(link => {
    link.addEventListener("click",()=>{
        nav.classList.remove("active");
        document.body.classList.remove("nav-open");
    });
});

//forEach is used to loop arrays or lists, meaning "for each item in this list, do something"
//when any link is clicked, the nav is not active, which removes the nav screen block
//it also removes the overflow hidden