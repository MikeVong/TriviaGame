$(document).ready(function()
{


// Juke box game - play a simple music, have user guess the song with a 
// multi-choices of singer. 4 choices.
// 30 sec timer each
// 10 songs simple

// Use the following Audio file below:
var audioOne = new Audio("./assets/audio/alan.mp3");
var audioTwo = new Audio("./assets/audio/mad.mp3");
//var audioThree = new Audio("raven.mp3");
//var audioFour = new Audio("raven.mp3");
//var audioFive = new Audio("raven.mp3");
//var audioSix = new Audio("raven.mp3");
//var audioSeven = new Audio("raven.mp3");
//var audioEight = new Audio("raven.mp3");
//var audioNine = new Audio("raven.mp3");
//var audioTen = new Audio("raven.mp3");

var songList = [audioOne,audioTwo];
var songName = ["Faded: Restrung","Mad World"]
var songAnswer = ["Alan Walker", "Gray Jules"];
    var firstArrButton = ["John Walker", "Gray Jules"];
    var secondArrButton = ["Alan Walker", "Person 2"];
    var thirdArrrButton = ["Bob Smith", "Joe"];
    var fourthArrButton = ["Sean Paul", "Jane"];
var right = 0;
var wrong = 0;
var unanswer = 0;
// Count will keep track of the index of the currently displaying picture.
var count = 0;



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
    $("#timer").html("<h2>" + "00 : "+ countTimer + "</h2>");
    //  Once number hits zero...
    if (countTimer === 0) 
        {
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
        unanswer++;
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
    };

function start()
    {
    songList[count].currentTime=0;
    songList[count].play();
    $("#display").html("<h1>" +"Who is the Artist?" + "</h1>")
    buttons();
    run();
    $(".list-group-item").on("click",result);   
    }

function result()
        {
        if ($(this).text() == songAnswer[count])
            {
            stop();
            $("#display").html("<h1>" +"Correct! The name of the song is "+ songName[count] +" by " + songAnswer[count] + " !"+"</h1>");
            songList[count].pause();
            $("#timer").empty();
            countTimer =30;
            count++;
            right++;
            next();
              
            }
        else
            {
            stop();
            $("#display").html("<h1>" +"Wrong! The name of the song is "+ songName[count] +" by " + songAnswer[count] + " !"+"</h1>");
            songList[count].pause();
            $("#timer").empty();
            countTimer = 30;
            count++;
            wrong++;
            next();
             
            }
        };
function next()
    {
        if (count === songList.length)
        {
         showResult();
        }
        else
        {
        setTimeout(start, 3000);
        }
    
    };



function showResult()
    {
        $("#display").empty();
        $("#display").append("<h1>" +"Number Correct Answer :  "+ right + "</h1>");
        $("#display").append("<h1>" +"Number Wrong Answer :  "+ wrong + "</h1>");
        $("#display").append("<h1>" +"Number Unanswer :  "+ unanswer + "</h1>");
        $("#display").append("<button class='btn btn-primary btn-lg' id='again'>" + "Play again" + "</button>"); 
        count = 0;
        songList[count].pause();
        $("#again").click(start);
    }

// This will run the display image function as soon as the page loads.


// If the player runs out of time, 
        //tell the player that time's up and display the correct answer. 
        //Wait a few seconds, then show the next question.

// If the player chooses the wrong answer, 
        //tell the player they selected the wrong option 
        //and then display the correct answer. 
        //Wait a few seconds, then show the next question.

// On the final screen, 
        //show the number of 
            //correct answers, 
            //incorrect answers, 
            //and an option to restart the game (without reloading the page).
});