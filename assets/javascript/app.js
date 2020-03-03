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
// sound effect
var clap = new Audio("./assets/audio/clap.mp3");
var boo = new Audio("./assets/audio/boo.mp3");
// var for song
var songList = [audioOne,audioTwo,audioThree,audioFour,audioFive,audioSix,audioSeven,audioEight,audioNine,audioTen];
// var for name of the song
var songName = ["Faded: Restrung","Mad World","Stay","New York City","Sucker","Dancing with a Stranger","Despacito","The Spectre","Sweet Escape","Young Love"];
// var for the name of the artist
var songAnswer = ["Alan Walker", "Gray Jules","Rihanna","Chainsmokers","Jonas Brothers","Sam Smith","Luis Fonsi","Alan Walker","Alesso","BUNT"];
    // var for the questions
    var firstArrButton = ["John Walker", "Gray Jules","Loreen","Chelly","Jasmine Thompson","Crytal Kay","Luis Fonsi","Will Smith","Jasmine Thompson","Loreen"];
    var secondArrButton = ["Alan Walker", "Chainsmokers","Jane Mary","Gray Jules","Alan Walker","Alesso","Gray Jules","Alan Walker","Rihanna","BUNT"];
    var thirdArrrButton = ["Bob Smith", "Sam Smith","Rihanna","BUNT","Jonas Brothers","Sam Smith","Rihanna","Sam Smith","One Republic","Ania Dabrowska"];
    var fourthArrButton = ["Sean Paul", "One Republic","Luis Fonsi","Chainsmokers","Luis Fonsi","BUNT","Ania Dabrowska","Jonas Brothers","Alesso","One Republic"];
// var for result
var right = 0;
var wrong = 0;
var unanswer = 0;
// random the question asked.
var count = Math.floor(Math.random() * songList.length);
// to keep count on how many games played
var hardCount = 0;


// countdown timer
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
        //  add up unanswered question.
        unanswer++;
        // display it
        $("#display").html("<p>"+"The name of the song is "+"</p>"+ "<h3>" + songName[count] +"<hr>"+" by " +"<hr>"+ songAnswer[count] + " !"+"</h3>");
        //reset the count timer
        countTimer =30;
        //count gamed played
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
// link to index.html
$("#start").click(start);

// create buttons 
function buttons()
    {   
        $("#display").append("<button type='button'class='list-group-item list-group-item-action list-group-item-primary'>" + firstArrButton[count] + "</button>");
        $("#display").append("<button type='button'class='list-group-item list-group-item-action list-group-item-success'>" + secondArrButton[count] + "</button>");
        $("#display").append("<button type='button'class='list-group-item list-group-item-action list-group-item-warning'>" + thirdArrrButton[count] + "</button>");
        $("#display").append("<button type='button'class='list-group-item list-group-item-action list-group-item-danger'>" + fourthArrButton[count] + "</button>"); 
        $("#display").append("<h2>" +"Time left: "+"<span id='timer'>"+"</span>" + "</h2>");
        
    };
// start the game function
function start()
    {
    // start the audio at the beginning
    songList[count].currentTime=0;
    // play the song
    songList[count].play();
    $("#display").html("<h1>" +"Who Sings This Song?" + "</h1>");
    //show the buttons
    buttons();
    //run the game
    run();
    $(".list-group-item").on("click",result);   
    }
// condition for win and lost
function result()
        {
        // if the button click equal to the song answer
        if ($(this).text() == songAnswer[count])
            {
            // stop the timer
            stop();
            // display the result of win
            $("#display").html("<h1>" +"Correct!" + "</h1>"+ "<p>"+  "The name of the song is"  +"</p>" + "<h3>"+ songName[count] +"<hr>"+" by " +"<hr>"+ songAnswer[count] + " !"+"</h3>");
            //stop the playing song
            songList[count].pause();
            // empty the timer
            $("#timer").empty();
            // reset the timer counter back to 30
            countTimer =30;
            // add game played
            hardCount++;
            // add correct answer
            right++;
            // play clap audio
            clap.play();
            // next question
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
        // if game play equal to 10
        if (hardCount === songList.length)
        {
         showResult();
        }
        else
        {
        // after 3 sec start the question
        setTimeout(start, 3000);
        // random the question 
        count = Math.floor(Math.random() * songList.length);
        }
    
    };

function showResult()
    {
        // if game play equal to 10
        if (hardCount === 10)
        {
        // clear the div
        $("#display").empty();
        // display it
        $("#display").append("<h3>" +"Number Correct Answer :  " + "</h3>"+"<h2>"+"<span>"+ right +"</span>"+ "</h2>");
        $("#display").append("<h3>" +"Number Wrong Answer :  "+ "</h3>"+"<h2>"+"<span>"+ wrong +"</span>"+ "</h2>");
        $("#display").append("<h3>" +"Number Unanswer :  "+ "</h3>"+"<h2>"+"<span>"+ unanswer +"</span>"+ "</h2>");
        $("#display").append("<button class='btn btn-warning btn-lg' id='again'>" + "Play again" + "</button>"); 
        //reset the game played
        hardCount = 0;
        //stop the song played
        songList[count].pause();
        //option to play the game again
        $("#again").click(start);
        }
    };

});