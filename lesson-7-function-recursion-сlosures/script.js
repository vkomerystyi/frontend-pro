/* --- home task 10 --- */
/* Є масив об'єктів з товарами та їх цінами. Вивести в консоль список із даними по всіх товарах (кожен товар на окремому рядку в консолі). Від користувача отримати номер товару (реалізувати перевірку на правильність введення номера) та кількість (також реалізувати валідацію), вивести на сторінку підсумкову вартість покупки. Якщо вартість перевищує 10.000грн, розрахувати знижку в 20% і повідомити про це користувача.

* ускладнити практичне завдання запровадженням категорій товарів. Відповідно, користувач може вибрати категорію товару, номер товару та кількість. Потім результат його вибору з'явиться на сторінці */
const products = [
  { name: 'Футболка', category: 'Верхній одяг', price: 25.99 },
  { name: 'Джинси', category: 'Низ', price: 49.99 },
  { name: 'Світшот', category: 'Верхній одяг', price: 35.99 },
  { name: 'Шапка', category: 'Головний убір', price: 15.99 },
  { name: 'Шорти', category: 'Низ', price: 29.99 },
  { name: 'Куртка', category: 'Верхній одяг', price: 79.99 },
  { name: 'Плаття', category: 'Верхній одяг', price: 59.99 },
  { name: 'Капці', category: 'Взуття', price: 19.99 },
  { name: 'Спідниця', category: 'Верхній одяг', price: 39.99 },
  { name: 'Світер', category: 'Верхній одяг', price: 45.99 },
  { name: 'Костюм', category: 'Верхній одяг', price: 99.99 },
  { name: 'Кросівки', category: 'Взуття', price: 69.99 },
  { name: 'Рукавички', category: 'Аксесуари', price: 12.99 },
  { name: 'Пальто', category: 'Верхній одяг', price: 89.99 },
  { name: 'Топ', category: 'Верхній одяг', price: 19.99 },
  { name: 'Брюки', category: 'Низ', price: 55.99 },
  { name: 'Краватка', category: 'Аксесуари', price: 9.99 },
  { name: 'Блузка', category: 'Верхній одяг', price: 29.99 },
  { name: 'Капелюх', category: 'Головний убір', price: 18.99 },
  { name: 'Спортивний костюм', category: 'Верхній одяг', price: 74.99 },
  { name: 'Шнурівки', category: 'Аксесуари', price: 6.99 },
  { name: 'Кофта', category: 'Верхній одяг', price: 34.99 },
  { name: 'Ботильйони', category: 'Взуття', price: 59.99 },
  { name: 'Шарф', category: 'Аксесуари', price: 14.99 },
  { name: 'Шорти для бігу', category: 'Низ', price: 22.99 },
  { name: 'Футболка з довгим рукавом', category: 'Верхній одяг', price: 27.99 },
  { name: 'Джемпер', category: 'Верхній одяг', price: 38.99 },
  { name: 'Леггінси', category: 'Низ', price: 21.99 },
  { name: 'Пляжна сукня', category: 'Верхній одяг', price: 31.99 },
  { name: 'Кофеінка', category: 'Аксесуари', price: 8.99 },
]
// Курс гривні
const EXCHANGE = 37

// Вивід інформації про товари
for (const product of products) {
  console.log(`Назва: ${product.name},\nКатегорія: ${product.category},\nЦіна: ${product.price} $`)
}

// Вибираемо номер продукту товару
let productNumber
do {
  productNumber = prompt('Введіть номер продукта, який хочете придбати:')
  productNumber--
} while (isNaN(productNumber) || productNumber < 0 || productNumber > products.length - 1)

// Назначаемо нову змінну з вибраним номером товару
let selectProduct = products[productNumber]

// Вказуємо кількіть яку хочему заказати
let amount
do {
  amount = parseInt(prompt('Кількість товарів:'))
} while (amount < 0 || isNaN(amount))

// Сума заказаної кількості товару
const sumPrice = selectProduct.price * amount

// Дадоємо знижку, якщо сума товару більша за 10000 грн
if (sumPrice * EXCHANGE > 10000) {
  console.log(`Ціна без знижки:${sumPrice}`)
  console.log('Вітаємо ви отримали знижку 20%')
  const finalPrice = sumPrice * 0.8
  console.log(`Сума до спати:${finalPrice}`)
} else {
  console.log(`Сума до сплати: ${sumPrice}`)
}

/* --- home task 11 --- */
/* Реалізувати рекурсивну функцію, яка зводить число в ступінь.

Число, яке потрібно звести в ступінь, передається як перший аргумент у функцію

Ступінь передається як другий аргумент у функцію

pow(num, degree) */
