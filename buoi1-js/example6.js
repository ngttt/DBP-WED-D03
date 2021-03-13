let array = ["a", "b", "c", "a", "c", "z"];

function useReduce(array) {
  return array.reduce(function (allNames, name) {
    if (name in allNames) {
      allNames[name]++;
    } else {
      allNames[name] = 1;
    }
    return allNames;
  }, {});
}

useReduce(array);
