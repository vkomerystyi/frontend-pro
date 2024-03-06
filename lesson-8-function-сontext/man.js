/* Створити сутність людини
ім'я
вік
Метод виведення даних */
const Man = function (name, age) {
  this.name = name
  this.age = age
  this.showMan = function () {
    console.log(`Name ${this.name} age ${this.age}`)
  }
}
