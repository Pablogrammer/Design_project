
// This is the function that change the class of the nav from topnav to responsive
// When this hapend the styles are updated and the navbar goes from top to right.

function myFunction() {
  var x = document.querySelector(".topnav");
  if (x.className === "topnav") {
    x.classList.toggle("responsive");
    console.log(x);

  } else {
    x.className = "topnav";
  }
}

// This code identify the hamburguer in the web with the DOM and is looking alwais if the hamburguer is clicked or not.

  // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });
