// Problem statement
// suppose u have given a string "Hi my name is archana" and you need to print it in the reverse order

function reverseStr(str) {
  const reversedStr = [];
  // O(n)
  for (let i = str.length -1; i >= 0; i--) {
    reversedStr.push(str[i]); // O(1)
  }

  return reversedStr.join(''); // O(n)
}

const reversedStr = reverseStr('Hi My Name Is Archana');

// Time complexity = O(n) + O(n) = O(n)
// Space Complexity = O(n)
