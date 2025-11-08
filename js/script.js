// header scroll
const header = document.getElementById('siteHeader');
window.addEventListener('scroll', () => {
  if (window.scrollY > 40) header.classList.add('scrolled');
  else header.classList.remove('scrolled');
});

// initialize swiper
const swiper = new Swiper('.mySwiper', {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  autoplay: { delay: 3000, disableOnInteraction: false },
  pagination: { el: '.swiper-pagination', clickable: true },
});

// whatsapp menu toggle
const waBtn = document.getElementById('waBtn');
const waMenu = document.getElementById('waMenu');
waBtn.addEventListener('click', (e) => {
  e.stopPropagation();
  waMenu.style.display = waMenu.style.display === 'block' ? 'none' : 'block';
});
document.addEventListener('click', (e) => {
  if (!waMenu.contains(e.target) && !waBtn.contains(e.target)) waMenu.style.display = 'none';
});

// contact form -> open whatsapp
function handleForm(e){
  e.preventDefault();
  const f = e.target;
  const name = encodeURIComponent(f.name.value.trim());
  const phone = encodeURIComponent(f.phone.value.trim());
  const msg = encodeURIComponent(f.message.value.trim());
  const text = `الاسم: ${name}%0Aالهاتف: ${phone}%0Aالرسالة: ${msg}`;
  // default to first number
  const waLink = `https://api.whatsapp.com/send?phone=966509407109&text=${text}`;
  window.open(waLink, '_blank');
  document.getElementById('formMsg').textContent = 'يتم فتح واتساب للإرسال...';
}