function playSound(id) {
  const audio = document.getElementById(id);
  if (audio) {
    audio.currentTime = 0;
    audio.play();
  }
}

function stopSound(id) {
  const audio = document.getElementById(id);
  if (audio) {
    audio.pause();
    audio.currentTime = 0;
  }
}

function vote(id) {
  const votesEl = document.getElementById('votes-' + id);
  const barEl = document.getElementById('bar-' + id);
  let currentVotes = parseInt(votesEl.innerText) || 0;
  currentVotes += 1;
  votesEl.innerText = currentVotes + ' votes';
  const maxVotes = 10;
  let percentage = Math.min((currentVotes / maxVotes) * 100, 100);
  barEl.style.width = percentage + '%';
}

function openLightbox(src) {
  document.getElementById('lightbox-img').src = src;
  document.getElementById('lightbox').style.display = 'flex';
}

function closeLightbox() {
  document.getElementById('lightbox').style.display = 'none';
}
