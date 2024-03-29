/* --- home task 8 --- */
/* Дано масив об’єктів. Вивести масив телефонних номерів користувачів в яких баланс більше ніж 2000 доларів. І знайти суму всіх балансів користувачів */

let users = [
  {
    index: 0,
    isActive: true,
    balance: '$2,226.60',
    name: 'Eugenia Sawyer',
    gender: 'female',
    phone: '+1 (840) 583-3207',
    address: '949 John Street, Rose, Puerto Rico, 1857',
  },
  {
    index: 1,
    isActive: true,
    balance: '$2,613.77',
    name: 'Pauline Gallegos',
    gender: 'female',
    phone: '+1 (985) 593-3328',
    address: '328 Greenpoint Avenue, Torboy, North Dakota, 6857',
  },
  {
    index: 2,
    isActive: false,
    balance: '$3,976.41',
    name: 'Middleton Chaney',
    gender: 'male',
    phone: '+1 (995) 591-2478',
    address: '807 Fleet Walk, Brutus, Arkansas, 9783',
  },
  {
    index: 3,
    isActive: true,
    balance: '$1,934.58',
    name: 'Burns Poole',
    gender: 'male',
    phone: '+1 (885) 559-3422',
    address: '730 Seba Avenue, Osage, Alabama, 6290',
  },
  {
    index: 4,
    isActive: true,
    balance: '$3,261.65',
    name: 'Mcfadden Horne',
    gender: 'male',
    phone: '+1 (942) 565-3988',
    address: '120 Scholes Street, Kirk, Michigan, 1018',
  },
  {
    index: 5,
    isActive: false,
    balance: '$1,790.56',
    name: 'Suzette Lewis',
    gender: 'female',
    phone: '+1 (837) 586-3283',
    address: '314 Dunne Place, Bawcomville, Guam, 9053',
  },
]
function userPhoneSearch(arr) {
  const phoneSearch = []
  let sum = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].balance > '$2,000.00') {
      sum += parseFloat(arr[i].balance.replace('$', '').replace(',', ''))
      phoneSearch.push({ phone: arr[i].phone, balance: sum.toFixed(2) })
    }
  }
  return phoneSearch
}
const resultUser = userPhoneSearch(users)
console.log(resultUser)

/* --- home task 9 --- */
/* Реалізуйте функцію generateKey(length, characters), що повертає рядок випадкових символів із набору characters довжиною length.

Наприклад: */
/* 
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
const key = generateKey(16, characters)
console.log(key) // eg599gb60q926j8i
 */
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789'
function randomIndex(char) {
  let index = Math.floor(Math.random() * (char.length - 1 - 0 + 1) + 0)
  return char[index]
}
function generateKey(count, char) {
  let key = ''
  for (let i = 0; i < count; i++) {
    key += randomIndex(char)
  }
  return key
}
console.log(generateKey(16, characters))
