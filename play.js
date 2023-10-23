const arr = [5, 5, 5, 2, 2, 2, 2, 2, 9, 4];

const res = arr.filter((ele, index, self) => self.indexOf(ele) !== self.lastIndexOf(ele));





console.log({res});
