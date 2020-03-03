$(document).ready(function()
{


// Juke box game - play a simple music, have user guess the song with a 
// multi-choices of singer. 4 choices.
// 30 sec timer each
// 10 songs simple

// Use the following Audio file below:
var audioOne = new Audio("./assets/audio/alan.mp3");
var audioTwo = new Audio("./assets/audio/mad.mp3");
var audioThree = new Audio("./assets/audio/rihanna.mp3");
var audioFour = new Audio("./assets/audio/chainsmokers.mp3");
var audioFive = new Audio("./assets/audio/jonas.mp3");
var audioSix = new Audio("./assets/audio/sam.mp3");
var audioSeven = new Audio("./assets/audio/luis.mp3");
var audioEight = new Audio("./assets/audio/alan2.mp3");
var audioNine = new Audio("./assets/audio/alesso.mp3");
var audioTen = new Audio("./assets/audio/bunt.mp3");
var clap = new Audio("./assets/audio/clap.mp3");
var boo = new Audio("./assets/audio/boo.mp3");

var songList = [audioOne,audioTwo,audioThree,audioFour,audioFive,audioSix,audioSeven,audioEight,audioNine,audioTen];
var songName = ["Faded: Restrung","Mad World","Stay","New York City","Sucker","Dancing with a Stranger","Despacito","The Spectre","Sweet Escape","Young Love"]
var songAnswer = ["Alan Walker", "Gray Jules","Rihanna","Chainsmokers","Jonas Brothers","Sam Smith","Luis Fonsi","Alan Walker","Alesso","BUNT"];
    var firstArrButton = ["John Walker", "Gray Jules","Loreen","Chelly","Jasmine Thompson","Crytal Kay","Luis Fonsi","Will Smith","Jasmine Thompson","Jonas Brothers"];
    var secondArrButton = ["Alan Walker", "Chainsmokers","One Republic","Gray Jules","Alan Walker","Alesso","Gray Jules","Alan Walker","Rihanna","BUNT"];
    var thirdArrrButton = ["Bob Smith", "Sam Smith","Rihanna","BUNT","Jonas Brothers","Sam Smith","Rihanna","Sam Smith","One Republic","Ania Dabrowska"];
    var fourthArrButton = ["Sean Paul", "Jane Mary","Luis Fonsi","Chainsmokers","Luis Fonsi","BUNT","Ania Dabrowska","Jonas Brothers","Alesso","One Republic"];
var right = 0;
var wrong = 0;
var unanswer = 0;

var count = Math.floor(Math.random() * songList.length);

var hardCount = 0;


// create a countdown timer

var countTimer = 30;
var intervalId;
function run()
    {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
    }
    //  The decrement function.
function decrement() 
    {
    //  Decrease number by one.
    countTimer--;
    //  Show the number in the #timer tag.
    $("#timer").html("<h2>" +"<span>"+"00 : "+countTimer+ "</span>"+"</h2>");
    //  Once number hits zero...
    if (countTimer === 0) 
        {
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
        unanswer++;
        $("#display").html("<p>"+"The name of the song is "+"</p>"+ "<h3>" + songName[count] +"<hr>"+" by " +"<hr>"+ songAnswer[count] + " !"+"</h3>");
        countTimer =30;
        hardCount++;
        next();
        }
    }
//  The stop function
function stop() 
    {
    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
    }

$("#start").click(start);


function buttons()
    {   
        $("#display").append("<button type='button'class='list-group-item list-group-item-action'>" + firstArrButton[count] + "</button>");
        $("#display").append("<button type='button'class='list-group-item list-group-item-action'>" + secondArrButton[count] + "</button>");
        $("#display").append("<button type='button'class='list-group-item list-group-item-action'>" + thirdArrrButton[count] + "</button>");
        $("#display").append("<button type='button'class='list-group-item list-group-item-action'>" + fourthArrButton[count] + "</button>"); 
        $("#display").append("<h2>" +"Time left: "+"<span id='timer'>"+"</span>" + "</h2>");
        
    };

function start()
    {
    songList[count].currentTime=0;
    songList[count].play();
    $("#display").html("<h1>" +"Who sang this song?" + "</h1>")
    buttons();
    run();
    $(".list-group-item").on("click",result);   
    }

function result()
        {
        if ($(this).text() == songAnswer[count])
            {
            stop();
            $("#display").html("<h1>" +"Correct!" + "</h1>"+ "<p>"+  "The name of the song is"  +"</p>" + "<h3>"+ songName[count] +"<hr>"+" by " +"<hr>"+ songAnswer[count] + " !"+"</h3>");
            songList[count].pause();
            $("#timer").empty();
            countTimer =30;
            hardCount++;
            right++;
            clap.play();
            next();
              
            }
        else
            {
            stop();
            $("#display").html("<h1>" +"Wrong!" + "</h1>"+ "<p>"+  "The name of the song is"  +"</p>" + "<h3>"+ songName[count] +"<hr>"+" by " +"<hr>"+ songAnswer[count] + " !"+"</h3>");
            songList[count].pause();
            $("#timer").empty();
            countTimer = 30;
            hardCount++;
            wrong++;
            boo.play();
            next();
             
            }
        };

function next()
    {
        if (hardCount === songList.length)
        {
         showResult();
        }
        else
        {
        setTimeout(start, 3000);
        count = Math.floor(Math.random() * songList.length);
        }
    
    };

function showResult()
    {
        if (hardCount === 10)
        {
        $("#display").empty();
        $("#display").append("<h3>" +"Number Correct Answer :  " + "</h3>"+"<h2>"+"<span>"+ right +"</span>"+ "</h2>");
        $("#display").append("<h3>" +"Number Wrong Answer :  "+ "</h3>"+"<h2>"+"<span>"+ wrong +"</span>"+ "</h2>");
        $("#display").append("<h3>" +"Number Unanswer :  "+ "</h3>"+"<h2>"+"<span>"+ unanswer +"</span>"+ "</h2>");
        $("#display").append("<button class='btn btn-warning btn-lg' id='again'>" + "Play again" + "</button>"); 
        hardCount = 0;
        songList[count].pause();
        $("#again").click(start);
        }
    };

});