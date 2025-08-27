/*
 1. Создайте объект qa с полями name, age, salary и методом getInfo(greetingsWord),
    который будет возвращать строку вида: 
    ${greetingsWord}, my name is ${name}, I'm ${age} and my salary is ${salary}. 
    Значения в строке должны ссылаться на контекст ЭТОГО ОБЪЕКТА, без подмен.
*/

const qa = {
  name: 'Name',
  age: 34,
  salary: 2000,
  getInfo(greetingsWord) {
    return `${greetingsWord}, my name is ${this.name}, I'm ${this.age} and my salary is ${this.salary}`;
  },
};

/*
 2. Changing the context
  - Создайте объект anotherQa с полями name, age, salary, значения в которых будут отличны от объекта qa
  - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода bind()
  - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода call()
  - Вызовите метод getInfo объекта qa c контекстом вызова объекта anotherQa с помощью метода apply()
 */

const anotherQa = {
  name: 'NameSecond',
  age: 30,
  salary: 3000,
};

// Используйте bind с greetingWord "Hello"
const bindResult = qa.getInfo.bind(anotherQa, "Hello")()

// Используйте call с greetingWord "Hi"
const callResult = qa.getInfo.call(anotherQa, "Hi")

// Используйте apply с greetingWord "Hey"
const applyResult = qa.getInfo.apply(anotherQa, ["Hey"])

/*
 3. Closures
  - Создайте функцию createCounter(),
  - Создайте в функции createCounter переменную count, которая будет равна 0
  - Верните из функции createCounter новую функцию
  - В теле новой функции реализуйте увеличение count на + 1 при каждом вызове функции
  - После увеличение каунтера выводите в консоль Function was called ${count} times
  - Создайте переменную functionCallCounter, в которой будет лежать результат createCounter()
  - Вызовите functionCallCounter() 5 раз, убедитесь что в консоли верно выводятся данные
*/

function createCounter() {
  let count = 0

  return () => {
    count++
    console.log(`Function was called ${count} times`)
    return count
  }
}

const functionCallCounter = createCounter();

export { qa, bindResult, callResult, applyResult, functionCallCounter, anotherQa };
