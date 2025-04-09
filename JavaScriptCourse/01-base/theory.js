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
