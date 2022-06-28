// // chapter 9-11
// // question#1
// var city = prompt("Enter the city Name");
// if (city === "Karachi"){
//     alert ("Welcome to city of Lights");
// }
// else{ alert("You are not from Karachi")}
// // question#2
// var user = prompt("Enter your Gender");
// if (user === "male"){
//     alert("Good Morning Sir")}
// if(user === "female"){
//     alert("Good Morning Ma'am")

// }
// // Question#2
// var signal = ("<h3>Signal Color and Message</h3>");
// document.write(signal);
// var signalCol = prompt ("what is the color");
// if (signalCol === "Red"){alert("Must Stop");}
//     if(signalCol ==="Yellow")
//     {alert("Ready to Move")}
//     if(signalCol==="Green")
//    { alert("Move")


// }
// // question#3
// var fuelLimit = +prompt("How much fuel remains");
// if (fuelLimit <= 0.25 ){
//     alert("Please refill the fuel")
// }
// else{ alert("safe journey")}
//question#4
// var a = 4;
// if (++a === 5) {
//     alert("given condition for variable a is true");
// }

// var b = 82;
// if (b++ === 83) {
//     alert("given condition for variable b is true");
// }
// var c = 12;
// if (c++ === 13) {
//     alert("condition 1 is true");
// }
// if (c === 13) {
//     alert("condition 2 is true");
// }
// if (++c < 14) {
//     alert("condition 3 is true");
// }
// if (c === 14) {
//     alert("condition 4 is true");
// }
// console.log(a, b, c)
// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost) {
//     alert("The cost equals");
// }
// if (true){
//     alert("True");
//     }
//     if (false){
//         alert("False");
//         }
// if("cat" > "car"){
//      alert("car is greater than cat");}

// question#5
// var Percentage = +prompt("Enter Your Percentage");
// if (Percentage >= 80 &&  Percentage <= 100){
  
//     alert("A-One");
//     alert("Excellent")
// }
// else if(Percentage >= 70 &&  Percentage <= 80)
// {alert("A")
// alert("Good")}

// else if(Percentage >= 60 && Percentage <= 70)
//     { alert("B")
//      alert("You need to improve")}

// else if (Percentage >= 0 && Percentage <= 60) 
//     {alert("Fail")
//     alert("Sorry")
// }
// else (
//     alert("You didn't write correct Percentage")
// )
// question#6
// var tm = +prompt("Total Marks");
// var mo = +prompt("Marks Obtained");
// var per = +prompt("Enter your Percentage");
// var grade = prompt("Your Grade");

// if (per >= 80 && per <= 100){
//     alert("Excellent")
// }
// else if(per >= 70 &&  per <= 80)
// {alert("Good")}
// else if(per >= 60 &&  per <= 70)
// {alert("You need to Improve")}
// document.write("<h1>Mark Sheet</h1>" + "</br>");
// document.write("Total Marks :" + tm + "</br>");
// document.write("Marks Obtained :" + mo + "</br>");
// document.write("Percentage: " + per + "</br>");
// document.write("Total Marks :" + grade + "</br>");
// question#7
// var secretNumber = 8;
// var guessNumber = +prompt("Enter Secret Number");
// if(guessNumber === secretNumber){
//     alert("Bingo! Correct answer")
// }
// else if(guessNumber === secretNumber+1){
//     alert("“Close enough to the correct answer”.")
// }
// else(
//     alert("try Next time")
// )
// question #8
// var d3 = +prompt("Enter the number");
// if (d3 /3){
//     alert("Given Number is divisible by 3")
// }
// else(
//     alert("Can,t divided by 3")
// )
// question#9
// var number = +prompt("Enter a number: ");
// if(number % 2 == 0) {
//     console.log("The number is even.");}
//     else {
//         console.log("The number is odd.");
//     }
// question#10
// var T = +prompt("Enter the Temperature");
// if (T >= 40 && T < 50){
//     document.write("It is too hot Outside")
// }
// else if(T >= 30 && T < 40)
// {document.write("Weather is hot Today")}
// else if(T >= 20 && T < 30)
// {document.write("Weather is Normal Today")}
// else if(T >= 15 && T <20)
// {document.write("Weather is cool Today")}
// else if(T >= 10 && T <15) 
// {document.write("Weather is too cool Today")}
// else(document.write("Khuda Hafiz"))
// console.log(T)
// question#11
// var num1 = +prompt("Enter Num 1");
// var opt = prompt("Enter operator");
// var num2 = +prompt("Enter Num 2");
// if (opt === "+"){
//     document.write(num1+num2)
// }
// else if(opt ==="-"){
//     document.write(num1-num2)
// }
// else if(opt ==="*"){
//     document.write(num1*num2)
// }
// else if(opt ==="/"){
//     document.write(num1/num2)
// }
// else(
//     alert("write a correct operator")
// )
// chapter#12to13
// question#1



// // question#2
// var num_1 = +prompt("Enter a number");
// var num_2 = +prompt("Enter other number");
// if (num_1 > num_2){
//     alert("Num1 is greater")
// }
// else if (num_2 > num_1){
//     alert("Num2 is greater")
// }
// else if (num_1 === num_2){
//     alert("Equal")
// // }
// // question#3
// var numCheck = +prompt("Enter a number");
// if(numCheck > 0){
//     alert("number is positive")
// }
// else if(numCheck < 0){
//     alert("number is negative")
// }
// else     alert("number is zero")
// // question#4
// var vowel = ("a" + "i" + "e"+ "o"+ "u")
// var sTr = prompt("put the string value of length 1")
// if (sTr ===  vowel){
//     alert(true)
// }
// else alert(false)
// console.log(vowel)
// // question#5
// var password = ("ubaidrehman");
// var user_password = prompt("Enter the Password to enter in match");
// if(user_password === ""){
//     alert("Enter the Password")
// }
// else if (user_password === password){
//     document.write("“Correct! The password you entered matches the original password”.")
// }
// else alert("“Incorrect password”");
// // question#6
// var greeting;
// var hour = 19;
// if (hour < 18) {
// greeting = "Good day"}
// else (
// greeting = "Good evening");
// console.log(greeting)
// // question#7
// var time = prompt("enter the time")
// if(time >=0000 && time < 1200){
//     alert("Good Morning")
// }
// else if(time>= 1200 && time < 1700){
//     alert("Good afternoon")
// }
// else if(time>= 1700 && time < 2100){
//     alert("Good Evening")
// }
// else if(time>= 2100 && time < 2359){
//     alert("Good Night")
// }
// chapter# 14to 16
// question#1
var array1 = []

// question#2


// // question#3,4,5,6
// var array1 = ["Multan","Karachi", "Naran", "Kaghan", "Swat", "Kalam",123 , true, false]
// console.log(array1)
// // question#7
// var Qualifications = ["1) SSc",
// "2) HSc",
// "3) BCs",
// "4) BS",
// "5) B.Com",
// "6) MS",
// "7) M.Phil",
// "8) PhD"]
// document.write(Qualifications)
// console.log(Qualifications)
// question#8





// // question#9
// var color_name = ["pink", "blue", "yellow", "orange", "red", "green", "violet"]
// document.write(color_name)

// var c_n = prompt("what color you want to add")
// color_name.unshift("white", "offwhite")

// console.log(color_name)