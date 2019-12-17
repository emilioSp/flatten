import flatten from '../src/flatten';

describe('Test suite', () => {
  test('Error handling', () => {
    expect(() => flatten(undefined)).toThrow();
  });

  test('Empty array', () => {
    const list = flatten([]);
    expect(list).toStrictEqual([]);
  });

  test('Array without nested levels', () => {
    const list = flatten([1, 2, 3, 4, 5, 6]);
    expect(list).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  test('Array with one nested level', () => {
    const list = flatten([1, [2, 3], 4, [5, 6]]);
    expect(list).toStrictEqual([1, 2, 3, 4, 5, 6]);
  });

  test('Array with two nested level', () => {
    const list = flatten([[1, 2, [3]], 4]);
    expect(list).toStrictEqual([1, 2, 3, 4]);
  });
});
