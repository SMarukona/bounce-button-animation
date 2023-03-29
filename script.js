window.addEventListener('load', () => {
  setTimeout(() => {
      const bounceBtn = document.querySelector('.bounce-btn');
      bounceBtn.classList.add('bounce-btn-animation');
      setTimeout(() => {
          bounceBtn.classList.remove('bounce-btn-animation');
      }, 500);
      setInterval(() => {
          bounceBtn.classList.add('bounce-btn-animation');
          setTimeout(() => {
              bounceBtn.classList.remove('bounce-btn-animation');
          }, 500);
      }, 10000);
  }, 10000);
});