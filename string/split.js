const str = 'hello world javascript'; // an string
// convert it to an array 
const str1 = str.split('');  // split converes an string to array with given params
console.log(str1);

console.log(str);
// check the type 
console.log(typeof str1);
// get the length of str1
console.log(str1.length);
// access array elements
console.log(str1[3]);



//examples of split method

// write a function which will return splited array

function stringToSplit(string, seperator){
    const newArr = string.split(seperator, 5)
    console.log(newArr);
}

const comma = ', ';
const nameOfMonth = 'jan, feb, mar, apr, may, jun, jul, aug, sep, oct, nov, dec';
stringToSplit(nameOfMonth, comma);
// const lineofWord = 'I love you';
// stringToSplit(lineofWord, ' ');

const names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand '

const re = /\s*(?:;|$)\s*/

// stringToSplit(names, re);