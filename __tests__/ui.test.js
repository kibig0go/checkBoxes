import { getState, setState } from '../js/state';
import { handleCheckboxChange, renderCheckboxes, updateSelectedOrderDisplay } from '../js/ui';

jest.mock('../js/utils', () => ({
  updateCheckedIdsInURL: jest.fn(),
}));

describe('UI functions', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="checkboxes"></div>
      <div id="selectedOrder"></div>
    `;
  });

  test('renderCheckboxes creates correct number of checkboxes', () => {
    // Arrange
    const container = document.getElementById('checkboxes');

    // Act
    renderCheckboxes(container);

    // Assert
    expect(container.querySelectorAll('input[type="checkbox"]').length).toBe(20);
  });

  test('updateSelectedOrderDisplay shows correct order', () => {
    // Arrange
    setState({ selectedIds: ['1', '3', '5'] });
    const selectedOrderElement = document.getElementById('selectedOrder');

    // Act
    updateSelectedOrderDisplay(selectedOrderElement);

    // Assert
    expect(selectedOrderElement.textContent).toBe('Порядок выбора: 1, 3, 5');
  });

  test('handleCheckboxChange updates state correctly', () => {
    // Arrange
    setState({ selectedIds: ['1', '2'] });
    const event = {
      target: { value: '3', checked: true }
    };

    // Act
    handleCheckboxChange(event);

    // Assert
    expect(getState().selectedIds).toEqual(['1', '2', '3']);
  });
});
