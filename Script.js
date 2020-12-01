    

var TimerID = null;
var timerRun = false;

function stopclock(){
    if(timerRun){
        clearTimeout(TimerID);
    }
    timerRun = false;
}

function startclock(){
    stopclock();
    showTime();
}
function plusDivs(n) {
  showDivs(slideIndex += n);
}
function showTime(){
    var dni = ["","Poniedzia³ek", "Wtorek", "Œroda", "Czwartek", "Pi¹tek", "Sobota", "Niedziela"];
    var miesi = ['Stycznia', 'Lutego', 'Marca', 'Kwietnia', 'Maja', 'Czerwca', 'Lipca', 'Sierpnia', 'Wrzeœnia', 'Pa¿dziernika', 'Listopada', 'Grudnia'];
    var data_n = new Date();
    var rok = data_n.getFullYear();
    var mies = data_n.getMonth();
    var fdzien = data_n.getDate();
    var dzien = data_n.getDay();
    var godz = data_n.getHours();
    var min = data_n.getMinutes();
    var sek = data_n.getSeconds();

    var czas= dni[dzien];
    czas += " "+ fdzien;
    czas += " "+ miesi[mies];
    czas += " " + rok;
    czas += " | "+godz;
    czas +=((min<10) ? ":0" : ":") + min;
    czas +=((sek<10) ? ":0" : ":") + sek;

    document.getElementById('zegar').innerHTML = czas;
    TimerID = setTimeout("showTime()", 1000);
    timerRun = true;
}

var nr =0;

function zmiana(){

    var obrazy =['1.jpg', '2.jpg', '3.jpg', '4.jpg'];
    nr++;

    if(nr==obrazy.length) {
    	nr=0;
    }

    document.getElementById('baner').src = "slider/"+obrazy[nr];
    setTimeout(zmiana, 10000);
}

var taknie= true;
function animacja() {
    var blok=document.getElementById('napis');
	

    if(parseInt(blok.style.left)<1) taknie = true;
    else if(parseInt(blok.style.left)>window.innerWidth-200) taknie = false;

    if(taknie == true){
        blok.style.left=(parseInt(blok.style.left)+1) +"px";
    }
    else {
        blok.style.left=(parseInt(blok.style.left)-1) +"px";
    }
}

startclock();
window.setInterval(animacja, 30); 
window.onload=zmiana();   

