import { pairSum } from './src/main.js';

// Let's suppose the simple and happy path proposed for this exercise 
const array = process.argv[2].split(',').map((element) => Number(element));
const target = Number(process.argv[3]);

const results = pairSum(array, target);
// printing the results
results.forEach((tuple) => {
    console.log(`${tuple[0]}, ${tuple[1]}`);
});
