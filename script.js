function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
    console.log("hello?")
  }



let index = 0;
introSlide = document.getElementById("intro");
imagePaths = ["src/comm.jpg", "src/comm2.jpeg", "src/comm3.jpg"]

function slide() {

    index = (index + 1) % imagePaths.length;
    introSlide.src = imagePaths[index];
}
setInterval(slide, 3000);
window.addEventListener("scroll", reveal);