// ----------------------
// ドラッグスクロール
// ----------------------
const slider = document.querySelector('.works-container');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});

slider.addEventListener('mouseleave', () => {
  isDown = false;
});

slider.addEventListener('mouseup', () => {
  isDown = false;
});

slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 1.5;
  slider.scrollLeft = scrollLeft - walk;
});

// ----------------------
// ハンバーガーメニュー
// ----------------------
const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
});

// ----------------------
// 画像クリックでモーダル表示
// ----------------------
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalCaption = document.getElementById('modal-caption');

document.querySelectorAll('.works-container img').forEach(img => {
  img.addEventListener('click', () => {
    modal.style.display = 'flex';
    modalImg.src = img.src;
    modalCaption.textContent = img.alt;
  });
});

// ----------------------
// モーダルをクリックで閉じる
// ----------------------
modal.addEventListener('click', () => {
  modal.style.display = 'none';
});
