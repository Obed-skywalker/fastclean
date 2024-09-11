const APP ={
data:[],
init(){
    APP.addListeners();
},
addListeners() {
    const form = document.querySelector('#collect form');
    form.addEventListener('submit', APP.saveData);
document
.getElementById('btnExport')
.addEventListener('click',APP.exportData);

document
.querySelector('table tbody')
.addEventListener('dbclick', APP.editCell);

}
}
