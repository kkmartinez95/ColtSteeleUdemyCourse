// HELPER RECURSION SOLUTION
function collectOddVals(array) {
  let result = [];

  function helperfunc(section) {
    if (section.length === 0) return;
    if (section[0] % 2 !== 0) {
      result.push(section[0]);
    }
    helperfunc(section.slice(1));
  }
  helperfunc(array);
  return result;
}

function PUREcollectOddVals(array) {
  let result = [];
  if (array.length === 0) {
    return result;
  }
  if (array[0] % 2) {
    result.push(array[0]);
  }

  result = result.concat(PUREcollectOddVals(array.slice(1)));
  return result;
}

console.log('HELPER RECURSION', collectOddVals([1, 2, 3, 4, 5, 6, 7])); // returns [1, 3, 5, 7]
console.log('PURE RECURSION', PUREcollectOddVals([1, 2, 3, 4, 5, 6, 7])); // returns [1, 3, 5, 7]
