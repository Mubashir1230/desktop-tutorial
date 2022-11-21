// var myName = "Mubashir";
// var _myName="Mubashir";
// var 3myName = "Mubashir";
// var _my_Name = "Mubashir";
// var my name ="Mubashir";
// var myname$ ="Mubashir";
// console.log(myname$);
var a = prompt("1st Number");
var a = parseInt(a);
var b = prompt("2nd Number");
var b = parseInt(b);
var c = prompt("Operator");

// document.getElementById("abc").innerHTML = a + b;
// document.getElementById("abc").innerHTML = a - b;
// document.getElementById("abc").innerHTML = a * b;
// document.getElementById("abc").innerHTML = a / b;
// document.getElementById("abc").innerHTML = a % b;

if(c == "+"){
    document.getElementById("abc").innerHTML = a + b;
}
else if(c == "-"){
    document.getElementById("abc").innerHTML = a - b;
}
else if(c == "*"){
    document.getElementById("abc").innerHTML = a * b;
}
else if(c == "/"){
    document.getElementById("abc").innerHTML = a / b;
}
else if(c == "%"){
    document.getElementById("abc").innerHTML = a % b;
}
else{
    document.getElementById("Wrong Operator");
}