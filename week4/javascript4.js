function myLoadFunction() {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'New Heading jay';
    var element = document.getElementById('paragraph');
    element.firstChild.nodeValue = 'New paragraph jay';
   }
   document.addEventListener('DOMContentLoaded', myLoadFunction);
   document.addEventListener('click', myClickFunction);