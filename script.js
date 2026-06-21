
let zh=false;
document.getElementById('langBtn').onclick=function(){
zh=!zh;
document.querySelectorAll('[data-en]').forEach(el=>{
el.textContent=zh?el.dataset.zh:el.dataset.en;
});
}
