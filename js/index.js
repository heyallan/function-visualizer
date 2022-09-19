
const form = document.querySelector('form');
const btnUpdate = document.querySelector('#update');
const btnReset = document.querySelector('#reset');

function drawGraph() {
  const chart = document.querySelector('#chart');
  const f = document.querySelector('#f').value;
  const n = Number(document.querySelector('#n').value);
  const a = Number(document.querySelector('#a').value);
  const b = Number(document.querySelector('#b').value);
  const c = Number(document.querySelector('#c').value);
  const line = document.querySelector('#chart #line');
  const valuesX = document.querySelectorAll('#chart #dots > [data-x]');
  let   valuesY = new String;
  for (let i = 0; i < valuesX.length; i++) {
    let item = valuesX[i];
    let x = item.dataset.x;
    let y = ((x ** n) * a) + (x * b) + (c); // output
    y = y * -1 + 5; // positioning
    item.dataset.y = y;
    item.cy.baseVal.value = y;
    valuesY += `${item.attributes.cx.value},${y} `;
  }
  line.attributes.points.value = valuesY;
}

drawGraph();

document.addEventListener('click', function(event) {
  if ((event.target === btnUpdate)) {
    drawGraph();
  }
  if (event.target === btnReset) {
    form.reset();
    drawGraph();
  }
});

form.addEventListener('change', function(event) {
  drawGraph();
});

document.addEventListener('keyup', function(event) {
  if (event.keyCode === 13) {
    drawGraph();
  }
});

// valuesX.forEach(function (value, index) {
//   console.log('%d: %s', index, value);
// });
//
// for (const [index, value] of valuesX.entries()) {
//   console.log('%d: %s', index, value);
// }
// function power(b, n = 1) {
//   return Math.pow(b, n);
// }
