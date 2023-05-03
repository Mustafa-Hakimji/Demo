export function global1(x) {
  return x * 100;
}

export function global2(array) {
  let sum = 0;

  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      sum += array[i] + array[j];
    }
  }
  return sum;
}
