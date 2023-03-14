var button_menu = document.querySelector(".button");
var menu = document.querySelector(".nav_list");
var menuItems = document.querySelector("nav_links");
button_menu.addEventListener("click", function () {
  button_menu.classList.toggle("triggered");
  menu.classList.toggle("triggered");
});
for (i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function () {
    button_menu.classList.toggle("triggered");
    menu.classList.remove("triggered");
  });
}
