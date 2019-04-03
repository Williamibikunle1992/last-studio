/*jshint esversion: 6 */

//we need to listen
//for scroll events on the pageX
//when the scroll bar reaches a certain distance
//we want to change thebackground color of the body
// step1: decide which tags in html we want to use and save them as constants at the top of the page
//const bodyTag.style.backgroundColor = "#000000";
const bodyTag = document.querySelector("body");
// step 2: decide which user events ie, clcik, scroll, etc we want to trigger our code on. here
document.addEventListener("scroll", function() {

  console.log("We scrolllled!");

  //step3: find out and store how far from the top of the page the scroll bar console.log(require('util').inspect(, { depth: null }));

  let distanceFromTop = window.scrollY;
  console.log(distanceFromTop);

  // if the distance from top is greater than 1000 pixels, do something

  if (distanceFromTop > 1000) {
    //do this
    //bodyTag.style.backgroundColor = ("red");
    bodyTag.classList.add("brogue-active");

  } else {
    bodyTag.classList.remove("brogue-active");
    //bodyTag.style.backgroundColor = ("white");
  }

  if (distanceFromTop > 4300) {
    //do this
    //bodyTag.style.backgroundColor = ("red");
    bodyTag.classList.add("stationary-active");

  } else {
    bodyTag.classList.remove("stationary-active");
    //bodyTag.style.backgroundColor = ("white");
  }

});

//lightbox
//when we click on an image
//we want to show the light box
//inside the lightbox must be the image we clicked on
//click again to disapear
// step1: decide which tags in HTML we want to use and save them in constants

//save all our images as a constant - a list of images
const images = document.querySelectorAll("section img");
const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");

console.log(images);

images.forEach(image => {

  image.addEventListener("click", function() {
    console.log("image clicked");
    lightbox.classList.add("fadeIn");

    let imageSrc = this.getAttribute("src");
    console.log(imageSrc);
    lightboxImage.setAttribute("src", imageSrc);
  });

});

lightbox.addEventListener("click", function() {
  lightbox.classList.remove("fadeIn");

});