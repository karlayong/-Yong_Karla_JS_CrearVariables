
//requirements
var minimumAge = 10;
var minimumHigh = 100; //1 meter in centimeters

//personOneDates; 
var imputAge= 12;
var imputHigh= 152;  //height in centimeters

//compareDates
let compareAge =imputAge >= minimumAge;
let compareHigh =imputHigh >= minimumHigh;

//resultados de los requisitos en la pagina web
if(compareAge == true && compareHigh== true) 
    {document.write("¡Felicidades! Si cumples con los requisitos");}
else{
    document.write('¡Lo sentimos, no cumples con los requisistos!');}


