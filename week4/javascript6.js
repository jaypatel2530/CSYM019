
function updateParagraph() {
    var element = document.getElementById('pa');
    element.firstChild.nodeValue = 'Jay';
   }
   function updateH1() {
    var element = document.getElementById('pageheading');
    element.firstChild.nodeValue = 'Patel';
   }
   

function myload(){
    var element = document.getElementById('pageheading');
 element.addEventListener('click',updateH1);
 
 var element = document.getElementById('pa');
 element.addEventListener('click',updateParagraph);
}
document.addEventListener('DOMContentLoaded', myload)