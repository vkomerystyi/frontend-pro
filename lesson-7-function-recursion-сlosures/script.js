/* --- home task 10 --- */
/* Є масив об'єктів з товарами та їх цінами. Вивести в консоль список із даними по всіх товарах (кожен товар на окремому рядку в консолі). Від користувача отримати номер товару (реалізувати перевірку на правильність введення номера) та кількість (також реалізувати валідацію), вивести на сторінку підсумкову вартість покупки. Якщо вартість перевищує 10.000грн, розрахувати знижку в 20% і повідомити про це користувача.

* ускладнити практичне завдання запровадженням категорій товарів. Відповідно, користувач може вибрати категорію товару, номер товару та кількість. Потім результат його вибору з'явиться на сторінці */

// Курс гривні
const EXCHANGE = 37
// Отримуємо всі категорії товарів
function getCategory() {
  let category = []
  for (let i = 0; i < products.length; i++) {
    if (!category.includes(products[i].category)) {
      category.push(products[i].category)
    }
  }
  return category
}

// Вивід інформації про категорії
function showCategory(category) {
  let categoryString = ''
  for (let i = 0; i < category.length; i++) {
    categoryString += `${i}  Категорія: ${category[i]}\n`
  }
  let numberCategory = prompt(`Виберіть номер категорії\n ${categoryString}`)
  return numberCategory
}

// Отримуємо назву товару по категорії
function getProduct(category, numberShowCategory) {
  let product = []
  for (let j = 0; j < products.length; j++) {
    if (category[numberShowCategory] === products[j].category) {
      product.push({ name: products[j].name, price: products[j].price })
    }
  }
  return product
}

// Вивід інформації про товари в категорії
function showProduct(product) {
  let productString = ''
  for (let i = 0; i < product.length; i++) {
    productString += `${i} ${product[i].name} : ${product[i].price}\n`
  }
  let numberProduct = prompt(`Виберіть номер продукту\n ${productString}`)
  return numberProduct
}

// Вказуємо кількіть яку хочему заказати
function getAmount() {
  let value
  do {
    value = parseInt(prompt('Кількість товарів:'))
  } while (value < 0 || isNaN(value))
  return value
}

function getPrice(index) {
  return products[index].price
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
function shop() {
  let category = getCategory()
  let numberShowCategory = showCategory(category)
  let product = getProduct(category, numberShowCategory)

  let numberShowProduct = showProduct(product)
  let amount = getAmount()
  let price = getPrice(numberShowProduct)

  let initPrice = calcPrice(price, amount)
  let priceWithDiscount = calcDiscount(initPrice)
  showPrice(initPrice, priceWithDiscount)
}
shop()

/* --- home task 11 --- */
/* Реалізувати рекурсивну функцію, яка зводить число в ступінь.

Число, яке потрібно звести в ступінь, передається як перший аргумент у функцію

Ступінь передається як другий аргумент у функцію

pow(num, degree) */

function pow(num, degree) {
  if (degree === 0) {
    return 1
  }
  return num * pow(num, degree - 1)
}
pow(2, 3)
