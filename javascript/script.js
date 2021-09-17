/* document.write(`
<logo></logo>
    <header>
        <h1 class="logo"><a href="index.html">Flash Images Photography</a></h1>
        <nav class="topnav" id="myTopnav">
            <ul>
                <li><a href="./index.html">Home</a></li>
                <li><a href="./gallery.html">Gallery</a></li>
                <li><a href="./bookings.html">Bookings</a></li>
                <li><a href="./account.html">Account</a></li>
                <li><a href="./aboutus.html">About Us</a></li>
                <li><a href="./contact.html">Contact</a></li>
            </ul>
        </nav>
    </header>
`) */


document.getElementById("menu").innerHTML =
    '<a href="index.html" class="logo">Flash Image Photos</a>' +
    '<nav>' +
    '<input class="menu-btn" type="checkbox" id="menu-btn" />' +
    '<label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>' +
    '<ul class="menu">' +
    '<li><a href="../index/index.html">Home</a></li>' +
    '<li><a href="../index/gallery.html">Gallery</a></li>' +
    '<li><a href="../index/bookings.html">Bookings</a></li>' +
    '<li><a href="../index/aboutus.html">About Us</a></li>' +
    '<li><a href="../index/contact.html">Contact</a></li>' +
    '</ul>' +
    '</nav>';

/* 
window.onscroll = function () {
    myFunction()
};

var mainHeader = document.getElementById("mainHeader");
var sticky = mainHeader.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        mainHeader.classList.add("sticky")
    } else {
        mainHeader.classList.remove("sticky");
    }
}; */

/*
var myTopnav = document.getElementById("myTopnav");
var sticky = myTopnav.offsetTop;

function myFunction() {
    if (window.pageYOffset >= sticky) {
        myTopnav.classList.add("sticky")
    } else {
        myTopnav.classList.remove("sticky");
    }
}; */


document.getElementById("myFootermenu").innerHTML =
    '<ul class="nav-footer" id="bottomfootermenu">' +
    '<li><a href= "#pagetop">^Back to top</a></li>' +
    '<li><a href= "./index.html">Home</a></li>' +
    '<li><a href= "./gallery.html">Gallery</a></li>' +
    '<li><a href= "./bookings.html">Bookings</a></li>' +
    '<li><a href= "./aboutus.html">About Us</a></li>' +
    '<li><a href="./contact.html">Contact</a></li>' +
    '</ul>'
console.log;