const { flattenArray, reverseString, isPalindrome } = require('./index');

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

describe('reverseString', () => {
  test('反转普通字符串', () => {
    expect(reverseString('hello')).toBe('olleh');
  });

  test('空字符串', () => {
    expect(reverseString('')).toBe('');
  });

  test('单字符', () => {
    expect(reverseString('a')).toBe('a');
  });

  test('包含空格', () => {
    expect(reverseString('hello world')).toBe('dlrow olleh');
  });

  test('包含中文', () => {
    expect(reverseString('你好')).toBe('好你');
  });
});

describe('isPalindrome', () => {
  test('普通回文字符串', () => {
    expect(isPalindrome('racecar')).toBe(true);
  });

  test('非回文字符串', () => {
    expect(isPalindrome('hello')).toBe(false);
  });

  test('空字符串', () => {
    expect(isPalindrome('')).toBe(true);
  });

  test('单字符', () => {
    expect(isPalindrome('a')).toBe(true);
  });

  test('忽略大小写和特殊字符', () => {
    expect(isPalindrome('A man, a plan, a canal: Panama')).toBe(true);
  });
});
