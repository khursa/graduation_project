let bodyRect = document.body.getBoundingClientRect();
let arrElements = document.querySelectorAll('.parallax');

window.onscroll = function() {
  arrElements.forEach(function(element) {
    let elemRect = element.getBoundingClientRect(),
        offset = -(elemRect.top - bodyRect.top),
        isVisible = (element.offsetHeight - offset) > 0;

    if (isVisible) {
      element.style.backgroundPositionY = Math.floor(-offset * 0.1) + 'px';
    }
  });
};
