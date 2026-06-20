
let current='en';
function toggleLang(){
current=current==='en'?'zh':'en';
document.querySelectorAll('[data-en]').forEach(el=>{
el.innerText=el.getAttribute(current==='en'?'data-en':'data-zh');
});
}
