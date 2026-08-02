/* SOCIA Creative Agency — Main Application JS */

function toggleInquiryModal() {
  const modal = document.getElementById('inquiry-modal');
  if (modal) {
    modal.classList.toggle('hidden');
  }
}

function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  const svg = document.getElementById('hamburger-svg');
  const bar = document.getElementById('bar1');
  if (!menu) return;
  
  menu.classList.toggle('hidden');
  if (!menu.classList.contains('hidden')) {
    if (bar) bar.setAttribute('d', 'M6 18L18 6M6 6l12 12');
    if (svg) svg.classList.add('rotate-90');
  } else {
    if (bar) bar.setAttribute('d', 'M4 6h16M4 12h16M4 18h16');
    if (svg) svg.classList.remove('rotate-90');
  }
}

function toggleFeaturedSound() {
  const video = document.getElementById('featured-campaign-video');
  const icon = document.getElementById('featured-sound-icon');
  if (!video) return;

  video.muted = !video.muted;
  if (icon) {
    icon.textContent = video.muted ? '🔇' : '🔊';
  }
}

function showToast(message) {
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  if (!toast || !toastText) return;

  toastText.textContent = message;
  toast.classList.remove('hidden');
  setTimeout(() => {
    toast.classList.add('hidden');
  }, 4000);
}

function handleModalSubmit(event) {
  event.preventDefault();
  showToast('Strategy session requested! SOCIA team will contact you shortly.');
  toggleInquiryModal();
}
