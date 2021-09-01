const XTcurrentPickupTime = document.getElementsByClassName("c-top-collection__how")[1].innerHTML
const XTarrayUnavPickupPlaces = ["24 Aug", "25 Aug", "26 Aug", "27 Aug", "28 Aug"];

if (XTcurrentPickupTime.includes(XTarrayUnavPickupPlaces)) {
  //Set Content to display none;
} else if(true){

}


$(document).ready(function(){
// Select the node that will be observed for mutations
const targetNode = document.getElementsByClassName("c-top-collection__how")[1]

// Options for the observer (which mutations to observe)
const config = { attributes: true, childList: true, subtree: true };

// Callback function to execute when mutations are observed
const callback = function(mutationsList, observer) {
    // Use traditional 'for loops' for IE 11
    for(const mutation of mutationsList) {
        if (mutation.type === 'childList') {
            console.log('A child node has been added or removed.');
        }
        else if (mutation.type === 'attributes') {
            console.log('The ' + mutation.attributeName + ' attribute was modified.');
        }
    }
};

// Create an observer instance linked to the callback function
const observer = new MutationObserver(callback);

// Start observing the target node for configured mutations
observer.observe(targetNode, config);

// Later, you can stop observing
//observer.disconnect();

});