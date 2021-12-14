$(document).ready(function () {
  //Creating a placeholder for the extra category search results. So here we target the "hidden" searchdropdown & yeet the extra UL in there. Ezy pzy
  const XTextraUl = '<ul data-group="Catégories" id="newSearchResults" class="c-header__search-suggestions-list_new"></ul>';
  document.getElementsByClassName("c-header__search-suggestions-list")[1].setAttribute("data-group", "Zoeksuggesties");
  document.getElementsByClassName("c-header__search-suggestions-list")[1].insertAdjacentHTML("beforebegin", XTextraUl);
  const XTfirstLineInSearchOutput = document.getElementById("newSearchResults");
  // Blame lupet for the shitty code. Cuz I wrote it ;)

  // These are all the "possible" input with all the needed info. Here we will check if the input value in the searchbar is equal or partly equal to the inputs that are stored here
  let XTsearchTerms = [
    {
      input: "chips",
      outputs: {
        0: ["Chips au paprika", "/colruyt/fr/assortiment/chips-au-paprika?rootCategoryId=20009"],
        1: ["Chips au sel", "/colruyt/fr/assortiment/chips-sel?rootCategoryId=20009"],
        2: ["Chips poivre et sel", "/colruyt/fr/assortiment/chips-poivre-sel?rootCategoryId=20009"],
        3: ["Chips au pickles", "/colruyt/fr/assortiment/pickles-chips?rootCategoryId=20009"],
        4: ["", ""],
      },
    },
    {
      input: "laits",
      outputs: {
        0: ["Laits demi-écrémés", "/colruyt/fr/assortiment/laits-demi-ecremes?rootCategoryId=20005"],
        1: ["Laits sans lactose", "/colruyt/fr/assortiment/laits-sans-lactose?rootCategoryId=20005"],
        2: ["Laits ecremes", "/colruyt/fr/assortiment/laits-ecremes?rootCategoryId=20005"],
        3: ["Laits entiers", "/colruyt/fr/assortiment/laits-entiers?rootCategoryId=20005"],
        4: ["", ""],
      },
    },
    {
      input: "fromages",
      outputs: {
        0: ["Fromages en blocs", "/colruyt/fr/assortiment/fromages-en-blocs?rootCategoryId=20005"],
        1: ["Fromages à pâte molle", "/colruyt/fr/assortiment/fromages-pate-molle?rootCategoryId=20005"],
        2: ["Fromages rapés", "/colruyt/fr/assortiment/fromages-rapes?rootCategoryId=20005"],
        3: ["Fromages apéro", "/colruyt/fr/assortiment/fromages-apero?rootCategoryId=20005"],
        4: ["Fromages en tranches genre Gouda", "/colruyt/fr/assortiment/fromage-tranches-gouda?rootCategoryId=20005"],
        5: ["", ""],
      },
    },
    {
      input: "yaourt",
      outputs: {
        0: ["Yaourt nature entier", "/colruyt/fr/assortiment/yaourt-nature-entier?rootCategoryId=20005"],
        1: ["Yaourt nature maigre", "/colruyt/fr/assortiment/yaourt-nature-maigre?rootCategoryId=20005"],
        2: ["Yaourt aux fruits entier", "/colruyt/fr/assortiment/yaourt-aux-fruits-entier?rootCategoryId=20005"],
        3: ["Yaourt aux fruits maigre", "/colruyt/fr/assortiment/yaourt-aux-fruits-maigre?rootCategoryId=20005"],
        4: ["Yaourt nature grec", "/colruyt/fr/assortiment/yaourt-nature-grec?rootCategoryId=20005"],
        5: ["", ""],
      },
    },
  ];
  //Empty array. Is used for storage later. Here we will input all the output html code for a certain search input.
  //TODO Do not forget to empty this array each time the input value changes. Dudoi
  let XTmainUl = [];
  const searchBarOnSite = document.getElementsByClassName("c-header__search-input")[1];
  searchBarOnSite.addEventListener("input", XTshowMeStuff);

  function XTshowMeStuff(val) {
    let XTsearchBoxInput = document.getElementsByClassName("c-header__search-input")[1].value;
    for (let i = 0; i < XTsearchTerms.length; i++) {
      if (XTsearchTerms[i].input.includes(XTsearchBoxInput.toLowerCase()) && XTsearchBoxInput.length >= 3) {
        XTgetCurrentObject(i);
        break;
      } else {
        XTdeleteEverything();
      }
    }
  }

  function XTgetCurrentObject(val) {
    // this gets the amount of ouputs there are for the current search
    const currentSearchTerm = Object.keys(XTsearchTerms[val].outputs).length;
    for (i = 0; i < currentSearchTerm; i++) {
      let currentOutputBasedOnI = XTsearchTerms[val].outputs[i];
      createNewUl(currentOutputBasedOnI);
    }
    //const writestuffhere = document.getElementById("writestuffhere");

    document.getElementById("newSearchResults").innerHTML = "";
    XTfirstLineInSearchOutput.insertAdjacentHTML("afterbegin", XTmainUl.join(""));
    //XTfirstLineInSearchOutput.append(XTmainUl.join(""));
    let newSearchResultsChilds = XTfirstLineInSearchOutput.childElementCount;
    document.getElementsByClassName("c-header__search-suggestions-list")[1].style.top = "calc(100% + " + 29 * currentSearchTerm + "px)";
    //writestuffhere.innerHTML = XTmainUl.join("");
    XTmainUl.splice(0, XTmainUl.length);
  }

  function createNewUl(val) {
    let XTtempUl =
      '<li class="c-header__search-suggestions-product">' +
      '  <a class="c-header__search-suggestions-item" data-tms-intpromo-name="ext_search_ ' +
      val[0] +
      '" data-tms-intpromo-id="search-extra-suggestions" href="' +
      val[1] +
      '">' +
      '    <span class="c-header__search-suggestions-item-keyword">' +
      val[0] +
      "</span>" +
      "  </a>" +
      '  <div class="c-header__search-suggestions-append" data-search-product="search-extra-suggestions"></div>' +
      "</li>";
    XTmainUl.push(XTtempUl);
  }

  function XTdeleteEverything() {
    //XTfirstLineInSearchOutput.innerHTML = "";
    document.getElementById("newSearchResults").innerHTML = "";
    document.getElementsByClassName("c-header__search-suggestions-list")[1].style.top = "100%";
  }
});
