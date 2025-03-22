// Напишите асинхронную функцию createTodo, принимающая на вход тело создаваемой тудушки.
//    Внутри функции шлите пост запрос на "https://jsonplaceholder.typicode.com/todos" используя fetch.
//    После получения респонса проверьте что статус === 201. Если статус не 201 - пробросить ошибку
//    Преобразуйте респонс из JSON в объект
//    Сравните данные, полученные из респонса с теми, что вы передавали в запрос. Если данные не равны в каком-то ключе - кинуть ошибку
//    Функция должна возвращать полученный объект из респонса
//    Обрабатывайте ошибки с помощью try/cath, в конце выведите в консоль текст, что работа функции завершена

async function createTodo(body) {
    try {
      const data = await fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });
  
      if (data.status !== 201) {
        throw new Error("Incorrect status response");
      }
      const obj = await data.json();
      for (const key in body) {
        if (obj[key] !== body[key]) {
          throw new Error("Incorrect data");
        }
      }
      console.log("function finished");
      return obj
    } catch (err) {
      console.error(err);
    }
   
  }
  
  const body = {
    userId: 2,
    title: "test6",
    completed: false,
  };
  
  createTodo(body).then((data) => console.log(data));