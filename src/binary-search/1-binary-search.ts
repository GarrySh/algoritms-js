// const searchFrom = (arr: number[], center: number, finishIndex: number) => {
//   if (arr.length === 0) {
//     return null;
//   }
//   if (arr.)
// };

// [1, 2, 4, 7, 9, 12, 14, 16, 21]
export const binarySearch = (arr: number[], item: number): number | null => {
  let startIndex = 0;
  let endIndex = arr.length - 1;
  while (startIndex <= endIndex) {
    const middle = Math.floor((startIndex + endIndex) / 2);
    const currentItem = arr[middle];
    if (currentItem === item) {
      return middle;
    } else if (currentItem < item) {
      startIndex = middle + 1;
    } else {
      endIndex = middle - 1;
    }
  }
  return null
};
