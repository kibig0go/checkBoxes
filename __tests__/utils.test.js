import { setState } from '../js/state';
import { getCheckedIdsFromURL, updateCheckedIdsInURL } from '../js/utils';

describe('Utils', () => {
  test('getCheckedIdsFromURL returns correct ids', () => {
    // Arrange
    delete window.location;
    window.location = new URL('http://localhost:3000?ids=1,2,3');

    // Act
    const result = getCheckedIdsFromURL();

    // Assert
    expect(result).toEqual(['1', '2', '3']);
  });

  test('updateCheckedIdsInURL updates URL correctly', () => {
    // Arrange
    setState({ selectedIds: ['4', '5', '6'] });
    const pushStateSpy = jest.spyOn(history, 'pushState');

    // Act
    updateCheckedIdsInURL();

    // Assert
    expect(pushStateSpy).toHaveBeenCalledWith(null, '', '?ids=4%2C5%2C6');
  });
});
