const rotatingWord = document.querySelector('.accent-word');

if (rotatingWord) {
  const words = ['beauty', 'convenience', 'love', 'community', 'optimization', 'beans','god','meaning'];
  let wordIndex = 0;

  window.setInterval(() => {
    wordIndex = (wordIndex + 1) % words.length;
    rotatingWord.textContent = words[wordIndex];
  }, 2000);
}
