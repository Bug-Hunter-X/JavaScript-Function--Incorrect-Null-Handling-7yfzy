function foo(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    throw new Error('Invalid input: Arguments cannot be null or undefined.');
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3

try {
  console.log(foo(null, 2)); // Throws an error
} catch (error) {
  console.error(error.message); // Output: Invalid input: Arguments cannot be null or undefined.
}

try {
  console.log(foo(1, null)); // Throws an error
} catch (error) {
  console.error(error.message); // Output: Invalid input: Arguments cannot be null or undefined.
}

try {
  console.log(foo(null, null)); // Throws an error
} catch (error) {
  console.error(error.message); // Output: Invalid input: Arguments cannot be null or undefined.
} 