const {ipcRenderer} = require("electron");
const ipc = ipcRenderer ;

const closeBtn1 = document.getElementById('closeBtn');
const maxResBtn1 = document.getElementById('maxResBtn');
const minimizeBtn1 = document.getElementById('minimizeBtn');

closeBtn1.addEventListener('click', ()=>{
    ipc.send('closeApp')
}) 
maxResBtn1.addEventListener('click', ()=>{
    ipc.send('maxApp')
})
minimizeBtn1.addEventListener('click', ()=>{
    ipc.send('minimizeApp')
})