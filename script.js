
document.getElementById('lang').onclick=()=>{
document.querySelectorAll('[data-en]').forEach(e=>{
e.textContent=e.textContent===e.dataset.en?e.dataset.zh:e.dataset.en;
});
}
