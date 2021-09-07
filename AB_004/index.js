$(document).ready(function () {
  console.log("started");
  const XTallAddButtons = document.getElementsByClassName("--add");
  //XTallAddButtons.addEventListener("click", XTaddClick);
  // XTallAddButtons.onclick = function () {
  //   XTaddClick();
  // };

  document.querySelectorAll(".--add").forEach((item) => {
    item.addEventListener("click", (event) => {
      //handle click
      //console.log(item.parentElement.parentElement.parentElement.nodeName);
      let XTcurrentAddedProduct = item.parentElement.parentElement.parentElement;
      let XTcurrentAmountOfShit = XTcurrentAddedProduct.querySelectorAll(".product_overlay_text");
      console.log(XTcurrentAmountOfShit[0]);
      // let XTcurrentAddedProductDataProductID = XTcurrentAddedProduct.getAttribute("data-product-id");
      // XTcurrentAddedProductDataProductID++;

      // XTanotherBullshitThing = document.querySelectorAll('[data-sku="' + XTcurrentAddedProductDataProductID + '"]');
      // //console.log(XTcurrentAddedProductDataProductID);
      // console.log(XTanotherBullshitThing);
      // //console.log(XTcurrentAddedProduct);
      // console.log(item.parentElement.parentElement.parentElement.getElementsByClassName("product_overlay_text"));
      //XTaddClick(XTcurrentAddedProduct);
    });
  });

  function XTaddClick(item) {
    console.log("something clicked");
    console.log(item);
    let XTwhatever = item.getElementsByClassName("plp-item-top__overlay__top-text");
    console.log(XTwhatever);
    console.log(XTwhatever.innerHTML);

    // for (i = 0; i < WCParamJS.colShop.basket.basketItems.length; i++) {
    //   if (WCParamJS.colShop.basket.basketItems[i].productId === item) {
    //     console.log("The product has been found");
    //     console.log(WCParamJS.colShop.basket.basketItems[i].quantity);
    //     //start function here
    //     if (WCParamJS.colShop.basket.basketItems[i].quantity === "6") {
    //       console.log("Get free shit");
    //     }
    //     break;
    //   } else {
    //     //Do nothing just yet
    //   }
    // }
  }
});
