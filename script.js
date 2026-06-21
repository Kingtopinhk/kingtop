
let zh=false;
document.getElementById('langBtn').onclick=()=>{
 zh=!zh;
 document.querySelectorAll('[data-en]').forEach(el=>el.textContent=zh?el.dataset.zh:el.dataset.en);
 document.getElementById('name').placeholder=zh?'姓名':'Name';
 document.getElementById('contact').placeholder=zh?'電郵 / WhatsApp':'Email / WhatsApp';
 document.getElementById('message').placeholder=zh?'項目需求':'Project Details';
 document.getElementById('submitBtn').textContent=zh?'提交詢盤':'Send Inquiry';
 document.getElementById('langBtn').textContent=zh?'EN':'繁中';
};
