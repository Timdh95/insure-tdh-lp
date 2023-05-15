

const element = document.getElementById("hamburger");
const nav = document.getElementById("nav")
element.addEventListener("click", toggleMenu);
function toggleMenu(){
    nav.classList.toggle("nav-active")
}

element.addEventListener("click", menuIcon);
function menuIcon(){
    element.classList.toggle("menu-toggle-active")
};



const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else{
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
