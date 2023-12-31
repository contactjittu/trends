## Power of two

Problem: Give a positive integer 'n', determine if the number is a power of 2 or not

An integer is a power of two if there exists an integer 'x' such that 'n' === 2x

isPowerOfTwo(1) = true (2^0)

isPowerOfTwo(2) = true (2^1)

isPowerOfTwo(5) = false

```javascript
const isPowerOfTwo = (n) => {
  if (n < 1) {
    return false;
  }
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
};

console.log(isPowerOfTwo(1)); // true
console.log(isPowerOfTwo(2)); // true
console.log(isPowerOfTwo(5)); // false
```
Big O = 0(log n)

Bitwise power of two
```javascript
const isPowerOfTwoBitwise = (n) => {
  if (n < 1) {
    return false;
  }
  return (n & (n-1)) === 0;
};

console.log(isPowerOfTwoBitwise(1)); // true
console.log(isPowerOfTwoBitwise(2)); // true
console.log(isPowerOfTwoBitwise(5)); // false
```
Big O = O(1)