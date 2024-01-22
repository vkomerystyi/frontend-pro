/* --- home task 7 --- */
// Створити масив, довжину та елементи якого задає користувач. Потім відсортувати масив за зростанням. Потім видалити елементи з масиву з 2 по 4 (включно). У міру змін виводити вміст масиву на сторінку.
const userLengthCount = parseInt(prompt('Length array: '))
const arr = []
for (let i = 0; i < userLengthCount; i++) {
  const userItemArray = parseInt(prompt('Item array: '))
  arr.push(userItemArray)
}
console.log('масив')
console.log(arr)
// просте сортування масиву
arr.sort(function (a, b) {
  return a - b
})
console.log('Відсортований масив')
console.log(arr)
console.log('Видалені елементи з масиву з 2 по 4 (включно)')
console.log(arr.splice(2, 3))
console.log('Масив після змін')
console.log(arr)
// Дано масив [16,-37,54,-4,72,-56,47,4,-16,25,-37,46,4,-51,27,-63,4,-54,76,-4,12,-35,4,47]
const userArr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]
// Знайти суму та кількість позитивних елементів
let sumCount = 0
let countPositive = 0
for (let i = 0; i < userArr.length; i++) {
  if (userArr[i] > 0) {
    sumCount += userArr[i]
    countPositive++
  }
}
console.log('Знайти суму та кількість позитивних елементів.')
console.log(sumCount)
console.log(countPositive)
// Знайти мінімальний елемент масиву та його порядковий номер.
let minNum = Infinity
let indexMIn = 0
for (let i = 0; i < userArr.length; i++) {
  if (minNum > userArr[i]) {
    minNum = userArr[i]
    indexMIn = i
  }
}
console.log('Знайти мінімальний елемент масиву та його порядковий номер.')
console.log(Math.min(...userArr))
console.log(minNum)
console.log(indexMIn)
// Знайти максимальний елемент масиву та його порядковий номер.
let maxNum = -Infinity
let indexMax = 0
for (let i = 0; i < userArr.length; i++) {
  if (maxNum < userArr[i]) {
    maxNum = userArr[i]
    indexMax = i
  }
}
console.log('Знайти максимальний елемент масиву та його порядковий номер.')
console.log(Math.max(...userArr))
console.log(maxNum)
console.log(indexMax)
// Визначити кількість негативних елементів.
let countNegative = 0
for (let i = 0; i < userArr.length; i++) {
  if (userArr[i] < 0) {
    countNegative++
  }
}
console.log('Визначити кількість негативних елементів.')
console.log(countNegative)
// Знайти кількість непарних позитивних елементів.
let countOddPOsitive = 0
for (let i = 0; i < userArr.length; i++) {
  if (userArr[i] > 0 && userArr[i] % 2 === 0) {
    countOddPOsitive++
  }
}
console.log('Знайти кількість непарних позитивних елементів.')
console.log(countOddPOsitive)
// Визначити кількість парних позитивних елементів.
let countEvenPositive = 0
for (let i = 0; i < userArr.length; i++) {
  if (userArr[i] > 0 && userArr[i] % 2 !== 0) {
    countEvenPositive++
  }
}
console.log('Визначити кількість парних позитивних елементів.')
console.log(countEvenPositive)
// Знайти суму парних позитивних елементів.
let sumEvenPositive = 0
for (const item of userArr) {
  if (item % 2 === 0 && item > 0) {
    sumEvenPositive += item
  }
}
console.log('Знайти суму парних позитивних елементів.')
console.log(sumEvenPositive)
// Знайти суму непарних позитивних елементів.
let sumOddPositive = 0
for (const item of userArr) {
  if (item > 0 && item % 2 !== 0) {
    sumOddPositive += item
  }
}
console.log('Знайти суму непарних позитивних елементів.')
console.log(sumOddPositive)
// Знайти добуток позитивних елементів.
let productPositive = 1
for (const item of userArr) {
  if (item > 0) {
    productPositive *= item
  }
}
console.log('Знайти добуток позитивних елементів.')
console.log(productPositive)
// Знайти найбільший серед елементів масиву, решту занулити.
let maxElementArray = -Infinity
for (let i = 0; i < userArr.length; i++) {
  if (maxElementArray < userArr[i]) {
    maxElementArray = userArr[i]
  }
}
for (let j = 0; j < userArr.length; j++) {
  if (maxElementArray !== userArr[j]) {
    userArr[j] = 0
  }
}
console.log('Знайти найбільший серед елементів масиву, решту занулити.')
console.log(maxElementArray)
console.log(userArr)
