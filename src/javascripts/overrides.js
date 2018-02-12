function pdsGovSiToggle() {

  // Local variables
  var
    dropdown_toggle = document.getElementsByClassName('js-collapsible__title'),
    dropdown_parent,
    toggle = function(e) {
      e.preventDefault();

      // Get parent of dropdown
      dropdown_parent = this.parentElement;
      dropdown_content = dropdown_parent.querySelector('.js-collapsible-content');

      // Check dropdown content
      if (dropdown_content.classList.contains('hidden')) {
        dropdown_content.classList.remove('hidden');
      } else {
        dropdown_content.classList.add('hidden');
      }
    };

  // Add listener to dropdowns
  for (var x = 0; x < dropdown_toggle.length; x++) {
    dropdown_toggle[x].addEventListener('click', toggle, false);
  }
}

pdsGovSiToggle();
