document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("langToggle");

  // 默认英文
  setLang("en");

  toggle.addEventListener("click", function () {
    const current =
      document.querySelector(".lang-en")?.style.display === "none"
        ? "en"
        : "zh";
    setLang(current === "en" ? "zh" : "en");
  });

  function setLang(lang) {
    document
      .querySelectorAll(".lang-en")
      .forEach(el => (el.style.display = lang === "en" ? "block" : "none"));

    document
      .querySelectorAll(".lang-zh")
      .forEach(el => (el.style.display = lang === "zh" ? "block" : "none"));

    toggle.innerHTML =
      lang === "en"
        ? '<span class="lang-en">中文 / EN</span><span class="lang-zh">中 / EN</span>'
        : '<span class="lang-en">中文 / EN</span><span class="lang-zh">中 / EN</span>';

    // 同步按钮语言
    setTimeout(() => {
      toggle.querySelectorAll(".lang-en, .lang-zh").forEach(el => {
        el.style.display = lang === "en" ? "inline" : "none";
      });
    }, 0);
  }
});