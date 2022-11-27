import { binarySearch } from './1-binary-search';

describe('binary search', () => {
  test.each([
    { arr: [1, 2, 3, 4, 5, 6], element: 1, index: 0 },
    { arr: [1, 2, 3, 4, 5, 6], element: 3, index: 2 },
    { arr: [1, 2, 3, 4, 5, 6], element: 6, index: 5 },
    { arr: [1, 2, 3, 4, 5, 10, 12], element: 1, index: 0 },
    { arr: [1, 2, 3, 4, 5, 10, 12], element: 4, index: 3 },
    { arr: [1, 2, 3, 4, 5, 10, 12], element: 12, index: 6 },
    { arr: [-12, -7, 0, 4, 5, 10, 12], element: -7, index: 1 },
    { arr: [1, 2, 7, 9, 14, 24], element: 3, index: null },
    { arr: [1, 2, 3, 4, 5, 10, 12], element: 7, index: null },
    { arr: [], element: 3, index: null },
    { arr: [], element: 0, index: null },
  ])(`find element $element in array $arr, expected index $index)`, ({ arr, element, index }) => {
    expect(binarySearch(arr, element)).toBe(index);
  });
});
