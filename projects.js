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