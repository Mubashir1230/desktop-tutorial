import {a,b,c,d,e,name} from "./module/fileone.js";
document.getElementById("Total").innerHTML= d;
document.getElementById("english").innerHTML= a;
document.getElementById("Urdu").innerHTML= b;
document.getElementById("Maths").innerHTML= c;
document.getElementById("Percentage").innerHTML= e+"%";
document.getElementById("Name").innerHTML= name;

if(e<=100 && e>=80){
    document.getElementById("Grade").innerHTML= "A+";
}
else if(e<=80 && e>=70){
    document.getElementById("Grade").innerHTML= "A";
}
else if(e<=70 && e>=60){
    document.getElementById("Grade").innerHTML= "B";
}
else if(e<=60 && e>=50){
    document.getElementById("Grade").innerHTML= "C";
}
else{
    document.getElementById("Grade").innerHTML= "Failed";
}