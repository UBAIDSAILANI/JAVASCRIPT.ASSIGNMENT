// Assimgment # 2
// chapter#3
// question#1
var age = ("I am 30 years old");
alert(age);
// question#2

var time = ("You have visited this site 14 times")
alert(time)
// question#3
var birth_year = document.write("my birth year is 1991")
// question#4
var visitor = ("<b>John doe</b>")
var product = ("")
var message = ("<b>John doe</b>" + " ordered" + "    <b>5 T-Shirts</b>" + " in XYZ clothing Store")
var a = document.write(message);
// Chapter # 4.
// Question # 1.
// var = name, _xyz, $pst
// Question# 2.
// legal_varibale = _name $name king, camelCase, best123
// illegal variable = (linda cin, 1wer, .king var)
// question#3 a b c d e.
var a = document.write ("<h1>Rules for naming JS variables</h1>");
console.log(a)
var b = document.write("letter, number, _ , $")
var c = document.write("sensitive")
var d = document.write("keywords")
// chapter#5
// Question#1
var num1 = 2;
var num2 = 3;
var tn = (num1 + num2);
var show = document.write( "sum of 3 and 3 is 5")
// question#2.
var num1 = 2;
var num2 = 3;
var a = (num1 - num2);
var x = document.write(a)
var num3 = 2;
var num4 = 3;
var b = (num3 / num4);
var y = document.write(b)
var num5 = 2;
var num6 = 3;
var c = (num5 * num6);
var z = document.write(c)
// question#3
var a = 33;
document.write("intial value is "+ a + ("<br>"))
var b = ++a
document.write("value after increment is " + b + "</br>")
var c = b + 7
document.write("value after addition is " + c + "</br>")  
var d = --c
document.write("value after decrement is " + c + "</br>")
var e = d / 3;
document.write(e  + ("</br>")) 
var f = e % 13
document.write(f)
// question#4
var ticket_cost = 600
document.write("total price of 5 tickets is " + ticket_cost*5 +"pkr")
// question#5
document.write("Table of 4" + "</br>"
+"4"+"x"+"1"+"="+"4"+ "</br>"
+"4"+"x"+"2"+"="+"8"+ "</br>"
+"4"+"x"+"3"+"="+"12"+ "</br>"
+"4"+"x"+"4"+"="+"16"+ "</br>"
+"4"+"x"+"5"+"="+"20"+ "</br>"
+"4"+"x"+"6"+"="+"24"+ "</br>"
+"4"+"x"+"7"+"="+"28"+ "</br>"
+"4"+"x"+"8"+"="+"32"+ "</br>"
+"4"+"x"+"9"+"="+"36"+ "</br>"
+"4"+"x"+"10"+"="+"40"+ "</br>") 
// Question#6
var Celcius = "25°C";
document.write(Celcius);
var farenhiet = ((25 * 9/5) + 32)+ "°F";
document.write(farenhiet + "</br>");
var faranhiet = ((25 * 9/5) + 32)+ "°F";
document.write(farenhiet);
var celcius = ((70 - 32) * 5/9)+ "°C";
document.write(celcius);
// question#7
var heading = ("<h1>Shopping Cart</h1>")
document.write(heading);
var item_1 = 650
var item_2 = 100
var Qitem_1 = 3
var Qitem_2 = 7
document.write("Price of Item 1 is " + item_1 + "</br>");
document.write("Quantity of Item 1 is " + Qitem_1 +"</br>");
document.write("Price of Item 2 is " + item_2 +"</br>");
document.write("Quantity of Item 2 is " + Qitem_2 +"</br>");
var shipping = 100;
document.write("Shipping Charges "+ shipping + "</br>");
+document.write("Total cost of your Order is " + (item_1 * Qitem_1 + item_2 * Qitem_2 + shipping));
// Question#8
var heading = ("<h1>Mark Sheet</h1>");
document.write(heading);
var total_marks = 980;
document.write("Total Marks is " + total_marks + "</br>")
var marks_obtained = 804;
document.write("Marks Obtained " + marks_obtained + "</br>")
var percentage = marks_obtained/total_marks *100
document.write("Percentage is " + percentage + "</br>")
// Question#9
var d_q = 10;
var r_q = 25;
var er_d = 200;
var er_r = 50;
document.write("Total currency in Pkr is " + (d_q*er_d + r_q*er_r));
// Question#10
var a = 10;
document.write((a+5)*10 / 2);
// question#11
document.write("<h1>Age Calculator</h1>")
var currentYear = 2022;
var birth_year = 1991;
alert(currentYear-birth_year);
document.write("current year is " + currentYear +"</br>");
document.write("Birth year is " + birth_year+"</br>");
document.write("your age is " + (currentYear-birth_year) +"</br>");
// Question#12
var radius = 20;
document.write("The radius of a circle is " + radius +"</br>");
document.write("The circumference of a circle is "+ 2*3.142*radius  +"</br>");
document.write("The area of a circle is "+ 3.142*radius*radius  +"</br>");
// question#13
document.write("<h5>Lifetime Supply Calculator</h5>");
var snack = "lays"
var age = 31;
var e_age = 62;
var amount = 3;
document.write("the favourite snack is " + snack + "</br>")
document.write("the current age  is " + age + "</br>")
document.write("the estimated age is " + e_age + "</br>")
document.write("the daily amount of eating is " + amount + "</br>")
document.write("the will require the total amount of snack to rest of your life is " + (e_age - age)*360*amount + "</br>")
// chapter#6
// question#1
var a = 10;
document.write("Result:" + "</br>");
document.write("the value of a is " + a +"</br>");
var a = ++a
document.write("The value of ++a is: " + a +"</br>");
document.write("Now the value of a is: " + a +"</br>");
var b = a++;
document.write("The value of a++ is: "+ a +"</br>") ;
document.write("Now the value of a is: " + b +"</br>");
var a = --a
document.write("The value of --a is: " + a +"</br>") ;
document.write("Now the value of a is: " + a +"</br>");
var b = a--;
document.write("The value of a-- is: " + a +"</br>");
document.write("Now the value of a is: " + a +"</br>");
// question#2
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
alert(result);
// Question#3
var sim = prompt("Enter Your Name")
alert("Welcome " + sim);
// Question#4
var num1 = +prompt("Enter your Num1")


var opt = prompt("Enter your Operator")


var num2 = +prompt("Enter your Num2")

if (opt === "*"){
    alert (num1 * num2)
}
document.write(num1*num2)
// question#5
var table = +prompt("Enter the table number", "5");
document.write("<p>" + table + " x 1 = " + table*1 + "</p>")
document.write("<p>" + table + " x 2 = " + table*2 + "</p>")
document.write("<p>" + table + " x 3 = " + table*3 + "</p>")
document.write("<p>" + table + " x 4 = " + table*4 + "</p>")
document.write("<p>" + table + " x 5 = " + table*5 + "</p>")
document.write("<p>" + table + " x 6 = " + table*6 + "</p>")
document.write("<p>" + table + " x 7 = " + table*7 + "</p>")
document.write("<p>" + table + " x 8 = " + table*8 + "</p>")
document.write("<p>" + table + " x 9 = " + table*9 + "</p>")
document.write("<p>" + table + " x 10 = " + table*10 + "</p>")