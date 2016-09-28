/**
 * Created by NEKTA on 27.09.2016.
 */

//-------   task 1  -------

/*
var i;

for (i = 1; i<=10; i++) {
    console.log(i);
}
for (i = 10; i>=1; i--) {
    console.log(i);
}

// -------   task 2  -------
var x;
var i;

for (i = 35; i<=84; i++) {
    x = i % 2; 
    debugger;
    if (x == 0) {
        console.log(i);
    }
}

//-------   task 3  -------
var x;
var i;

for (i = 61; i<=143; i++) {
    x = i % 2;
    if (x == 1) {
        console.log(i);
    }
}
 */

//-------   task 4  -------
/*
function checkEvenAdd(of,to,b) {

var x;
    of = prompt("Введите первое значение","35");
    to = prompt("Введите второе значение","80");
    b = confirm(" Для вывода чётных чител нажсите 'ОК'\n Для вывода нечётных чисел нажмите 'Cancel'");


    while (isNaN(of) === true) {
        of = prompt("Проверять можно только числа\nВведите данные повторно для первого числа", "35");
    }
    while (isNaN(to) === true) {
        to = prompt("Проверять можно только числа\nВведите данные повторно для второго числа", "80");
        }
    while (+of > +to) {
        of = prompt("Первое значение должно быть больше второго\nВведите данные повторно для первого числа","35");
        to = prompt("Первое значение должно быть больше второго\nВведите данные повторно для второго числа","80");
    }
    for (of; of <= to; of++) {
        x = of % 2;
        if (b == true) {
            if (x == 0) {
                console.log(of);
            }
        }
        else {
            if (x == 1) {
                console.log(of);
            }
        }
    }
    alert ("Результат смотрите в консоле");
}
*/
//-------   task 5  -------

function drowMeFigure(symbol, number, figure) {
    var x,
        y = 1,
        symbol,
        number,
        figure,
        symbolDrowTriangl = "",
        symbolDrowSquare = "";


    if (figure === true) {
        for (x = 1; x <= number; x++) {
            symbolDrowTriangl += symbol;
            console.log(symbolDrowTriangl);
        }
    }
    else {debugger;
            for (x = 1; x <= number; x++) {
                symbolDrowSquare += symbol;
            }
            while ( y <= number) {
            console.log(symbolDrowSquare + "\n");
            y++;
        }
        alert("работа закончена");
    }
}
//drowMeFigure ("#",10,false);
