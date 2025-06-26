function isValidIntegers(a, b) {
  if(typeof a === 'number' && typeof b === 'number') {
    return true;
  }
  return false;
}

function add(a, b) {
  if(isValidIntegers(a, b)) {
    return a + b;
  }
  return 'It must contain only numbers';
};

function subtract(a, b) {
  if(isValidIntegers(a, b)) {
    return a - b;
  }
  return 'It must contain only numbers';
};

function divide(a, b) {
  if(isValidIntegers(a, b)) {
    return a / b;
  }
  return 'It must contain only numbers';
};

function multiply(a, b) {
  if(isValidIntegers(a, b)) {
    return a * b;
  }
  return 'It must contain only numbers';
};

const calculator = {
  add,
  subtract,
  divide,
  multiply
};

export default calculator;
