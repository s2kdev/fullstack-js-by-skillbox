// ? Что нужно сделать (задача 3)
// В переменной number записано число. Необходимо с помощью console.log вывести сообщение, указывающее на чётность или нечётность числа.

function checkParity(num) {
  num = +num;
  if (num % 2 === 0) {
    return console.log(num + ' - число чётное!');
  } else {
    return console.log(num + ' - число НЕ чётное..');
  }
}

checkParity('10'); // 10 - число чётное!
checkParity(2); // 2 - число чётное!
checkParity(5); // 5 - число НЕ чётное..
checkParity(8); // 8 - число чётное!
checkParity(11); // 11 - число НЕ чётное..
