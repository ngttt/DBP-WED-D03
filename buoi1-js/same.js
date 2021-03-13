function same(array1, array2) {
  for (let i = 0; i < array1.length; i++) {
    let check = array2.indexOf(array1[i] ** 2);
    if (check === -1) {
      return false;
    }
    array2.splice(check, 1);
  }
  return true;
}

console.log(same([1, 2, 3], [1, 9]));
console.log(same([1, 2, 3], [4, 1, 9]));
console.log(same([1, 2, 3], [4, 4, 1]));
