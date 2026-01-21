const toggle = document.getElementById("theme-toggle");
const storedTheme = localStorage.getItem("theme");


if (storedTheme) {
document.documentElement.setAttribute("data-theme", storedTheme);
}


toggle.addEventListener("click", () => {
let theme = document.documentElement.getAttribute("data-theme");
let newTheme = theme === "dark" ? "light" : "dark";
document.documentElement.setAttribute("data-theme", newTheme);
localStorage.setItem("theme", newTheme);
});
