/* script.js */

// LOADER

window.addEventListener("load", () => {

  document.querySelector(".loader").style.display = "none";

});

// CART

let count = 0;

const cartBtns = document.querySelectorAll(".cart-btn");

const cartCount = document.getElementById("cart-count");

cartBtns.forEach(btn => {

  btn.addEventListener("click", () => {

    count++;

    cartCount.innerText = count;

    alert("Product Added To Cart!");

  });

});

// CONTACT FORM

const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e){

  e.preventDefault();

  alert("Message Sent Successfully!");

  form.reset();

});

// COUNTDOWN TIMER

const targetDate = new Date().getTime() + 5 * 24 * 60 * 60 * 1000;

setInterval(() => {

  const now = new Date().getTime();

  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));

  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;

},1000);

// BACK TO TOP

const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", () => {

  window.scrollTo({
    top:0,
    behavior:"smooth"
  });

});

// NAVBAR SHADOW + TOP BUTTON

window.addEventListener("scroll", () => {

  const navbar = document.querySelector(".navbar");

  if(window.scrollY > 50){

    navbar.style.boxShadow = "0 4px 20px rgba(0,0,0,0.15)";

  }
  else{

    navbar.style.boxShadow = "none";

  }

  if(window.scrollY > 300){

    topBtn.style.display = "block";

  }
  else{

    topBtn.style.display = "none";

  }

});

// ACTIVE NAV LINK

const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navLinks.forEach(nav => nav.classList.remove("active"));

    link.classList.add("active");

  });

});

// SOCIAL ICON CLICK

const socialIcons = document.querySelectorAll(".social-icons i");

socialIcons.forEach(icon => {

  icon.addEventListener("click", () => {

    alert("Social Link Coming Soon!");

  });

});

// SEARCH ICON

document.querySelector(".bx-search").addEventListener("click", () => {

  alert("Search Feature Coming Soon!");

});

// NEWSLETTER

document.querySelector(".newsletter input")
.addEventListener("keypress", function(e){

  if(e.key === "Enter"){

    alert("Subscribed Successfully!");

    this.value = "";

  }

});