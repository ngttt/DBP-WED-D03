var numbers = [2, 5, 1, 4, 9, 10];

function useFilter(array) {
  var result = array.filter((number) => number % 2 == 0);
  return result;
}

console.log(useFilter(numbers));
