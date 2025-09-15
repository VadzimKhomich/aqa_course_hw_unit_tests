// Напишите дженерик функцию getAvgSalary принимающая через запятую любой набор объектов
//  у которых есть как минимум поле salary: number, и возвращается среднее арифметическое зарплат
//  всех переданных объектов

function getAvgSalary<T extends { salary: number }>(...objects: T[]) {
  if (!objects.length) throw new Error('No data');
  return objects.reduce((acc, { salary }) => (acc += salary), 0) / objects.length;
}
