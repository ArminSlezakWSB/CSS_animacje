//var wMin = 0, wMax = document.getElementById("pole").style.width;
//var hMin = 0, hMax = document.getElementById("pole").style.height;

var posX = 0, posY = 0;

var kulka = document.getElementById("kulka");

var plusX = true, plusY = true;

window.onload = ruch();

function ruch()
{
    if(posX >= 590)
        {
            plusX = true;
        }else if(posX <= 0){
            plusX = false;
        }
    if(posY >= 390)
        {
            plusY = true;
        }else if(posY <= 0){
            plusY = false;
        }
    
    if(plusX == true)  posX-=1;
    else posX+=1;
    if(plusY == true) posY-=1;
    else posY+=1;
    
    
    kulka.style.left = posX +'px';
    kulka.style.top = posY +'px';
    
    setTimeout(ruch,1);
}
//alert(wMax);
