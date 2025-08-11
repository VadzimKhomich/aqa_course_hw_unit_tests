/*
1. Бесконечные аргументы
  - Напишите функцию, принимающую на вход любое количество массивов
  - Функция возвращает массив содержащий все элементы переданных массивов.
  - Например: mergeArrays([1,2], [3,4], [5,6]) // [1,2,3,4,5,6]
  - Решить с использованием Spread operator
*/
function mergeArrays(...rest) {
  const resultArray = [];
  for (const el of rest) {
    resultArray.push(...el);
  }
  return resultArray;
}

/*
  2. Devide by _
    - Написать функцию, которая преобразует любое предложение в вот_Такой_Вот_Вид и возвращает его. 
    - Первое слово должно начинаться с буквы в нижнем регистре, у остальных -  верхнем. 
    - Пример: I am super engineer => i_Am_Super_Engineer
  */
function devideBy(sentence) {
  if (!sentence) return '';
  if (typeof sentence !== 'string') return 'Incorrect data';
  const resultArray = [];
  const wordsArray = sentence.trim().toLowerCase().split(' ');
  for (const el of wordsArray) {
    if (!el) continue;
    resultArray.push(el[0].toUpperCase() + el.slice(1));
  }
  const stringFromArr = resultArray.join('_');
  return stringFromArr.at(0).toLowerCase() + stringFromArr.slice(1);
}

/*
  3. Фибаначчи
    - Напишите функцию fibonacci(n), возвращающую энное число Фибоначчи
    - числа Фибоначчи (строка Фибоначчи) — числовая последовательность,
      первые два числа которой являются 0 и 1, а каждое последующее за ними число
      является суммой двух предыдущих
    - Например fibonacci(8) //21
  */
function fibonacci(n) {
  if(n === 0) {
    return 0
  }
  let firstfibonacci = 1
  let secondFibonacci = 1

  for(let i = 3; i <= n; i++) {
    let thirdfibonacci = firstfibonacci + secondFibonacci
    firstfibonacci = secondFibonacci
    secondFibonacci = thirdfibonacci
  }
  return secondFibonacci
}

export { mergeArrays, fibonacci, devideBy };
