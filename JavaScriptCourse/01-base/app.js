// let - переменная, которую можно менять
// const - постоянная переменная, которую нельзя менять
// var - старый способ создания переменной, лучше не использовать
let num = 32 //число
let firstName = "Alexandr" //строка
const isProgrammer = true // булевое значение

// firstName = "Max"
// isProgrammer = false // будет ошибка because of const

// let num2 = num + 10
// console.log(num, num2)
// num = num2 - num
// console.log(num, num2)

// let num3 = (num + 10 * 2) / (5 - 1)
// console.log(num3)

const resultElement = document.getElementById("result") //находим элемент по id
const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const submitBtn = document.getElementById("submit")
const plusBtn = document.getElementById("plus")
const minusBtn = document.getElementById("minus")
let action = "+"

// console.log(typeof sum)
plusBtn.onclick = function () {
  action = "+"
}
minusBtn.onclick = function () {
  action = "-"
}

function printResult(result) {
  if (result < 0) {
    resultElement.style.color = "red"
  } else {
    resultElement.style.color = "green"
  }
  resultElement.textContent = result
}

function computeNumbersWithAction(input1, input2, actionSymbol) {
  const num1 = Number(input1.value)
  const num2 = Number(input2.value)
  //   if (actionSymbol == "+") {
  //     return num1 + num2
  //   }
  //   if (actionSymbol == "-") {
  //     return num1 - num2
  //   }
  return actionSymbol == "+" ? num1 + num2 : num1 - num2 //тернарное условие
}

submitBtn.onclick = function () {
  const result = computeNumbersWithAction(input1, input2, action)
  printResult(result)
}
