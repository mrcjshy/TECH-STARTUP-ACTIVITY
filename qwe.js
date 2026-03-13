const slides = document.querySelectorAll('.slide');
const total = slides.length;
let cur = 0;

function go(dir) {
  slides[cur].classList.remove('active');
  cur = (cur + dir + total) % total;
  slides[cur].classList.add('active');

  slides[cur].querySelectorAll('[class*="anim-"]').forEach(el => {
    el.style.animation = 'none';
    void el.offsetWidth;
    el.style.animation = '';
  });
  document.getElementById('navCount').textContent = `${cur + 1} / ${total}`;
  const pct = ((cur + 1) / total) * 100;
  document.getElementById('progressBar').style.width = pct + '%';
}

document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight' || e.key === 'ArrowDown') go(1);
  if (e.key === 'ArrowLeft'  || e.key === 'ArrowUp')   go(-1);
});

document.getElementById('progressBar').style.width = (1/total*100) + '%';