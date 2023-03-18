const nav = document.querySelector(".menu");
const button = document.querySelector(".button");
const menu = document.querySelector(".nav_list");

nav.addEventListener("click", ({ target }) => {
  if (target.classList.contains("button")) {
    button.classList.toggle("triggered");
    menu.classList.toggle("triggered");
  } else if (target.classList.contains("menu")) {
    button.classList.toggle("triggered");
    menu.classList.remove("triggered");
  }
});

// ================horizontal tabs=============================
const tabs = document.querySelectorAll(".toggle_project");
const contents = document.querySelectorAll(".content_project");

const showTab = (index) => {
  contents.forEach((content, i) => {
    content.classList.toggle("is-active", i === index);
  });
  tabs.forEach((tab, i) => {
    tab.classList.toggle("is-active", i === index);
  });
};

tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    showTab(index);
  });
});

showTab(0);

// ======================form======================

const form = document.getElementsByClassName("contact_form")[0];
form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name").value;
  let email = document.getElementById("email").value;
  let message = document.getElementById("message").value;
  if (name.length === 0 && email.length === 0 && message.length === 0) {
    console.warn("You must enter some data to submit this form");
  } else {
    name = name.length === 0 ? "no submission" : name;
    email = email.length === 0 ? "no submission" : email;
    message = message.length === 0 ? "no submission" : message;
    console.log("======== Form Submission =========");
    console.log(`   Username: ${name}`);
    console.log(`   Email: ${email}`);
    console.log(`   Message: ${message}`);
  }
});
