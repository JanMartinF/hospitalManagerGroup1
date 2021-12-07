class Bed {
    constructor(patientName = 'defaultPatientName', occupied = false, occupiedForDuration = 7, belongsTo = 'defaultHospital'){
        this.occupied = occupied;
        this.occupiedForDuration = occupiedForDuration;
        this.patientName = patientName;
        this.belongsTo = belongsTo;
    }
    pushToHospital(hospitalName){
        hospitalName.listOfbeds.push(this)
        this.belongsTo = hospitalName
    }
}
class Hospital {
    constructor(name = 'defaultName', region='defaultRegion', maxAmountBeds = 12, listOfbeds = []){
        this.name = name;
        this.region = region;
        this.maxAmountBeds = maxAmountBeds;
        this.listOfbeds = listOfbeds;
    }
}
let neededHospitals = 10
let hospitalDict = {}
let hospitalList = []
for(let i=0; i<neededHospitals; i++ ){
    tempHospital = new Hospital('sampleName'+i, 'regionNbr'+i, 12, [])
    hospitalDict["hospital"+i] = tempHospital
    hospitalList.push(tempHospital)
}

function createHospitalTable(listOfHospitals){
    const table = document.createElement('table');
    firstRow = table.insertRow()
    firstRow.insertCell(0).appendChild(document.createTextNode('Name'));
    firstRow.insertCell(1).appendChild(document.createTextNode('Region'));
    firstRow.insertCell(2).appendChild(document.createTextNode('Max. capacity'));
    firstRow.insertCell(3).appendChild(document.createTextNode('Current capacity'));
    for(let i = 0; i < listOfHospitals.length; i++){
        const tr = table.insertRow();
        tr.insertCell(0).appendChild(document.createTextNode(`'name: ' ${listOfHospitals[i].name}`));
        tr.insertCell(1).appendChild(document.createTextNode(`'region: ' ${listOfHospitals[i].region}`));
        tr.insertCell(2).appendChild(document.createTextNode(`'max capacity: ' ${listOfHospitals[i].maxAmountBeds}`));
        tr.insertCell(3).appendChild(document.createTextNode(`'current capacity ' ${listOfHospitals[i].maxAmountBeds-listOfHospitals[i].listOfbeds.length}`));
    }
    document.body.appendChild(table)
}
let keys = Object.keys(hospitalList[0])
console.log('this should be a list of keys: ', keys)
createHospitalTable(hospitalList)
let newHospital = new Hospital('First Light Hospital', 'Region1', 16, [])

neededBeds = 12
for(let i=0; i < neededBeds; i++){
    newHospital.listOfbeds.push(new Bed())
}