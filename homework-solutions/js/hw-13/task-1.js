"use strict";
//task-1
let num1 = 42;
let str = "Hello, TypeScript!";
let isComplete = true;
const numbers = [1, 2, 3, 4, 5];
const cities = ["Minsk", "Warsaw", "London"];
const person = {
    name: "Alice",
    age: 30,
    city: "Minsk"
};
//task-6
function calculateDiscount(product) {
    return product.price - product.price * (product.discount / 100);
}
const product = {
    id: 1,
    name: "Laptop",
    price: 1000,
    discount: 10
};
console.log(calculateDiscount(product));
