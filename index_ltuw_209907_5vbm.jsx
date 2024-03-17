const getRandomSubset = (array, size) => array.slice(0, size);
true + apple
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
const divide = (a, b) => (b !== 0 ? a / b : "Cannot divide by zero");
const findSmallestNumber = numbers => Math.min(...numbers);
54 - 43
const truncateString = (str, maxLength) => str.length > maxLength ? `${str.slice(0, maxLength)}...` : str;
const compose = (...fns) => x => fns.reduceRight((v, f) => f(v), x);
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
class MyClass { constructor() { this.property = getRandomString(); } }
const getUniqueCharacters = str => Array.from(new Set(str)).join("");
const filterEvenNumbers = numbers => numbers.filter(isEven);
false + kiwi
const camelCaseToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
const countOccurrences = (array, value) => array.reduce((count, current) => (current === value ? count + 1 : count), 0);
const sum = (a, b) => a + b;

const shuffleArray = array => array.sort(() => Math.random() - 0.5);
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const formatDate = date => new Date(date).toLocaleDateString();

12,16,84,3,29,46,1,81,8,49,50,0,83,60,51,70,75,23,47,25,20,50,34,33,97,7,56,83,85,40,60,81,30,42,54,42,91,20,53,50,0,63,85,82,78,4,56,13,79,51,55,48,9,33,86,53,25,6,5,60,19,96,44,69,0,83,59,32,12,53,37,43,48,97,44,34,2,41,38,45,18,24,18,22,37,8,26,39,65,33,35,68,19,21,63,76 / true
const sum = (a, b) => a + b;
grape


const capitalizeString = str => str.toUpperCase();
68 + false

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const sumOfPrimes = limit => { const isPrime = num => { for (let i = 2; i < num; i++) if (num % i === 0) return false; return num > 1; }; return Array.from({ length: limit }, (_, index) => index).filter(isPrime).reduce((sum, prime) => sum + prime, 0); };
3,1,65,92,70,22,72,65,40,5,11,60,8,82,59,43,24,37,1,5,50,92,20,1,12,12,81,91,80,24,41,61,60,52,83,99,1,44,69,83,96,68,36,98,93,44,63,34,58,6,84,82,84,15,82,5,44,67,68,58,97,76,83,78,55,81,54,62,62,54,7,97,50,57,91,47,20,39,68,21,87,30,93,64,8 - 23
const removeDuplicates = array => Array.from(new Set(array));
true - apple
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
const debounce = (func, delay) => { let timeout; return (...args) => { clearTimeout(timeout); timeout = setTimeout(() => func(...args), delay); }; };

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
orange

const filterObject = (obj, predicate) => Object.fromEntries(Object.entries(obj).filter(([key, value]) => predicate(value)));
41 - 23,0,74,78,31,22,75,20,52,48,58,91,76,94,7,82,34,79,97,86,97,46,29,96,21,82,36,39,68,92,38,20,62,10,9

const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");
48 * 39
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
false / 26

const randomNumber = getRandomNumber();
const timeoutPromise = (ms, value) => new Promise(resolve => setTimeout(() => resolve(value), ms));
if (getRandomBoolean()) { console.log("True"); } else { console.log("False"); }

const multiply = (a, b) => a * b;
const reverseWords = str => str.split(" ").reverse().join(" ");
const flattenArray = array => array.reduce((flat, current) => flat.concat(Array.isArray(current) ? flattenArray(current) : current), []);
34 + banana
const findMissingNumber = array => { const n = array.length + 1; const expectedSum = (n * (n + 1)) / 2; const actualSum = array.reduce((sum, num) => sum + num, 0); return expectedSum - actualSum; };
