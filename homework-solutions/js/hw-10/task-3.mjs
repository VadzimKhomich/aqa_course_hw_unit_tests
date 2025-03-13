/*
  Создайте функцию, принимающую число n, которая при каждом вызове будет
  генерировать случайное число [1 - n] включительно. 
  Условие - каждый следующий вызов должен давать новое число (не встречавшееся в прошлых вызовах). 
  И так пока не переберутся все n чисел. На n + 1 вызов и
  далее функция должна возвращать 'All numbers were received'. 
  Задачу решить через замыкания
  Например n = 5, функция выведет 5 чисел 1-5, а после будет выводить сугубо 'All numbers were received'

  Рекоммендации:
   - Для генерации числа в границах воспользуйтесь методом:
      function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }

*/

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function uniqueRandomGenerator(n) {
  const numbers = []
  while(numbers.length !== n) {
    let number = getRandomArbitrary(1, n)
    if(numbers.includes(number)) {
      continue
    } else {
      numbers.push(number)
    }
  }

  return () => {
    if(!numbers.length) {
      return 'All numbers were received' 
    } else {
      return numbers.pop()
    }
  }
}

export { uniqueRandomGenerator };
