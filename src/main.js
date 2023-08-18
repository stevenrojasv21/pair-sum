/**
 *
 * @param {Number[]} array List of not repeated integers
 * @param {Number} target number which we need to match adding two numbers of the previous list
 * @returns {Number[]} An array of 2-elements arrays that sum the target value
 */
export function pairSum(array, target) {
  if (array.length < 2) {
    throw new Error("The array should have two numbers at least");
  }
  const previousResults = {};
  const tuples = [];

  // Since we iterate over the array only once, we have an O(n) complexity in execution and an O(n) in memory usage
  array.forEach((element) => {
    // We need to know what other number we need to add up to get the target value, so, we store this result
    // in an object (that behaves like a hash table, so, we have an access in O(1)) and if we find the same number later when 
    // we continue iterating over the list, we will already know what the tuple is and push those two numbers into the tuples variable 
    const pair = target - element;
    previousResults[pair] = element;

    // NOTE: let's suppose that the order of the tuples does not matter
    if (typeof previousResults[element] !== "undefined") {
      tuples.push([element, previousResults[element]]);
    }
  });

  return tuples;
}
