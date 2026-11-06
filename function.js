//! named function
function squre(n){
    console.log(n*n);
    
}
squre(2)


//! function with retun keyword
function add(a,b){
    return a+b
}
let result=add(10,20)
console.log(result);


//! write program that perform all the arthmatic operation

function calci(a,b){
    return{
        add:a+b,
        sub:a-b,
        multiply:a*b,
        div:a/b,
        modulus:a%b
    }
}
let res=calci(10,5)
console.log(res.modulus);
console.log(res.multiply);


function employee(name, age, salary) {
    return {
        name: name,
        age: age,
        salary: salary
    };
}

let emp = employee("yashu", 22, 50000);

console.log(emp.salary);

function students(name,age,marks) {
    return{
        name:name,
        age:age,
        marks:marks
    }
    
}
let stu=students("rahul",21,85)
console.log(stu.marks);


function productDetails(productName,price,quantity) {
    return{
        productName:productName,
        price:price,
        quantity:quantity,
        totalPrice:price*quantity
    }
    
}
let pro=productDetails("bullet",100000,1)
console.log(pro.totalPrice);


//!Function with Conditional Statements
function checkResult(name, marks) {
    let status;

    if (marks >= 35) {
        status = "Pass";
    } else {
        status = "Fail";
    }

    return {
        name: name,
        marks: marks,
        status: status
    };
}

let res1 = checkResult("Yashu", 85);

console.log(res1.status);

//!Create a function checkAge().
function checkAge(name, age) {
    let status;

    if (age >= 18) {
        status = "Eligible to vote";
    } else {
        status = "Not eligible to vote";
    }

    return {
        name: name,
        age: age,
        status: status
    };
}

let res2 = checkAge("Yashu", 22);

console.log(res2.status);


function calculateMarks(name, marks) {
    let total = 0;

    for (let i = 0; i < marks.length; i++) {
        total += marks[i];
    }

    let average = total / marks.length;

    return {
        name: name,
        total: total,
        average: average
    };
}

let res3 = calculateMarks("Yashu", [80, 90, 70, 85]);

console.log(res3.average);


//!Function using map()
function doubleNumbers(numbers) {
    return numbers.map(function(num) {
        return num * 2;
    });
}

let res4 = doubleNumbers([10, 20, 30, 40]);

console.log(res4);

//! function using filter()
function evenNumbers(numbers) {
    return numbers.filter(function(num) {
        return num % 2 === 0;
    });
}

let res5 = evenNumbers([10, 15, 20, 25, 30, 35]);

console.log(res5);


//! function using reduce
function sumNumbers(numbers) {
    return numbers.reduce(function(total, num) {
        return total + num;
    }, 0);
}

let res6 = sumNumbers([10, 20, 30, 40]);

console.log(res6);




//! even or odd

function checkEvenOdd(num) {
    if (num % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

console.log(checkEvenOdd(10));


//! factorial

function factorial(num) {
    let result = 1;

    for (let i = 1; i <= num; i++) {
        result = result * i;
    }

    return result;
}

console.log(factorial(5));


//! square of number using funtion

function square(num) {
    return num * num;
}

console.log(square(5));


//! cube of number using functon

function square(num) {
    return num * num* num;
}

console.log(square(5));


//! student pass/fail

function checkResult(name, marks) {
    let status;

    if (marks >= 35) {
        status = "Pass";
    } else {
        status = "Fail";
    }

    return {
        name: name,
        marks: marks,
        status: status
    };
}

console.log(checkResult("Yashu", 85));


//! largest of 3 number

function largest(a, b, c) {
    if (a > b && a > c) {
        return a;
    } else if (b > c) {
        return b;
    } else {
        return c;
    }
}

console.log(largest(10, 25, 15));