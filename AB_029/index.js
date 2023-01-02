// $(document).ready(function () {
//   const topCatUrls = ['https://www.collectandgo.be/colruyt/nl/assortiment/fruit?rootCategoryId=20001&navOpenXT=20020', 'https://www.collectandgo.be/colruyt/nl/assortiment/groenten?rootCategoryId=20001&navOpenXT=20021', 'https://www.collectandgo.be/colruyt/nl/assortiment/noten-zaden-pitten-gedroogd-fruit?rootCategoryId=20001&navOpenXT=20024'];
//   const queryString = window.location.search;
//   const urlParams = new URLSearchParams(queryString);
//   const NavToBeOpenend = urlParams.get('navOpenXT')
//   const fruitClickEvent = document.querySelectorAll("[data-category-id='20020']")[1];
//   const groenteClickEvent = document.querySelectorAll("[data-category-id='20021']")[1];
//   const notenClickEvent = document.querySelectorAll("[data-category-id='20024']")[1];

//   fruitClickEvent.addEventListener("click", function () {
//     topCatRedirecter(this, 0)
//   });
//   groenteClickEvent.addEventListener("click", function () {
//     topCatRedirecter(this, 1)
//   });
//   notenClickEvent.addEventListener("click", function () {
//     topCatRedirecter(this, 2)
//   });

//   function topCatRedirecter(current, x) {
//     console.log(NavToBeOpenend)
//     console.log(current)
//     console.log(current.getAttribute('data-category-id'))
//     if (!(queryString.includes('navOpenXT')) || !(NavToBeOpenend === current.getAttribute('data-category-id'))) {
//       window.location.href = topCatUrls[x];
//     } else {
//       console.log('got fucked by this');
//     }
//   }
//   if (NavToBeOpenend === '20020' || NavToBeOpenend === '20021' || NavToBeOpenend === '20024') {
//     switch (NavToBeOpenend) {

//       case '20020':
//         fruitClickEvent.removeEventListener("click", function () {
//           topCatRedirecter(0)
//         });
//         console.log('is fruit')
//         break;
//       case '20021':
//         groenteClickEvent.removeEventListener("click", function () {
//           topCatRedirecter(1)
//         });
//         console.log('is GROENTE')
//         break;
//       case '20024':
//         notenClickEvent.removeEventListener("click", function () {
//           topCatRedirecter(2)
//         });
//         console.log('is noten')
//         break;
//     }
//     document.getElementById('main-container').querySelectorAll("[data-category-id='" + NavToBeOpenend + "']")[0].click();
//   }
// });

$(document).ready(function () {
  function sleep(ms) {
    console.log('sleeped', ms)
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  async function demoXT() {
    await sleep(700);
    console.log('Done');
    const topCatUrls = ['https://www.collectandgo.be/colruyt/nl/assortiment/fruit?rootCategoryId=20001&navOpenXT=20020', 'https://www.collectandgo.be/colruyt/nl/assortiment/groenten?rootCategoryId=20001&navOpenXT=20021', 'https://www.collectandgo.be/colruyt/nl/assortiment/noten-zaden-pitten-gedroogd-fruit?rootCategoryId=20001&navOpenXT=20024'];
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const NavToBeOpenend = urlParams.get('navOpenXT')


    async function checkForNavigation() {
      await sleep(150);
      console.log('in function');
      if (document.querySelectorAll("[data-category-id='20020']")[1]) {

        let fruitClickEvent = document.querySelectorAll("[data-category-id='20020']")[1];
        let groenteClickEvent = document.querySelectorAll("[data-category-id='20021']")[1];
        let notenClickEvent = document.querySelectorAll("[data-category-id='20024']")[1];

        fruitClickEvent.addEventListener("click", function () {
          topCatRedirecter(this, 0)
        });
        groenteClickEvent.addEventListener("click", function () {
          topCatRedirecter(this, 1)
        });
        notenClickEvent.addEventListener("click", function () {
          topCatRedirecter(this, 2)
        });
        RemoveListenersAfterNavCheck();
      } else {
        fruitClickEvent = document.querySelectorAll("[data-category-id='20020']")[1];
        groenteClickEvent = document.querySelectorAll("[data-category-id='20021']")[1];
        notenClickEvent = document.querySelectorAll("[data-category-id='20024']")[1];
        checkForNavigation();
        // return
      }
    }
    checkForNavigation();

    function topCatRedirecter(current, x) {
      if (!(queryString.includes('navOpenXT')) || !(NavToBeOpenend === current.getAttribute('data-category-id'))) {
        current.classList.remove("--dropdown");
        window.location.href = topCatUrls[x];
      } else {

      }
    }

    function RemoveListenersAfterNavCheck() {
       fruitClickEvent = document.querySelectorAll("[data-category-id='20020']")[1];
       groenteClickEvent = document.querySelectorAll("[data-category-id='20021']")[1];
       notenClickEvent = document.querySelectorAll("[data-category-id='20024']")[1];

      if (NavToBeOpenend === '20020' || NavToBeOpenend === '20021' || NavToBeOpenend === '20024') {
        switch (NavToBeOpenend) {
          case '20020':
          console.log(fruitClickEvent)
          fruitClickEvent.removeEventListener("click", function () {
              topCatRedirecter(0)
            });
            console.log('is fruit')
            break;
          case '20021':
            groenteClickEvent.removeEventListener("click", function () {
              topCatRedirecter(1)
            });
            console.log('is GROENTE')
            break;
          case '20024':
            notenClickEvent.removeEventListener("click", function () {
              topCatRedirecter(2)
            });
            console.log('is noten')
            break;
        }
        document.getElementById('main-container').querySelectorAll("[data-category-id='" + NavToBeOpenend + "']")[0].click();
      }
    }
  }
  demoXT();
});