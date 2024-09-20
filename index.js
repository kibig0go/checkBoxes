import { setState } from './js/state';
import { handleCheckboxChange, renderCheckboxes, updateSelectedOrderDisplay } from './js/ui';
import { getCheckedIdsFromURL } from './js/utils';

function initializeApp() {
  const checkboxesContainer = document.getElementById('checkboxes');
  const selectedOrderElement = document.getElementById('selectedOrder');

  renderCheckboxes(checkboxesContainer);

  const initialSelectedIds = getCheckedIdsFromURL();
  setState({ selectedIds: initialSelectedIds });

  initialSelectedIds.forEach(id => {
    const checkbox = document.getElementById(`checkbox-${id}`);
    if (checkbox) checkbox.checked = true;
  });

  updateSelectedOrderDisplay(selectedOrderElement);

  checkboxesContainer.addEventListener('change', handleCheckboxChange);
}

document.addEventListener('DOMContentLoaded', initializeApp);
