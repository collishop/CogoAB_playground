$(document).ready(function () {
  //console.log("started");
  const XTallAddButtons = document.getElementsByClassName("--add");

  XToverlay =
    '<section id="XToverlaycontainer" style="display: none;justify-content: center;">' +
    ' <div id="XToverlay" style="position: fixed;background: white;width: 25%;top: 20%;text-align: center;border: solid 1px #d6d6d6;border-radius: 5px; "><div id="XTsubOverlay" style="position:relative">' +
    '   <h3 style="padding: 20px 0 0 0;">Voeg je gratis product toe</h3>' +
    '   <section style=" display: flex; justify-content: center; padding: 35px 35px 35px 45px; ">' +
    '     <div style="width: 343px;" id="XTappendHere"></div>' +
    '   </section><span id="XTremoveOverlay" style="position: absolute; top: 5px; right: 5px; cursor: pointer;"><a ">X</a></span>' +
    " </div>" +
    " </div>" +
    "</section>";
  document.getElementById("mainContent").style.position = "relative";
  document.getElementById("mainContent").insertAdjacentHTML("beforeend", XToverlay);

  document.querySelectorAll(".--add").forEach((item) => {
    item.addEventListener("click", (event) => {
      //handle click
      let XTcurrentAddedProduct = item.parentElement.parentElement.parentElement;
      //console.log(XTcurrentAddedProduct);
      XTcapDataAttr = XTcurrentAddedProduct.getAttribute("data-product-id");
      console.log(XTcapDataAttr);

      XTproductFullTileHTML = document.getElementsByClassName("product_container_" + XTcapDataAttr)[0];
      //console.log(XTproductFullTileHTML);

      let XTcapAmountInBasket = parseInt(XTproductFullTileHTML.getElementsByClassName("product_overlay_text")[0].innerHTML.trim().split(" ")[0]) + 1;
      //console.log(XTcapAmountInBasket);

      if (XTcapAmountInBasket === 6) {
        CreatePopUp(XTcapDataAttr);
      } else if (XTcapAmountInBasket <= 6) {
        //!Create visual for amount of things in basket
        //console.log("");
      } else {
        //Do nothing
      }
    });
  });

  //- Block to remove our special pop up
  document.getElementById("XTremoveOverlay").addEventListener("click", XTdeleteOverlayContent);
  function XTdeleteOverlayContent() {
    console.log("test");
    document.getElementById("XTappendHere").getElementsByClassName("plp-item")[0].remove();
    document.getElementById("XToverlaycontainer").style.display = "none";
  }
  //- Block to create the different kinds of pop ups. This might be simplified in the future.
  function CreatePopUp(XTcapDataAttr) {
    //const XTcapDataAttr = "Papayas";
    console.log("Created");
    //* remove this call if work around is found
    //XtStartListenerForRemove();
    let XTproductToCopy;
    let XTclone;
    switch (XTcapDataAttr) {
      case "3074457345616686651":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616700299")[0];
        XTappendCloneToOverlay(XTproductToCopy);
        console.log("I switched my robot off");
        break;
      case "3074457345616776523":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616776465")[0];
        XTappendCloneToOverlay(XTproductToCopy);
        console.log("I switched my robot off");
        break;
      case "3074457345616688817":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616778343")[0];
        XTappendCloneToOverlay(XTproductToCopy);
        console.log("I switched my robot off");
        break;
      case "3074457345616777585":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616777587")[0];
        XTappendCloneToOverlay(XTproductToCopy);
        console.log("I switched my robot off");
        break;
      case "3074457345616676877":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616777521")[0];
        XTappendCloneToOverlay(XTproductToCopy);
        console.log("I switched my robot off");
        break;
      case "3074457345616677071":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616779751")[0];
        XTappendCloneToOverlay(XTproductToCopy);
        console.log("I switched my robot off");
        break;
      case "3074457345616714715":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616781945")[0];
        XTappendCloneToOverlay(XTproductToCopy);
        console.log("I switched my robot off");
        break;
      case "3074457345616732687":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616741879")[0];
        XTappendCloneToOverlay(XTproductToCopy);
        console.log("I switched my robot off");
        break;
      case "3074457345616677101":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616745283")[0];
        XTappendCloneToOverlay(XTproductToCopy);
        console.log("I switched my robot off");
        break;
      case "3074457345616692105":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616744921")[0];
        XTappendCloneToOverlay(XTproductToCopy);
        console.log("I switched my robot off");
        break;
      case "3074457345616756795":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616781721")[0];
        XTappendCloneToOverlay(XTproductToCopy);
        console.log("I switched my robot off");
        break;
      case "3074457345616677427":
        XTproductToCopy = document.getElementsByClassName("product_container_3074457345616781349")[0];
        XTappendCloneToOverlay(XTproductToCopy);
        console.log("I switched my robot off");
        break;
      default:
        console.log(`Sorry, we are out of ${XTcapDataAttr}.`);
    }

    const XTinnerOverlayProductTile = document.getElementById("XTsubOverlay").getElementsByClassName("plp-item")[0];
    console.log(XTinnerOverlayProductTile);
    XTinnerOverlayProductTile.addEventListener("click", XTdeleteOverlayContent);
  }
  function XTappendCloneToOverlay(item) {
    XTclone = item.cloneNode(true);
    document.getElementById("XTappendHere").appendChild(XTclone);
    document.getElementById("XToverlaycontainer").style.display = "flex";
    console.log("actually created");
  }

  //* Remove if work around is found
  function XtStartListenerForRemove() {
    document.addEventListener("click", (evt) => {
      const flyoutEl = document.getElementById("XToverlaycontainer");
      let targetEl = evt.target; // clicked element
      do {
        if (targetEl == flyoutEl) {
          // This is a click inside, does nothing, just return.
          console.log("Clicked inside!");
          return;
        }
        // Go up the DOM
        targetEl = targetEl.parentNode;
      } while (targetEl);
      XTdeleteOverlayContent();
      // This is a click outside.
      console.log("Clicked outside!");
    });
  }
});
