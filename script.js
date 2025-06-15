// تفاعل بسيط عند الضغط على أيقونات التقنيات
const icons = document.querySelectorAll('.icon');

icons.forEach((icon) => {
  icon.addEventListener('click', () => {
    alert(`هذه أيقونة ${icon.textContent}`);
  });
});
