// Tutorial Blog Link: https://css-tricks.com/almanac/properties/s/stroke-dashoffset/

// Tutorial Video Link: https://www.youtube.com/watch?v=mSfsGTIQlxg

// const percent = document.querySelector('.percent');

// let count = 1;

// setInterval(() => {
//   if (count === 100) {
//     clearInterval();
//   } else {
//     count += 1;
//     percent.innerHTML = count + '%';
//   }
//   //here the setInterval time logic is
//   //"animationduration / percent = res" "percent / res = dif" "res - dif"
//   // "3000 / 100 = 30" "100 / 30 = 3" "30 - 3 = 27"
// }, 50);

const percent = document.querySelector('.percent');

let count = 1;
let startTime;

function animate() {
  const currentTime = Date.now();
  const elapsedTime = currentTime - startTime;

  if (elapsedTime < 5000) {
    count = Math.ceil((elapsedTime / 5000) * 100);
    percent.innerHTML = count + '%';
    requestAnimationFrame(animate);
  }
}

startTime = Date.now();
requestAnimationFrame(animate);
