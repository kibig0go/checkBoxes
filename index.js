let checkboxes;
let selectedOrder;
const selectedIds = [];

function initializeElements() {
    checkboxes = document.getElementById('checkboxes');
    selectedOrder = document.getElementById('selectedOrder');
}

function createCheckboxes() {
    for (let i = 1; i <= 20; i++) {
        const wrapper = document.createElement('div');
        wrapper.className = 'checkbox-wrapper';

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.id = `checkbox-${i}`;
        checkbox.value = i;

        const label = document.createElement('label');
        label.htmlFor = `checkbox-${i}`;
        label.textContent = `Категория ${i}`;

        checkbox.addEventListener('change', handleCheckboxChange);

        wrapper.appendChild(checkbox);
        wrapper.appendChild(label);
        checkboxes.appendChild(wrapper);
    }
}

function handleCheckboxChange(event) {
    const id = event.target.value;
    if (event.target.checked) {
        if (!selectedIds.includes(id)) {
            selectedIds.push(id);
        }
    } else {
        const index = selectedIds.indexOf(id);
        if (index > -1) {
            selectedIds.splice(index, 1);
        }
    }
    updateURL();
    updateSelectedOrder();
}

function updateURL() {
    const searchParams = new URLSearchParams();
    searchParams.set('ids', selectedIds.join(','));
    history.pushState(null, '', `?${searchParams.toString()}`);
}

function updateSelectedOrder() {
    selectedOrder.textContent = `Порядок выбора: ${selectedIds.join(', ')}`;
}

function loadFromURL() {
    const searchParams = new URLSearchParams(window.location.search);
    const ids = searchParams.get('ids');
    if (ids) {
        ids.split(',').forEach(id => {
            const checkbox = document.getElementById(`checkbox-${id}`);
            if (checkbox) {
                checkbox.checked = true;
                selectedIds.push(id);
            }
        });
        updateSelectedOrder();
    }
}

function init() {
    initializeElements();
    createCheckboxes();
    loadFromURL();
}

export { handleCheckboxChange, updateURL, updateSelectedOrder, loadFromURL, init };

if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', init);
}
