function myFunction(x){if(x.matches){$(".phone-nav-button").on("click",function(){$(".navLinks").css({"width":"70%"})});$(".inside-nav-button, .nav-item").on("click",function(){$(".navLinks").css({"width":"0"})});$(".hidden-buttons").slideUp();$(".see-more").on("click",function(){$(".hidden-buttons").slideDown();$(".see-more").slideUp()})}}
var x=window.matchMedia("(max-width: 500px)")
myFunction(x)
x.addListener(myFunction)
