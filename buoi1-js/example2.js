let a1 = 1;
let a2 = 1;
console.log(a1 === a2);

let obj1 = { a: 1 };
let obj2 = { a: 2 };
console.log(obj1 === obj2);

let a3 = a1;
console.log(a3 === a1);

a3 = 3;
console.log(a3 === a1);

let obj3 = obj1;
console.log(obj3 === obj1);

obj3.a = 3;
console.log(obj3 === obj1);
