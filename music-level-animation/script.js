// Idea from website link: https://richardmattka.com/

const sountDiv = document.querySelector('.footer-sound');
const sbar = document.querySelectorAll('.sbar');

sountDiv.addEventListener('click', () => {
  sbar.forEach((element) => {
    element.classList.toggle('noAnim');
  });
});
