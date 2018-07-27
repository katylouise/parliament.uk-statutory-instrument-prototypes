function pdsGovSiToggle() {

  // Local variables
  var dropdownToggle = document.getElementsByClassName('js-collapsible__title');
  var dropdownParent;
  var toggle = function (e) {
      e.preventDefault();

      // Get parent of dropdown
      dropdownParent = this.parentElement;
      dropdownContent = dropdownParent.querySelector('.js-collapsible-content');

      // Check dropdown content
      if (dropdownContent.classList.contains('hidden')) {
        dropdownContent.classList.remove('hidden');
      } else {
        dropdownContent.classList.add('hidden');
      }
    };

  // Add listener to dropdowns
  for (var x = 0; x < dropdownToggle.length; x++) {
    dropdownToggle[x].addEventListener('click', toggle, false);
  }
}

pdsGovSiToggle();
