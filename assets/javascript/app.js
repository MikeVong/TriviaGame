$(document).ready(function()
{});
// Juke box game - play a simple music, have user guess the song with a 
// multi-choices of singer. 4 choices.
// 30 sec timer each
// 10 songs simple

// Use the following Audio file below:
var audioOne = new Audio("raven.mp3");
var audioTwo = new Audio("raven.mp3");
var audioThree = new Audio("raven.mp3");
var audioFour = new Audio("raven.mp3");
var audioFive = new Audio("raven.mp3");
var audioSix = new Audio("raven.mp3");
var audioSeven = new Audio("raven.mp3");
var audioEight = new Audio("raven.mp3");
var audioNine = new Audio("raven.mp3");
var audioTen = new Audio("raven.mp3");

//to play audio.
audioOne.play();





// create a countdown timer
var countTimer = 30;
function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

  //  The decrement function.
  function decrement() {

    //  Decrease number by one.
    countTimer--;

    //  Show the number in the #timer tag.
    $("#timer").html("<h2>" + ":"+ countTimer + "</h2>");


    //  Once number hits zero...
    if (countTimer === 0) {

      //  ...run the stop function.
      stop();

      //  Alert the user that time is up.
      alert("Time Up!");
    }
  }


// TODO: Put links to our images in this image array.
var images = ["images/bootstrap.png", "images/github-logo.jpg", "images/logo_JavaScript.png"];

// Variable showImage will hold the setInterval when we start the slideshow
var showImage;

// Count will keep track of the index of the currently displaying picture.
var count = 0;

// TODO: Use jQuery to run "startSlideshow" when we click the "start" button.
$("#start").click(startSlideshow);

// TODO: Use jQuery to run "stopSlideshow" when we click the "stop" button.
$("#stop").click(stopSlideshow);


// This function will replace display whatever image it's given
// in the 'src' attribute of the img tag.
function displayImage() {
  $("#image-holder").html("<img src=" + images[count] + " width='400px'>");
}

function nextImage() {
  //  TODO: Increment the count by 1.
  count++;

  // TODO: Show the loading gif in the "image-holder" div.
  $("#image-holder").html("<img src='images/loading.gif' width='200px'/>");

  // TODO: Use a setTimeout to run displayImage after 1 second.
  setTimeout(displayImage, 1000);

  // TODO: If the count is the same as the length of the image array, reset the count to 0.
  if (count === images.length) {
    count = 0;
  }
}

function startSlideshow() {

  // TODO: Use showImage to hold the setInterval to run nextImage.
  showImage = setInterval(nextImage, 3000);

}

function stopSlideshow() {

  // TODO: Put our clearInterval here:
  clearInterval(showImage);

}

// This will run the display image function as soon as the page loads.
displayImage();

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