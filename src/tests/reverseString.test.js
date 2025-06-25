import reverseString from "../reverseString";

test('Reverse a string', () => {
  expect(reverseString('something')).toBe('gnihtemos');
});

test('Reverse a name', () => {
  expect(reverseString('geralt')).toBe('tlareg');
});

test('Reverse a phrase', () => {
  expect(reverseString('just a phrase')).toBe('esarhp a tsuj');
});

test('Reverse a letter', () => {
  expect(reverseString('t')).toBe('t');
});

test('Reverse a phrase with spaces on start and end', () => {
  expect(reverseString('     just a phrase     ')).toBe('esarhp a tsuj');
});
