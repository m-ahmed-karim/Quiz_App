var quiz = [
    {
        question: " Q:1 Inside which HTML element do we put the JavaScript?",
        a: "script",
        b: "javascript",
        c: "scripting",
        d: "js",
        answer: "script",
    },
    {
        question: "Q:2 What is the total area of Punjab Province?",
        a: "74,521 Km",
        b: "347,190 Km",
        c: "40,914 Km",
        d: "205,344 Km",
        answer: "205,344 Km",
    },
    {
        question: "Q:3 Who was the second Prime Minister of Pakistan?",
        a: "Muhammad Ali",
        b: "Kh.Nazim-ud-Din",
        c: "Liaquat Ali Khan",
        d: "Feroze Khan ",
        answer: "Kh.Nazim-ud-Din",
    },
    {
        question: "Q:4 Pakistan is located in the?",
        a: " East Asia",
        b: "West Asia",
        c: "South Asia",
        d: " Central Asia",
        answer: "South Asia"
    },
    {
        question: "Q:5 Where is the World s longest sea bridge?",
        a: "Japan",
        b: "Russia",
        c: "China",
        d: "None of these",
        answer: "China"
    },
    {
        question: "Q:6 Which of the following is known as leap day or leap year day",
        a: "Feb 29",
        b: "Feb 28",
        c: "March 1",
        d: "Feb 1",
        answer: "Feb 29"
    },
    {
        question: "Q:7 What is 3*3?",
        a: "3",
        b: "4",
        c: "9",
        d: "5",
        answer: "9"
    },
    {
        question: "Q:8 Question: What is 2+1?",
        a: "2",
        b: "3",
        c: "4",
        d: "5",
        answer: "3"
    },
    {
        question: "Q:9 What is 10/2?",
        a: '3',
        b: '5',
        c: '115',
        d: "15",
        answer: "5"
    },
    {
        question: "Q:10 What is 30/2?",
        a: "10",
        b: "20",
        c: "15",
        d: "20",
        answer: "15"
    },
]
var qustionConut = 1;
var question = document.querySelector(".qustion");
var Option1 = document.getElementById('Option1')
var Option2 = document.getElementById('Option2')
var Option3 = document.getElementById('Option3')
var Option4 = document.getElementById('Option4')

var next = document.getElementById("button3");
var number = document.getElementById("qustions")
var myscore = document.getElementById("score")
myscore.innerHTML = "Score 10/0"
number.innerHTML = `question:10/${qustionConut}`

function cellme() {
    console.log(qustionConut)
    if (qustionConut === 9) {
        next.className += " hiddenbtn"
        var btndiv = document.getElementById('qustion_change')
        var submitbtn = document.createElement('button')
        var textnode = document.createTextNode('Submit')
        submitbtn.appendChild(textnode)
        btndiv.appendChild(submitbtn)
        submitbtn.setAttribute('class', 'submitbtn')
        submitbtn.setAttribute('onclick', 'submitbtn()')
    }
    qustionConut = qustionConut + 1
    number.innerHTML = "question:10/" + qustionConut
    loadqustion()
    var btn = document.getElementsByClassName('options')
    for (let i = 0; i < btn.length; i++) {
        btn[i].disabled = false;
        btn[i].className += " oldcolor"
    }
}
function loadqustion() {
    var qustionList = quiz[qustionConut - 1];
    question.innerHTML = qustionList.question;
    Option1.innerHTML = qustionList.a
    Option2.innerHTML = qustionList.b
    Option3.innerHTML = qustionList.c
    Option4.innerHTML = qustionList.d
}
loadqustion();
var first_div = document.getElementById("first_div")
var child = first_div.childNodes
var btn1 = child[1]
var btn2 = child[3]
var second_div = document.getElementById("second_div")
var child = second_div.childNodes
var btn3 = child[1]
var btn4 = child[3]
var score = 0;

function chakanswer(e, mythis) {
    var btn = document.getElementsByClassName('options')
    for (let i = 0; i < btn.length; i++) {
        btn[i].disabled = true
        btn[i].className += ' notclicked'
        btn[i].classList.remove('oldcolor')
    }
    mythis.classList.remove("notclicked")
    console.log(quiz[qustionConut - 1].answer)
    if (e === quiz[qustionConut - 1].answer) {
        score = score + 1
        swal("Right!", "You clicked the button!", "success");
    }
    else {
        swal("Wrong!", "You clicked the button!", "warning",);
    }
    
}
function submitbtn() {
    swal(myscore.innerHTML = `Score:10/${score}`)
    console.log( score*10)
}


