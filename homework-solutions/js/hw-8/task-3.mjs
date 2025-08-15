/*
  Напишите функцию findMissingNumber(arr), которая принимает массив чисел от 1 до N (исключая одно число) 
  и возвращает пропущенное число. Массив не отсортирован и НЕ может содержать дубликаты. 
  Решите эту задачу, используя эффективные методы массива.

  // Пример: const arr = [5,2,7,3,8,1,6] //4
*/

function findMissingNumber(numbers) {
  const sortedNumbers = numbers.toSorted((a, b) => a - b);
  let target = null;
  for (let i = 0; i < sortedNumbers.length; i++) {
    if (sortedNumbers[i] !== i + 1) {
      target = i + 1;
      break;
    } else {
      target = sortedNumbers.length + 1;
    }
  }
  return target;
}

export { findMissingNumber };
