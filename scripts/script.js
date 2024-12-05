const hamburgerBtn = document.querySelector("header nav button:first-of-type");
const navEL = document.querySelector("main > ul");

console.log(hamburgerBtn);  // Debugging
console.log(navEL);  // Debugging

if (hamburgerBtn) {
    hamburgerBtn.addEventListener("click", openMenu);
}

function openMenu() {
    navEL.classList.toggle("active");
}
