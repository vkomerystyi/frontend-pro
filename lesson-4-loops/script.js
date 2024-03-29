/* --- home task 5 --- */
// Вивести на сторінку в один рядок через кому числа від 10 до 20

for (let i = 10; i <= 20; i++) {
  console.log(i + ', ')
}
// Вивести квадрати чисел від 10 до 20

for (let i = 10; i <= 20; i++) {
  console.log(i * i)
}

// Вивести таблицю множення на 7

for (let i = 1; i < 10; i++) {
  console.log(` 7 * ${i} = ${7 * i}`)
}
// Знайти суму всіх цілих чисел від 1 до 15
let sum = 0
for (let i = 1; i <= 15; i++) {
  sum += i
}
console.log(sum)

// Знайти добуток усіх цілих чисел від 15 до 35

let product = 1
for (let i = 15; i <= 35; i++) {
  product *= i
}
console.log(product)

// Знайти середнє арифметичне всіх цілих чисел від 1 до 500

let count = 0
let sum500 = 0
let avg = 0
for (let i = 1; i <= 500; i++) {
  count++
  sum500 += i
  avg = sum500 / count
}
console.log(avg)

// Вивести суму лише парних чисел у діапазоні від 30 до 80

let sumEven = 0
for (let i = 30; i <= 80; i++) {
  if (i % 2 === 0) {
    sumEven += i
  }
}
console.log(sumEven)

// Вивести всі числа в діапазоні від 100 до 200, які кратні 3

for (let i = 100; i <= 300; i++) {
  if (i % 3 === 0) {
    console.log(i)
  }
}

// Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// Визначити кількість його парних дільників
// Знайти суму його парних дільників

let naturalNum = 56
let evenCountNaturalNum = 0
let sumNaturalNum = 0
for (let i = 0; i <= naturalNum; i++) {
  if (naturalNum % i === 0) {
    console.log(i)
    if (i % 2 === 0) {
      evenCountNaturalNum++
      sumNaturalNum += i
    }
  }
}
console.log(evenCountNaturalNum)
console.log(sumNaturalNum)

// Надрукувати повну таблицю множення від 1 до 10

for (let i = 1; i < 10; i++) {
  for (let j = 1; j < 10; j++) {
    console.log(`${i} * ${j} = ${i * j}`)
  }
}

/* --- home task 6 --- */
// Вивести числа від 20 до 30 через пропуск використовуючи крок 0,5 (20 20,5 21 21,5….)
for (let i = 20; i < 30; i++) {
  console.log(i)
  i -= 0.5
}
// Один долар коштує 40 гривень. Вивести дані з розрахунком вартості 10, 20, 30... 100 доларів
let dollarRate = 40
let grn = 0
for (let i = 10; i < 100; i += 10) {
  grn = i * dollarRate
  console.log(grn)
}

// Дано ціле число. Вивести всі цілі числа від 1 до 100, квадрат яких не перевищує числа N
let numberTask4 = 500
for (let i = 1; i < 100; i++) {
  let sq = i * i
  if (sq <= numberTask4) {
    console.log(sq)
  } else {
    break
  }
}
// Дано ціле число. З'ясувати, чи воно простим (простим називається число, більше ніж 1, які мають інших дільників крім 1 і себе).

let prime = 11

// Якщо число дорівнює 1 або менше, то воно не є простим.
if (prime < 2) {
  console.log(false)
}
// Для всіх чисел від 2 до квадратного кореня з числа n перевіряється, чи ділиться число на ці числа
for (let i = 2; i * i <= prime; i++) {
  // Якщо так, то число не є простим.
  if (prime % i === 0) {
    console.log(false)
    break
  }
  // Якщо ж число не ділиться ні на яке з цих чисел, то воно є простим.
  console.log(true)
}
