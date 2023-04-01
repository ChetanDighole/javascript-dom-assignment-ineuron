4 > 3        // true
4 >= 3       // true
4 < 3        // false
4 <= 3       // false
4 == 4       // true
4 === 4      // true
4 != 4       // false
4 !== 4      // false
4 != '4'     // false (loose equality comparison)
4 == '4'     // true (loose equality comparison)
4 === '4'    // false (strict equality comparison)

const python = "python";
const jargon = "jargon";

if (python.length && jargon.length > 10) {
  // This block will execute if both python and jargon have a truthy length value
  console.log("Both strings have a length greater than 0.");
} else {
  // This block will execute if either python or jargon have a falsy length value
  console.log("At least one of the strings has a length of 0.");
}
