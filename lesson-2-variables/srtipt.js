// 1) За допомогою prompt запитати як звуть користувача.
// За допомогою alert вивести "Hello, John! How are you?", де John це те, що ввів користувач

const userQuestion = prompt("Ваше iм'я: ")
alert(`Hello, ${userQuestion}! How are you?`)

// 2) Створити скрипт для складання, віднімання, множення та поділу двох чисел та виведення результатів

const numberUser1 = parseInt(prompt('num 1 '))
const numberUser2 = parseInt(prompt('num 2 '))
let sum = numberUser1 + numberUser2
let subtraction = numberUser1 - numberUser2
let multiplication = numberUser1 * numberUser2
let division = numberUser1 / numberUser2
alert(`
      Скдадання : ${sum};
      Віднімання : ${subtraction};
      Множення : ${multiplication.toFixed(2)};
      Ділення : ${division.toFixed(2)};
      `)

// 3) Створити скрипт, який отримує два значення і виводить true, якщо значення рівні, false - якщо ні

const numUser1 = parseInt(prompt('num 1 '))
const numUser2 = parseInt(prompt('num 2 '))
alert(numUser1 === numUser2)

// 4) Визначити середнє арифметичне трьох чисел

const number1 = parseInt(prompt('num 1 '))
const number2 = parseInt(prompt('num 2 '))
const number3 = parseInt(prompt('num 3 '))
let average = (number1 + number2 + number3) / 3
alert(`Середнє арифметичне трьох чисел : ${average.toFixed(2)}`)

// 5) Розкласти по цифрах п'ятизначне число і вивести у вихідному порядку через пробіл (використовувати оператор “розподіл по модулю” (%)
let num = 12345
let num5 = num % 10
let num4 = Math.floor((num / 10) % 10)
let num3 = Math.floor((num / 100) % 10)
let num2 = Math.floor((num / 1000) % 10)
let num1 = Math.floor((num / 10000) % 10)

console.log(`${num1} - ${num2} - ${num3} - ${num4} - ${num5}`)

/* 
      Напишіть скрипт, який рахує кількість секунд за годину.
      Запросити у користувача кількість годин
      Порахувати скільки секунд у цій кількості годин
      Записати обчислене значення у змінну
      Вивести цю змінну користувачу в alert */

const userHour = parseInt(prompt('Hour:'))
let sec = userHour * 60 * 60
alert(`секунд ${sec} в ${userHour} годині/ax`)
