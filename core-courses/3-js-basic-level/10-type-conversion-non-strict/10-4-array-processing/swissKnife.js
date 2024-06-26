// ** "Швейцарский нож", универсальный метод splice()
const numArr = [0, 1, 2, 3, 4, 5];

const someIndexOff = numArr.splice(3, 2); // удаление с 3-го индекса (включительно) двух индексов
console.log(someIndexOff); // [3, 4], возврат удалённых индексов/значений
console.log(numArr); // [0, 1, 2, 5], изменение искомого массива

numArr.splice(2); // удаление со 2-го индекса (включительно) всех последующих, т.е. [2, 5]
console.log(numArr); // [0, 1], в остатке

numArr.splice(2, 0, 2, 3, 4, 5); // добавление со 2-го индекса (без удаления), значений 2, 3, 4, 5
console.log(numArr); // [0, 1, 2, 3, 4, 5], как результат
