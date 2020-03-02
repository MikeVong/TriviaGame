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
        alert("Time Up!");
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





// Variable showImage will hold the setInterval when we start the slideshow
var showImage;

// Count will keep track of the index of the currently displaying picture.
var count = 0;

// TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
$("#start").click(displayImage);




// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {
    run();
    start();      
}


function buttons()
    { 
        $("#display").append("<button class='btn btn-primary btn-lg'>" + firstArrButton[count] + "</button>");
        $("#display").append("<button class='btn btn-primary btn-lg'>" + secondArrButton[count] + "</button>");
        $("#display").append("<button class='btn btn-primary btn-lg'>" + thirdArrrButton[count] + "</button>");
        $("#display").append("<button class='btn btn-primary btn-lg'>" + fourthArrButton[count] + "</button>"); 
    };



function start()
    {
    songList[count].play();
    $("#display").html("<h1>" +"Who is the Artist?" + "</h1>")
    buttons();
    $(".btn").on("click",result);   
    }



function result()
    {
        if ($(this).text() == songAnswer[count])
        {
            $("#display").html("<h1>" +"Correct! The name of the song is "+ songName[count] +" by " + songAnswer[count] + " !"+"</h1>");
            songList[count].pause();
            stop();
            count++;
            displayImage();

            
        }
        else
        {
            $("#display").html("<h1>" +"Wrong! The name of the song is "+ songName[count] +" by " + songAnswer[count] + " !"+"</h1>");
            songList[count].pause();
            stop();
            count++;
            displayImage();
            
        }
        
    };

 //function nextSong() {
  //  TODO: Increment the count by 1.
 //count++;

  // TODO: Use a setTimeout to run displayImage after 1 second.
 // setTimeout(displayImage, 2000);

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
 // if (count === images.length) {
 //   count = 0;
 // }
//}

//function startSlideshow() {

 // // TODO: Use showImage to hold the setInterval to run nextImage.
 // showImage = setInterval(nextImage, 1000);

//}

//function stopSlideshow() {

  // TODO: Put our clearInterval here:
 // clearInterval(showImage);

//}


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