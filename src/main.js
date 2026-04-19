/**
 * PixelStream – Main JS entry point
 * Handles video player interactions, share functionality, and UI feedback.
 */

import './style.css';

// ── DOM References ──────────────────────────────────────────────────────────
const video       = /** @type {HTMLVideoElement|null} */ (document.getElementById('main-video'));
const videoWrapper = document.getElementById('video-wrapper');
const loadingEl   = document.getElementById('video-loading');
const statusText  = document.getElementById('status-text');
const shareBtn    = document.getElementById('share-btn');
const toast       = document.getElementById('toast');
const downloadBtn = document.getElementById('download-btn');

// ── Toast Utility ───────────────────────────────────────────────────────────
let toastTimer = null;

/**
 * Show a brief toast message.
 * @param {string} message
 * @param {number} [duration=3000]
 */
function showToast(message, duration = 3000) {
  if (!toast) return;
  if (toastTimer) clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.remove('hide');
  toast.classList.add('show');

  toastTimer = setTimeout(() => {
    toast.classList.add('hide');
    toast.addEventListener('animationend', () => toast.classList.remove('show', 'hide'), { once: true });
  }, duration);
}

// ── Video Player Interactions ───────────────────────────────────────────────
if (video && videoWrapper && loadingEl && statusText) {

  // Show loading overlay until metadata is loaded
  video.addEventListener('loadedmetadata', () => {
    loadingEl.classList.add('hidden');
    statusText.textContent = 'Ready';
    statusText.className = 'stat__value stat__value--ready';
  });

  video.addEventListener('waiting', () => {
    loadingEl.classList.remove('hidden');
    statusText.textContent = 'Buffering…';
    statusText.className = 'stat__value stat__value--loading';
  });

  video.addEventListener('canplay', () => {
    loadingEl.classList.add('hidden');
  });

  // Playing / paused ring effect
  video.addEventListener('play', () => {
    videoWrapper.classList.add('is-playing');
    statusText.textContent = 'Playing';
    statusText.className = 'stat__value stat__value--loading';
  });

  video.addEventListener('pause', () => {
    videoWrapper.classList.remove('is-playing');
    statusText.textContent = 'Paused';
    statusText.className = 'stat__value';
  });

  video.addEventListener('ended', () => {
    videoWrapper.classList.remove('is-playing');
    statusText.textContent = 'Finished';
    statusText.className = 'stat__value';
    showToast('🎬 Playback complete! Download your video below.');
  });

  video.addEventListener('error', () => {
    loadingEl.classList.add('hidden');
    statusText.textContent = 'Error';
    statusText.className = 'stat__value';
    showToast('⚠️ Unable to load video. Please try again later.');
  });
}

// ── Share Button ────────────────────────────────────────────────────────────
if (shareBtn) {
  shareBtn.addEventListener('click', async () => {
    const shareData = {
      title: 'PixelStream – Generated Video',
      text:  'Check out this HD video generated with PixelStream!',
      url:   window.location.href,
    };

    try {
      if (navigator.share && navigator.canShare && navigator.canShare(shareData)) {
        await navigator.share(shareData);
        showToast('✅ Shared successfully!');
      } else {
        await navigator.clipboard.writeText(window.location.href);
        showToast('🔗 Link copied to clipboard!');
      }
    } catch (err) {
      if (err.name !== 'AbortError') {
        showToast('⚠️ Could not share – please copy the URL manually.');
      }
    }
  });
}

// ── Download Button Feedback ────────────────────────────────────────────────
if (downloadBtn) {
  downloadBtn.addEventListener('click', () => {
    showToast('⬇️ Download started!');
  });
}

// ── Intersection Observer – lazy animate feature cards ──────────────────────
const featureCards = document.querySelectorAll('.feature-card');
if ('IntersectionObserver' in window && featureCards.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${i * 80}ms`;
          entry.target.classList.add('animate-slide-up');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );
  featureCards.forEach((card) => observer.observe(card));
}
