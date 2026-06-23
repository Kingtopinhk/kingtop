let currentLang = "en";

function applyLang(lang) {
  document.querySelectorAll(".lang-en").forEach(el => {
    el.style.display = lang === "en" ? "block" : "none";
  });
  document.querySelectorAll(".lang-zh").forEach(el => {
    el.style.display = lang === "zh" ? "block" : "none";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyLang("en");
  document.getElementById("langToggle").addEventListener("click", () => {
    currentLang = currentLang === "en" ? "zh" : "en";
    applyLang(currentLang);
  });
});
