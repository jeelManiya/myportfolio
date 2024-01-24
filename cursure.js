
// https://codepen.io/lbenmore/pen/qGGNyK
function trail(e) {
  var div = document.createElement('div');

  div.classList.add('happyTrail');

  Object.assign(div.style, {
    top: e.pageY + 'px',
    left: e.pageX + 'px'
  });

  document.body.appendChild(div);
  setTimeout(function () { document.body.removeChild(div) }, 300);
}

addEventListener('mousemove', trail);