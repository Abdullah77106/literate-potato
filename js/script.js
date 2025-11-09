// Initialize Swiper
const swiper = new Swiper('.mySwiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination', clickable: true },
});

// WhatsApp menu toggle
const waBtn = document.getElementById('waBtn');
const waMenu = document.getElementById('waMenu');
waBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  waMenu.style.display = waMenu.style.display === 'block' ? 'none' : 'block';
});
document.addEventListener('click', (e) => {
  if (!waMenu.contains(e.target) && !waBtn.contains(e.target)) waMenu.style.display = 'none';
});

// Contact form (main)
function handleForm(e){
  e.preventDefault();
  const f = e.target;
  const name = encodeURIComponent(f.name.value.trim());
  const phone = encodeURIComponent(f.phone.value.trim());
  const msg = encodeURIComponent(f.message.value.trim());
  const text = `الاسم: ${name}%0Aالهاتف: ${phone}%0Aالرسالة: ${msg}`;
  const waLink = `https://api.whatsapp.com/send?phone=966509407109&text=${text}`;
  window.open(waLink, '_blank');
  document.getElementById('formMsg').textContent = 'يتم فتح واتساب للإرسال...';
}

// ---------- Modal "اطلب عرض سعر" functionality ----------
const requestBtns = document.querySelectorAll('.request-btn');
const requestModal = document.getElementById('requestModal');
const modalClose = document.getElementById('modalClose');
const quickForm = document.getElementById('quickRequestForm');
const rqService = document.getElementById('rq_service');

requestBtns.forEach(btn => {
  btn.addEventListener('click', (e) => {
    const svc = btn.getAttribute('data-service') || '';
    rqService.value = svc;
    // show modal
    requestModal.classList.remove('modal-hidden');
    requestModal.style.display = 'block';
  });
});

modalClose.addEventListener('click', () => {
  requestModal.classList.add('modal-hidden');
  requestModal.style.display = 'none';
});

// close modal on backdrop click
requestModal.addEventListener('click', (ev) => {
  if (ev.target.classList.contains('modal-backdrop')) {
    requestModal.classList.add('modal-hidden');
    requestModal.style.display = 'none';
  }
});

// submit quick request -> open whatsapp with prefilled text
quickForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = encodeURIComponent(quickForm.rq_name.value.trim());
  const phone = encodeURIComponent(quickForm.rq_phone.value.trim());
  const service = encodeURIComponent(quickForm.rq_service.value.trim());
  const message = encodeURIComponent(quickForm.rq_message.value.trim());
  const text = `طلب عرض سعر - ${service}%0Aالاسم: ${name}%0Aالهاتف: ${phone}%0Aالتفاصيل: ${message}`;
  const waLink = `https://api.whatsapp.com/send?phone=966509407109&text=${text}`;
  window.open(waLink, '_blank');
  document.getElementById('rqMsg').textContent = 'يتم فتح واتساب للإرسال...';
  // hide modal
  requestModal.classList.add('modal-hidden');
  requestModal.style.display = 'none';
});