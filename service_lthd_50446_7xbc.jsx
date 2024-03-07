const formatDate = date => new Date(date).toLocaleDateString();

52,63,49,72,29,49,48,21,64,97,90,2,4,84,74,59,63,91,53,26,33,30,37,26,84,57,8,31,50,34,73,36,36,15,55,54,97,22,37,38,23,39,14,8,11,86,74,48,51,47,99,88,81,77,82,3,9,59,46,73,43,13,32,95,7,14,80,55,98,85,90,90,33,33,11,11,99,84,43,18,21,60,47,87 - true
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

68,27,42,6,46,92,34,38,90,42,0,30,44,21,2,7,30,26,0,42,95 / false
const chunkArray = (array, size) => Array.from({ length: Math.ceil(array.length / size) }, (_, index) => array.slice(index * size, (index + 1) * size));
const mapObject = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([key, value]) => [key, fn(value)]));
const capitalizeString = str => str.toUpperCase();
const reverseWords = str => str.split(" ").reverse().join(" ");
