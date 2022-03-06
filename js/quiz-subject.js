'use strict';


//variables


let biology1 = document.querySelector(".Biology-I");
let closeSubject = document.querySelector(".close-subject");
let menupage = document.getElementById("menu-page");

let cardSubject = document.querySelector(".card-subject");


// functions
function appearBio1() {

    document.querySelector(".chapter-card-1").classList.toggle("hidden");

}

function showmenu() {
    menupage.style.left = "0px";

}

function hidemenu() {
    // navigation.style.display="none";
    menupage.style.left = "-2300px";
}


function closeSubjectPage() {
    cardSubject.classList.add("hidden");
}

// functionallity
biology1.addEventListener("click", appearBio1);
console.log(closeSubject);
closeSubject.addEventListener("click", closeSubjectPage)