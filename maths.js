// var myValue= Math.sqrt(64);
// document.write(myValue + "<br>");
// var myValueone= Math.pow(8,2);
// document.write(myValueone + "<br>");
// var myValuethree= Math.min(0,100, -10, 4000);
// document.write(myValuethree + "<br>");
// var myValuefour= Math.max(0,100, -10, 4000);
// document.write(myValuefour + "<br>");
// var myValuefive= Math.random();
// document.write(myValuefive + "<br>");
// var myValuesix= Math.abs(4.4);
// document.write(myValuesix + "<br>");
// var myValueseven= Math.floor(3.4);
// document.write(myValueseven + "<br>");
// var myValueeight= Math.ceil(3.4);
// document.write(myValueeight + "<br>");
// var reg = (/Mubashir/g);
// var s = "My Name is Mubashir, Mubashir is also my teacher name";
// document.write(s+ "<br>");
// var sone= s.search(reg)
// document.write(sone + "<br>");
// var stwo= s.match(reg);
// document.write(stwo + "<br>");
// var sthree= s.input(reg+ "<br>");
// document.write(sthree);
// var sfour = reg.exec(s);
// document.write(sfour+ "<br>");
// var sfive = s.replace(reg,"Sana");
// document.write(sfive);
var p = document.getElementById("one").innerHTML;
// document.write(search);
var regone = (/Mubashir/) 
document.write(p.search(regone));
var pone = p.match(regone);
document.write(pone);

