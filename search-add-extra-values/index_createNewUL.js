$(document).ready(function () {
  const XTextraUl = '<ul data-group="categoriën" id="newSearchResults" class="c-header__search-suggestions-list_new"></ul>';
  document.getElementsByClassName('c-header__search-suggestions-list')[1].setAttribute("data-group", "Zoeksuggesties");
  document.getElementsByClassName('c-header__search-suggestions-list')[1].insertAdjacentHTML("beforebegin", XTextraUl);

  const XTsearchFieldInput = document.getElementsByClassName('c-header__search-input')[1];
  XTsearchFieldInput.addEventListener('input', updateInputValue);

  function updateInputValue(e) {
    const XTstaticSearchTermsArray = ["chi", "chip", "chips", "mel", "melk"];
    const XTstaticSearchTermsArrayChips = ["chi", "chip", "chips"];
    if (XTstaticSearchTermsArray.includes(e.target.value.toLowerCase())) {
      if (XTstaticSearchTermsArrayChips.includes(e.target.value.toLowerCase())) {
        removeOldLines();
        addNewLine();
      }
    } else {
      removeOldLines();
    }
  }
// This piece of crap should in time be quite dynamic. The essence is that it will take the correct data attribute, yeet that into some html. That html should be added into a new const. Which we will do for every value in said object.
  function addNewLine() {
    const XTchipsContent = '<li class="c-header__search-suggestions-product">' +
      '  <a class="c-header__search-suggestions-item" href="https://beta.collectandgo.be/colruyt/nl/zoek?searchTerm=chips&amp;autocomplete=true">' +
      '    <span class="c-header__search-suggestions-item-keyword">chips</span> paprika' +
      '  </a>' +
      '  <div class="c-header__search-suggestions-append" data-search-product="chips">' +
      '  </div>' +
      '</li>'+
      '<li class="c-header__search-suggestions-product">' +
      '  <a class="c-header__search-suggestions-item" href="https://beta.collectandgo.be/colruyt/nl/zoek?searchTerm=chips&amp;autocomplete=true">' +
      '    <span class="c-header__search-suggestions-item-keyword">chips</span> zout' +
      '  </a>' +
      '  <div class="c-header__search-suggestions-append" data-search-product="chips">' +
      '  </div>' +
      '</li>'+
      '<li class="c-header__search-suggestions-product">' +
      '  <a class="c-header__search-suggestions-item" href="https://beta.collectandgo.be/colruyt/nl/zoek?searchTerm=chips&amp;autocomplete=true">' +
      '    <span class="c-header__search-suggestions-item-keyword">chips</span> peper & zout' +
      '  </a>' +
      '  <div class="c-header__search-suggestions-append" data-search-product="chips">' +
      '  </div>' +
      '</li>'+
      '<li class="c-header__search-suggestions-product">' +
      '  <a class="c-header__search-suggestions-item" href="https://beta.collectandgo.be/colruyt/nl/zoek?searchTerm=chips&amp;autocomplete=true">' +
      '    <span class="c-header__search-suggestions-item-keyword">chips</span> pickles' +
      '  </a>' +
      '  <div class="c-header__search-suggestions-append" data-search-product="chips">' +
      '  </div>' +
      '</li>';

    const XTfirstLineInSearchOutput = document.getElementById('newSearchResults');
    XTfirstLineInSearchOutput.insertAdjacentHTML("afterbegin", XTchipsContent);
    let newSearchResultsChilds = XTfirstLineInSearchOutput.childElementCount;
    document.getElementsByClassName('c-header__search-suggestions-list')[1].style.top = "calc(100% + "+ 2 + + 29 * newSearchResultsChilds + "px)";
  }
  // Don't forget to clear our special little const before we are done (The one where we store the html)
  function removeOldLines(){
    console.log("remove is a go");
    document.getElementById('newSearchResults').innerHTML = '';
    document.getElementsByClassName('c-header__search-suggestions-list')[1].style.top = "100%";
    console.log("Style should be 100%");
  }
});



//- REQ Als er chi of chips wordt ingetypt, dan moeten er extra lijntjes komen in het zoekscherm
//- Ik moet input registeren in mijn functie
//- Ik heb een functie nodig die nieuwe input toevoegd
//- Ik heb een functie nodig die ook alles weer weg kan doen
//? Meer?