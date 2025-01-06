const menuicon = document.getElementById("menu-icon");
const menulist = document.getElementById("menu-list");
menuicon.addEventListener("click", () => {
  menulist.classList.toggle("hidden");
});

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header apaweh a");

window.onscroll = () => {
  let scrollPosition = window.scrollY;

  sections.forEach((sec) => {
    let offset = sec.offsetTop;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (scrollPosition >= offset && scrollPosition < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
      });

      document
        .querySelector(`header apaweh a[href="#${id}"]`)
        .classList.add("active");
    }
  });
};
