const menuicon = document.getElementById("menu-icon");
const menulist = document.getElementById("menu-list");

menuicon.addEventListener("click", () => {
  menulist.classList.toggle("hidden");
});

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header a");

navLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// const menuicon = document.getElementById("menu-icon");
// const menulist = document.getElementById("menu-list");
// menuicon.addEventListener("click", () => {
//   menulist.classList.toggle("hidden");
// });

// let sections = document.querySelectorAll("section");
// let navLinks = document.querySelectorAll("header apaweh a");
