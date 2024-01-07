// Tutorial Sorce Link: https://codepen.io/mitori/pen/zLKZVZ

document.addEventListener('DOMContentLoaded', function () {
  var loaders = document.querySelectorAll('.loader');

  loaders.forEach(function (loader) {
    loader.classList.remove('loader--active');
  });

  document.querySelector('.btn').addEventListener('click', function () {
    loaders.forEach(function (loader) {
      loader.classList.add('loader--active');
    });

    window.setTimeout(function () {
      loaders.forEach(function (loader) {
        loader.classList.remove('loader--active');
      });
    }, 1000);
  });
});
