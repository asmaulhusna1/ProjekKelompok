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

//Gelas Ketiga
var grd=context.createLinearGradient(0,0,270,0);

//badan
grd.addColorStop("0","#F4A460");
grd.addColorStop("0.5","#4169E1");
context.fillStyle=grd;
context.fillRect(900,180,150,210); 
context.strokeStyle="#000000";
context.lineWidth=1.5;
context.strokeRect(900,180,150,210);

//tutup
grd.addColorStop("0","#ADD8E6");
grd.addColorStop("0.3","#8ED6FF");
grd.addColorStop("1","#4169E1");
context.fillStyle=grd;
context.fillRect(1024,30,25,150); 
context.strokeStyle="#000000";
context.lineWidth=1;
context.strokeRect(1024,30,25,150);

//pegangan 
grd.addColorStop("0.4","#87CEEB");
grd.addColorStop("0.5","#8ED6FF");
context.fillStyle=grd;
context.fillRect(1048,90,25,24); 
context.strokeStyle="#000000";
context.lineWidth=0.8;
context.strokeRect(1048,90,25,24);

// //Gelas Kedua
var grd=context.createLinearGradient(0,0,270,0);

//2 badan
grd.addColorStop("0","#F4A460");
grd.addColorStop("0.3","#4169E1");
grd.addColorStop("0.5","#F4A460");
grd.addColorStop("0.6","#4169E1");
grd.addColorStop("0.8","#F4A460");
grd.addColorStop("0.9","#8ED6FF");
grd.addColorStop("1","#4169E1");
context.fillStyle=grd;
context.fillRect(480,180,150,210); 
context.strokeStyle="#000000";
context.lineWidth=1.5;
context.strokeRect(480,180,150,210);

//tutup
grd.addColorStop("0","#ADD8E6");
grd.addColorStop("0.3","#8ED6FF");
grd.addColorStop("0.5","#F4A460");
grd.addColorStop("0.6","#4169E1");
grd.addColorStop("0.8","#F4A460");
grd.addColorStop("1","#4169E1");
context.fillStyle=grd;
context.rotate(Math.PI/4);
context.fillRect(423,-348,150,32); 
context.strokeStyle="#000000";
context.lineWidth=1;
context.strokeRect(423,-348,150,32);

//pegangan 
// grd.addColorStop("0","#ADD8E6");
// grd.addColorStop("0.2","#ADD8E6");
// grd.addColorStop("0.3","#8ED6FF");
// grd.addColorStop("0.5","#87CEEB");
// grd.addColorStop("0.6","#87CEEB");
// grd.addColorStop("0.8","#4169E1");
// grd.addColorStop("0.9","#8ED6FF");
// grd.addColorStop("1","#4169E1");
// context.fillStyle=grd;
context.fillStyle="#7B68EE";
context.rotate(Math.PI/2);
context.fillRect(-374,-512,25,24); 
context.strokeStyle="#000000";
context.lineWidth=0.8;
context.strokeRect(-374,-512,25,24);

