function capitalize(str) {
  const trimmedStr = `${str}`.trim();
  const capitalizedLetter = trimmedStr[0].toUpperCase();
  return `${capitalizedLetter}${trimmedStr.slice(1)}`;
}

export default capitalize;
