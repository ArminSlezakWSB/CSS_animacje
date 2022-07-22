//======================================
//POBARANIE WSKAZOWEK
//======================================
var sec = document.getElementById("second");
var min = document.getElementById("minute");
var hour = document.getElementById("hour");

//======================================
//POBARANIE CZASU LOKALNEGO
//======================================
var d = new Date();
var s = d.getSeconds();
var m = d.getMinutes();
var h = d.getHours();
//console.log(h +" : "+ m +" : "+ s);

//======================================
//USTAWIENIE STOPNI ZEGARA
//======================================
/*var degreeS = (s*6)-90;
var degreeM = (m*6)-90;
var degreeH = (h*30)-90;*/

var degreeS = (s*6)-90;
var degreeM = ((m*6)+(s*.1))-90;
var degreeH = ((h*30)+(m*.5))-90;

min.style.transform = "rotate("+degreeM+"deg)";
hour.style.transform = "rotate("+degreeH+"deg)";

window.onload = move();
function second()
{
    degreeS+=6;
    sec.style.transform = "rotate("+degreeS+"deg)";
    if(degreeS >360)degreeS = 0; 
    if(degreeS==270)minute();
    setTimeout(second, (1000));
}

function minute()
{
    degreeM+=6;
    min.style.transform = "rotate("+degreeM+"deg)";
    if(degreeM >360)degreeM = 0; 
    if(degreeM ==270)hours();
}
function hours()
{
    degreeH+=30;
    hour.style.transform = "rotate("+degreeH+"deg)";
    if(degreeH >360)degreeH = 0;
}

function move()
{
    degreeS+=6;
    
    degreeH+=30/3600;
    hour.style.transform = "rotate("+degreeH+"deg)";
    
    degreeM+=.1;
    min.style.transform = "rotate("+degreeM+"deg)";
    
    sec.style.transform = "rotate("+degreeS+"deg)";
    if(degreeS >360)degreeS = 0; 
    setTimeout(move, (1000));
}