$(document).ready(function () {
  console.log("ready!");
  const FirstProductContainer = document.getElementById('plp_product_25716-P');
  const FPCoverlay = FirstProductContainer.getElementsByClassName('plp-item-top__overlay')[0]


  // This checks if there are currently items in the basket based of an active class when # item is present in basket
  if (FPCoverlay.classList.contains('--opened')) {
    //document.getElementsByTagName("p")[0].innerHTML =
    CheckAmountInBasket(0)
  } else {}
  // This function will check the amount in basket and how they were added -> single items or packs
  function CheckAmountInBasket(e) {
    const FirstProductItemIBasket = FPCoverlay.getElementsByClassName('plp-item-top__overlay__top-text')[0].innerHTML
    //FirstProductItemIBasket
    if (FirstProductItemIBasket.split(" ").length === 4) {
      CalculateDifference(FirstProductItemIBasket.split(" ")[0], FirstProductItemIBasket.split(" ")[2], e)
    } else if (FirstProductItemIBasket.split(" ").length === 2) {
      CalculateDifference(FirstProductItemIBasket.split(" ")[0], 1, e)
    }
  }
  // This function calculates the difference of items in basket and updates the H2-tag
  function CalculateDifference(a, b, e) {
    const TotalInBasket = (parseInt(e) + parseInt(a)) * parseInt(b);
    const AmountNeeded = 6
    document.getElementById("GratisFles1").innerHTML = "krijg 1 magnumfles mee"
    if (TotalInBasket > AmountNeeded) {
      document.getElementById("GratisFles1").innerHTML = "vergeet je gratis product niet";
      document.getElementById("GratisFles1").style.color = '#0587c7'

    }
    else if (TotalInBasket === AmountNeeded) {
      document.getElementById("GratisFles1").innerHTML = "vergeet je gratis product niet";
      document.getElementById("GratisFles1").style.color = '#0587c7'
      const ItemDifference = AmountNeeded - TotalInBasket
      document.getElementById("bottleCounter1").innerHTML = ItemDifference
      document.getElementById("bottleCounter1").style.color = '#0587c7'
    } else {
      const ItemDifference = AmountNeeded - TotalInBasket
      document.getElementById("bottleCounter1").innerHTML = ItemDifference
      document.getElementById("bottleCounter1").style.color = '#0587c7'
    }
  }
  // These two will check if the add or remove buttons are used for GratisFles1

  document.getElementById('plp_product_25716-P').querySelectorAll(".--add.--piece").forEach((item) => {
    item.addEventListener("click", (event) => {
      //CheckAmountInBasket(1)
      if (FPCoverlay.classList.contains('--opened')) {
        //document.getElementsByTagName("p")[0].innerHTML =
        CheckAmountInBasket(1)
      } else {
        FPCoverlay.getElementsByClassName('plp-item-top__overlay__top-text')[0].innerHTML = "1 stuk"
        CheckAmountInBasket(0)
      }
    });
  });
  document.getElementById('plp_product_25716-P').querySelectorAll(".--add.--pack").forEach((item) => {
    item.addEventListener("click", (event) => {
      //CheckAmountInBasket(1)
      if (FPCoverlay.classList.contains('--opened')) {
        //document.getElementsByTagName("p")[0].innerHTML =
        CheckAmountInBasket(1)
      } else {
        FPCoverlay.getElementsByClassName('plp-item-top__overlay__top-text')[0].innerHTML = "1 x 6 stuk"
        CheckAmountInBasket(0)
      }
    });
  });
  document.getElementById('plp_product_25716-P').querySelectorAll(".--remove").forEach((item) => {
    item.addEventListener("click", (event) => {
      CheckAmountInBasket(-1)
    });
  });

  const SecondProductContainer = document.getElementById('plp_product_24586-P');
  console.log(SecondProductContainer)
  const SPCoverlay = SecondProductContainer.getElementsByClassName('plp-item-top__overlay')[0]

  // This checks if there are currently items in the basket based of an active class when # item is present in basket
  if (SPCoverlay.classList.contains('--opened')) {
    //document.getElementsByTagName("p")[0].innerHTML =
    SecondCheckAmountInBasket(0)
  } else {}
  // This function will check the amount in basket and how they were added -> single items or packs
  function SecondCheckAmountInBasket(e) {
    const SecondProductItemIBasket = SPCoverlay.getElementsByClassName('plp-item-top__overlay__top-text')[0].innerHTML
    //SecondProductItemIBasket
    if (SecondProductItemIBasket.split(" ").length === 4) {
      SecondCalculateDifference(SecondProductItemIBasket.split(" ")[0], SecondProductItemIBasket.split(" ")[2], e)
    } else if (SecondProductItemIBasket.split(" ").length === 2) {
      SecondCalculateDifference(SecondProductItemIBasket.split(" ")[0], 1, e)
    }
  }
  // This function calculates the difference of items in basket and updates the H2-tag
  function SecondCalculateDifference(a, b, e) {
    const TotalInBasket = (parseInt(e) + parseInt(a)) * parseInt(b);
    const AmountNeeded = 6
    document.getElementById("GratisFles2").innerHTML = "krijg 1 magnumfles mee"
    if (TotalInBasket > AmountNeeded) {
      document.getElementById("GratisFles2").innerHTML = "vergeet je gratis product niet"
      document.getElementById("GratisFles2").style.color = '#0587c7'
    }
    else if (TotalInBasket === AmountNeeded) {
      document.getElementById("GratisFles2").innerHTML = "vergeet je gratis product niet";
      document.getElementById("GratisFles2").style.color = '#0587c7';
      const ItemDifference = AmountNeeded - TotalInBasket
      document.getElementById("bottleCounter2").innerHTML = ItemDifference
      document.getElementById("bottleCounter2").style.color = '#0587c7'
    } else {
      const ItemDifference = AmountNeeded - TotalInBasket
      document.getElementById("bottleCounter2").innerHTML = ItemDifference
      document.getElementById("bottleCounter2").style.color = '#0587c7'
    }
  }

  // These two will check if the add or remove buttons are used for GratisFles2

  document.getElementById('plp_product_24586-P').querySelectorAll(".--add.--piece").forEach((item) => {
    item.addEventListener("click", (event) => {
      //SecondCheckAmountInBasket(1)
      if (SPCoverlay.classList.contains('--opened')) {
        //document.getElementsByTagName("p")[0].innerHTML =
        SecondCheckAmountInBasket(1)
      } else {
        SPCoverlay.getElementsByClassName('plp-item-top__overlay__top-text')[0].innerHTML = "1 stuk"
        SecondCheckAmountInBasket(0)
      }
    });
  });
  document.getElementById('plp_product_24586-P').querySelectorAll(".--add.--pack").forEach((item) => {
    item.addEventListener("click", (event) => {
      //SecondCheckAmountInBasket(1)
      if (SPCoverlay.classList.contains('--opened')) {
        //document.getElementsByTagName("p")[0].innerHTML =
        SecondCheckAmountInBasket(1)
      } else {
        SPCoverlay.getElementsByClassName('plp-item-top__overlay__top-text')[0].innerHTML = "1 x 6 stuk"
        SecondCheckAmountInBasket(0)
      }
    });
  });
  document.getElementById('plp_product_24586-P').querySelectorAll(".--remove").forEach((item) => {
    item.addEventListener("click", (event) => {
      SecondCheckAmountInBasket(-1)
    });
  });
});

//



// Dit zou de ideale HTML situatie zijn

// <h2> Koop <span id="BasketCounter">6</span> flessen van WIJNSOORT en voeg dan je 

// const InBasket = 4

// const BasketCounter = document.getElementById('BasketCounter').innerHTML

// if (InBasket >= BasketCounter) {
// } else {

//   const ItemDifference = BasketCounter - InBasket
//   document.getElementById('BasketCounter').innerHTML = ItemDifference
//   document.getElementById('BasketCounter').style.color = '#0587c7'
// }