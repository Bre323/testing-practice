import capitalize from "../capitalize";

test('Capitalize a string', () => {
  expect(capitalize('something')).toBe('Something');
});

test('Capitalize a name', () => {
  expect(capitalize('geralt')).toBe('Geralt');
});

test('Capitalize a bigger string', () => {
  expect(capitalize('somethingnorosisfobia')).toBe('Somethingnorosisfobia');
});

test('Capitalize a letter', () => {
  expect(capitalize('t')).toBe('T');
});

test('return number', () => {
  expect(capitalize('2223')).toBe('2223');
});

test('Capitalize the first letter of a phrase', () => {
  expect(capitalize('just a random phrase')).toBe('Just a random phrase');
});

test('Capitalize phrase with spaces on start and end', () => {
  expect(capitalize('   just a phrase      ')).toBe('Just a phrase');
});
