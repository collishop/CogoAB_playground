$(document).ready(function () {
  //console.log("started");
  const XTallAddButtons = document.getElementsByClassName("--add");
  let XTsumOfAddedBottles;
  XToverlay =
    '<section  id="XToverlaycontainer" style="display: none;justify-content: center;width: 100%;height: 100vh;background: rgba(255, 255, 255, 0.9);top: 0px;position: fixed;">' +
    ' <div id="XToverlay" style="position: fixed;background: white;width: 25%;top: 20%;text-align: center;border: solid 2px #2287c7;border-radius: 5px; "><div id="XTsubOverlay" style="position:relative">' +
    '   <h3 style="padding: 20px 0 0 0;">Vergeet je gratis product niet</h3>' +
    '   <section style=" display: flex; justify-content: center; padding: 35px 35px 35px 45px; ">' +
    '     <div  style="width: 343px;" id="XTappendHere"></div>' +
    '   </section><span id="XTremoveOverlay" style="position: absolute; top: 5px; right: 5px; cursor: pointer;"><a ">X</a></span>' +
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
      console.log(XTcapDataAttr);

      XTproductFullTileHTML = document.getElementsByClassName("product_container_" + XTcapDataAttr)[0];
      // let XTcapAmountInBasket = parseInt(XTproductFullTileHTML.getElementsByClassName("product_overlay_text")[0].innerHTML.trim().split(" ")[0]) + 1;
      setTimeout(() => {
        let XTcapAmountInBasket = parseInt(XTproductFullTileHTML.getElementsByClassName("product_overlay_text")[0].innerHTML.trim().split(" ")[0]);
        if (XTproductFullTileHTML.getElementsByClassName("product_overlay_text")[0].innerHTML.split(" ").length === 4) {
          XTsumOfAddedBottles =
            XTproductFullTileHTML.getElementsByClassName("product_overlay_text")[0].innerHTML.split(" ")[0] *
            XTproductFullTileHTML.getElementsByClassName("product_overlay_text")[0].innerHTML.split(" ")[2];
          if (XTsumOfAddedBottles === 6 || XTsumOfAddedBottles === 12 || XTsumOfAddedBottles === 18 || XTsumOfAddedBottles === 24) {
            CreatePopUp(XTcapDataAttr);
          }
        } else if (XTproductFullTileHTML.getElementsByClassName("product_overlay_text")[0].innerHTML.split(" ").length === 2) {
          if (XTcapAmountInBasket === 6 || XTcapAmountInBasket === 12 || XTcapAmountInBasket === 18 || XTcapAmountInBasket === 24) {
            CreatePopUp(XTcapDataAttr);
          }
        }
      }, 300);
      //console.log(XTcapAmountInBasket)
    });
  });

  //- Block to remove our special pop up
  document.getElementById("XToverlay").click(function (event) {
    console.log("bubling stopped?");
    event.stopPropagation();
  });
  document.getElementById("XToverlaycontainer").click(function (event) {
    console.log("testio");
    XTdeleteOverlayContent();
  });
  document.getElementById("XTremoveOverlay").addEventListener("click", XTdeleteOverlayContent);
  //document.getElementById("XToverlaycontainer").addEventListener("click", XTdeleteOverlayContent);
  function XTdeleteOverlayContent() {
    console.log("test");
    document.getElementById("XTappendHere").getElementsByClassName("plp-item")[0].remove();
    document.getElementById("XToverlaycontainer").style.display = "none";
  }
  //- Block to create the different kinds of pop ups. This might be simplified in the future.
  function CreatePopUp(XTcapDataAttr) {
    //const XTcapDataAttr = "Papayas";
    console.log("In the switch");
    //* remove this call if work around is found
    //XtStartListenerForRemove();
    let XTproductToCopy;
    let XTinhoudFreeproductAmountInBasket;
    let XTclone;
    switch (XTcapDataAttr) {
      case "3074457345616686651":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616700299")[0];

        XTcontroleIfPeopleAlreadyAddedTheFreeProduct(XTproductToCopy);
        //XTappendCloneToOverlay(XTproductToCopy);
        break;
      case "3074457345616776523":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616776465")[0];
        //XTappendCloneToOverlay(XTproductToCopy);
        break;
      case "3074457345616688817":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616778343")[0];
        //XTappendCloneToOverlay(XTproductToCopy);
        break;
      case "3074457345616777585":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616777587")[0];
        //XTappendCloneToOverlay(XTproductToCopy);
        break;
      case "3074457345616676877":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616777521")[0];
        //XTappendCloneToOverlay(XTproductToCopy);
        break;
      case "3074457345616677071":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616779751")[0];
        //XTappendCloneToOverlay(XTproductToCopy);
        break;
      case "3074457345616714715":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616781945")[0];
        //XTappendCloneToOverlay(XTproductToCopy);
        break;
      case "3074457345616732687":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616741879")[0];
        //XTappendCloneToOverlay(XTproductToCopy);
        break;
      case "3074457345616677101":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616745283")[0];
        //XTappendCloneToOverlay(XTproductToCopy);
        break;
      case "3074457345616692105":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616744921")[0];
        //XTappendCloneToOverlay(XTproductToCopy);
        break;
      case "3074457345616756795":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616781721")[0];
        //XTappendCloneToOverlay(XTproductToCopy);
        break;
      case "3074457345616677427":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616781349")[0];
        //XTappendCloneToOverlay(XTproductToCopy);
        break;
      default:
        console.log(`Sorry, we are out of ${XTcapDataAttr}.`);
    }

    const XTinnerOverlayProductTile = document.getElementById("XTsubOverlay").getElementsByClassName("plp-item")[0];
    console.log(XTinnerOverlayProductTile);
    XTinnerOverlayProductTile.addEventListener("click", XTdeleteOverlayContent);
  }
  function XTcontroleIfPeopleAlreadyAddedTheFreeProduct(XTproductToCopy) {
    XTinhoudFreeproductAmountInBasket = XTproductToCopy.getElementsByClassName("product_overlay_text")[0].innerHTML.split(" ");
    if (XTinhoudFreeproductAmountInBasket.length === 2) {
    } else if (XTinhoudFreeproductAmountInBasket.length === 4) {
    } else {
    }
  }

  //*Maybe fix this shit in css? Just make all the unneeded ones invisible. Also create a counter for how many shitty things there are and keep removing from said counter.
  function XTappendCloneToOverlay(item) {
    console.log(document.getElementById("XToverlaycontainer"));
    if (document.getElementById("XToverlaycontainer")) {
      XTclone = item.cloneNode(true);
      document.getElementById("XTappendHere").appendChild(XTclone);
      document.getElementById("XToverlaycontainer").style.display = "flex";
      console.log("actually created");
    } else {
      XTdeleteOverlayContent();
      XTclone = item.cloneNode(true);
      document.getElementById("XTappendHere").appendChild(XTclone);
      document.getElementById("XToverlaycontainer").style.display = "flex";
      console.log("actually created");
    }
  }
});
