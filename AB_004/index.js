$(document).ready(function () {
  const XTallAddButtons = document.getElementsByClassName("--add");
  let XTsumOfAddedBottles;
  let XTsumOfFreeAddedBottles;
  XToverlay =
    '<section  id="XToverlaycontainer" style="display: none;justify-content: center;width: 100%;height: 100vh;background: rgba(255, 255, 255, 0.9);top: 0px;position: fixed;">' +
    ' <div id="XToverlay" style="position: fixed;background: white;width: 400px;top: 20%;text-align: center;border: solid 2px #2287c7;border-radius: 5px; "><div id="XTsubOverlay" style="position:relative">' +
    '   <h3 style="padding: 20px 0 0 0;">Vergeet je gratis product niet</h3>' +
    '   <section style=" display: flex; justify-content: center; padding: 35px 35px 35px 45px; ">' +
    '     <div  style="width: 343px;" id="XTappendHere"></div>' +
    '   </section><span id="XTremoveOverlay" style="position: absolute; top: 5px; right: 5px; cursor: pointer;"><a style=" font-weight: bold; font-size: 18px; margin-right: 4px; "><strong>X</strong></a></span>' +
    " </div>" +
    " </div>" +
    "</section>";
  document.getElementsByTagName("body")[0].style.position = "relative";
  document.getElementsByTagName("body")[0].insertAdjacentHTML("beforeend", XToverlay);

  document.querySelectorAll(".--add").forEach((item) => {
    item.addEventListener("click", (event) => {
      //*handle click
      let XTcurrentAddedProduct = item.parentElement.parentElement.parentElement;
      XTcapDataAttr = XTcurrentAddedProduct.getAttribute("data-product-id");

      XTproductFullTileHTML = document.getElementsByClassName("product_container_" + XTcapDataAttr)[0];
      // let XTcapAmountInBasket = parseInt(XTproductFullTileHTML.getElementsByClassName("product_overlay_text")[0].innerHTML.trim().split(" ")[0]) + 1;
      setTimeout(() => {
        let XTcapAmountInBasket = parseInt(XTproductFullTileHTML.getElementsByClassName("product_overlay_text")[0].innerHTML.trim().split(" ")[0]);
        if (XTproductFullTileHTML.getElementsByClassName("product_overlay_text")[0].innerHTML.split(" ").length === 4) {
          XTsumOfAddedBottles =
            XTproductFullTileHTML.getElementsByClassName("product_overlay_text")[0].innerHTML.split(" ")[0] *
            XTproductFullTileHTML.getElementsByClassName("product_overlay_text")[0].innerHTML.split(" ")[2];

          if (XTsumOfAddedBottles === 6 || XTsumOfAddedBottles === 12 || XTsumOfAddedBottles === 18 || XTsumOfAddedBottles === 24) {
            CreatePopUp(XTcapDataAttr, XTsumOfAddedBottles);
          }
        } else if (XTproductFullTileHTML.getElementsByClassName("product_overlay_text")[0].innerHTML.split(" ").length === 2) {
          if (XTcapAmountInBasket === 6 || XTcapAmountInBasket === 12 || XTcapAmountInBasket === 18 || XTcapAmountInBasket === 24) {
            CreatePopUp(XTcapDataAttr, XTcapAmountInBasket);
          }
        }
      }, 300);
    });
  });

  //- Block to remove our special pop up
  document.getElementById("XToverlay").click(function (event) {
    event.stopPropagation();
  });
  document.getElementById("XToverlaycontainer").click(function (event) {
    XTdeleteOverlayContent();
  });
  document.getElementById("XTremoveOverlay").addEventListener("click", XTdeleteOverlayContent);

  //document.getElementById("XToverlaycontainer").addEventListener("click", XTdeleteOverlayContent);
  function XTdeleteOverlayContent() {
    for (i = 0; i <= document.getElementById("XTappendHere").getElementsByClassName("plp-item").length; i++) document.getElementById("XTappendHere").getElementsByClassName("plp-item")[0].remove();
    document.getElementById("XToverlaycontainer").style.display = "none";
  }
  //- Block to create the different kinds of pop ups. This might be simplified in the future.
  function CreatePopUp(XTcapDataAttr, XTcapAmountInBasket) {
    //const XTcapDataAttr = "Papayas";
    //* remove this call if work around is found
    //XtStartListenerForRemove();
    let XTproductToCopy;
    let XTinhoudFreeproductAmountInBasket;
    let XTclone;

    switch (XTcapDataAttr) {
      case "3074457345616686651":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616700299")[0];
        XTcontroleIfPeopleAlreadyAddedTheFreeProduct(XTproductToCopy, XTcapAmountInBasket);
        break;
      case "3074457345616776523":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616776465")[0];
        XTcontroleIfPeopleAlreadyAddedTheFreeProduct(XTproductToCopy, XTcapAmountInBasket);
        break;
      case "3074457345616688817":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616778343")[0];
        XTcontroleIfPeopleAlreadyAddedTheFreeProduct(XTproductToCopy, XTcapAmountInBasket);
        break;
      case "3074457345616777585":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616777587")[0];
        XTcontroleIfPeopleAlreadyAddedTheFreeProduct(XTproductToCopy, XTcapAmountInBasket);
        break;
      case "3074457345616676877":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616777521")[0];
        XTcontroleIfPeopleAlreadyAddedTheFreeProduct(XTproductToCopy, XTcapAmountInBasket);
        break;
      case "3074457345616677071":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616779751")[0];
        XTcontroleIfPeopleAlreadyAddedTheFreeProduct(XTproductToCopy, XTcapAmountInBasket);
        break;
      case "3074457345616714715":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616781945")[0];
        XTcontroleIfPeopleAlreadyAddedTheFreeProduct(XTproductToCopy, XTcapAmountInBasket);
        break;
      case "3074457345616732687":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616741879")[0];
        XTcontroleIfPeopleAlreadyAddedTheFreeProduct(XTproductToCopy, XTcapAmountInBasket);
        break;
      case "3074457345616677101":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616745283")[0];
        XTcontroleIfPeopleAlreadyAddedTheFreeProduct(XTproductToCopy, XTcapAmountInBasket);
        break;
      case "3074457345616692105":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616744921")[0];
        XTcontroleIfPeopleAlreadyAddedTheFreeProduct(XTproductToCopy, XTcapAmountInBasket);
        break;
      case "3074457345616756795":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616781721")[0];
        XTcontroleIfPeopleAlreadyAddedTheFreeProduct(XTproductToCopy, XTcapAmountInBasket);
        break;
      case "3074457345616677427":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616781349")[0];
        XTcontroleIfPeopleAlreadyAddedTheFreeProduct(XTproductToCopy, XTcapAmountInBasket);
        break;

      default:
    }
    const XTinnerOverlayProductTile = document.getElementById("XTsubOverlay").getElementsByClassName("--add")[0];
    XTinnerOverlayProductTile.addEventListener("click", XTdeleteOverlayContent);
  }
  let ThisIsntAtest;
  function XTcontroleIfPeopleAlreadyAddedTheFreeProduct(XTproductToCopy, XTcapAmountInBasket) {
    XTinhoudFreeproductAmountInBasket = XTproductToCopy.getElementsByClassName("product_overlay_text")[0].innerHTML.split(" ");

    if (XTinhoudFreeproductAmountInBasket.length === 2) {
      if (
        XTcapAmountInBasket / (parseInt(XTproductToCopy.getElementsByClassName("product_overlay_text")[0].innerHTML.trim().split(" ")[0]) + 1) >= 6 ||
        window.getComputedStyle(XTproductToCopy.getElementsByClassName("product_overlay")[0], null).display === "none"
      ) {
        XTappendCloneToOverlay(XTproductToCopy);
      }
    } else if (XTinhoudFreeproductAmountInBasket.length === 4) {
      XTsumOfFreeAddedBottles =
        XTproductToCopy.getElementsByClassName("product_overlay_text")[0].innerHTML.split(" ")[0] * XTproductToCopy.getElementsByClassName("product_overlay_text")[0].innerHTML.split(" ")[2];

      if (XTcapAmountInBasket / (parseInt(XTsumOfFreeAddedBottles) + 1) >= 6 || window.getComputedStyle(XTproductToCopy.getElementsByClassName("product_overlay")[0], null).display === "none") {
        XTappendCloneToOverlay(XTproductToCopy);
      }
    } else {
      XTappendCloneToOverlay(XTproductToCopy);
    }
  }

  //*Maybe fix this shit in css? Just make all the unneeded ones invisible. Also create a counter for how many shitty things there are and keep removing from said counter.
  function XTappendCloneToOverlay(item) {
    if (document.getElementById("XToverlaycontainer")) {
      XTclone = item.cloneNode(true);
      document.getElementById("XTappendHere").appendChild(XTclone);
      document.getElementById("XToverlaycontainer").style.display = "flex";
    } else {
      XTdeleteOverlayContent();
      XTclone = item.cloneNode(true);
      document.getElementById("XTappendHere").appendChild(XTclone);
      document.getElementById("XToverlaycontainer").style.display = "flex";
    }
  }
});
