// finding duplicate numbers in an array

const numbers = [1, 2, 3, 4, 2, 5, 3, 6, 7, 1];

// method 1 - using the filter and indexOf methods

// const duplicates = numbers.filter(
//   (number, index) => numbers.indexOf(number) !== index,
// );

// console.log(duplicates);

// Method 2 - using Set()

const seen = new Set();
const duplicates = new Set();

for (let num of numbers) {
  if (seen.has(num)) {
    duplicates.add(num);
  } else {
    seen.add(num);
  }
}

console.log([...duplicates]);

console.log(numbers.sort());
