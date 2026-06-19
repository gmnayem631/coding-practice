const numbers = [1, 2, 3, 4, 2, 5, 3, 6, 7, 1];

const count = {};
const duplicates = [];

for (const num of numbers) {
  count[num] = (count[num] || 0) + 1;

  if (count[num] === 2) {
    duplicates.push(num);
  }
}

console.log(duplicates);
