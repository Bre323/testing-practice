function getAverage(arr) {
  let sum = 0;
  for(let num of arr) {
    sum += num;
  }
  return sum / arr.length;
}

function analyzeArray(arr) {
  const average = getAverage(arr);
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const length = arr.length;
  let object = {
    average,
    length,
    min,
    max,
  };

  return object;
}

export default analyzeArray;
