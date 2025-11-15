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
});
