// =========== Operators =============
let a = 10
let b = 5
let c = 32

// c += a // c = c + a
// c -= a // c = c - a
// c *= a // c = c * a
// c /= a // c = c / a

// c = c ** 2 // 32^2

// =========== Datatypes =============
// const age = 29 // Число
// const name = "John" // Строка
// const isMarried = false // Булево значение
// let x // undefined (Неопределенное значение)
// null // Нулевое значение, если typeof то вернет object
// 1 / x // NaN (Not a Number), но typeof вернет number

// =============== Priorities ===============
const fullAge = 20
const birthYear = 2004
const currentYear = 2025
const isFullAge = currentYear - birthYear >= fullAge

// console.log(isFullAge)
// === - равно по значению и по типу

const num1 = 42
const num2 = "42"

console.log(num1 === num2)

// ============== Object Theory ===============

// Объекты создаются с помощью фигурных скобок {} в const

// В объекте можно создавать свойства, которые будут храниться в виде пар ключ-значение, где ключ это название свойства, а значение это то, что будет храниться в этом свойстве
// Внутри объекта можно создавать другие объекты, массивы, функции и т.д.
// Например:
// const person = {
//    name: "John",
//    age: 29,
//    isProgrammer: true,
//    languages: ["ru", "en"],
// }
// Чтобы обратиться к свойству объекта, нужно использовать точку или квадратные скобки
// Можно создавать функции и методы внутри объекта, которые будут выполняться, когда мы будем вызывать их
//
// const key = "isProgrammer" // переменная для хранения ключа объекта
// console.log(person [key]) // выводим значение свойства объекта
