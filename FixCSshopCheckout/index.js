// console.log("Started");

// const XTlocationOfPickup = document.getElementsByClassName("c-basket-location-slot__info-text")[1].innerHTML;

// if (XTlocationOfPickup.contains("MERSCH")) {
//   document.getElementsByTagName("body")[0].style.margin = "1px";
// }

// function XTthisIsButAtest() {
//   document.getElementsByTagName("body")[0].style.margin = "1px";
// }
// XTthisIsButAtest();
// const XTallTheH2tags = document.getElementsByClassName("o-heading-2");
// const XTtheInnerHtmlWeAreLookingFor = "Haal al je bestellingen tegelijk op!";
// let XTCorrectH2tag;

// alert("test");
// for (let i = 0; i < XTallTheH2tags.length; i++) {
//   if (XTallTheH2tags[i].textContent == XTtheInnerHtmlWeAreLookingFor) {
//     XTCorrectH2tag = XTallTheH2tags[i];
//     console.log(XTCorrectH2tag);
//     document.getElementsByClassName("invoice__disclamier__1BFtr")[0].getElementsByClassName("u-mb-30")[0].innerHTML("test");
//     break;
//   }
//   console.log("Nothing");
// }

// Use `found`.

// window.XTiframeFunction = function () {
//   doStuff();

//   function doStuff() {
//     document.getElementsByTagName("body")[0].style.margin = "1px";
//   }
// };

// const XTiframe = document.getElementsByClassName("spa-iframe__frame")[0];
// XTiframe.contentWindow.XTiframeFunction();
//https://www.wikitechy.com/tutorials/javascript/invoking-javascript-code-in-an-iframe-from-the-parent-page
//SOLUTION_4

// const XTmyIframe = document.getElementsByClassName("spa-iframe__frame")[0];
// const XTiFrameWindow = XTmyIframe.contentWindow;
// console.log(XTiFrameWindow.document);

// XTiFrameWindow.document.getElementsByClassName("l-grid__item")[5].style.display = "none";

// XTiFrameWindow.document.getElementsByClassName("l-grid")[1].getElementsByClassName("l-grid__item")[5].style.margin = "1px";

// console.log("ready");
// const XTreserverenButtons = document.getElementsByClassName("proceed-to-checkout");

// XTreserverenButtons[1].addEventListener("click", XTiframeFunction);
// function XTiframeFunction() {
//   setTimeout(function () {
//     console.log("timeout complete");
//     const XTmyIframe = document.getElementsByClassName("spa-iframe__frame")[0];
//     const XTiFrameWindow = XTmyIframe.contentWindow;
//     const XTiFrameWindowDocument = XTmyIframe.contentDocument;

//     console.log(XTmyIframe.contentWindow.document + " _ This is manual ContentWindow with .document");

//     console.log(XTiFrameWindow + " _ This is contentWindow");
//     console.log(XTiFrameWindowDocument + " _ This is contentDocument");
//   }, 200);
// }

// $(document).ready(function () {
//   console.log(utag_data.order_pickup_place_id);
// });

// setTimeout(function () {
//   console.log("timedout");

//   const XThideForThesePlaces = ["4540", "3600", "8096", "7905", "4577", "4367", "4442", "4589", "7011", "7924", "4546", "4542", "7660", "4548", "7662", "7907", "7860", "7845", "7785", "7881"];
//   console.log(utag_data.order_pickup_place_id);

//   const XTclientsPickupPlace = utag_data.order_pickup_place_id;
//   console.log(XTclientsPickupPlace);
//   if (XTclientsPickupPlace.includes(XThideForThesePlaces)) {
//   }
// }, 500);
$(document).ready(function () {
  setTimeout(function () {
    console.log("ready");

    const XThideForThesePlaces = ["4540", "3600", "8096", "7905", "4577", "4367", "4442", "4589", "7011", "7924", "4546", "4542", "7660", "4548", "7662", "7907", "7860", "7845", "7785", "7881"];
    console.log(utag_data.order_pickup_place_id);

    const XTreserverenButtons = document.getElementsByClassName("proceed-to-checkout");

    const XTclientsPickupPlace = utag_data.order_pickup_place_id;
    console.log(XTclientsPickupPlace);
    if (XThideForThesePlaces.includes(XTclientsPickupPlace)) {
      XTreserverenButtons[1].addEventListener("click", XTiframeFunction);
      console.log("its true mate");
    }

    function XTiframeFunction() {
      setTimeout(function () {
        const myIframeXT = document.getElementsByClassName("spa-iframe__frame")[0];
        const myIframeXTcontainer = document.getElementsByClassName("spa-iframe__container")[0];

        const iframeWindowXT = myIframeXT.contentWindow;
        const iframeDocmentXT = myIframeXT.contentDocument;

        console.log(myIframeXT);
        console.log(iframeWindowXT);
        console.log(iframeDocmentXT);

        iframeDocmentXT.body.style.backgroundColor = "#dedede";
        const XTiframeBody = iframeDocmentXT.body;

        XTiframeBody.getElementsByClassName("l-grid")[1].getElementsByClassName("o-heading-2")[0].parentElement.style.display = "none";
      }, 1000);
    }
  }, 200);
});
