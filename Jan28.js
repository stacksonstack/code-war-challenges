// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1
// foobar23 -> foobar24
// foo0042 -> foo0043
// foo9 -> foo10
// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString(string) {
    let lastChar = string[string.length - 1];
    let restOfString = string.slice(0, string.length - 1);
    if (!isNaN(lastChar) && lastChar !== "9") {
      return `${restOfString}${parseInt(lastChar) + 1}`;
    } else if (isNaN(lastChar)) return `${string}${1}`;
    else {
      let numbers = string.replace(/[^0-9.]/g, "");
      let nonNumbers = `${string.replace(/[0-9]/g, "")}`;
      let newNum = parseInt(string.replace(/[^0-9.]/g, "")) + 1;
      return numbers.length > newNum.toString().length
        ? `${nonNumbers}0${newNum}`
        : `${nonNumbers}${newNum}`;
    }
  }

//   console.log(incrementString("foobar000")) // "foobar001"



// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

function moveZeross(array){
    let zeros = array.filter((zero)=> zero === 0)
    let nonZeros = array.filter((notZero) => notZero !== 0)
    return [...nonZeros, ...zeros]
 }
 
 const moveZeros =(array)=> [...array.filter((notZero) => notZero !== 0), ...array.filter((zero)=> zero === 0)]
    
     
  
 
 console.log(moveZeros([false,1,0,1,2,0,1,3,"a"])) // returns[false,1,1,2,1,3,"a",0,0]

