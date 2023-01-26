// Задача 1
//
// function difference(arr) {
//   if (arr.length <= 1) return 0;
//   let min = Math.min.apply(null, arr);
//   let max = Math.max.apply(null, arr);
//   let result = max - min;
//   return result;
// }
//
// console.log(difference([1, 2, 3, -4])); // 7
// console.log(difference([16])); // 0

// Задача 2
//
// function checkStr(str, num) {
//   let arr = str.split(' ');
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i].length > num) {
//       result.push(arr[i]);
//     }
//   }
//   return result;
// }
//
// console.log(checkStr('This is a test string', 4)); // [string]

// Задача 3
//
// function checkIncludes(str1, str2) {
//   let arrEnd = [...str1].slice(-str2.length);
//   for (let i = 0; i < arrEnd.length; i++) {
//     if (arrEnd[i] !== [...str2][i]) return false;
//   }
//   return true;
// }
//
// console.log(checkIncludes('abc', 'bc')); // true
// console.log(checkIncludes('abc', 'd')); // false

// Задача 4
//
// function averages(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (i === arr.length - 1) break;
//     let average = (arr[i] + arr[i + 1]) / 2;
//     result.push(average);
//   }
//   return result;
// }
//
// console.log(averages([2, -2, 2, -2, 2])); // [0, 0, 0, 0]
// console.log(averages([1, 3, 5, 1, -10])); // [2, 4, 3, -4.5]

// Задача 5
//
// function countVowels(str) {
//   let regex = /[aeiouy]/gi;
//   let result = str.match(regex);
//
//   return result.length;
// }
//
// console.log(countVowels('Celebration')); // 5
// console.log(countVowels('Palm')); // 1
//
// function removeABC(str) {
//   let regex = /[abc]/gi;
//   if (str.match(regex) === null) {
//     return null;
//   }
//   return str.replace(regex, '');
// }
//
// console.log(removeABC('This might be a bit hard')); // "This might e it hrd"
// console.log(removeABC('hello world!')); // null

// Задача 6
//
// function uniqueElements(arr1, arr2) {
//   let result = arr1.concat(arr2);
//   result = Array.from(new Set(result));
//   result.sort((a, b) => a - b);
//   return result;
// }
//
// console.log(uniqueElements([1, 2, 3], [100, 2, 1, 10])); // ['1', '2', '3', '10', '100']

// Задача 7
//
// function reverseObj(obj) {
//     let newObj = {};
//     for(let key in obj) {
//         newObj[obj[key]] = key;
//     }
//     return newObj;
// }
//
// console.log(reverseObj({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"})); // {"#FF0000":"red","#00FF00":"green","#FFFFFF":"white"}

// Задача 8
//
// function calculateDifference(obj, insurance) {
//     let sum = 0;
//     for (let value in obj) {
//         sum += obj[value];
//     }
//     if (sum > 0 && sum > insurance) {
//         return sum - insurance;
//     }
//     return 'obj is empty or sum lower than insurance';
// }
//
// console.log(calculateDifference({ "baseball bat": 20 }, 5)); // 15
// console.log(calculateDifference({ skate: 10, painting: 20 }, 19)); // 11
// console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400)); // 1

// Задача 9
//
// function doesBrickFit(a, b, c, w, h) {
//     if ((a <= w && b <= h) || (a <= w && c <= h) || (b <= w && c <= h)) return true;
//     return false;
// }
//
// console.log(doesBrickFit(1, 1, 1, 1, 1)); // true
// console.log(doesBrickFit(1, 2, 1, 1, 1)); // true
// console.log(doesBrickFit(1, 2, 2, 1, 1)); // false

// Задача 10
//
// function fileName(fullPath) {
//     let strStart = fullPath.lastIndexOf('\\') + 1;
//     let strEnd = fullPath.indexOf('.');
//     return fullPath.substring(strStart, strEnd);
// }
//
// console.log(fileName(String.raw`c:\WebServers\home\testsite\www\myfile.txt`)); // myfile
// console.log(fileName(`c:\\WebServers\\home\\testsite\\www\\myfile.txt`)); // myfile

// Задача11
//
// function circularShift(str1, str2) {
//     str1 = str1.replace(/ /g,'');
//     str2 = str2.replace(/ /g,'');
//     let arr = [...str1];
//     for (let i = 0; i < arr.length; i++) {
//         let char = arr.shift();
//         arr.push(char);
//         if (arr.join('') === str2) return true;
//     }
//     return false;
// }
//
// console.log(сircularShift('12345', '34512')); // true
// console.log(сircularShift('Hello', 'Goodbye')); // false
// console.log(сircularShift('h e l l o', ' e l l o h')); // true

// Задача12
// З елементів масиву a, що складається з 2n елементів, отримати масиви b
// і c наступним чином: вибрати в масиві a два найбільш близькі за значенням
// елемента, менший з них помістити в масив b, а більший - масив c. Виключити
// з розгляду в масиві a ці елементи і продовжити вибір з елементів, що
// залишилися.
//
// function arrayDivider(arr) {
//
// }
//
// console.log(arrayDivider([1, 100, 101, 180, 205, 500])); // [100, 180, 1] [101, 205, 500]

// Задача13
//
// function newStr(str) {
//     str = str.toLocaleLowerCase();
//     str = str[0].toUpperCase() + str.slice(1);
//     str = str.replace(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g, '[посилання заборонено]');
//     str = str.replace(/([+0-9A-z._-]+)@([A-z.]+)/g, '[контакти заборонені]');
//     str = str.replace(/(\s\d{3,}\s*?)/g, ' ');
//     return str;
// }
//
// console.log(newStr('this25678 is the 38575 TEST STRING with 1 link: https://www.google.com/, 1 email: test@gmail.com, 0 phone: 380112223344')); // This25678 is the  test string with 1 link: [посилання заборонено], 1 email: [контакти заборонені], 0 phone:

// Задача14
//
// function isBalanced(str) {
//     let arr = str.split('');
//     let counter = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] === '(') {
//             counter += 1;
//         } else if (arr[i] === ')') {
//             counter -= 1;
//         }
//         if (counter < 0) {
//             return 'not balanced';
//         }
//     }
//     if (counter === 0) {
//         document.write(str)
//         document.onselectstart = () => false;
//         document.oncontextmenu = () => false;
//         return 'balanced';
//     }
//     return 'not balanced';
// }
//
// console.log(isBalanced('This is a balanced (str)')); // balanced
// console.log(isBalanced('This ( is not a( balanced)')); // not balanced
// console.log(isBalanced('This ( is not a) balanced)(')); // not balanced

// Задача15
//
// function passwordGenerator() {
//     let passLen = Math.floor(Math.random() * (Math.floor(20) - Math.ceil(6) + 1)) + Math.ceil(6);
//     let upperCount = 2;
//     let numCount = Math.floor(Math.random() * 6);
//     let digits = [...'0123456789'];
//     let chars = [...'abcdefghijklmnopqrstuvwxyz'];
//     let pass = ['_'];
//     for (let i = 0; i < numCount; i++) {
//         let random = Math.floor(Math.random() * digits.length);
//         pass.push(digits[random]);
//     }
//     for (let i = 0; i < passLen - (numCount + 1); i++) {
//         let random = Math.floor(Math.random() * chars.length);
//         let randomCase = Math.floor(Math.random() * 2)
//
//         if (randomCase === 0 || upperCount > 0) {
//             pass.push(chars[random].toUpperCase());
//             upperCount = upperCount - 1;
//         } else {
//             pass.push(chars[random]);
//         }
//     }
//     shuffle(pass);
//     for(let i = 0; i < pass.length; i++) {
//         let random = Math.floor(Math.random() * chars.length);
//         if(isNaN(pass[i]) === false && isNaN(pass[i + 1]) === false && isNaN(pass[i + 2]) === false) {
//             pass[i] = chars[random];
//         }
//     }
//     return pass.join('');
// }
//
// function shuffle(arr) {
//     let current = arr.length;
//     while (current !== 0) {
//         let random = Math.floor(Math.random() * current);
//         current--;
//         [arr[current], arr[random]] = [arr[random], arr[current]];
//     }
//     return arr;
// }
//
// console.log(passwordGenerator());

// Задача16
//
// function sortArray(arr) {
//     let len = arr.length / 2;
//     let a = [];
//     for (let i = 0; i < len; i++) {
//         let min = Math.min(...arr);
//         let minIndex = arr.findIndex(i => i === min);
//         let removed = arr.splice(minIndex, 1);
//         a[i] = removed[0];
//     }
//     let arrEnd = a.slice(1);
//     return [a[0]].concat(arrEnd.reverse());
// }
//
// console.log(sortArray([20, 19, 3, 2, 5, 1, 7, 10])); // [1,5,3,2]
