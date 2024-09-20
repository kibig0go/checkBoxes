import { getState, setState } from './state.js';
import { updateCheckedIdsInURL } from './utils.js';

const createCheckboxTemplate = (id) => `
  <div class="checkbox-wrapper">
    <input type="checkbox" id="checkbox-${id}" value="${id}">
    <label for="checkbox-${id}">Категория ${id}</label>
  </div>
`;

export function renderCheckboxes(container) {
  const checkboxesHTML = Array.from({ length: 20 }, (_, i) => createCheckboxTemplate(i + 1)).join('');
  container.innerHTML = checkboxesHTML;
}

export function updateSelectedOrderDisplay(selectedOrderElement) {
  const { selectedIds } = getState();
  selectedOrderElement.textContent = `Порядок выбора: ${selectedIds.join(', ')}`;
}

export function handleCheckboxChange(event) {
  const { selectedIds } = getState();
  const id = event.target.value;

  if (event.target.checked) {
    if (!selectedIds.includes(id)) {
      setState({ selectedIds: [...selectedIds, id] });
    }
  } else {
    setState({ selectedIds: selectedIds.filter(selectedId => selectedId !== id) });
  }

  updateCheckedIdsInURL();
  updateSelectedOrderDisplay(document.getElementById('selectedOrder'));
}
