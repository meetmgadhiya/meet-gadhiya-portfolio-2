const themeToggle = document.querySelector("#theme-toggle");
const savedTheme = localStorage.getItem("theme");
if (savedTheme) document.documentElement.dataset.theme = savedTheme;
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const newTheme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = newTheme;
    localStorage.setItem("theme", newTheme);
  });
}
