/* SOCIA Creative Agency — GSAP & ScrollTrigger Animations */

function initGSAPAnimations() {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  // Hero Stagger Animation
  gsap.to('.hero-stagger-item', {
    opacity: 1,
    y: 0,
    duration: 0.9,
    stagger: 0.1,
    ease: 'power3.out',
    delay: 0.1,
    clearProps: 'transform'
  });

  // GSAP Reveal Elements
  gsap.utils.toArray('.gsap-reveal').forEach((elem) => {
    gsap.to(elem, {
      scrollTrigger: {
        trigger: elem,
        start: 'top 88%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power2.out',
      clearProps: 'transform'
    });
  });

  // GSAP Video Clip-Path Reveal Animation
  gsap.utils.toArray('.gsap-video-reveal').forEach((videoElem) => {
    gsap.to(videoElem, {
      scrollTrigger: {
        trigger: videoElem,
        start: 'top 88%',
        toggleActions: 'play none none reverse'
      },
      opacity: 1,
      scale: 1,
      clipPath: 'inset(0% 0% 0% 0%)',
      duration: 1.1,
      ease: 'power3.out'
    });
  });

  // Counter Statistics Animation
  gsap.utils.toArray('.counter-stat').forEach((stat) => {
    const target = parseFloat(stat.getAttribute('data-target'));
    const suffix = stat.getAttribute('data-suffix') || '';
    const decimals = parseInt(stat.getAttribute('data-decimals') || '0', 10);
    const obj = { val: 0 };

    ScrollTrigger.create({
      trigger: stat,
      start: 'top 90%',
      onEnter: () => {
        gsap.to(obj, {
          val: target,
          duration: 1.8,
          ease: 'power2.out',
          onUpdate: () => {
            stat.innerText = (decimals > 0 ? obj.val.toFixed(decimals) : Math.round(obj.val)) + ' ' + suffix;
          }
        });
      }
    });
  });

  // Watermark Parallax Effect
  gsap.utils.toArray('.watermark-text').forEach((wm) => {
    gsap.to(wm, {
      scrollTrigger: {
        trigger: wm.parentElement || wm,
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1.5
      },
      y: -40,
      ease: 'none'
    });
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initGSAPAnimations();
});
