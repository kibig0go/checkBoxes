import { loadFromURL, init } from './index';

const mockPushState = jest.fn();
delete window.location;
window.location = { search: '' };
window.history.pushState = mockPushState;

describe('Checkbox functionality', () => {
    beforeEach(() => {
        document.body.innerHTML = `
            <div id="checkboxes"></div>
            <div id="selectedOrder"></div>
        `;
        mockPushState.mockClear();
        init();
    });

    test('handleCheckboxChange adds and removes IDs correctly', () => {
        const checkbox = document.getElementById('checkbox-1');
        checkbox.checked = true;
        checkbox.dispatchEvent(new Event('change'));
        expect(mockPushState).toHaveBeenCalledWith(null, '', '?ids=1');

        checkbox.checked = false;
        checkbox.dispatchEvent(new Event('change'));
        expect(mockPushState).toHaveBeenCalledWith(null, '', '?ids=');
    });

    test('updateSelectedOrder updates the display correctly', () => {
        const checkbox1 = document.getElementById('checkbox-1');
        const checkbox2 = document.getElementById('checkbox-2');
        const checkbox3 = document.getElementById('checkbox-3');

        checkbox1.checked = true;
        checkbox1.dispatchEvent(new Event('change'));
        checkbox2.checked = true;
        checkbox2.dispatchEvent(new Event('change'));
        checkbox3.checked = true;
        checkbox3.dispatchEvent(new Event('change'));

        const selectedOrder = document.getElementById('selectedOrder');
        expect(selectedOrder.textContent).toBe('Порядок выбора: 1, 2, 3');
    });

    test('loadFromURL sets checkboxes correctly', () => {
        window.location.search = '?ids=1,3,5';
        loadFromURL();
        expect(document.getElementById('checkbox-1').checked).toBeTruthy();
        expect(document.getElementById('checkbox-2').checked).toBeFalsy();
        expect(document.getElementById('checkbox-3').checked).toBeTruthy();
        expect(document.getElementById('checkbox-4').checked).toBeFalsy();
        expect(document.getElementById('checkbox-5').checked).toBeTruthy();
    });
});
