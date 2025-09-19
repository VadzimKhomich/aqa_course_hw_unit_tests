// Напишите дженерик-функцию getKeyByValue, которая принимает объект и значение, и возвращает ключ,
// соответствующий этому значению. 
// Если значение не найдено, функция должна возвращать undefined.
// Используйте keyof для типизации ключей объекта

function getKeyByValue<T extends object, K>(obj: T, value: K): keyof T | undefined {
    for(const key in obj) {
        if(obj[key] === value) {
            return key as keyof T
        }
    }
    return undefined
}
