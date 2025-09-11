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

//1
function delayTwoSeconds(callback) {
  setTimeout(callback, 2000);
}

//2
const promise1 = new Promise((resolve, reject) => {
  resolve(1);
});

promise1.then((res) => console.log(res));

//3
const promise2 = new Promise((resolve, reject) => {
  reject('Promise failed');
});

promise2.catch((res) => console.log(res));

//4
function promiseNumber(number) {
  return new Promise((resolve, reject) => {
    resolve(number);
  });
}

5
Promise.all([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((res) => res.forEach((el) => console.log(el)));

//6
Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)]).then((res) =>
  res.forEach((el) => console.log(el)),
);

//7
async function allPromises(...args) {
    try {
        const array = await Promise.all(args)
        array.forEach(el => console.log(el))
        
    } catch(error) {
        console.error(error.message)
    }
    
}

async function allSettledPromises(...args) {
    try {
        const array = await Promise.allSettled(args)
        array.forEach(el => console.log(el))
        
    } catch(error) {
        console.error(error.message)
    }
    
}

allPromises(promiseNumber(1), promiseNumber(2), promiseNumber(3));
allSettledPromises(promiseNumber(1), promiseNumber(2), promiseNumber(3));
