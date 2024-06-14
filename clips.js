window.addEventListener('scroll', function(){
    var header = document.getElementById("header");

    if(window.scrollY > 0){
        header.classList.add("bg","outline");
    }
    else{
        header.classList.remove("bg","outline");
    }
})

document.addEventListener('DOMContentLoaded', function() {
    var change = document.querySelectorAll(".changing-text")
    var i = 0;

    function cycleText() {

        if (i == 0){
            change[change.length -1].classList.add("text-blur-out")
            change[change.length -1].classList.remove("text-focus-in")
        }

        change[i].classList.add("text-focus-in")
        change[i].classList.remove("text-blur-out")

        if (i > 0) {
            change[i-1].classList.add("text-blur-out")
            change[i-1].classList.remove("text-focus-in")
        }
        i = (i+1) % change.length
    }

    cycleText();

    setInterval(cycleText, 2000)
})