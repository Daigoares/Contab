const {ipcRenderer} = require("electron");
const ipc = ipcRenderer ;




const closeBtn1 = document.getElementById('closeBtn');
const maxResBtn1 = document.getElementById('maxResBtn');
const minimizeBtn1 = document.getElementById('minimizeBtn');
const contenedor = document.getElementById("pincipalBtns");
const Archivos = document.getElementById("Archivos");
const Comprobantes = document.getElementById("Comprobantes");
const Consolidacion = document.getElementById("Consolidacion");
const Reportes = document.getElementById("Reportes");
const Analisis = document.getElementById("Analisis");
const Presupuesto = document.getElementById("Presupuesto");
const ConsolidacionB = document.getElementById("ConsolidacionB");
const Sunat = document.getElementById("Sunat");       
const Ajustes = document.getElementById("Ajustes");
            
let imagen = document.createElement("img");
let angulo = 0;

imagen.src = "icons/ajustes2.png";
imagen.width = 20;
imagen.height = 20;
Ajustes.appendChild(imagen);
Ajustes.addEventListener("mouseover", function() {
    imagen.src = "icons/ajustes1.png";
});
Ajustes.addEventListener("mouseout", function() {
    imagen.src = "icons/ajustes2.png";
});

window.addEventListener('resize',()=>{
if(window.innerWidth >= 960){
    Archivos.style.display = "";
    Comprobantes.style.display = "";
    Consolidacion.style.display = "";
    Reportes.style.display = "";
    Analisis.style.display = "";
    Presupuesto.style.display = "";
    ConsolidacionB.style.display = "";
    Sunat.style.display = "";
    Ajustes.style.display = "none";   
}else{
    Archivos.style.display = "none";
    Comprobantes.style.display = "none";
    Consolidacion.style.display = "none";
    Reportes.style.display = "none";
    Analisis.style.display = "none";
    Presupuesto.style.display = "none";
    ConsolidacionB.style.display = "none";
    Sunat.style.display = "none";
    Ajustes.style.display = ""; 
}
})
            

closeBtn1.addEventListener('click', ()=>{
    ipc.send('closeApp')
}) 
maxResBtn1.addEventListener('click', ()=>{
    ipc.send('maxApp')
})
minimizeBtn1.addEventListener('click', ()=>{
    ipc.send('minimizeApp')
})
Ajustes.addEventListener("click", ()=>{
    angulo += 90;
  if (angulo == 360) {
    angulo = 0;
  }
  imagen.style.transform = "rotate(" + angulo + "deg)";
  
  ipc.send('ajustesApp')
});
