function clickFun() {
    var element = document.getElementById('myinput');
    var div = document.getElementById('result');
    div.firstChild.nodeValue = element.value;
   }
   function myLoad() {
    var element = document.getElementById('myinput');
    element.addEventListener('keyup', clickFun);
   }
   document.addEventListener('DOMContentLoaded', myLoad);