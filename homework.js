// -------------------------- Home work --------------------------
// -------------------------- Десятник Карина --------------------------

//1. Создать функцию multiply, которая будет принимать любое
//количество чисел и возвращать их произведение: multiply(1,2,3) = 6 (1*2*3)

function multiply() {
  let num = 1;
  if (arguments.length === 0) {
    return 0;
  }
  for (let i = 0; i < arguments.length; i++) {
    num *= arguments[i];
  return num;
  }
}
//console.log(multiply());

//2. Создать функцию, которая принимает строку и возвращает строку-перевертыш: reverseString(‘test’) // “tset”.

function reverseString(string = 'test') {
   newStr = string.split('').reverse().join('');
   return newStr;
}
//console.log(reverseString());

// 3.Создать функцию, которая в качестве аргумента принимает строку из букв и возвращает строку, 
// где каждый символ разделен пробелом и заменен на юникод-значение символа: 


function getCodeStringFromText() {
  let string = 'hello';
  let convertString = '';
  for (let i = 0; i < arguments.length; i++) {
      str = arguments[i];
  }
  for (let i = 0; i < string.length; i++) {
    convertString += string.charCodeAt(i) + ' ';
  }
  return console.log(convertString);
}
getCodeStringFromText('hello');

//4. Создать функцию угадай число. Она принимает число от 1-10 
// (обязательно проверить что число не больше 10 и не меньше 0).
//  Генерирует рандомное число от 1-10 и сравнивает с переданным 
//  числом если они совпали то возвращает “Вы выиграли” если нет
//   то “Вы не угадали ваше число 8 а выпало число 5”. 
//   Числа в строке указаны как пример вы подставляете реальные числа.

function guessNumberGame (number) {
  if (number <= 0 || number > 10 || typeof number !== 'number') {
      return 'Error';
  }
  let checkNumber = parseInt(Math.random() * 10) + 1;

  if (number === checkNumber) {
      return 'Вы выиграли';
  } else {
      return `Вы не угадали ваше число ${number} а выпало число  ${checkNumber}`;
  }
}
//guessNumberGame();

// 5.Создать функцию, которая принимает число n и возвращает массив, 
// заполненный числами от 1 до n: getArray(10); // [1,2,3,4,5,6,7,8,9,10]

function getArray(n) {
  let arr = [];
  for (let i = 0; i < n; i++) {
      if (typeof n === 'number') {
           arr[i] = arr.push(i);
      }   
  }
  return console.log(arr);
}
getArray(10);

// 6. Создать функцию, которая принимает массив, а возвращает
//  новый массив с дублированными элементами входного массива:
// doubleArray([1,2,3]) // [1,2,3,1,2,3]
function doubleArray(arr) {
  let str = arr.join(' ');
  str += ' ' + str;
  let result = str.split(' ');
  return result;
}
//doubleArray();

// 7. Создать функцию, которая принимает произвольное (любое) 
// число массивов и удаляет из каждого массива первый элемент,
//  а возвращает массив из оставшихся значений: 
// changeCollection([1,2,3], [‘a’, ’b’, ‘c’])
//  → [ [2,3], [‘b’, ‘c’] ], changeCollection([1,2,3]) → [ [2,3] ] и т.д.

function changeCollection() {
 let handler = arguments[arguments.length - 1];
  
  for (var i = 0; i < arguments.length - 1; i++) {
    let array = arguments[i];
    
    handler(array);
  }
}

// 8. Создать функцию которая принимает массив пользователей, 
// поле на которое хочу проверить и значение на которое хочу
//  проверять. Проверять что все аргументы переданы. Возвращать 
//  новый массив с пользователями соответсвующие указанным параметрам.
//uncGetUsers(users, “gender”, “male”); // [ {name: “Denis”, age: “29”, gender: “male”} , {name: “Ivan”, age: “20”, gender: “male”} ]

users = [ 
  {
    name: 'Denis',
    age: 29, 
    gender: 'male'
  },
  { 
    name: 'Ivan',
    age: 20, 
    gender: 'male'}
  ];

function funcGetUsers(arr, key, value) {
    user = arr.filter(function (item) {
        return item[key] === value;
    });
    return console.log(user);
}
//(funcGetUsers(users, 'age', 20));

//  Создать две функции:
// - первая функция принимает массив и колбэк (одна для всех вызовов)
// - вторая функция (колбэк) обрабатывает каждый элемент массива (для каждого вызова свой callback)
// Первая функция возвращает строку “New value: ” и результат обработки:
// firstFunc([‘my’, ‘name’, ‘is’, ‘Trinity’], handler1) → “New value: MyNameIsTrinity”
// firstFunc([10, 20, 30], handler2) → “New value: 100, 200, 300,”
// firstFunc([{age: 45, name: ‘Jhon’}, {age: 20, name: ‘Aaron’}], handler3) →
// “New value: Jhon is 45, Aaron is 20,”
// firstFunc([‘abc’, ‘123’], handler4) → “New value: cba, 321,” // строки инвертируются

let strArrey = ['My', 'Name', 'Is', 'Trinity']; 
let numbers = [10, 20, 30];
let invertStr = ['abc', '123']; 
let arrUsers = [
  {
    age: 45,
    name: 'Jhon'
  },
  {
    age: 20,
    name: 'Aaron'
  }
]
 
function mainFunc(arr, callback){
  return 'New value: ' + callback(arr)
}
 
function  handler1(arr){
  return arr.reduce((prev, item) => prev += item.charAt(0).toUpperCase() + item.slice(1));
}
 
function  handler2(arr){
  return arr.map(item => item * 10);
}
 
function  handler3(arr){
  return arr.map(item => item.split("").reverse().join(""));
}
function handler4(arr){
  return arr.map(`${item.name} is ${item.age}`);

}

console.log(mainFunc(strArrey,  handler1));
console.log(mainFunc(numbers,  handler2));
console.log(mainFunc(invertStr,  handler3));
console.log(mainFunc(arrUsers,  handler4));




