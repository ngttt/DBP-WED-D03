var array = [21, 4, 5, -1, 15, 4, 13];

function useSplice(array, index, el) {
  array.splice(index, 0, el);
  return array;
}

console.log(useSplice(array, 2, 99));
