function reverseString(str) {
  const trimmedStr = `${str}`.trim();
  return trimmedStr.split('').reverse().join('');
}

export default reverseString;
