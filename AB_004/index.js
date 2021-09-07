$(document).ready(function () {
  console.log("started");
  const XTallAddButtons = document.getElementsByClassName("--add");

  document.querySelectorAll(".--add").forEach((item) => {
    item.addEventListener("click", (event) => {
      //handle click
      let XTcurrentAddedProduct = item.parentElement.parentElement.parentElement;
      console.log(XTcurrentAddedProduct);
      XTcurrentAddedProductDataAttr = XTcurrentAddedProduct.getAttribute("data-product-id");
      console.log(XTcurrentAddedProductDataAttr);

      XTproductFullTileHTML = document.getElementsByClassName("product_container_" + XTcurrentAddedProductDataAttr)[0];
      console.log(XTproductFullTileHTML);

      let XTleavemealone = parseInt(XTproductFullTileHTML.getElementsByClassName("product_overlay_text")[0].innerHTML.trim().split(" ")[0]) + 1;
      console.log(XTleavemealone);
      // let XTcurrentAmountOfShit = document.querySelectorAll('[data-product-id="3074457345616686651"]').getElementsByClassName(".product_overlay_text")[0];
      //let XTcurrentAmountOfShit = XTcurrentAddedProduct.querySelectorAll(".product_overlay_text");
      // console.log(XTcurrentAmountOfShit);
      //XTaddClick(XTcurrentAddedProduct);
    });
  });

  function XTaddClick(item) {
    console.log("something clicked");
    console.log(item);
    let XTwhatever = item.getElementsByClassName("plp-item-top__overlay__top-text");
    console.log(XTwhatever);
    console.log(XTwhatever.innerHTML);
  }
});
