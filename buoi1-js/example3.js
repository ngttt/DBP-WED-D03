var user = {
  name: "...",
  age: 11,
  appearence: {
    hairColor: "black",
    skinColor: "yellow",
    height: 1111,
    weight: 1111,
  },
};

let keys = [];

function useLoop(user, keys) {
  for (let key in user) {
    keys.push(key);
    if (typeof user[key] === "object") useLoop(user[key], keys);
  }
}

useLoop(user, keys);

console.log(keys);
