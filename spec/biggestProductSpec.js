const matrix = [
  [08, 02, 22, 97, 38, 15, 00, 40, 00, 75, 04, 05, 07, 78, 52, 12, 50, 77, 91, 08],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 04, 56, 62, 00],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 03, 49, 13, 36, 65],
  [52, 70, 95, 23, 04, 60, 11, 42, 69, 24, 68, 56, 01, 32, 56, 71, 37, 02, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 03, 45, 02, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 02, 62, 12, 20, 95, 63, 94, 39, 63, 08, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 05, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 09, 75, 00, 76, 44, 20, 45, 35, 14, 00, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 03, 80, 04, 62, 16, 14, 09, 53, 56, 92],
  [16, 39, 05, 42, 96, 35, 31, 47, 55, 58, 88, 24, 00, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 00, 48, 35, 71, 89, 07, 05, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 05, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 04, 89, 55, 40],
  [04, 52, 08, 83, 97, 35, 99, 16, 07, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 03, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [04, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 08, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 04, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 01, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 05, 54],
  [01, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 01, 89, 19, 67, 48]
];

const smallMatrix = [
  [ 1,  2, 3, 4, 5],
  [ 1, 20, 3, 4, 5],
  [ 1, 20, 3, 4, 5],
  [ 1, 20, 3, 4, 5],
  [ 1,  4, 3, 4, 5]
];

// Iteration 1.1
describe("biggest product", function() {
  it("return 0 on empty input", function() {
    expect(biggestProduct([])).toEqual(0);
  });
});

// Iteration 1.2
describe("product of 4 numbers", function() {
  it("throw an error if the parameters are not of the type 'number'", function() {
    expect(function(){productOf4Numbers([], '', 4, 5)}).toThrow(new Error ('The numbers are invalid'));
  });

  it("return the product of 4 numbers", function() {
    expect(productOf4Numbers(4,2,8,6)).toEqual(384);
  });
});

// Iteration 1.3
describe("biggest product of 4 in a row", function() {
  it("throw an error if the parameters are not of the type 'number'", function() {
    expect(function(){biggestOf4NumbersInARow([[], '', 4, 5])}).toThrow(new Error ("The array doesn't contain only numbers"));
  });

  it("return the biggest product of 4 numbers in a row", function() {
    expect(biggestOf4NumbersInARow([4, 2, 8, 6, 1])).toEqual(384);
    expect(biggestOf4NumbersInARow(smallMatrix[2])).toEqual(1200);
  });
});

// Iteration 2.1
describe("biggest product of 4 in all rows", function() {
  it("throw an error if the parameters are not of the type 'number'", function() {
    expect(function(){biggestOf4NumbersInAllRows([[7, '', 4, 5], [5, 6, 8, 4]])}).toThrow(new Error ("The matrix doesn't contain only numbers"));
  });

  it("return the biggest product of 4 numbers in all rows", function() {
    expect(biggestOf4NumbersInAllRows([[4, 2, 8, 6, 1], [1, 1, 1, 1, 1]])).toEqual(384);
    expect(biggestOf4NumbersInAllRows(smallMatrix)).toEqual(1200);
  });
});

// Iteration 2.2
describe("transpose", function() {
  it("change the rows and columns", function() {
    expect(transpose(smallMatrix)).toEqual([[1, 1, 1, 1, 1],[2, 20, 20, 20, 4],[3, 3, 3, 3, 3],[4, 4, 4, 4, 4],[5, 5, 5, 5, 5]]);
  });
})


describe("biggest product of 4 in a column", function() {
  it("throw an error if the parameters are not of the type 'number'", function() {
    expect(function(){biggestOf4NumbersInAColumn([[4], [''], [8], [5], [1]])}).toThrow(new Error ("The array doesn't contain only numbers"));
  });

  it("return the biggest product of 4 numbers in a column", function() {
    expect(biggestOf4NumbersInAColumn([[4], [2], [8], [6], [1]])).toEqual(384);
  });
});

// Iteration 2.3
describe("biggest product of 4 in all columns", function() {
  it("throw an error if the parameters are not of the type 'number'", function() {
    expect(function(){biggestOf4NumbersInAllColumns([[7, '', 4, 5], [21, 8, 9, 0], [7, 4, 6, 10], [5, 6, 8, 4]])}).toThrow(new Error ("The matrix doesn't contain only numbers"));
  });

  it("return the biggest product of 4 numbers in all columns", function() {
    expect(biggestOf4NumbersInAllColumns(smallMatrix)).toEqual(32000);
  });
});

// Iteration 2.3
describe("biggest product of 4 in all columns", function() {
  it("throw an error if the parameters are not of the type 'number'", function() {
    expect(function(){biggestOf4NumbersInAllColumns([[7, '', 4, 5], [21, 8, 9, 0], [7, 4, 6, 10], [5, 6, 8, 4]])}).toThrow(new Error ("The matrix doesn't contain only numbers"));
  });

  it("return the biggest product of 4 numbers in all columns", function() {
    expect(biggestOf4NumbersInAllColumns(smallMatrix)).toEqual(32000);
  });
});

// Bonus 7
describe("return the biggest diagonal from right to left", function() {
  it("return the biggest diagonal from right to left", function() {
    expect(biggestDiagonalRightToLeft(smallMatrix)).toEqual(1200);
  });
});

// Bonus 8
describe("return the biggest diagonal", function() {
  it("return the biggest product of 4 numbers in both diagonals", function() {
    expect(biggestOf4NumbersInAllDiagonals(smallMatrix)).toEqual(1200);
  });
});

describe("return the biggest product of 4 in the matrix", function() {
  it("return the biggest product of 4 numbers", function() {
    expect(biggestOf4Numbers(smallMatrix)).toEqual(32000);
  });
});