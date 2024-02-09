/* --- home task 10 --- */
/* Є масив об'єктів з товарами та їх цінами. Вивести в консоль список із даними по всіх товарах (кожен товар на окремому рядку в консолі). Від користувача отримати номер товару (реалізувати перевірку на правильність введення номера) та кількість (також реалізувати валідацію), вивести на сторінку підсумкову вартість покупки. Якщо вартість перевищує 10.000грн, розрахувати знижку в 20% і повідомити про це користувача.

* ускладнити практичне завдання запровадженням категорій товарів. Відповідно, користувач може вибрати категорію товару, номер товару та кількість. Потім результат його вибору з'явиться на сторінці */

// Курс гривні
const EXCHANGE = 37

// Вивід інформації про товари
function showCategory(data) {
  let categoryArray = []
  for (let i = 0; i < data.length; i++) {
    let product = data[i].category
    let flag = false
    for (let j = 0; j < categoryArray.length; j++) {
      if (categoryArray[j] === product) {
        flag = true
        break
      }
    }
    if (!flag) {
      categoryArray.push(product)
    }
  }
  return categoryArray
}
let category = showCategory(products)

function getNumberCategory() {
  let value

  do {
    value = prompt('Введіть назву категорії товару, який хочете придбати: \n' + category.join(' - '))
  } while (
    value !== 'Верхній одяг' &&
    value !== 'Низ' &&
    value !== 'Головний убір' &&
    value !== 'Взуття' &&
    value !== 'Аксесуари' &&
    value !== null
  )
  return value
}

let nameCategory = getNumberCategory()

function showProduct() {
  let arrName = []
  for (let i = 0; i < products.length; i++) {
    if (products[i].category === nameCategory) {
      arrName.push({ name: products[i].name, price: products[i].price })
    }
  }
  return arrName
}
console.log(showProduct())

/* 
// Вибираємо номер продукту товару
function getProductNumber() {
  let value
  do {
    value = prompt('Введіть номер товару, який хочете придбати:')
    value--
  } while (isNaN(value) || value < 0 || value > products.length - 1)
  return value
}

// Вказуємо кількіть яку хочему заказати
function getAmount() {
  let value
  do {
    value = parseInt(prompt('Кількість товарів:'))
  } while (value < 0 || isNaN(value))
  return value
}
// Сума заказаної кількості товару
function calcPrice(price, amount) {
  return price * amount
}

// Дадоємо знижку, якщо сума товару більша за 10000 грн
function calcDiscount(initPrice) {
  if (initPrice * EXCHANGE > 10000) {
    return initPrice * 0.8
  }
  return null
}

// Фінальна сума
function showPrice(price, priceWithDiscount) {
  console.log(`Ціна без знижки:${price}`)
  if (priceWithDiscount) {
    console.log('Вітаємо ви отримали знижку 20%')
    console.log(`Сума до сплати: ${priceWithDiscount}`)
  }
}
// функцональний підхід
function shop() {
  showProduct()
  const productNumber = getProductNumber()
  // Назначаемо нову змінну з вибраним номером товару
  let selectProduct = products[productNumber]
  let amount = getAmount()
  let initPrice = calcPrice(selectProduct.price, amount)
  let priceWithDiscount = calcDiscount(initPrice)
  showPrice(initPrice, priceWithDiscount)
}
shop() */
/* --- home task 11 --- */
/* Реалізувати рекурсивну функцію, яка зводить число в ступінь.

Число, яке потрібно звести в ступінь, передається як перший аргумент у функцію

Ступінь передається як другий аргумент у функцію

pow(num, degree) */
