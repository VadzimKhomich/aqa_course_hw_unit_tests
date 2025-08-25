/*
 Имеется объект const character = { 'name': 'Barney', 'age': 36, 'gender': 'male', 'isQa': true }
 1. Создать массив из ключей объекта character и присвоить его в переменную "keyWithFourChars" т.е., где 4 буквы //name, isQa
 2. Создать массив из значений объекта character и присвоить его в переменную "stringValues" е, где тип данных строка //'Barney', 'male'
 3. Создать массив из ключей и значений объекта character и присвоить его в переменную "keyValuePairs", перебрать массив циклом for. 
   На каждой итерации вывести пары ключ-значнение в виде `key = ${key}, value = ${value}`
 4. Проверить, есть ли в объекте ключ salary, результат присвоить в переменные "hasSalaryKey1stOption | hasSalaryKey2ndOption"
   (Реализовать 2мя способами: через оператор "in" (1st) и "Object.hasOwn()" (2nd))
*/

const character = { name: 'Barney', age: 36, gender: 'male', isQa: true };

// 1
const keyWithFourChars = Object.keys(character).filter((key) => key.length === 4);

// 2
const stringValues = Object.values(character).filter((value) => typeof value === 'string');

// 3
/* Do not touch this part */
const logSpy = jest.spyOn(console, 'log');
// ---

// Ваш код
const keyValuePairs = Object.entries(character);

for (const [key, value] of keyValuePairs) {
  console.log(`key = ${key}, value = ${value}`);
}

// 4
const hasSalaryKey1stOption = 'salary' in character;
const hasSalaryKey2ndOption = character.hasOwnProperty('salary');

export { keyWithFourChars, stringValues, hasSalaryKey1stOption, hasSalaryKey2ndOption, keyValuePairs, logSpy };
