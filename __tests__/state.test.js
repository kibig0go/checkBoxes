import { getState, setState } from '../js/state';

describe('State management', () => {
  test('getState returns a copy of the state', () => {
    // Arrange
    setState({ selectedIds: [1, 2, 3] });

    // Act
    const result = getState();

    // Assert
    expect(result).toEqual({ selectedIds: [1, 2, 3] });
    expect(result).not.toBe(getState()); // Проверяем, что это новый объект
  });

  test('setState updates the state', () => {
    // Arrange
    setState({ selectedIds: [] });

    // Act
    setState({ selectedIds: [4, 5, 6] });

    // Assert
    expect(getState()).toEqual({ selectedIds: [4, 5, 6] });
  });
});
