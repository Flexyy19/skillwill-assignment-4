// 1)
let func = (string, valueToReplace, valueToReplaceWith) => {
  let index = string.indexOf(valueToReplace);
  let newString =
    string.substr(0, index) +
    valueToReplaceWith +
    string.substr(index + valueToReplace.length);
  return newString;
};
console.log(func("I enjoy programming in javascript", "enjoy", "love"));

// 2)
const upper = function (sentence) {
  const words = sentence.split(" ");
  const upper = words.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  return upper.join(" ");
};

// 3)
const userArr = [
  { name: "Nika", age: 70 },
  { name: "Giorgi", age: 56 },
  { name: "Gela", age: 25 },
];

function sortByAge(users) {
  return users.slice().sort((a, b) => a.age - b.age);
}
