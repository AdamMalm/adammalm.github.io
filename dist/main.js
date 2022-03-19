window.addEventListener('scroll', () => {
    myID = document.getElementById("back2top");

    var y = window.scrollY;
    if (y >= 900) {
        myID.className = "show"
    } else {
        myID.className = "hide"
        var x = document.getElementById("hamburger-menu");
        x.className = "hamburger-menu-hide";
    }
});

function myFunction() {
    var x = document.getElementById("hamburger-menu");
    if (x.className === "hamburger-menu-hide") {
        x.className = "hamburger-menu-show";
    } else {
        x.className = "hamburger-menu-hide";
    }
}

function redirectFunction(url) {
    window.location.href = url;
}







        