// const num = 42 // integer
// const float = 42.42 // float
// const pow = 10e3 // число с показателем степени
// const big = 1_000_000 // разделитель по 3 цифры
// const negative = -42 // отрицательное число

// console.dir() // вывод в консоль объекта
// console.log(Number.MAX_SAFE_INTEGER) // вывод максимального безопасного целого числа
// console.log (Number.POSITIVE_INFINITY) // вывод положительной бесконечности
// console.log (Number.isFinite)// проверка на конечное число
// NaN // не число
// pars // преобразование строки в число. парсинг это получение информации из текста
// Все операции с числами нужно проверять и использовать округление

const strInt = "42" // строка с целым числом
const strFloat = "42.42" // строка с вещественным числом

// console.log(Number.parsInt(strInt))
// console.log(+strInt, +strFloat) // преобразование строки в число

// console.log((0.1 + 0.2).toFixed(1)) // округление до 1 знака после запятой

//BigInt
//Только целые числа, больше чем 9007199254740991 могут быть представлены в виде BigInt

// console.log(BigInt(Number.MAX_SAFE_INTEGER) + 94224980n) // использование числа типа BigInt, подставив символ n в конец числа число приобретает тип BigInt

//Math
const myNum = 4.9

// console.log(Math.sqrt(25)) // извлечение квадратного корня
// console.log(Math.pow(5,3)) // возведение в степень
// console.log(Math.abs(-42)) // получение абсолютного значения, т.е. положительное значение
// // console.log(Math.max(42, 12, 23, 11, 422)) // поиск максимального значения
// console.log(Math.floor(myNum)) // округление до целого числа в меньшую сторону
// console.log(Math.ceil(myNum)) // округление до целого числа в большую сторону
// console.log(Math.round(myNum)) // округление до целого числа в большую сторону, если после запятой 0-4, то округление в меньшую сторону, если 5-9, то в большую сторону
// console.log(Math.trunc(myNum)) // округление до целого числа в меньшую сторону
// console.log(Math.random()) // получение случайного числа

function getRandomNumber(min, max) {
  return Math.random() * (max - min + 1) + min
}
