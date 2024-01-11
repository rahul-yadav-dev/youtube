export function addCommasToNumber(number) {
  // Convert the number to a string
  const numberString = number.toString();

  // Create an array to store the characters
  const resultArray = [];

  // Iterate through each character in the string
  for (let i = 0; i < numberString.length; i++) {
    // Add a comma after every odd position (considering 0-based index)
    if (i !== 0 && (i === 1 || i % 4 === 0)) {
      resultArray.push(",");
    }

    // Add the current character to the array
    resultArray.push(numberString[i]);
  }

  // Join the array back into a string and return the result
  return resultArray.join("");
}
