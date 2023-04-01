let month = prompt("Enter a month (e.g. January, February, etc.):");

if (month === "February") {
  let year = prompt("Enter a year:");
  let numDays = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)) ? 29 : 28;
  console.log(`${month} has ${numDays} days.`);
} else if (month === "April" || month === "June" || month === "September" || month === "November") {
  console.log(`${month} has 30 days.`);
} else if (month === "January" || month === "March" || month === "May" || month === "July" || month === "August" || month === "October" || month === "December") {
  console.log(`${month} has 31 days.`);
} else {
  console.log("Invalid month entered. Please try again.");
}
