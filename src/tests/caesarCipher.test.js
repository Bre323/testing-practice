import caesarCipher from "../caesarCipher";

test('return a decripted string', () => {
  expect(caesarCipher('bribri', 3)).toBe('euleul');
});

test('return a decripted character', () => {
  expect(caesarCipher('a', 1)).toBe('b');
});

test('return a decripted number', () => {
  expect(caesarCipher('123', 6)).toBe('789');
});

test('return abc', () => {
  expect(caesarCipher('xyz', 3)).toBe('abc');
});

test('return string with case preservation', () => {
  expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
});

test('return a decripted string with punctuation', () => {
  expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
});
