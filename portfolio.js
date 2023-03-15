const nav = document.querySelector("nav");
const button = document.querySelector(".button");
const menu = document.querySelector(".nav_list");

nav.addEventListener("click", (event) => {
  const { target } = event;

  if (target.classList.contains("button")) {
    button.classList.toggle("triggered");
    menu.classList.toggle("triggered");
  } else if (target.classList.contains("menu")) {
    button.classList.toggle("triggered");
    menu.classList.remove("triggered");
  }
});

const tabs = document.querySelectorAll(".toggle_project");
const contents = document.querySelectorAll(".content_project");

function showTab(index) {
  contents.forEach((content, i) => {
    content.classList.toggle("is-active", i === index);
  });
  tabs.forEach((tab, i) => {
    tab.classList.toggle("is-active", i === index);
  });
}

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    showTab(index);
  });
});
showTab(0);
