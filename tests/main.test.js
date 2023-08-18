import { pairSum } from "../src/main.js";

// Let's refactor this function can help us to test multiple inputs
// this can be in an utils file
function checkTuples(firstTuple, secondTuple) {
  return (
    (firstTuple[0] === secondTuple[0] && firstTuple[1] === secondTuple[1]) ||
    (firstTuple[1] === secondTuple[0] && firstTuple[0] === secondTuple[1])
  );
}

describe("pairSum function", () => {
  it("should return [12,0], [16,-4] and [7, 5] tuples", () => {
    const array = [1, 9, 5, 0, 20, -4, 12, 16, 7];
    const target = 12;
    const tuples = pairSum(array, target);
    const expectedResults = [
      [12, 0],
      [16, -4],
      [7, 5],
    ];
    expect(tuples.length).toBe(3);
    tuples.forEach((tuple) => {
      const isTupleFound = expectedResults.some((expectedResult) =>
        checkTuples(tuple, expectedResult)
      );
      expect(isTupleFound).toBe(true);
      expect(tuple[0] + tuple[1]).toBe(target);
    });
  });

  it("should throw an error when the array does not have more than 1 element", () => {
    expect(() => pairSum([], 1)).toThrow(Error);
    expect(() => pairSum([1], 1)).toThrow(Error);
  });

  it("should return [4,3] tuple", () => {
    const array = [3, 4];
    const target = 7;
    const tuples = pairSum(array, target);
    const expectedResults = [[3, 4]];
    expect(tuples.length).toBe(1);
    tuples.forEach((tuple) => {
      const isTupleFound = expectedResults.some((expectedResult) =>
        checkTuples(tuple, expectedResult)
      );
      expect(isTupleFound).toBe(true);
      expect(tuple[0] + tuple[1]).toBe(target);
    });
  });

  it("should return 0 tuples", () => {
    const array = [3, 4, 5, 6, 7];
    const target = 100;
    const tuples = pairSum(array, target);
    expect(tuples.length).toBe(0);
  });

  it("should return [1000, -1] tuple", () => {
    const array = [
      -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 40, 76, 34, 1000,
    ];
    const target = 999;
    const tuples = pairSum(array, target);
    const expectedResults = [[1000, -1]];
    expect(tuples.length).toBe(1);
    tuples.forEach((tuple) => {
      const isTupleFound = expectedResults.some((expectedResult) =>
        checkTuples(tuple, expectedResult)
      );
      expect(isTupleFound).toBe(true);
      expect(tuple[0] + tuple[1]).toBe(target);
    });
  });
});
