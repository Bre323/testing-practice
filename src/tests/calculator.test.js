import calculator from "../calculator";

test('add two numbers', () => {
  expect(calculator.add(2, 3)).toBe(5);
});

test('subtract two numbers', () => {
  expect(calculator.subtract(7, 2)).toBe(5);
});

test('divide two numbers', () => {
  expect(calculator.divide(8, 2)).toBe(4);
});

test('multiply two numbers', () => {
  expect(calculator.multiply(2, 3)).toBe(6);
});

test('return undefined on add', () => {
  expect(calculator.add('x', 3)).toBe('It must contain only numbers');
});

test('return undefined on subtract', () => {
  expect(calculator.subtract('a', 2)).toBe('It must contain only numbers');
});

test('return undefined on divide', () => {
  expect(calculator.divide('x', 2)).toBe('It must contain only numbers');
});

test('return undefined on multiply', () => {
  expect(calculator.multiply('x', 3)).toBe('It must contain only numbers');
});
