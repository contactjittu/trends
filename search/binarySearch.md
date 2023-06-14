## Binary search

Problem: Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found.

arr = [-5, 2, 4, 6, 10], t = 10 -> Should return 4

arr = [-5, 2, 4, 6, 10], t = 6 -> Should return 3

arr = [-5, 2, 4, 6, 10], t = 20 -> Should return -1

```javascript
const binarySearch = (arr, target) => {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while(leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if(target === arr[middleIndex]) {
      return middleIndex;
    }
    if(target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }
  return -1;
};

const sortedArr = [-5, 2, 4, 6, 10];

console.log(binarySearch(sortedArr, 10)); // 4
console.log(binarySearch(sortedArr, 6)); // 3
console.log(binarySearch(sortedArr, 20)); // -1
```

Big O = O(logn)