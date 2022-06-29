// assignment 8
// q#1
var int = +prompt("Enter the positive integer");
document.write(int + "<br/>");
document.write("Round of value is " + Math.round(int) + "</br>");
document.write("floor value is " + Math.floor(int) + "</br>");
document.write("ceil value is " + Math.ceil(int) + "<br/>");
// Q#2
var neg = +prompt("Enter the positive integer");
document.write(neg + "<br/>");
document.write("Round of value is " + Math.round(neg) + "</br>");
document.write("floor value is " + Math.floor(neg) + "</br>");
document.write("ceil value is " + Math.ceil(neg));
// q#3
var abs = +prompt("Enter the number");
document.write(Math.floor(abs))
// q#4
var random = Math.random();
var jkl = (random * 6) +1 ;
var dice = (Math.floor(jkl));
document.write(dice);
// q#5
var first = Math.random();
var second = (first*2) + 1;
var win = Math.floor(second);
document.write(win)
// q#6
var first = Math.random();
var second = (first*100) + 1;
var win = Math.floor(second);
document.write(win)
// Q#7
var weight = prompt("Enter your weight");
var newWeight = document.write("your given weight is " + parseFloat(weight) + "Kilograms")
// q#8
var first = Math.random();
var second = (first*10) + 1;
var win = Math.floor(second);
var user = prompt("Enter your lucky number 1 to 10")
if(user == win){
    alert ("Your are winner")
}
else("Try again!")
