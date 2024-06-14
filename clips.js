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
            change[change.length -1].classList.add("see-through")
            change[change.length -1].classList.remove("visible")
        }

        change[i].classList.add("visible")
        change[i].classList.remove("see-through")

        if (i > 0) {
            change[i-1].classList.add("see-through")
            change[i-1].classList.remove("visible")
        }
        i = (i+1) % change.length
    }

    cycleText();

    setInterval(cycleText, 1000)
})



hello