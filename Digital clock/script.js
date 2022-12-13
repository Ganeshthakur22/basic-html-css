var hourE1=document.getElementById("hour")
var minuteE1=document.getElementById("minutes")
var secondE1=document.getElementById("seconds")
var ampmE1=document.getElementById("ampm")


function upperCase(){

var h = new Date().getHours();
var m = new Date().getMinutes();
var s = new Date().getSeconds();
var ampm="AM"; 

if(h > 12){
   h =h- 12;
   ampn="PM"
}

h = h< 10 ? "0" + h :h;
m = m< 10 ? "0" + m :m;
s = s< 10 ? "0" + s :s;
 hourE1.innerText=h
 minuteE1.innerText=m
 secondE1.innerText=s
 ampmE1.innerText=ampn
 setTimeout(()=>{
   upperCase()
},1000);

}


upperCase();