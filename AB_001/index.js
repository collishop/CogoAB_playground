$(document).ready(function(){
  console.log("abisago");



  // Get the last <li> element ("Milk") of <ul> with id="myList2"
const ABnavElement = document.getElementsByClassName("c-aside__item")[3];
console.log(ABnavElement);

// Copy the <li> element and its child nodes
const ABnavElementClone = ABnavElement.cloneNode(true);
console.log(ABnavElementClone);


// Append the cloned <li> element to <ul> with id="myList1"
ABnavElement.appendChild(ABnavElementClone);
console.log('done');

});