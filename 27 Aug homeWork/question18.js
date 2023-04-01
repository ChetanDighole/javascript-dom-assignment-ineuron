let age = prompt("Enter your age:");
let yearsToWait = 18 - age;

if (age >= 18) {
  console.log("You are old enough to drive");
} else {
  console.log(`Sorry, you are not old enough to drive. You need to wait for ${yearsToWait} more years.`);
}
