// ? Что нужно сделать (задача 4)
// Даны два массива: arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53] и arr2 = [12, 44, 23, 5]
// Напишите программу, которая будет объединять два массива: arr1 и arr2. Результат объединения нужно вывести в консоль с помощью команды console.log в таком виде: [2, 2, 17, 21, 45, 12, 54, 31, 53, 12, 44, 23, 5]
// Важно: для выполнения этого задания можно использовать только один цикл. Программа должна корректно работать с массивами любой длины. Нельзя переприсвоить массивы целиком друг в друга

let arr1 = [2, 2, 17, 21, 45, 12, 54, 31, 53];
let arr2 = [12, 44, 23, 5];

// первый вариант
function getConcatArr(arr1, arr2) {
  let newArr = [];

  while (true) {
    // newArr = arr1.concat(arr2);
    newArr = [...arr1, ...arr2];
    break;
  }

  return newArr;
}

// *второй вариант
function getConcatArr2(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }

  return arr1;
}

let concatArr = getConcatArr(arr1, arr2);
console.log(concatArr); // [2, 2, 17, 21, 45, 12, 54, 31, 53, 12, 44, 23, 5]

let concatArr2 = getConcatArr2(arr1, arr2);
console.log(concatArr2); // [2, 2, 17, 21, 45, 12, 54, 31, 53, 12, 44, 23, 5]
