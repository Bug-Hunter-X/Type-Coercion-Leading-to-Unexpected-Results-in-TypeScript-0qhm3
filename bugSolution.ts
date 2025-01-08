function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: any, b: any): number {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    throw new Error('Invalid input types. Both arguments must be numbers.');
  }
}

let result1 = add(1, 2); // Correct: 3
let result2 = addSafe(1, '2'); // Throws error
let result3 = addSafe(1, 2); // Correct: 3