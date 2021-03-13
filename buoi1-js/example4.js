const array = [21, 4, 5, -1, 15, 4, 13];

function useSlice(array, n) {
  return array.slice(0, n + 1);
}

console.log(useSlice(array, 3));
