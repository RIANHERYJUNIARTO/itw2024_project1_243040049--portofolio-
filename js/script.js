const menuicon = document.getElementById("menu-icon");
const menulist = document.getElementById("menu-list");
menuicon.addEventListener("click", () => {
  menulist.classList.toggle("hidden");
});

let sections = document.querySelectorAll("section"); // Select all sections
let navLinks = document.querySelectorAll("header apaweh a"); // Select all navigation links

window.onscroll = () => {
  let scrollPosition = window.scrollY; // Get the current scroll position

  sections.forEach((sec) => {
    let offset = sec.offsetTop; // Get the top offset of the section
    let height = sec.offsetHeight; // Get the height of the section
    let id = sec.getAttribute("id"); // Get the id of the section

    // Check if the current scroll position is within the section
    if (scrollPosition >= offset && scrollPosition < offset + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active"); // Remove 'active' class from all links
      });
      // Add 'active' class to the corresponding link
      document.querySelector(`header apaweh a[href="#${id}"]`).classList.add("active");
    }
  });
};