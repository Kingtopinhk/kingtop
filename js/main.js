const toggle = document.getElementById("langToggle");

toggle.addEventListener("click", () => {
  const el = document.querySelectorAll("[data-en]");
  const zh = toggle.textContent.includes("中");

  el.forEach(e => {
    e.textContent = zh ? e.dataset.en : e.dataset.zh;
  });

  toggle.textContent = zh ? "EN / 中" : "中 / EN";
});