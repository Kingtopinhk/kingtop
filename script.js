
let zh=false;
document.getElementById('langBtn').onclick=()=>{
 zh=!zh;
 document.querySelectorAll('[data-en]').forEach(el=>{
   el.textContent=zh?el.dataset.zh:el.dataset.en;
 });
 document.documentElement.lang=zh?'zh-HK':'en';
};
