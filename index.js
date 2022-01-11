// function twoSort(s) {

//     // s.sort(); sorts alphabet, not ascii
//     let myAns = s.map(function(newThing) {
//         return newThing.charAt(0);
//       });
//       console.log(myAns.join(''));
//     //   console.log(myAns.join('***'));
// }

function twoSort(s) {
    const sorted = s.sort(); // the default sort function works
    return sorted[0] // take first element
      .split("") // split string into chars
      .join("***"); // join chars with ***
}

console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"])); // Return : 'b***i***t***c***o***i***n'
console.log(twoSort(["turns", "out", "random", "test", "cases", "are", "easier", "than", "writing", "out", "basic", "ones"])); // Return : 'a***r***e'