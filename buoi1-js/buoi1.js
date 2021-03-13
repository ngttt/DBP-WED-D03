// var user= {
//     name: "yield",
//     age: 18,
//     appearence: {
//         hairColor: 'x',
//         skinColor: 'y',
//         height: 121,
//         weight: 23
//     }
// }

// for (let i =0; i< user.lenght; i++) {
//     console.log([i]);
// }

//bai 4

// const array = [21, 4, 5, -1, 15, 4, 13]

// function useSlice (array, n) {
//     return array.slice(0, n)
// }

// console.log(useSlice(array, 5));

//bai 5

// var array = [21, 4, 5, -1, 15, 4, 13];

// function useSplice(array, index, el) {
//   array.splice(index, 0, el);
//   return array;
// }

// console.log(useSplice(array, 2, 99));

//bai 6

var numbers = [2, 5, 1, 4, 9, 10];

function useFilter(array) {
  var result = array.filter((number) => number % 2 == 0);
  return result;
}

console.log(useFilter(numbers));
