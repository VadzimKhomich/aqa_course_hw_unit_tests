// 1. Создайте функцию delayTwoSeconds, принимающую на вход коллбэк функцию, которая будет отрабатывать спустя 2 секунды после вызова delayTwoSeconds
// 2. Создайте переменную, в которую присвоите новый промис. Промис должен резолваться с числом 1. Обработайте промис методом .then и выведите результат
//   его резолва в консоль
// 3. Создайте переменную, в которую присвоите новый промис. Промис должен реджектаться с "Promise failed".
//   Обработайте промис методом .catch и выведите результат его резолва в консоль
// 4. Создайте функцию promiseNumber, принимающую на вход число. Функция должна возвращать промис, резолвающий это число.
// 5. Вызовите метод Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль результаты работы каждого промиса через .then
// 6. Вызовите метод Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]), обработайте его результаты и последовательно выведите
//   в консоль статус и результат каждого промиса через .then
// 7. Повторите пункты 5 и 6 используя асинхронные функции с блоком try..catch

// task1
function delayTwoSeconds(callback) {
    setTimeout(callback, 2000);
  }
  
  delayTwoSeconds(() => {console.log('after two seconds')})
  
  // task2
  const promise1 = new Promise((resolve, reject) => {
      resolve(1)
  })
  promise1.then((response) => console.log(response))
  
  //task3
  
  const promise2 = new Promise((resolve, reject) => {
      reject("Promise failed")
  })
  promise2.catch((response) => console.log(response))
  
  //task4
  function promiseNumber(number) {
    return new Promise((resolve, reject) => {
      resolve(number);
    });
  }
  
  //task5
  const promises = Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  promises.then((response) => response.forEach((data) => console.log(data)))
  
  // //task6
  const settledPromises = Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  settledPromises.then((response) => response.forEach((data) => console.log(data)))
  
  //task7
  async function allPromises(...arg) {
    try {
      const allPromises = await Promise.all(arg);
      allPromises.forEach((data) => console.log(data));
      k;
    } catch (err) {
      console.log(err);
    }
  }
  allPromises(promiseNumber(1), promiseNumber(2), promiseNumber(3));
  
  async function allSettledPromises(...arg) {
    try {
      const allSettledPromises = await Promise.allSettled(arg);
      allSettledPromises.forEach((data) => console.log(data));
    } catch (err) {
      console.log(err);
    }
  }
  
  allSettledPromises(promiseNumber(1), promiseNumber(2), promiseNumber(3));