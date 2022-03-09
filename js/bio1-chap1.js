'use strict';
//variables
let question = document.querySelector(".question");
let option1 = document.querySelector(".option1");
let option2 = document.querySelector(".option2");
let option3 = document.querySelector(".option3");
let option4 = document.querySelector(".option4");
let submit = document.querySelector(".submit");
let next = document.querySelector(".next");
let mcq = [question, option1, option2, option3, option4];
let count = 0;
let score = 0;
let numberOfQuestions = 3;
let answerChoosed;
const questions = [
    [
        "1. How many days are there in a leap year?",
        "364",
        "362",
        "366",
        "363",
        "opt3"
    ],
    [
        "2. How many falana dhimkana falana dhimakana falana dhimkana ",
        "answer1",
        "answer2",
        "answer3",
        "answer4",
        "opt2"
    ],
    [
        "3. What best describe a falana dhimkana actually falana dhimkana",
        "kuch bhi",
        "mujeh nahi pata",
        "ye batay nahi btaty",
        "kisi aur se poocho",
        "opt1"
    ]

]
for (let i = 0; i < 5; ++i) {
    mcq[i].textContent = questions[count][i];
}

function showResults() {
    document.querySelector(".score").textContent = score;
    document.querySelector(".showResults").classList.remove("hidden");
    document.querySelector(".mcq-content").classList.add("hidden");
}

function checkAnswer() {
    for (let i = 1; i <= 4; ++i) {
        if (document.querySelector(`#opt${i}`).checked) {
            answerChoosed = i;
            if (`opt${i}` == questions[count][5]) {
                return true;
            }
        }
    }
    return false;
}

function showCorrectOption(turn) {
    if (turn == 0)
        document.querySelector(`.option${questions[count][5][3]}`).style.color = "green";
    else
        document.querySelector(`.option${questions[count][5][3]}`).style.color = "black";
}

function controlSubmit() {
    showCorrectOption(0);

    if (count < numberOfQuestions) {
        if (checkAnswer()) {
            score++;
        } else {
            document.querySelector(`.option${answerChoosed}`).style.color = "red";

        }

    }
}

function controlNext() {
    document.querySelector(`.option${answerChoosed}`).style.color = "black";
    answerChoosed = 0;
    showCorrectOption(1);
    if (count < numberOfQuestions) {
        count++;
        if (count < numberOfQuestions) {
            for (let i = 0; i < 5; ++i) {
                mcq[i].textContent = questions[count][i];
            }
        }

    }
    if (count == numberOfQuestions) {
        showResults();
    }
    for (let i = 1; i <= 4; ++i) {
        document.querySelector(`#opt${i}`).checked = false;

    }
}


submit.addEventListener("click", controlSubmit);

next.addEventListener("click", controlNext);