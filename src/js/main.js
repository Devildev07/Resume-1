const themeToggle = document.querySelector("#themeBtn");

themeToggle.addEventListener("click", function () {
  const html = document.documentElement;
  html.classList.toggle("dark");
  const currentTheme = html.classList.contains("dark") ? "dark" : "";
  localStorage.setItem("theme", currentTheme);
});

// Check localStorage for saved theme
const savedTheme = localStorage.getItem("theme");
console.log(savedTheme);
if (savedTheme) {
  document.documentElement.classList.add(savedTheme);
}
