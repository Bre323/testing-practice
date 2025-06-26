import analyzeArray from "../analyzeArray";

test('analyze a small array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    length: 6,
    min: 1,
    max: 8,
  });
});

test('analyze a sorted array', () => {
  expect(analyzeArray([1, 2, 3, 4, 5, 6])).toEqual({
    average: 3.5,
    length: 6,
    min: 1,
    max: 6,
  });
});

test('analyze an one element array', () => {
  expect(analyzeArray([1])).toEqual({
    average: 1,
    length: 1,
    min: 1,
    max: 1,
  });
});

test('analyze an array with two digit numbers', () => {
  expect(analyzeArray([12, 45, 65, 76, 22])).toEqual({
    average: 44,
    length: 5,
    min: 12,
    max: 76,
  });
});
