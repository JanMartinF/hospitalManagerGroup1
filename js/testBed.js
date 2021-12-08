let currentDay = new Date().getTime()
var patientsToBeMoved = 0

console.log('initial value',currentDay)

class Bed {
    constructor(patientName = 'defaultPatientName', occupied = false, occupiedUntil = currentDay, belongsTo = 'defaultHospital'){
        this.occupied = occupied;
        this.patientName = patientName;
        this.belongsTo = belongsTo;
        this.maxDurationHospitalization = 7;
        this.occupiedUntil = this.randomizeOccupationDuration(currentDay);

    }
    pushToHospital(desstinationHospital){
        desstinationHospital.listOfbeds.push(this)
        this.belongsTo = desstinationHospital
    }
    randomizeOccupationDuration(currentDay){
        console.log('this is the current day at Bed creation', currentDay)
        let millisecInADay = 1000*60*60*24
        let today = currentDay
        today = today+(Math.floor(Math.random()*this.maxDurationHospitalization)+1)*millisecInADay
        return today
    }
    skipTime(days=1){

    }
}
class Hospital {
    constructor(name = 'defaultName', region='defaultRegion', maxAmountBeds = 40, listOfbeds = []){
        this.name = name;
        this.region = region;
        this.maxAmountBeds = maxAmountBeds;
        this.listOfbeds = listOfbeds;
    }
}
function createHospitals(amountHospitals){
    let neededHospitals = amountHospitals;
    let hospitalDict = {};
    let hospitalList = [];
    for(let i=0; i<neededHospitals; i++ ){
        let randomizedAmountBeds = Math.floor(Math.random()*8)+40;
        tempHospital = new Hospital('sampleName'+i, 'regionNbr'+i, randomizedAmountBeds, []);
        hospitalDict["hospital"+i] = tempHospital;
        hospitalList.push(tempHospital);
    }
    return hospitalList;
}
var hospitalList = createHospitals(6);

function populateHospitalsWithBeds(){
    for(let i=0; i<hospitalList.length; i++){
        let randomBedAmount = Math.floor(Math.random()*hospitalList[i].maxAmountBeds/2)+1;
        for(let j=0; j<randomBedAmount; j++){
            hospitalList[i].listOfbeds.push(new Bed('defaulName', true, currentDay, 'defaultHospital'));
        }
    }    
    createHospitalTable(hospitalList);
}

function movePatient(id){
    let hospitalListTemp = hospitalList;
    patiensToMove = (hospitalListTemp[parseInt(id.slice(13,id.length))].maxAmountBeds-hospitalListTemp[parseInt(id.slice(13,id.length))].listOfbeds.length)*(-1);
    document.getElementById(id).innerText = `patients in transit: ${patiensToMove}`;
    patientsToBeMoved += patiensToMove;
    console.log(patientsToBeMoved);
    for(let i=0; i<hospitalListTemp.length; i++){
        let elementId = `moveButtonRow${i}`;
        if(i == parseInt(id.slice(13,id.length))){
            console.log('my id: ', i);
        }else{
        document.getElementById(elementId).innerText = 'assign patients here';
        console.log('element ID: ', elementId);
        }
    }
}
function createHospitalTable(listOfHospitals){
    document.getElementById('testDiv').innerHTML = "";
    const table = document.createElement('table');
    firstRow = table.insertRow();
    firstRow.insertCell(0).appendChild(document.createTextNode('Name'));
    firstRow.insertCell(1).appendChild(document.createTextNode('Region'));
    firstRow.insertCell(2).appendChild(document.createTextNode('Max. capacity'));
    firstRow.insertCell(3).appendChild(document.createTextNode('Current capacity'));
    for(let i = 0; i < listOfHospitals.length; i++){
        let freeBeds = listOfHospitals[i].maxAmountBeds-listOfHospitals[i].listOfbeds.length;
        const tr = table.insertRow();
        tr.id = `tableRow${i}`;
        tr.insertCell(0).appendChild(document.createTextNode(`${listOfHospitals[i].name}`));
        tr.insertCell(1).appendChild(document.createTextNode(`${listOfHospitals[i].region}`));
        tr.insertCell(2).appendChild(document.createTextNode(`${listOfHospitals[i].maxAmountBeds}`));
        if(freeBeds>=0){
            tr.insertCell(3).appendChild(document.createTextNode(`${freeBeds}`));
        }else{
            tr.insertCell(3).appendChild(document.createTextNode(`0`));
            tr.insertCell(4).appendChild(document.createTextNode(`Warning: ${freeBeds*(-1)} additional beds are needed`));
            let button = document.createElement('BUTTON');
            button.innerHTML = `move patients from ${listOfHospitals[i].name}`;
            button.setAttribute("onclick", "movePatient(id)");
            button.id = `moveButtonRow${i}`;
            tr.insertCell(5).appendChild(button);
        }
    }
    document.getElementById('testDiv').appendChild(table);
}

createHospitalTable(hospitalList);

function updateAllBeds(){
    for(let i=0; i<hospitalList.length; i++){
        for(let j=0; j<hospitalList[i].listOfbeds.length; j++){
            if(currentDay >= hospitalList[i].listOfbeds[j].occupiedUntil){
                hospitalList[i].listOfbeds.splice(j, 1);
            }
        }
    }
}
function skipADay(){
    aDayInMillisec = 1000*60*60*24;
    console.log('today: ', new Date(currentDay));
    currentDay = currentDay + aDayInMillisec;
    console.log('next day: ', new Date(currentDay));
    updateAllBeds();
    createHospitalTable(hospitalList);
}

let today = new Date("06/16/2021");
console.log('today1: ', today);
today = today.getTime() + 1000*60*60*24;
console.log('today2: ', today);
let tempToday = new Date(today);
console.log('today3: ', tempToday);
let dayMilliseconds = new Date().getTime();
let millisecondsToDate = new Date(dayMilliseconds);


let sampleBed = new Bed();
console.log(new Date(sampleBed.occupiedUntil));
