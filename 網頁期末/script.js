window.addEventListener('load', function() {
  startMarqueeAnimation();
});

function startMarqueeAnimation() {
  const marqueeContent = document.querySelector('.marquee-content');
  marqueeContent.style.animation = 'marqueeAnimation 10s linear infinite';
}
