$(document).ready(function () {
  const XTextraUl = '<ul data-group="categoriën" id="newSearchResults" class="c-header__search-suggestions-list_new"></ul>';

  document.getElementsByClassName("c-header__search-suggestions-list")[1].setAttribute("data-group", "Zoeksuggesties");
  document.getElementsByClassName("c-header__search-suggestions-list")[1].insertAdjacentHTML("beforebegin", XTextraUl);
  const XTfirstLineInSearchOutput = document.getElementById("newSearchResults");
  // Blame lupet for the shitty code. Cuz I wrote it ;)

  // These are all the "possible" input with all the needed info. Here I will check if the input value in the searchbar is equal or partly equal to the inputs that I have stored here
  let searchTerms = [
    {
      input: "chips",

      outputs: {
        0: ["chips paprika", "/colruyt/nl/assortiment/chips-paprika?rootCategoryId=20009"],
        1: ["chips zout", "/colruyt/nl/assortiment/chips-zout?rootCategoryId=20009"],
        2: ["chips peper & zout", "/colruyt/nl/assortiment/chips-peper-zout?rootCategoryId=20009"],
        3: ["chips pickles", "/colruyt/nl/assortiment/chips-pickles?rootCategoryId=20009"],
        4: ["", ""],
      },
    },
    {
      input: "melk",

      outputs: {
        0: ["Halvolle melk", "/colruyt/nl/assortiment/halfvolle-melk?rootCategoryId=20005"],
        1: ["Lactosevrije melk", "/colruyt/nl/assortiment/lactosevrije-melk?rootCategoryId=20005"],
        2: ["Magere melk", "/colruyt/nl/assortiment/magere-melk?rootCategoryId=20005"],
        3: ["Volle melk", "/colruyt/nl/assortiment/volle-melk?rootCategoryId=20005"],
        4: ["", ""],
      },
    },
    {
      input: "kaas",

      outputs: {
        0: ["blok kaas", "/colruyt/nl/assortiment/blok-kaas?rootCategoryId=20005"],
        1: ["zachte kazen", "/colruyt/nl/assortiment/zachte-kazen?rootCategoryId=20005"],
        2: ["geraspte kaas", "/colruyt/nl/assortiment/geraspte-kaas?rootCategoryId=20005"],
        3: ["aperitief kaas", "/colruyt/nl/assortiment/aperitief-kaas?rootCategoryId=20005"],
        4: ["sneetjes kaas Gouda", "/colruyt/nl/assortiment/sneetjes-gouda?rootCategoryId=20005"],
        5: ["", ""],
      },
    },
    {
      input: "yoghurt",

      outputs: {
        0: ["volle yoghurt natuur", "/colruyt/nl/assortiment/volle-yoghurt-natuur? rootCategoryId=20005"],
        1: ["magere yoghurt natuur", "/colruyt/nl/assortiment/magere-yoghurt-natuur?rootCategoryId=20005"],
        2: ["Volle yoghurt fruit", "/colruyt/nl/assortiment/volle-yoghurt-fruit?rootCategoryId=20005"],
        3: ["magere yoghurt fruit", "/colruyt/nl/assortiment/magere-yoghurt-fruit?rootCategoryId=20005"],
        4: ["griekse yoghurt fruit", "/colruyt/nl/assortiment/griekse-yoghurt-fruit?rootCategoryId=20005"],
        5: ["", ""],
      },
    },
  ];
  //Empty array. Is used for storage later
  //TODO Do not forget to empty this array each time the input value changes. Dudoi
  let mainUl = [];
  const searchBarOnSite = document.getElementsByClassName("c-header__search-input")[1];
  //console.log(searchBarOnSite);
  searchBarOnSite.addEventListener("input", showMeStuff);

  function showMeStuff(val) {
    //console.log(val.data)
    //console.log(document.getElementsByClassName("c-header__search-input")[1].value);
    let XTsearchBoxInput = document.getElementsByClassName("c-header__search-input")[1].value;
    for (let i = 0; i < searchTerms.length; i++) {
      if (searchTerms[i].input.includes(XTsearchBoxInput.toLowerCase()) && XTsearchBoxInput.length >= 3) {
        getCurrentObject(i);
        break;
      } else {
        deleteEverything();
      }
    }
  }

  function getCurrentObject(val) {
    // this gets the amount of ouputs there are for the current search
    const currentSearchTerm = Object.keys(searchTerms[val].outputs).length;
    //console.log(currentSearchTerm);
    for (i = 0; i < currentSearchTerm; i++) {
      //console.log(i);
      let currentOutputBasedOnI = searchTerms[val].outputs[i];
      //console.log(currentOutputBasedOnI[0]);
      createNewUl(currentOutputBasedOnI);
    }
    //const writestuffhere = document.getElementById("writestuffhere");

    document.getElementById("newSearchResults").innerHTML = "";
    XTfirstLineInSearchOutput.insertAdjacentHTML("afterbegin", mainUl.join(""));
    //XTfirstLineInSearchOutput.append(mainUl.join(""));
    //console.log(currentSearchTerm);
    let newSearchResultsChilds = XTfirstLineInSearchOutput.childElementCount;
    document.getElementsByClassName("c-header__search-suggestions-list")[1].style.top = "calc(100% + " + 29 * currentSearchTerm + "px)";
    //writestuffhere.innerHTML = mainUl.join("");
    mainUl.splice(0, mainUl.length);
  }

  function createNewUl(val) {
    //console.log(val + "test");
    let tempUl =
      '<li class="c-header__search-suggestions-product">' +
      '  <a class="c-header__search-suggestions-item" href="' +
      val[1] +
      '">' +
      '    <span class="c-header__search-suggestions-item-keyword">' +
      val[0] +
      "</span>" +
      "  </a>" +
      '  <div class="c-header__search-suggestions-append" data-search-product="chips"></div>' +
      "</li>";
    mainUl.push(tempUl);
    //console.log(mainUl.join(""));
  }

  function deleteEverything() {
    //XTfirstLineInSearchOutput.innerHTML = "";
    document.getElementById("newSearchResults").innerHTML = "";
    document.getElementsByClassName("c-header__search-suggestions-list")[1].style.top = "100%";
  }
});
