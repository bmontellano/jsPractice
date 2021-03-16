function binaryGap(N) {
    // find the longest Binary Gap
    //param is Integer
    let binaryIntStr = N.toString(2),
        binaryIntSplitOne = binaryIntStr.split('1'),
        longestBinaryGap = 0;
        console.log(binaryIntSplitOne);

        for (i = 0; i < binaryIntSplitOne.length -1; i++){
            if(binaryIntSplitOne[i].length > longestBinaryGap){
                longestBinaryGap = binaryIntSplitOne[i].length;
            }
            console.log('This is the current longest Binary Gap ---> ', longestBinaryGap);
          }
          console.log('RETURN --> ', longestBinaryGap);
          return longestBinaryGap;
}
//binaryGap(6291457);
//getPINs INCOMPLETE
function getPINs(observed) {
/*
┌───┬───┬───┐
│ 1 │ 2 │ 3 │
├───┼───┼───┤
│ 4 │ 5 │ 6 │
├───┼───┼───┤
│ 7 │ 8 │ 9 │
└───┼───┼───┘
    │ 0 │
    └───┘
*/
let string1 = '124',
    string2 = '1235',
    string3 = '236',
    string4 = '1457',
    string5 = '24568',
    string6 = '3569',
    string7 = '478',
    string8 = '57890',
    string9 = '689',
    string0 = '80',
    splitObservedPinArr = observed.split(''),
    arraySetUp = [],
    allCombosArr = [],
    iterator = 0,
    stringBuild = '';

//return array if only one pinNumber is observed
    if(observed.length == 1) {
        if (observed == '1'){
            console.log('RETURN --> ', string1.split(''));
            return string1.split('');
        } else if (observed == '2') {
            console.log('RETURN --> ', string2.split(''));
            return string2.split('');
        } else if (observed == '3') {
            console.log('RETURN --> ', string3.split(''));
            return string3.split('');
        } else if (observed == '4') {
            console.log('RETURN --> ', string4.split(''));
            return string4.split('');
        } else if (observed == '5') {
            console.log('RETURN --> ', string5.split(''));
            return string5.split('');
        } else if (observed == '6') {
            console.log('RETURN --> ', string6.split(''));
            return string6.split('');
        } else if (observed == '7') {
            console.log('RETURN --> ', string7.split(''));
            return string7.split('');
        } else if (observed == '8') {
            console.log('RETURN --> ', string8.split(''));
            return string8.split('');
        } else if (observed == '9') {
            console.log('RETURN --> ', string9.split(''));
            return string9.split('');
        } else if (observed == '0') {
            console.log('RETURN --> ', string0.split(''));
            return string0.split('');
        }
    } 
    //set up initial array
    splitObservedPinArr.forEach(pinNumber => {
        
    })

    /*
    arraySetUp.forEach( i, index => {
        console.log(i);
        [0][0] + [1][0] 
        [0][0] + [1][1]
        [0][0] + [1][2]
        [0][1] + [1][0] 
        [0][1] + [1][1]
        [0][1] + [1][2]
        [0][2] + [1][0] 
        [0][2] + [1][1]
        [0][2] + [1][2]
        for(let z = 0)
    })
    */
    //console.log (allCombosArr);
} 
//getPINs('11');
function arrayShift(A, K) {
    let inputArr = A,
        rotations = K;

        console.log("Input Array --> ",inputArr);
        console.log("# of shifts --> ", rotations);
        for (i = 0; i < rotations; i++) {
            inputArr.unshift(inputArr[inputArr.length - 1]);
            inputArr.pop();
            console.log('New shift -->', inputArr);
        }
        console.log('RETURN --> ', inputArr);
        return inputArr;
}
//arrayShift([1,2,3,4,5], 3);
function oddOccurenceInArray(A) {
    let arrayInput = A,
        keyObject = {};
 
        for(i = 0; i < arrayInput.length; i++){
            if (keyObject[arrayInput[i]] > 0 ) {
               keyObject[arrayInput[i]] += 1; 
            } else {
                keyObject[arrayInput[i]] = 1;
            }
        }
        console.log("Found Object --> ",keyObject);
        for (prop in keyObject){
            console.log(`${prop}: ${keyObject[prop]}`)
            if (keyObject[prop] % 2 !== 0) {
                console.log('RETURN --> ', parseInt(prop))
                return parseInt(prop);
            };
        }
 }
 //oddOccurenceInArray([9,3,9,3,9,7,9]);
function frogJump (X, Y, D){
/*   
Write a function:
function solution(X, Y, D);
that, given three integers X, Y and D, returns the minimal number of jumps from position X to a position equal to or greater than Y.
*/
let position = X,
    endPos = Y,
    jumpAmt = D,
    counter = 0;
    //better method
    counter = Math.ceil((endPos - position) / jumpAmt);
    console.log('RETURN --> ', counter);
    return  counter;
/*
Below method takes too long
if (position >= endPos) {
    return counter;
} else {
    while (position < endPos){
        position += jumpAmt;
        counter ++;
        if (position >= endPos){
            console.log('RETURN --> ', counter);
            return counter;
        }
    }
}
*/
}
//frogJump(10,85,30);
//missingInt INCOMPLETE
function missingInt (A){
    let arr = A,
        iterator = 0;
        if (arr.length === 0) {
            //console.log ('RETURN --> ', 0);
            return 1;
        } else if (arr.length === 1) {
            return arr[0] - 1;
        }
        iterator = ((arr[1] - arr[0])/2) 
        if (arr.length === 2) {
           //console.log ('RETURN --> ', arr[0] + iterator);
           return arr[0] + iterator;
        }

    for (i=0; i < arr.length ; i++){
        if ( (arr[i] + 1) !== arr[i + 1] ) {
            //console.log ('RETURN --> ', (arr[i] + 1));
            return arr[1] + 1;
        }
    }
}
//missingInt([3,4]);
function pigIt (str) {
    let stringArr = str.split(' '),
        initialString = '',
        newString = '';
    for (i = 0; i < stringArr.length; i++) {
        if (stringArr[i] === '!' || stringArr[i] === '?'){
            newString += stringArr[i] + ' ';
            continue;
        }
        initialString += stringArr[i].substring(1, stringArr[i].length) + stringArr[i].substring(0,1) + 'ay' + ' ';
        newString += initialString;
        initialString = '';
    }
    console.log('RETURN --> ', newString.trim());
    return newString.trim();
}
//pigIt('Hello world !');
function sumIntervals(intervals){
    let arr = intervals,
        intervalCounter = 0,
        intervalCaptureString = '';
        //console.log(intervals);
        if (arr.length === 1){
            for(var i = arr[0][0]; i < arr[0][1]; i++){
                intervalCounter ++;
                intervalCaptureString += i;
                if (i === arr[0][1] - 1){
                    intervalCaptureString += i + 1;
                }
            }
           // console.log(` intervalCounter: ${intervalCounter}`);
            return intervalCounter;
        }
        //console.log(` intervalCounter: ${intervalCounter}\n intervalCaptureString: ${intervalCaptureString}`);

        for (var j =0; j < arr.length; j++){
            for(var k = arr[j][0]; k < arr[j][1]; k++){
                //console.log('start', arr[j][0]);
                //console.log('end', arr[j][1]);
                if (intervalCaptureString.indexOf('_' + k.toString() + '_') === -1){
                    intervalCaptureString += '_'+ k + '_';
                    intervalCounter ++;
                }
               // console.log('interval Capture String',intervalCaptureString);
            }
        }
        //console.log(` intervalCounter: ${intervalCounter}`);
        return  intervalCounter;
  }
  //sumIntervals([[ 11, 15 ], [ 6, 10 ], [ 1, 15 ], [7,8], [9,11], [14,16]]);

/*
var keyObjj = {};
keyObjj["bark"] = function(){
    return 'WHOOF!';
}
console.log(keyObjj.bark());
*/

class Queue {
    constructor() {
        this.elementArray = [];
    }
    enqueue(e) {
        console.log(`added ${e} to array aka enqueued`)
        return this.elementArray.push(e);
    }
    dequeue(){
        console.log('removed first item from array aka dequeued')
        return this.elementArray.shift();
    }
    length() {
        console.log(`queue length == ${this.elementArray.length}`)
        return this.elementArray.length;
    }
    isEmpty(){
        console.log('Is the queue empty? ', this.elementArray.length === 0 );
        return this.elementArray.length == 0
    }
    peek() {
        if (!this.isEmpty()) {
        console.log(`first element of array === ${this.elementArray[0]}`);
            return this.elementArray[0];
        } else {
            return undefined;
        }
    }

}
/*
let d = new Queue();

d.enqueue(7);
d.enqueue(5);
d.enqueue(3);
d.length();
d.dequeue();
d.length();
//d.peek();
*/
class NumberStack {
    constructor () {
        this.items = [];
        this.minNum = null;
        this.maxNum = null;
    }
    size() {
        return this.items.length;
    }
    getMinNum () {

            return this.minNum;
    }
    getMaxNum () {
            return this.maxNum;
    }
    getNumbers () {
        return this.items;
    }
    addNumber (n) {
        if(typeof(n) === 'number'){
            if (this.size() == 0) {
                this.minNum = n;
                this.maxNum = n;
            } else {
                if (n < this.minNum) {
                    this.minNum = n;
                } 
                if (n > this.maxNum) {
                    this.maxNum = n;
                }
            }
            this.items.push(n);
            let addedNumber = n;
            return addedNumber;
        } else {
            console.log(`Did not add ${n}`);
            return undefined;
        }
    }
    removeTop (){
        if (this.size() == 0) {
            return null;
        }
        let outcome = this.items.pop();
        this.minNum = Math.min(...this.items);
        this.maxNum = Math.max(...this.items);
        return outcome; 
    }
}


function parseInt(string) {
    if (string === 'zero') {
        return 0;
      }
    if (string === 'one million'){
          return 1000000;
      }
    let   number = 0,
          number2 = 0,
          totalNumber = 0,
          stringArr = [],
          stringArr2 = [];
          if (string.indexOf('thousand') !== -1){
              stringArr = string.split('thousand');
              stringArr2 = stringArr[1].replace('-',' ').split(' ');
        }
        console.log(stringArr2);
        stringArr = string.replace('-',' ').split(' ');
        console.log(stringArr);
        //two separate rules for with thousand and without thousand
        for(var k = 0; k < stringArr.length; k++){
                if (stringArr[k] === 'one') number += 1;
                if (stringArr[k] === 'two') number += 2;
                if (stringArr[k] === 'three') number += 3;
                if (stringArr[k] === 'four') number += 4;
                if (stringArr[k] === 'five') number += 5;
                if (stringArr[k] === 'six') number += 6;
                if (stringArr[k] === 'seven') number += 7;
                if (stringArr[k] === 'eight') number += 8;
                if (stringArr[k] === 'nine') number += 9;
                if (stringArr[k] === 'ten') number += 10;
                if (stringArr[k] === 'eleven') number += 11;
                if (stringArr[k] === 'twelve') number += 12;
                if (stringArr[k] === 'thirteen') number += 13;
                if (stringArr[k] === 'fourteen') number += 14;
                if (stringArr[k] === 'fifteen') number += 15;
                if (stringArr[k] === 'sixteen') number += 16;
                if (stringArr[k] === 'seventeen') number += 17;
                if (stringArr[k] === 'eighteen') number += 18;
                if (stringArr[k] === 'nineteen') number += 19;
                if (stringArr[k] === 'twenty') number += 20;
                if (stringArr[k] === 'thirty') number += 30;
                if (stringArr[k] === 'forty') number += 40;
                if (stringArr[k] === 'fifty') number += 50;
                if (stringArr[k] === 'sixty') number += 60;
                if (stringArr[k] === 'seventy') number += 70;
                if (stringArr[k] === 'eighty') number += 80;
                if (stringArr[k] === 'ninety') number += 90;
                if (stringArr[k] === 'hundred') number *= 100;
                if (stringArr[k] === 'thousand') { 
                    number *= 1000;
                    break;
                }
        }
        if (stringArr2.length > 0) {
            stringArr2.forEach((i) => {
                if (i === 'one') number2 += 1;
                if (i === 'two') number2 += 2;
                if (i === 'three') number2 += 3;
                if (i === 'four') number2 += 4;
                if (i === 'five') number2 += 5;
                if (i === 'six') number2 += 6;
                if (i === 'seven') number2 += 7;
                if (i === 'eight') number2 += 8;
                if (i === 'nine') number2 += 9;
                if (i === 'ten') number2 += 10;
                if (i === 'eleven') number2 += 11;
                if (i === 'twelve') number2 += 12;
                if (i === 'thirteen') number2 += 13;
                if (i === 'fourteen') number2 += 14;
                if (i === 'fifteen') number2 += 15;
                if (i === 'sixteen') number2 += 16;
                if (i === 'seventeen') number2 += 17;
                if (i === 'eighteen') number2 += 18;
                if (i === 'nineteen') number2 += 19;
                if (i === 'twenty') number2 += 20;
                if (i === 'thirty') number2 += 30;
                if (i === 'forty') number2 += 40;
                if (i === 'fifty') number2 += 50;
                if (i === 'sixty') number2 += 60;
                if (i === 'seventy') number2 += 70;
                if (i === 'eighty') number2 += 80;
                if (i === 'ninety') number2 += 90;
                if (i === 'hundred') number2 *= 100;
        })
    }
    totalNumber = number + number2;
    console.log('final number: ', totalNumber);
    return totalNumber;
}
//parseInt('one thousand seven hundred and eighty-three');

//higher order functions && arrays

const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
/*forEach -- iterates througn all items in an array
if using an arrow function:
no need to use () if only one param
ex array.forEacn( item => return item)
below we have two params
ages.forEach((age, i) => console.log(`age: ${age}, index: ${i}`));
*/
//map

//filter
//reduce
//sort
// const s1 = 'Hello';
// console.log(typeof s1);

//OOP crash course, by Traversy Media
/* Object Literal
const book1 = {
    title: 'Book One',
    author: "John Ho",
    year: '2015',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

const book2 = {
    title: 'Book Two',
    author: "Jane Ma",
    year: '2012',
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

//console.log(book2.getSummary())
console.log(Object.values(book2));
console.log(Object.keys(book2));
*/
/* Constructor
NOTE: With ES6, Constructor and prototype are combined into 
Classes, see syntax above.
function Book(title, author, year) {
    //console.log('Book Initialized...');
    this.title = title;
    this.author = author;
    this.year = year;

    this.getSummary  = function() {
        return `${this.title} was written by ${this.author} in ${this.year}`
    }
}

//instantiate object
const book1 = new Book('Book One', 'John Ho', '2015');
const book2 = new Book('Book Two', 'Jane Ma', '2012');

console.log(book1.getSummary());
*/
/*Prototype
function Book(title, author, year) {
    //console.log('Book Initialized...');
    this.title = title;
    this.author = author;
    this.year = year;
}

//getSummary
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`
}

//get Age
Book.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.title} is ${years} years old`
}
//Revise / Change Year
Book.prototype.revise = function(newYear) {
    this.year = newYear;
    this.revised = true;
}

//instantiate object
const book1 = new Book('Book One', 'John Ho', '2015');
const book2 = new Book('Book Two', 'Jane Ma', '2012');
console.log(book2);
console.log(book2.revise('2018'));
console.log(book2);
*/
/* Inheritence
function Book(title, author, year) {
    //console.log('Book Initialized...');
    this.title = title;
    this.author = author;
    this.year = year;
}
//getSummary
Book.prototype.getSummary = function () {
    return `${this.title} was written by ${this.author} in ${this.year}`
}
//Magazine Constructor
function Magazine(title, author, year, month) {
    Book.call(this, title, author, year);
    this.month = month;
}
//Inherit Prototype
Magazine.prototype = Object.create(Book.prototype);
//Use Magazine Constructor
Magazine.prototype.constructor = Magazine;
//Instantiate Magazine Object
const mag1 = new Magazine('PC Games', 'Brian M', '2021', 'February');

console.log(mag1.getSummary());
*/
/*Object of Protos
const bookProtos = {
    getSummary: function() {
        return `${this.title} was written by ${this.author} in ${this.year}`;
    },
    getAge: function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
}

// Create Object
// const book1 = Object.create(bookProtos);
// book1.title = 'Book One';
// book1.author = 'John Ho';
// book1.year = 2015;

const book1 = Object.create(bookProtos, {
    title: { value: 'Book One'},
    author: { value: 'John Ho'},
    year: { value: 2015}
});
console.log(book1);
*/
/* Classes
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
    getAge() {
        const years = new Date().getFullYear() - this.year;
        return `${this.title} is ${years} years old`;
    }
    revise(newYear) {
        this.year = newYear;
        this.revised = true;
    }
    static topBookStore(){
        return 'Barnes & Noble';
    }
}

//Instantiate Object
const book1 = new Book('Book One', 'John Ho', '2010');
// console.log(book1);
// console.log(book1.getSummary());
// console.log(book1.getAge());
// console.log(book1.revise(2015));
// console.log(book1.getAge());
// console.log(book1.getSummary());
// console.log(book1);
console.log(Book.topBookStore());
*/

/* Sub Classes
// A Sub Class can inherit 
class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }
    getSummary(){
        return `${this.title} was written by ${this.author} in ${this.year}`;
    }
}

// Magaine Subclass
class Magazine extends Book {
    constructor(title, author, year, month) {
        super(title, author, year);
        this.month = month;
    }
}

const mag1 = new Magazine('PC Gamez', 'Brian M', '2021', 'March');
console.log(mag1.getSummary());
//end of lesson
*/

















function unusedCode(h) {
    /* UNUSABLE BUT FUN CODE
let gapCounter = 0,
    binaryIntStr = N.toString(2),
    binaryIntArr = binaryIntStr.split(''),
    binaryIntSplitOne = binaryIntStr.split('1'),
    keyObj = {};

    console.log(binaryIntArr);
    console.log(binaryIntSplitOne);
    for (i = 0; i < binaryIntArr.length ; i++){
        if(binaryIntArr[i] === '1'){
        keyObj[i] = gapCounter;
        }
        gapCounter ++;
    }

    for (prop in keyObj){
        console.log(keyObj[prop]);
    }
    */
}