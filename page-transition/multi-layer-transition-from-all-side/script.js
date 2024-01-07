// Tutorial Blog Link: https://codepen.io/mburakerman/pen/roJmaZ

const buttons = document.getElementsByTagName('button');

for (const button of buttons) {
  button.addEventListener('click', () => {
    var id = button.getAttribute('id');

    var layerClass = '.' + id + '-layer';
    var layers = document.querySelectorAll(layerClass);
    for (const layer of layers) {
      console.log(layer);
      layer.classList.toggle('active');
    }
  });
}
