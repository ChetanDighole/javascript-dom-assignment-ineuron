// Create a new Date object
const now = new Date();

// Get the current year
const year = now.getFullYear();
console.log("The year today is:", year);

// Get the current month as a number (0 = January, 1 = February, etc.)
const month = now.getMonth();
console.log("The month today as a number is:", month);

// Get the current date (day of the month)
const date = now.getDate();
console.log("The date today is:", date);

// Get the current day as a number (0 = Sunday, 1 = Monday, etc.)
const day = now.getDay();
console.log("The day today as a number is:", day);

// Get the current hour
const hours = now.getHours();
console.log("The hours now are:", hours);

// Get the current minute
const minutes = now.getMinutes();
console.log("The minutes now are:", minutes);

// Get the number of seconds elapsed from January 1, 1970 to now
const secondsSinceEpoch = now.getTime() / 1000;
console.log("The number of seconds elapsed since January 1, 1970 is:", secondsSinceEpoch);
