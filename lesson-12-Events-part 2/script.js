/* --- home task 16 --- */
/* Реалізувати подобу інтернет-магазину

Дано 3 блоки

У лівій частині сторінки – перелік категорій.
При натисканні на категорію виводиться у середній блок список товарів цієї категорії.
Клік на товар – інформацію про товар у правому блоці.
В інформації товару - кнопка "купити"
При натисканні на “купити” з'являється повідомлення, що товар куплено та повернення у вихідний стан програми (коли відображається лише список категорій) */
function showCategory() {
  const categories = document.querySelector('.category')

  for (let i = 0; i < data.length; i++) {
    const elem = document.createElement('div')
    elem.textContent = data[i].name
    elem.setAttribute('data-category', i)
    elem.addEventListener('click', showProducts)
    categories.appendChild(elem)
  }
}

function showProducts(event) {
  const categoryIndex = event.target.getAttribute('data-category')
  const products = data[categoryIndex].product
  const product = document.querySelector('.product')
  product.innerHTML = ''

  for (let i = 0; i < products.length; i++) {
    const elem = document.createElement('div')
    elem.textContent = products[i].name
    elem.setAttribute('data-category', categoryIndex)
    elem.setAttribute('data-product', i)
    elem.addEventListener('click', showDetails)
    product.appendChild(elem)
  }
}
function showDetails(event) {
  const categoryIndex = event.target.getAttribute('data-category')
  const productIndex = event.target.getAttribute('data-product')
  const description = data[categoryIndex].product[productIndex].description
  console.log(description)
}
showCategory()
