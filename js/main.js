function setLang(lang) {
  document.querySelectorAll(".lang-en").forEach(e => e.style.display = lang === "en" ? "block" : "none");
  document.querySelectorAll(".lang-zh").forEach(e => e.style.display = lang === "zh" ? "block" : "none");
}
document.addEventListener("DOMContentLoaded", () => {
  setLang("en");
  document.getElementById("langToggle").onclick = () => {
    const isEn = document.querySelector(".lang-en").style.display !== "none";
    setLang(isEn ? "zh" : "en");
  };
});