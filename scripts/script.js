function myFunction() {
  var x = document.querySelector(".topnav");
  if (x.className === "topnav") {
    x.classList.toggle("responsive");
    console.log(x);

  } else {
    x.className = "topnav";
  }
}
  // Look for .hamburger
  var hamburger = document.querySelector(".hamburger");
  // On click
  hamburger.addEventListener("click", function() {
    // Toggle class "is-active"
    hamburger.classList.toggle("is-active");
    // Do something else, like open/close menu
  });
