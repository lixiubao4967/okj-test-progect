const { flattenArray } = require('./index');

describe('flattenArray', () => {
  test('展平嵌套数组', () => {
    expect(flattenArray([1, [2, 3], [4, [5, 6]]])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('空数组', () => {
    expect(flattenArray([])).toEqual([]);
  });

  test('无嵌套', () => {
    expect(flattenArray([1, 2, 3])).toEqual([1, 2, 3]);
  });

  test('深层嵌套', () => {
    expect(flattenArray([1, [2, [3, [4, [5]]]]])).toEqual([1, 2, 3, 4, 5]);
  });

  test('包含空数组', () => {
    expect(flattenArray([1, [], [2, []], 3])).toEqual([1, 2, 3]);
  });
});
