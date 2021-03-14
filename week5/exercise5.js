function moveUp() {
  var element = document.getElementById('circle');
  var positionTop = element.offsetTop;
  element.style.top = positionTop - 1 + 'px';
}

function moveDown() {
  var element = document.getElementById('circle');
  var positionTop = element.offsetTop;
  element.style.top = positionTop + 1 + 'px';
}

function moveLeft() {
  var element = document.getElementById('circle');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft - 1 + 'px';
}

function moveRight() {
  var element = document.getElementById('circle');
  var positionLeft = element.offsetLeft;
  element.style.left = positionLeft + 1 + 'px';
}



function myKeyDown(event) {
  if (event.keyCode == 37) {
    setInterval(moveLeft, 10);
  }
  if (event.keyCode == 38) {
    setInterval(moveUp, 10);
  }
  if (event.keyCode == 40) {
    setInterval(moveDown, 10);
  }
  if (event.keyCode == 39) {
    setInterval(moveRight, 10);
  }
}

function myLoadEvent() {
  document.addEventListener('keydown', myKeyDown);
}

function changeContent() {
  var element = document.getElementById("circle");
  element.firstChild.nodeValue = "hahaha";
}

function myClickCircleEvent() {
  var element = document.getElementById("circle");
  element.addEventListener("click", changeContent);
}


document.addEventListener('DOMContentLoaded', myClickCircleEvent); //myLoadEvent);

function myClickEvent() {
  var element = document.getElementById('circle');

  var circleOpacity = parseFloat(element.style.opacity);
  element.style.opacity = circleOpacity - 0.1;
 
  element.style.backgroundColor = 'blue';
 }
 function myLoadEvent() {
  var element = document.getElementById('circle');
  element.style.opacity = 0.5;
  element.addEventListener('click', myClickEvent);
  var circleOpacity = element.style.opacity;
  console.log(circleOpacity);
 
 }
 document.addEventListener('DOMContentLoaded', myLoadEvent);