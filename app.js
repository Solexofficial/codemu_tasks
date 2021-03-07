// ===== Section Tasks 1 =====
// task 1.1 Найти площадь и периметр квадрата
const squareSP = width => {
    const squareArea = width ** 2;
    const squarePerimetr = 4 * width;
    console.log('Площадь квадрата =', squareArea, 'Периметр квадрата =', squarePerimetr);
}
squareSP(5);

// task 1.2 Найти площадь и периметр прямоугольника
const rectangleSP = (width, height) => {
    const rectangleArea = width * height;
    const rectanglePerimetr = 2 * (width + height);
    console.log('Площадь прямоугольника =', rectangleArea, 'Периметр прямоугольника =', rectanglePerimetr);
}
rectangleSP(5,4);

// task 1.3 Найти площадь круга и длину окружности
const circleSL = radius => {
    const squareCircle = Math.PI * (radius ** 2);
    const lengthOfCircle = 2 * Math.PI * radius;
    console.log('Площадь круга =', squareCircle, 'Длина окружности =', lengthOfCircle);
}
circleSL(3);

//task 1.4 Найти площадь треугольника по трем сторонам
const triangleArea = (a, b, c) => {
    const p = (a + b + c) / 2;
    const Area = Math.sqrt(p * (p - a)*(p - b)*(p - c));
    console.log('Площадь треугольника =', Area);
}
triangleArea(2,2,2);

// ===== Section Tasks 2 =====
const strToNum = str => {
    return parseInt(str, 10);
}

//task 2.1 Найти корни квадратного уравнения
const a = document.getElementById('eq-a');
const b = document.getElementById('eq-b');
const c = document.getElementById('eq-c');
const btn = document.getElementById('eq-btn');
const currentEquation = document.getElementById('currentEquation');
const resultEqRoot = document.getElementById('resultEqRoot');

const findEqRoot = (a, b, c) => {
    let x1, x2;
    if (a !== 0) {
        const descriminant = (b ** 2) - (4 * a * c);
    
        if (descriminant > 0) {
        x1 = ((-b * (-1)) + Math.sqrt(descriminant)) / (2 * a);
        x2 = ((-b * (-1)) - Math.sqrt(descriminant)) / (2 * a);
        resultEqRoot.innerHTML = `x1 = ${x1}, x2 = ${x2}`;
        } else if(descriminant === 0) {
            x1 = (b / (2 * a)) * (-1);
            resultEqRoot.innerHTML = `Уравнение имеет один корень ${x1}`
        } else {
            resultEqRoot.innerHTML = 'Уравнение не имеет корней';
        }
    } else {
        resultEqRoot.innerHTML = "'a' не может быть равен 0, иначе это не квадратное уравнение";
    }
}

btn.addEventListener('click', () => {
    currentEquation.innerHTML = `${a.value}x<sup>2</sup> - ${b.value}x - ${c.value} = 0`;
    findEqRoot(strToNum(a.value), strToNum(b.value), strToNum(c.value));
})

//task 2.2 Проверить являются ли числа тройкой пифагора
const number1 = document.getElementById('number1'),
      number2 = document.getElementById('number2'),
      number3 = document.getElementById('number3');
const btnPifagor = document.getElementById('btnPifagor');
const pifagorResult = document.getElementById('pifagorResult');

btnPifagor.addEventListener('click', () => {
    const numbersArr = [number1.value, number2.value, number3.value];
    const arrSort = numbersArr.sort().map(num => parseInt(num));
    const numbersOfPifagors = () => {
        if ((arrSort[arrSort.length - 1] ** 2) == ((arrSort[0] ** 2) + (arrSort[1] ** 2))) {
            pifagorResult.innerHTML = 'Страйк! Это тройка чисел пифагора';
        } else {
            pifagorResult.innerHTML = 'Числа не соответствуют тройке числам пифагора';
        }
    }
    numbersOfPifagors();
});

//task 2.3 Вывести список делителей числа n
const numberForDividers = document.getElementById('numberForDividers');
const btnDividers = document.getElementById('btnDividers');
const dividersResult = document.getElementById('dividersResult');

const findDividers = num => {
    const arrDividers = [];
    for (let i = 0; i <= (num / 2); i++) {
        if (num % i == 0) {
            arrDividers.push(i);
        }
    }
    arrDividers.push(num);
    return arrDividers;
}

btnDividers.addEventListener('click', function() {
    dividersResult.innerHTML = findDividers(strToNum(numberForDividers.value)).join(', ');
});



//task 2.4, 2.5, 2.6 Вывести общий список делителей двух чисел, max делитель, вывести минимальное число которое делится на эти числа.
const inputNum1ForDeviders = document.getElementById('input_num1ForDividers');
const inputNum2ForDeviders = document.getElementById('input_num2ForDividers');
const btnCommonDividers = document.getElementById('btnCommonDividers');
const dividersCommonResult = document.getElementById('dividersCommonResult');
const maxDividersResult = document.getElementById('maxDividersResult');
const minNumberResult = document.getElementById('minNumberResult');

const filterCommonDivisors = (arr1, arr2) => arr1.filter(value => arr2.includes(value))
const maxDividers = arr => Math.max(...arr)
const minNumber = (num1, num2, arr) => {
    const inputMinNumber = Math.min(num1, num2);
    return arr.includes(inputMinNumber) ? inputMinNumber : 'такого числа нет';
}
    

btnCommonDividers.addEventListener('click', () => {
    const dividersNum1 = findDividers(strToNum(inputNum1ForDeviders.value));
    const dividersNum2 = findDividers(strToNum(inputNum2ForDeviders.value));
    const filterDividersArr = filterCommonDivisors(dividersNum1, dividersNum2);

    dividersCommonResult.innerHTML = filterDividersArr.join(', ');
    maxDividersResult.innerHTML = maxDividers(filterDividersArr);
    minNumberResult.innerHTML = minNumber(inputNum1ForDeviders.value, inputNum2ForDeviders.value, filterDividersArr);
});
