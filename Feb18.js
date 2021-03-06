// A spoonerism is a spoken phrase in which the first letters of two of the words are swapped around, often with amusing results.

// In its most basic form a spoonerism is a two word phrase in which only the first letters of each word are swapped:

// "not picking" --> "pot nicking"

// Your task is to create a function that takes a string of two words, separated by a space: words and returns a spoonerism of those words in a string, as in the above example.

// NOTE: All input strings will contain only two words. Spoonerisms can be more complex. For example, three-word phrases in which the first letters of the first and last words are swapped: "pack of lies" --> "lack of pies" or more than one letter from a word is swapped: "flat battery --> "bat flattery" You are NOT expected to account for these, or any other nuances involved in spoonerisms.

function spoonerize(words) {
  let seperated = words.split(" ");
  let firstWord = seperated[1].charAt(0) + seperated[0].slice(1);
  let secondWord = seperated[0].charAt(0) + seperated[1].slice(1);
  return firstWord + " " + secondWord;
}

// console.log(spoonerize("Hello May"))
// console.log(spoonerize("nit picking"))//, "pit nicking");
//   console.log(spoonerize("wedding bells"))//, "bedding wells");
//   console.log(spoonerize("jelly beans"))//, "belly jeans");

// Given: an array containing hashes of names

// Return: a string formatted as a list of names separated by commas except
// for the last two names, which should be separated by an ampersand.

function list(names) {
  let arr = names.map((word) => word["name"]);
  if (arr.length == 1) return arr[0];
  else if (arr.length == 0) return "";
  else if (arr.length == 2) return `${arr[0]} & ${arr[1]}`;
  else {
    let lastTwo = arr.slice(arr.length - 2);
    let firstWords = arr.slice(0, arr.length - 2);
    let coma = firstWords.map((word) => `${word},`).join(" ");
    return `${coma} ${lastTwo[0]} & ${lastTwo[1]}`;
  }
}

console.log(
  list([
    { name: "Bart" },
    { name: "Lisa" },
    { name: "Maggie" },
    { name: "Homer" },
    { name: "Marge" },
  ])
);
 //, 'Bart, Lisa, Maggie, Homer & Marge',"Must work with many names")
// console.log(list([{ name: "Bart" }, { name: "Lisa" }, { name: "Maggie" }])); //, 'Bart, Lisa & Maggie', "Must work with many names")
