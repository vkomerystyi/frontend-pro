/* Створити сутність автомобіля:
Характеристики автомобіля окремими властивостями
Методи:
Виведення на екран даних про цей автомобіль */
const Car = function (mark, model) {
  this.mark = mark
  this.model = model
  this.showCar = function () {
    console.log(`Mark ${this.mark} model ${this.model}`)
  }
}
