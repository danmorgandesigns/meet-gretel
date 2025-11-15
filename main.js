document.addEventListener('DOMContentLoaded', function() {
  // Mobile menu toggle
  const mobileMenuBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      mobileMenu.classList.toggle('hidden');
    });
  }

  // Close mobile menu when a link is clicked
  const mobileLinks = mobileMenu?.querySelectorAll('a');
  if (mobileLinks) {
    mobileLinks.forEach(link => {
      link.addEventListener('click', function() {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // Video controls
  const video = document.getElementById('gretel-video');
  const playBtn = document.getElementById('play-btn');
  const stopBtn = document.getElementById('stop-btn');

  if (playBtn) {
    playBtn.addEventListener('click', function() {
      video.play();
    });
  }

  if (stopBtn) {
    stopBtn.addEventListener('click', function() {
      video.pause();
      video.currentTime = 0;
    });
  }

  // Close modal when clicking outside the image
  const modal = document.getElementById('imageModal');
  if (modal) {
    modal.addEventListener('click', function(e) {
      if (e.target === modal) {
        closeModal();
      }
    });
  }
});

// Modal functions
function openModal(imageSrc, imageAlt) {
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  modalImage.src = imageSrc;
  modalImage.alt = imageAlt;
  modal.classList.remove('hidden');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const modal = document.getElementById('imageModal');
  modal.classList.add('hidden');
  document.body.style.overflow = 'auto';
}
