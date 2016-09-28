
function cleaning() {
    document.getElementById("task1-3").innerHTML = "";
    document.getElementById("task4").innerHTML = "";
    document.getElementById("task5").innerHTML = "";
}

// -------   task 1  -------
function performTask1() {
    var i;

    for (i = 1; i<=10; i++) {
        document.getElementById("task1-3").innerHTML += i + " ";
        console.log(i);
    }

    for (i = 10; i>=1; i--) {
        document.getElementById("task1-3").innerHTML += i + " ";
        console.log(i);
    }
}
// -------   task 2  -------
function performTask2() {
    var x;
    var i;

    for (i = 35; i <= 84; i++) {
        x = i % 2;
        if (x == 0) {
            document.getElementById("task1-3").innerHTML += i + " ";
            console.log(i);
        }
    }
}
// -------   task 3  -------
function performTask3() {
    var x;
    var i;

    for (i = 61; i <= 143; i++) {
        x = i % 2;
        if (x == 1) {
            document.getElementById("task1-3").innerHTML += i + " ";
            console.log(i);
        }
    }
}
// -------   task 4  -------

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
                document.getElementById("task4").innerHTML += of + " ";
                console.log(of);
            }
        }
        else {
            if (x == 1) {
                document.getElementById("task4").innerHTML += of + " ";
                console.log(of);
            }
        }
    }
    alert ("Результат можно так же посмотреть в консоле");
}

//-------   task 5  -------
function drowMeFigure(symbol, number, figure) {
    var x,
        y = 1,
        symbol = document.getElementById("input-field-symbol").value,
        number = document.getElementById("input-field-number").value,
        figure = document.getElementById("selection-figure").checked,
        symbolDrowTriangl = "",
        symbolDrowSquare = "";

    if (figure === true) {
        for (x = 1; x <= number; x++) {
            symbolDrowTriangl += symbol;
            document.getElementById("task5").innerHTML += symbolDrowTriangl + "<br>";
        }
    }
    else {
        for (x = 1; x <= number; x++) {
            symbolDrowSquare += symbol;
        }
        while ( y <= number) {
            document.getElementById("task5").innerHTML += symbolDrowSquare + "<br>";
            y++;
        }
    }
}


