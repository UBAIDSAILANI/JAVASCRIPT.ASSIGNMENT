// q#1
// function jkl(){
// var date = new Date();
// document.write(date + "<br/>")
// }
// jkl()
// q#2
// function name() {
    
//      var firstName = "Ubaid ur"
//      var lastName = "Rehman";
//      document.write("Hello "+ firstName + " " + lastName +" <br/>");
//      }
//      name()
     // q#3
// function sum(){
//      var num1 = +prompt("Enter the number 1");
//      var num2 = +prompt("Enter the Number 2");
//      document.write(num1 + num2 + "</br>");
// }
//     sum()
// q#4
// function calculator(){
//      var num3 = +prompt("Enter number for calculator");
//      var opt = prompt("Enter the operator");
//      var num4 = +prompt("Enter number 2 to calculate");
//      if (opt === "+") {
          
//           document.write("The addition result is " +  (num3 + num4))
//      }
//      else if (opt === "-") {
//           document.write("The substraction result is " + (num3 - num4))
//      }
//      else if (opt === "/") {
//           document.write("The division result is " + num3 / num4)

//      }
//      else if (opt === "*") {
//           document.write("The multiplication result is " + num3 * num4)
//      }
//      else (document.write("Please Enter the Numbers or correct oprator" +"</br>"))
// }
// calculator();
// q#5
// function square(){
//      var sqNum = +prompt("Enter the number");
//      document.write("The square of your value is: " + sqNum*sqNum + "<br/>");
// }
// square();
// q#6
// function factorial(){
//      var fact = 1
//      var n = +prompt("Enter number for Factorial");
//      for (i = 1 ; i <= n; i++){
//           fact = fact*i;
//      }
//      document.write("Factorial" +fact);
// }
// factorial()
// q#7
// function jkl(){
//      var userFirst = +prompt("Enter start number");
//      var userLast = +prompt("Enter last number");

//      for(i = userFirst; i <= userLast; i++){
//           document.write(i +"</br>");
//      }

// }
// jkl()
// Q#8
// function hyp(){
//      var per = +prompt("Enter perp value");
//      var base = +prompt("enter base value");
//      var a = Math.pow(per, 2);
//      var b = Math.pow(base, 2);
     
//      var outer = Math.sqrt(a + b);
//      document.write("Outer Function is " + outer + "<br>");
//      var outer2 = Math.pow(outer ,2);
//      document.write("The Inner function is " + outer2)
// }
// hyp()
// Q#9
// function area(a ,b){
     // var a = +prompt("Enter the width");
     // var b = +prompt("Enter the length");
     // document.write(a*b)
// }
// area(2, 3)
// b
// function area(a , b){
//      var a = +prompt("Enter the width");
//      var b = +prompt("Enter the length");
//      var c = a*b
//      alert("area " + c)
// }
// area(c);
// q#10

// function palidrome(){
//       var user = prompt("Enter the word");
//       var check = user.split("").reverse().join("")
//       document.write(user + " " + check)
//       if(user === check){
//           document.write("it a palidrome word")
//       }
//       else(document.write("it is not a palindrome word"))      
// }
// palidrome()
// q#11
// function titleCase(){
//      var user = prompt("Enter the sentence");
//      document.write("User input : " + user + "<br>");
//      document.write("Title Case: ")
//      var a = user.split(" ");
//      for(i=0; i < a.length; i++){
//           a[i] = a[i].charAt(0).toUpperCase() + a[i].slice(1) + " ";
//           document.write(a[i])
// var a = prompt("Enter the sentence").toUpperCase
// var firstChar = a.split(" ");
// document.write(firstChar)
//      }
     
// }
// titleCase();
// Q#12
// function longWord(a){
//      var a = prompt("Enter the Sentences");
//      var ans = a.split(" ");
//      var str = "";
//      for(var i=0; i < ans.length; i++){
//           if (ans[i].length > str.length){
//                str = ans[i];
//           }
//      }
//      document.write(a + "<br/>");
//      document.write("Longest Word " + ans)
// }
// longWord()
function longestWord(str){ 
  
     var str=prompt("Enteryourstring: ") 
     var splitArrayValue = str.split('') 
      
     var storeWord = ""; 
      
     for (var i = 0; i < splitArrayValue.length; i++) { 
     if (splitArrayValue[i].length > storeWord.length) { 
     storeWord = splitArrayValue[i]; 
     } 
     } 
     // return storeWord; 
     document.write("Actual String is : " + str + "<br>") 
     document.write("Longest word in String is : " + storeWord)
}
longestWord()
// // Q#14
// function circumference_area(){
// function circumference(){

// var r = +parseFloat(prompt("Enter the radius of the circle for circumference"));
// document.write("Circumference of a circle is: " + (2 * Math.PI * r ));
// }
// function area(){
// var r = +parseFloat(prompt("Enter the radius of the circle for area"));
     
//      var area = (Math.PI * r*r)
//      document.write("Area of a Circle: " + area)

// }
// circumference();
// area();
// }
// circumference_area()
// document.write('<h2 style="text-align:center;"><a href="index.html">Back</a></h2>');

