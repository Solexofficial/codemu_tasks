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
    const dividers = [];
    for (let i = 0; i <= (num / 2); i++) {
        if (num % i == 0) {
            dividers.push(i);
        }
    }
    dividers.push(num);
    dividersResult.innerHTML = dividers.join(', ');
}

btnDividers.addEventListener('click', function() {
    findDividers(strToNum(numberForDividers.value));
});

//task 2.4 Вывести общий список делителей двух чисел
const inputNum1ForDeviders = document.getElementById('input_num1ForDividers');
const inputNum2ForDeviders = document.getElementById('input_num2ForDividers');
const btnDividers2 = document.getElementById('btnDividers2');
const dividersResult2 = document.getElementById('dividersResult2');

const findDividers2 = (num1, num2) => {
    const dividersNum1 = [];
    const dividersNum2 = [];

    for (let i = 0; i <= num1 / 2; i++) {
      if (num1 % i === 0) {
        dividersNum1.push(i);
      }
    }
    dividersNum1.push(num1);

    for (let j = 0; j <= num2 / 2; j++) {
      if (num2 % j === 0) {
        dividersNum2.push(j);
      }
    }
    dividersNum2.push(num2);

    filterCommonDivisors(dividersNum1, dividersNum2)
}

const filterCommonDivisors = (arr1, arr2) => {
    const commonDivisors = arr1.filter(value => arr2.includes(value));
    dividersResult2.innerHTML = commonDivisors.join(', ');
}

btnDividers2.addEventListener('click', function() {
    findDividers2(strToNum(inputNum1ForDeviders.value), strToNum(inputNum2ForDeviders.value));
});

//task 2.5 Найти наибольший общий делитель
const inputNum1ForMaxDividers = document.getElementById('input_num1ForMaxDividers');
const inputNum2ForMaxDividers = document.getElementById('input_num2ForMaxDividers');
const btnMaxDividers = document.getElementById('btnMaxDividers');
const maxDividersResult = document.getElementById('maxDividersResult');

const maxDividers = (num1, num2) => {
    findDividers2(strToNum(num1.value), strToNum(num2.value));
    const maxNumDividers = Math.max(...f1);
    console.log(maxNumDividers);
    maxDividersResult.innerHTML = maxNumDividers;
}

btnMaxDividers.addEventListener('click', () => {
    maxDividers(inputNum1ForMaxDividers, inputNum2ForMaxDividers);
})

