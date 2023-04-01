const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];

// Sort the array and find the min and max age
const sortedAges = ages.sort();
const minAge = sortedAges[0];
const maxAge = sortedAges[ages.length - 1];
console.log("Minimum Age:", minAge);
console.log("Maximum Age:", maxAge);

// Find the median age
const middle = Math.floor(sortedAges.length / 2);
const medianAge = sortedAges.length % 2 === 0 ? (sortedAges[middle - 1] + sortedAges[middle]) / 2 : sortedAges[middle];
console.log("Median Age:", medianAge);

// Find the average age
const sumAges = sortedAges.reduce((acc, cur) => acc + cur);
const averageAge = sumAges / sortedAges.length;
console.log("Average Age:", averageAge);

// Find the range of the ages
const ageRange = maxAge - minAge;
console.log("Age Range:", ageRange);

// Compare the value of (min - average) and (max - average), use abs() method
const diff1 = Math.abs(minAge - averageAge);
const diff2 = Math.abs(maxAge - averageAge);

console.log("Absolute difference between min and average age:", diff1);
console.log("Absolute difference between max and average age:", diff2);
