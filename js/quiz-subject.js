'use strict';


//variables

let biology1 = document.querySelector(".Biology-I");
let closeBiology1 = document.querySelector(".close-bio1");



let biology2 = document.querySelector(".Biology-II");
let closeBiology2 = document.querySelector(".close-bio2");

let chemistry1 = document.querySelector(".Chemistry-I");
let closeChemistry1 = document.querySelector(".close-chem1");


let chemistry2 = document.querySelector(".Chemistry-II");
let closeChemistry2 = document.querySelector(".close-chem2");



let physics1 = document.querySelector(".Physics-I");
let closePhysics1 = document.querySelector(".close-phy1");

let physics2 = document.querySelector(".Physics-II");
let closePhysics2 = document.querySelector(".close-phy2");

let menupage = document.getElementById("menu-page");



// functions
function appearBio1() {

    document.querySelector(".card-1").style.transform = "rotateY(180deg)"
    document.querySelector(".chapter-card-1").classList.remove("hidden");
    document.querySelector(".chapter-card-1").style.transform = "rotateY(180deg)"
}

function appearBio2() {
    document.querySelector(".card-4").style.transform = "rotateY(180deg)"
    document.querySelector(".chapter-card-4").classList.remove("hidden");
    document.querySelector(".chapter-card-4").style.transform = "rotateY(180deg)"
}

function appearChem1() {
    document.querySelector(".card-2").style.transform = "rotateY(180deg)"
    document.querySelector(".chapter-card-2").classList.remove("hidden");
    document.querySelector(".chapter-card-2").style.transform = "rotateY(180deg)"

}

function appearChem2() {
    document.querySelector(".card-5").style.transform = "rotateY(180deg)"
    document.querySelector(".chapter-card-5").classList.remove("hidden");
    document.querySelector(".chapter-card-5").style.transform = "rotateY(180deg)"

}

function appearPhy1() {
    document.querySelector(".card-3").style.transform = "rotateY(180deg)"
    document.querySelector(".chapter-card-3").classList.remove("hidden");
    document.querySelector(".chapter-card-3").style.transform = "rotateY(180deg)"

}

function appearPhy2() {
    document.querySelector(".card-6").style.transform = "rotateY(180deg)"
    document.querySelector(".chapter-card-6").classList.remove("hidden");
    document.querySelector(".chapter-card-6").style.transform = "rotateY(180deg)"

}

function showmenu() {
    menupage.style.left = "0px";

}

function hidemenu() {
    // navigation.style.display="none";
    menupage.style.left = "-2300px";
}


function closeBio1() {
    document.querySelector(".chapter-card-1").classList.add("hidden");
    document.querySelector(".card-1").style.transform = "rotateY(360deg)"
}

function closeBio2() {
    document.querySelector(".chapter-card-4").classList.add("hidden");
    document.querySelector(".card-4").style.transform = "rotateY(360deg)"
}

function closechem1() {
    document.querySelector(".chapter-card-2").classList.add("hidden");
    document.querySelector(".card-2").style.transform = "rotateY(360deg)"
}

function closechem2() {
    document.querySelector(".chapter-card-5").classList.add("hidden");
    document.querySelector(".card-5").style.transform = "rotateY(360deg)"
}

function closePhy1() {
    document.querySelector(".chapter-card-3").classList.add("hidden");
    document.querySelector(".card-3").style.transform = "rotateY(360deg)"
}

function closePhy2() {
    document.querySelector(".chapter-card-6").classList.add("hidden");
    document.querySelector(".card-6").style.transform = "rotateY(360deg)"
}

// functionallity
biology1.addEventListener("click", appearBio1);
closeBiology1.addEventListener("click", closeBio1);
biology2.addEventListener("click", appearBio2);
closeBiology2.addEventListener("click", closeBio2);


physics1.addEventListener("click", appearPhy1);
closePhysics1.addEventListener("click", closePhy1);

physics2.addEventListener("click", appearPhy2);
closePhysics2.addEventListener("click", closePhy2);



chemistry1.addEventListener("click", appearChem1);
closeChemistry1.addEventListener("click", closechem1);

chemistry2.addEventListener("click", appearChem2);
closeChemistry2.addEventListener("click", closechem2);
