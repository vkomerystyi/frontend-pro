/* --- home task 3 --- */
// Дано два різні числа. Визначити, яке з них більше, а яке менше.

const num1 = parseInt(prompt('Num 1:'))
const num2 = parseInt(prompt('Num 2:'))

if (num1 > num2) {
  alert(`Num 1: ${num1} - Більше, за Num 2: ${num2} `)
} else {
  alert(`Num 1: ${num1} - Менше, за Num 2: ${num2} `)
}

// Відомі дві відстані. Одне у кілометрах, інше – у футах (1 фут = 0,305м). Яка відстань менша?

const distanceKm = parseInt(prompt('Відстань в км:'))
const distanceFut = parseInt(prompt('Відстань в футах:'))

let meterOfKm = distanceKm * 1000
let meterOfFot = distanceFut * 0.305
if (meterOfFot > meterOfKm) {
  alert(
    `Відстань в футах: ${distanceFut} - Більше, за Відстань в км: ${distanceKm} на ${meterOfFot - meterOfKm} метрів`
  )
} else {
  alert(`Відстань в футах: ${distanceFut} - Менша, за Відстань в км: ${distanceKm} на ${meterOfKm - meterOfFot} метрів`)
}

// Визначити, чи є число a дільником числа b? І навпаки. (Дати дві відповіді)

let numberA = 6
let numberB = 3

if (numberB % numberA === 0) {
  alert(`Число А: ${numberA} є дільником числа Б: ${numberB}`)
}
if (numberA % numberB === 0) {
  alert(`Число Б: ${numberB} є дільником числа А: ${numberA}`)
}

// Дано число. Визначити, чи закінчується воно парною цифрою чи непарною? Вивести останню цифру.

const userNumber = parseInt(prompt('Num: '))
let lastNumber = userNumber % 10
if (lastNumber % 2 === 0) {
  alert(`Число ${userNumber} закінчується парною цифрою ${lastNumber}`)
} else {
  alert(`Число ${userNumber} закінчується непарною цифрою ${lastNumber}`)
}

// Дано двозначне число. Визначити, яка з його цифр більша: перша чи друга?

let numberC = 32
if (numberC[0] > numberC[1]) {
  alert(`Перша цифра  двузначного числа ${numberC} більша`)
} else {
  alert(`Друга цифра двузначного числа ${numberC} більша`)
}

// Дано тризначне число.
// Визначити чи є парною сума його цифр.
// Визначити, чи кратна сума цифр п'яти.
// Визначити чи є добуток його цифр більше 100.

let numberD = 235
let numberD3 = numberD % 10
let numberD2 = Math.floor(numberD / 10) % 10
let numberD1 = Math.floor(numberD / 100) % 10
let even = numberD1 + numberD2 + numberD3
let product = numberD1 * numberD2 * numberD3
if (even % 2 === 0) {
  alert(`${even} сума цифр ${numberD} є парною`)
}
if (even % 5 === 0) {
  alert(`${even} сума цифр ${numberD} є кратна 5`)
}
if (product > 100) {
  alert(`${product} добуток цифр ${numberD} є більше 100`)
}

// Дано тризначне число.
// Чи правда, що всі цифри однакові?
// Чи є серед цифр цифри однакові?

let numberE = 333
let numberE3 = numberE % 10
let numberE2 = Math.floor(numberE / 10) % 10
let numberE1 = Math.floor(numberE / 100) % 10
if (numberE1 === numberE2 && numberE1 === numberE3) {
  alert('всі цифри однакові')
}
if (numberE1 === numberE2 || numberE1 === numberE3) {
  alert('серед цифр цифри однакові')
}

// Визначити, чи є задане шестизначне число дзеркальним? (123321, 147741)

let numberF = 147741
let numberF6 = numberF % 10
let numberF5 = Math.floor(numberF / 10) % 10
let numberF4 = Math.floor(numberF / 100) % 10
let numberF3 = Math.floor(numberF / 1000) % 10
let numberF2 = Math.floor(numberF / 10000) % 10
let numberF1 = Math.floor(numberF / 100000) % 10
if (numberF1 === numberF6 && numberF2 === numberF5 && numberF3 === numberF4) {
  alert('число є дзеркальним')
}

/* --- home task 4 --- */
/* Запросити у користувача рік народження.

Запитати в нього, в якому місті він живе.

Запитати його улюблений вид спорту.

При натисканні на ОК показуємо вікно, де має бути відображена наступна інформація:

Його вік.
Якщо користувач запровадить Київ, Вашингтон чи Лондон, то показати йому повідомлення - "Ти живеш у столиці..." і на місце точок підставляємо країну, столицю якої він запровадив. Інакше показуємо йому “ти живеш у місті…” і місце точок – введене місто.
Вибираємо самі три види спорту та три чемпіони у цих видах. Відповідно, якщо користувач запровадить один із цих видів спорту, то показуємо йому повідомлення “Круто! Хочеш стати…” і підставляємо на місце точок ім'я та прізвище чемпіона.
 

Все це має бути відображено в одному вікні (алерті).

Якщо в якомусь випадку він не захоче вводити інформацію і натисне Скасувати, показати йому повідомлення - "Шкода, що Ви не захотіли ввести свій(ю) ..." і вказуємо, що він не захотів вводити - дату народження, місто або вид спорту. */
const userYear = parseInt(prompt('Рік народження:'))
const userCity = prompt('Місто:')
const userSport = prompt('Улюблений вид спорту:')
let userChampion
userSport === 'Футбол' ? (userChampion = 'Шевченко') : (userChampion = userSport)
userSport === 'Теніс' ? (userChampion = 'Новак') : (userChampion = userSport)
userSport === 'Шахи' ? (userChampion = 'Крамник') : (userChampion = userSport)

if (!userYear) {
  alert(`Шкода, що Ви не захотіли ввести свій(ю) - Рік народження!`)
} else if (!userCity) {
  alert(`Шкода, що Ви не захотіли ввести свій(ю) - Місто!`)
} else if (!userSport) {
  alert(`Шкода, що Ви не захотіли ввести свій(ю) - Улюблений вид спорту:!`)
} else {
  if (userCity === 'Київ' || userCity === 'Вашингтон' || userCity === 'Лондон') {
    alert(`Вік: ${userYear}
    Ти живеш у столиці ${userCity}
    Круто! Хочеш стати ${userChampion}
    `)
  } else {
    alert(`Вік: ${userYear}
    Ти живеш у місті ${userCity}
    Круто! Хочеш стати ${userChampion}
    `)
  }
}
