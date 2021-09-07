$(document).ready(function () {
  console.log("started");
  const XTallAddButtons = document.getElementsByClassName("--add");

  document.querySelectorAll(".--add").forEach((item) => {
    item.addEventListener("click", (event) => {
      //handle click
      let XTcurrentAddedProduct = item.parentElement.parentElement.parentElement;
      let XTcurrentAmountOfShit = XTcurrentAddedProduct.querySelectorAll(".product_overlay_text");
      console.log(XTcurrentAmountOfShit[0]);
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
