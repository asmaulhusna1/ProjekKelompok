var myCanvas = document.getElementById('myCanvas');
var context = myCanvas.getContext('2d');
myCanvas.width= myCanvas.scrollWidth;
myCanvas.height=myCanvas.scrollHeight;

//Gelas Awal
var grd=context.createLinearGradient(0,0,270,0);

//1 badan
grd.addColorStop("0","#F4A460");
grd.addColorStop("0.5","#4169E1");
context.fillStyle=grd;
context.fillRect(70,180,150,210); 
context.strokeStyle="#000000";
context.lineWidth=1.5;
context.strokeRect(70,180,150,210);

//tutup
grd.addColorStop("0","#ADD8E6");
grd.addColorStop("0.3","#8ED6FF");
grd.addColorStop("1","#4169E1");
context.fillStyle=grd;
context.fillRect(70,149,150,32); 
context.strokeStyle="#000000";
context.lineWidth=1;
context.strokeRect(70,149,150,32);

//pegangan 
grd.addColorStop("0.4","#87CEEB");
grd.addColorStop("0.5","#8ED6FF");
context.fillStyle=grd;
context.fillRect(133,124,25,24); 
context.strokeStyle="#000000";
context.lineWidth=0.8;
context.strokeRect(133,125,25,24);

