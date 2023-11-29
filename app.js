let month = prompt('Введите номер месяца (1-12):');
let season;

switch (parseInt(month)) {
    case 12:
    case 1:
    case 2:
        season = 'Зима';
        break;
    case 3:
    case 4:
    case 5:
        season = 'Весна';
        break;
    case 6:
    case 7:
    case 8:
        season = 'Лето';
        break;
    case 9:
    case 10:
    case 11:
        season = 'Осень';
        break;
    default:
        season = 'Вы ввели неверный номер месяца.';
}

alert(`Сезон: ${season}`);



const arr = [[[[[[[[[[[2]]]]]]]]]]]
console.log(arr[0][0][0][0][0][0][0][0][0][0][0])



const valueOne = parseFloat(prompt('Введите первое число:'));
const valueTwo = parseFloat(prompt('Введите второе число:'));
const operation = prompt('Введите действие (+, -, /, *):');

let result;

if (operation === '+') {
    result = valueOne + valueTwo;
} else if (operation === '-') {
    result = valueOne - valueTwo;
} else if (operation === '/') {
    result = valueOne / valueTwo;
} else if (operation === '*') {
    result = valueOne * valueTwo;
} else {
    console.log('Неверная операция');
}

if (result !== undefined) {
    console.log(`Результат: ${result}`);
}



//switch case
const valueOne1 = parseFloat(prompt('Введите первое число:'));
const valueTwo1 = parseFloat(prompt('Введите второе число:'));
const operation1 = prompt('Введите действие (+, -, /, *):');

let resultOne;

switch (operation) {
    case '+':
        resultOne = valueOne1 + valueTwo1;
        break;
    case '-':
        resultOne = valueOne1 - valueTwo1;
        break;
    case '/':
        resultOne = valueOne1 / valueTwo1;
        break;
    case '*':
        resultOne = valueOne1 * valueTwo1;
        break;
    default:
        console.log('Неверная операция');
}

if (resultOne !== undefined) {
    console.log(`Результат: ${resultOne}`);
}