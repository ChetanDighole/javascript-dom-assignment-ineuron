let month = prompt("Enter a month (1-12): ");
let year = prompt("Enter a year: ");

let days;

if (month === "2") {
  if (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) {
    days = 29; // leap year
  } else {
    days = 28; // common year
  }
} else if (month === "4" || month === "6" || month === "9" || month === "11") {
  days = 30; // April, June, September, November
} else {
  days = 31; // January, March, May, July, August, October, December
}

console.log(`There are ${days} days in the month of ${month}, ${year}.`);
