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

