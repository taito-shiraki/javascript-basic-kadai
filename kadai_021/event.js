const btn = document.getElementById('btn');
const text = document.getElementById('text');
const textChange = setTimeout(() => {
    text.textContent = 'ボタンをクリックしました';
  }, 2000);
btn.addEventListener('click', () => {
    textChange();
});