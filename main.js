
var typed = new Typed(".text", {
    strings: ["Frontend Developer", "Web Developer", "Software Developer"],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 500,
    loop: true
});


var sidemenu = document.getElementById('sidemenu')

function openmenu(){
    sidemenu.style.right ="0"
}
function closemenu(){
    sidemenu.style.right ="-400px"
}

