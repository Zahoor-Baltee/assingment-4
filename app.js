//-----------FUNCTIONS----------

//-------CHAPTER # 35-38--------

//-------QUESTION # 01----------

// function telltime() {
//     var date = new Date();
//     console.log(date);
// }
// telltime();




//-------QUESTION # 02----------

// function Name() {
//     var firstName = prompt("Enter your first name")
//     var lasttName = prompt("Enter your last name")
//     alert("Hello : "+firstName + lasttName);

// }
// Name();



//-------QUESTION # 03----------

// function Number() {
//     var firstNo = +prompt("Enter any number");
//     var secNo = +prompt("Again enter any number");
//     var add = firstNo+secNo;
//     alert(add);

// }
// Number();


//-------QUESTION # 04----------

// function calculator(num1, num2, operator) {
//     num1 = +prompt("Enter first number");
//     operator = prompt("Enter operator");
//     num2 = +prompt("Enter second number");
//     var result;
//     if (operator == "+") {
//         result = num1+num2;
//     }
//     else if (operator == "-"){
//         result = num1-num2;
//     }
//     else if (operator == "*"){
//         result = num1*num2;
//     }
//     else if (operator == "/"){
//         result = num1/num2;
//     }
//     alert(num1 + operator + num2 + " = " +result);
// }
// calculator();



//-------QUESTION # 05----------

// function square(num) {
//     num = +prompt("Enter a number")
//     var square = num*num;
//     console.log(square);
// }
// square();



//-------QUESTION # 06----------

// var userInput;
// var num;
// var i =1;
// var fact;

// function myFactor (num){    
//   fact = num * i;
//   for (i; i < num; i++) {
//     fact = fact * i;
//   }
//   return fact

// }

// var result;
// userInput = prompt("Enter Value:","");  
// num = parseInt (userInput);         
// result = myFactor(num);
// document.write(result);



//-------QUESTION # 07----------

// var start;
// var end;

// function counting(){
//   start = parseInt(+prompt("Enter first value"))
//   end = parseInt(+prompt("Enter last value"))
//   for(i = start; i <= end; i++){
//     console.log(i);
//   }
// }
// counting();



//-------QUESTION # 08----------

// var base = +prompt("Enter Base");
// var perp = +prompt("Enter Perp");
// var hyp;
// function calculateHypotenuse(){
//   hyp = hyp*hyp;
//   hyp = base+perp;

//   function calculateSquare(){
//     base = base*base;
//     perp = perp*perp;
//     alert(hyp);
//   }
//   return calculateSquare;
// }
// var innerFunc = calculateHypotenuse();
// innerFunc();



//-------QUESTION # 09----------



// var area;
// function rarea(value,variable){

//  area = value * variable;
// }
// rarea(prompt("enter base"),prompt("enter height"));
// console.log(area);



//-------QUESTION # 10----------

// function checkPalindrome(string) {
//     var aaa = string.toLowerCase('');
//     var value = aaa.split('');
//     var reversevalue = value.reverse('');
//     var joinvalue = reversevalue.join('');
//     if (string == joinvalue) {
//         console.log("The value is Palindrome");
//     }
//     else {
//         console.log("The value is not Palindrome");
//     }
// }
// var string = prompt("Enter any value");
// checkPalindrome(string);



//-------QUESTION # 11----------

// var string = "the quick brown fox"
// function output(string){
//     var aaa = string.split(' ');
//    for (i = 0; i < aaa.length; i++){
//        aaa[i] = aaa[i].charAt(0).toUpperCase() + aaa[i].slice(1);       
//    }
//    var bbb = aaa.join(' ');
//    console.log(bbb);
// }
// output(string);



//-------QUESTION # 12----------

// var aa = "Web Development Toturial"
// var sp = aa.split(' ');
// var saa = sp.sort(function(a, b){return b.length - a.length});
// console.log(saa[0]);



//-------QUESTION # 13----------

// function count(string,letter){
//     var newStr = string.split('').sort().join('');
//     for(i = 0;i < string.length;i++){
//         var counter = 1;
//         if(newStr[i] == letter){
//             counter++;
//             console.log(newStr[i] + " "+counter);
//         }
//     }
// }
// count("JSResourceS.com","S");



//-------QUESTION # 14----------

// function calcCircumfren(radius){
//     var x = (Math.PI*radius)*2
//     console.log("The Circumference is "+ x);
// }
// function calcArea(radius){
//     var y = (Math.PI*radius)*radius;
//     console.log("the Area is "+y);
// }
// calcCircumfren(50);
// calcArea(30);


//-----------------------------------------------------------------------------------

//-------CHAPTER # 38-42--------

//-------QUESTION # 1----------

// function power(a,b){
    //     let x = Math.pow(a,b)
    //     return x;
    // }
    // let a = +prompt("Enter a value");
    // let b = +prompt("Enter b value");
    // let y = power(a, b);
// console.log(y);



//-------QUESTION # 2----------

// function yearChk(year){
//  if (year % 4 ==0){
//      console.log(year + " is a leap year");
//  }  
//  else{
//      console.log(year + " is not a leap year");
//  }
// }
// let year = +prompt("Enter year");
// yearChk(year);



//-------QUESTION # 3----------

// function Svalue(a, b, c){
//     s = (a+b+c)/2;
// }
// function areaValue(a, b, c){
//     var area = s*(s-a)*(s-b)*(s-c);
    
//     console.log(area);
// }
// var a = +prompt("Enter the value of a")
// var b = +prompt("Enter the value of b")
// var c = +prompt("Enter the value of c")
// var s;
// Svalue(a, b, c);
// areaValue(a, b, c);



//-------QUESTION # 4----------

// var a = +prompt("Enter Math marks");
// var b = +prompt("Enter Computer marks");
// var c = +prompt("Enter English marks");
// var totalMarks = 300;
// var avg;
// var per;
// function result(){
//     function average(){
//         var sum = a+b+c;
//         avg = sum/3;
//         return avg;
//     }
//     function percentage(){
//         per = (a+b+c)/totalMarks*100;
//         return per;
//     }
//     average();
//     percentage();
//     console.log({avg,per});
// }
// result();



//-------QUESTION # 5----------

// function myIndexOf(myArray, search) {
//     for(var i=0;i<myArray.length;i++){
//        if(myArray[i] === search){
//             return i;
//         }
//     }
//     return -1;
// }

// var myArray = ['a', 'b', 'c'];
// console.log(myIndexOf(myArray, 'c'));
// console.log(myIndexOf(myArray, 'f'));
// console.log(myIndexOf(myArray, 'a'));



//-------QUESTION # 6----------

// function dltVowel(myArray,remove) {
//     for(i=0;i<=myArray.lenght;i++){
//         if(myArray[i]===remove){
//             return i;
//             console.log(myArray);
//         }
//     }
// }
// var myArray = "Pleases read this application and give me gratuity";
// var remove = ['a','e','i','o','u'];
// dltVowel(myArray,remove);



// function dltVowel(){
//     var arr = "Pleases read this application and give me gratuity";
//     var remove = arr.replace(/[aeiou]/gi, "");
//     console.log(remove);
// }
// dltVowel();



//-------QUESTION # 7----------

// function findOccurrences() {
//     var str = "Pleases read this application and give me gratuity";
//     var count = 0;
//     let haveSeenVowel = false;
  
//     for (var letter of str.toLowerCase()) {
//       switch (letter) {
//         case 'a':
//         case 'e':
//         case 'i':
//         case 'o':
//         case 'u':
//           {
//             if (haveSeenVowel) {
//               count++;
//               haveSeenVowel = false;
//             } else {
//               haveSeenVowel = true;
//             }
//             break;
//           }
//         default:
//           haveSeenVowel = false
//       }
//     }
  
//     return count
//   }
  
//   console.log(findOccurrences());



//-------QUESTION # 8----------

// var myInput = +prompt("Enter distance in KM ");
// function myMeters(){  
//   var a = myInput*1000;
//   console.log(a + " meters");
// }
// myMeters();

// function myfeet(){  
//   var a = myInput*3280.84;
//   console.log(a + " feets");
// }
// myfeet();

// function myInch(){  
//   var a = myInput*39370.1;
//   console.log(a + " Inches");
// }
// myInch();

// function myCentimeter(){  
//   var a = myInput*100000;
//   console.log(a + " Centimeters");
// }
// myCentimeter();



//-------QUESTION # 9----------

// function overTime(){
//   if(workingHours>40){
//     var overtime = workingHours - 40;
//     var amount = overtime * 12.00;
//     console.log("Your overtime pay is "+amount);
//   }
//   else{
//     console.log("You have to work for more than 40 hours to get over time pay")
//   }
// }
// var workingHours = +prompt("Enter your working hours")
// overTime();



//-------QUESTION # 10----------

// function denomination(){
//   var h = amount/100;
//   var f = (amount%100)/50;
//   var t = ((amount%100)%50)/10;
//   var r = (((amount%100)%50)%10);
//   console.log(parseInt(h + " hundreds notes"));
//   console.log(parseInt(f + " fifty notes"));
//   console.log(parseInt(t + " ten notes"));
//   console.log(parseInt(r + " remaining notes"));
// }
// var amount = +prompt("Enter your amount ");
// denomination();


// -----------------------------------------------------------------------------------