$(document).ready(function(){

    $(window).scroll(function(){
        if($(this).scrollTop()>0)
        {
            $("#navbar-menu").css({"opacity" : "1"})
        }
        else
        {
            $("#navbar-menu").css({"opacity" : "0.5"})
        }
    });
})


var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}

var j = 0;
            var txt = "Une école 100% gratuite|";  
            var speed = 160;  
            
            function typeWriter() {
              if (j < txt.length) {
                document.getElementById("Class1").innerHTML += txt.charAt(j);
                j++;
                setTimeout(typeWriter, speed);
              }
            
            }