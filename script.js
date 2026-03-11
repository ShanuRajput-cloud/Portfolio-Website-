const toggle = document.getElementById("modeToggle");

toggle.addEventListener("click", () => {
document.body.classList.toggle("dark");
});

// typing
const text = ["Frontend Developer","Web Designer","JavaScript Learner"];
let count = 0;
let index = 0;

function type(){
let current = text[count];
document.getElementById("typing").textContent =
current.slice(0,index++);

if(index > current.length){
count++;
index = 0;
}

if(count >= text.length){
count = 0;
}

setTimeout(type,120);
}

type();

// scroll animation
window.addEventListener("scroll", () => {
const elements = document.querySelectorAll(".reveal");

elements.forEach(el => {
const windowHeight = window.innerHeight;
const elementTop = el.getBoundingClientRect().top;

if(elementTop < windowHeight - 100){
el.classList.add("active");
}
});
});