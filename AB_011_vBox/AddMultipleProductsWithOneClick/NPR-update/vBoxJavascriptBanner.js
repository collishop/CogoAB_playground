$(document).ready(function () {
  //! Get the activity identifier from the title element. This makes it possible to safely re-use this code withouth having to manually get the ID for it to work
  const activityIdentiefierXT = document.getElementById("titleVbox").parentElement.parentElement.id.split('title')[1];
  const actCatalogEntry = document.getElementById('catalogEntryRecommendationWidget' + activityIdentiefierXT); //! Here we use the previous const to get this container. This is basically the espot/activity that WCS created for our Is the highest parent of the product carousel ë
  const actContentRec = document.getElementById('contentRecommendationWidget' + activityIdentiefierXT); //! Is the highest parent of the activity
  //console.log(actContentRec.getElementsByClassName("c-product-slider__show-more")[0])
  //! container for the banner part
  const vBoxBannerPart = document.getElementById('thisIsVboxBanner');
  const buttoncontainerVbox = document.getElementById('buttoncontainerVbox');
  $(actCatalogEntry).appendTo(actContentRec); //! Just move product carousel into the same parent as the content so we can style w/ flex-box or the like
  //console.log(actCatalogEntry.getElementsByClassName('c-product-slider__initialiser')[0]);
  //! Here we target the element which contains the actual products. Needed for the check if all elements are there
  const actCarouselContainer = actCatalogEntry.getElementsByClassName('c-product-slider__initialiser')[0];
  actCarouselContainer.setAttribute('id', 'vBoxCarousel');
  //! This is the amount of products in the carousel at that current time
  //console.log(actCarouselContainer.children.length);
  //! This check if both items are in the box. If not then the whole content will be hidden
  if (actCarouselContainer.children.length < 2) {
    actContentRec.style.display = "none";
    console.log('no box');
  } else {
    const buttonDataAttr = document.getElementById('thisIsVboxBanner').getAttribute('data-tms-intpromo-name') // -> attr value
    document.getElementById('buyAllButtonXT').setAttribute("data-tms-intpromo-name", buttonDataAttr);
    console.log('vboc Active')
  }
  // Simple plus sign to add to the bundle to make is visually clear that the products will both be bought
  const plusTeken = '<div style="font-family: Asap; font-style: italic; font-weight: bold; font-size: 40px; line-height: 35px; color: #0587C7; width: unset !important;     display: flex; align-self: center;"> + </div>'
  $(actCarouselContainer.children[0]).after(plusTeken);
  //$(actCarouselContainer.children[2]).after(plusTeken);

  $("#vBoxCarousel > div").wrapAll("<div id='VboxProductContainer'></div>");
  $("#VboxProductContainer").wrapAll("<div id='VboxProductFunctional'></div>");
  $(buttoncontainerVbox).appendTo("#VboxProductFunctional");
  $(vBoxBannerPart).prependTo("#vBoxCarousel");

  const buyAllButton = document.getElementById("buyAllButtonXT");
  const removeAllButton = document.getElementById("removeAllButtonXT");
  buyAllButton.addEventListener("click", buyThisRowOfProdcuts);
  removeAllButton.addEventListener("click", RemoveThisRowOfProdcuts);

  function buyThisRowOfProdcuts() {
    const allBuyButtonsContainer = document.getElementById("VboxProductFunctional").getElementsByClassName("plp-item-footer");
    let allBuyButtonsInsideContainer = "test";
    for (var i = 0; i < allBuyButtonsContainer.length; i++) {
      allBuyButtonsInsideContainer = document.getElementsByClassName("plp-item-footer")[i].getElementsByClassName("--add");
      document.getElementsByClassName("plp-item-footer")[i].style.display = "block";
      // Here we could create an if else to check for the current product ID. If said product ID matches then send them to another function?
      if (allBuyButtonsInsideContainer[0].classList.contains("--weight")) {
        $(allBuyButtonsInsideContainer)[1].click();

      } else {
        $(allBuyButtonsInsideContainer)[0].click();
      }
    }
  }

  function RemoveThisRowOfProdcuts() {
    const allRemoveButtons = document.getElementById("VboxProductFunctional").getElementsByClassName("--remove");
    for (var i = 0; i < allRemoveButtons.length; i++) {
      allRemoveButtonsInsideContainer = document.getElementsByClassName("plp-item-footer")[i].getElementsByClassName("--remove");
      if (allRemoveButtonsInsideContainer[0].classList.contains("--weight")) {
        $(allRemoveButtonsInsideContainer)[1].click();
      } else {
        $(allRemoveButtonsInsideContainer)[0].click();
      }
    }
  }
  actContentRec.getElementsByClassName("c-product-slider__show-more")[0].style.display = "none";
});