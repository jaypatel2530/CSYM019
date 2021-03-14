function myClickFunction() {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'New Heading JAY';
    var element1 = document.getElementById('paragraph');
    element1.firstChild.nodeValue = 'New paragraph JAY';
   }
   function myLoadFunction() {
    var element = document.getElementById('pageheading');
    var element1 = document.getElementById('paragraph');
    
    element.addEventListener('click', myClickFunction);
    
    element1.addEventListener('click', myClickFunction);
   }
   document.addEventListener('DOMContentLoaded', myLoadFunction);