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
console.log(hospitalList.length, "this is the length")


console.log(hospitalDict)
function createHospitalTable(listOfHospitals){
    const table = document.createElement('table');
    for(let i = 0; i < listOfHospitals.length; i++){
        console.log('test i', listOfHospitals[i])
        const tr = table.insertRow();
        for(let j=0; j<4; j++){
            console.log('test j')
            const td = tr.insertCell();
            td.appendChild(document.createTextNode(`'Cell I${i}/J${j}' ${listOfHospitals[i].name}`));
        }
    }

}
createHospitalTable(hospitalList)
let newHospital = new Hospital('First Light Hospital', 'Region1', 16, [])

neededBeds = 12
for(let i=0; i < neededBeds; i++){
    newHospital.listOfbeds.push(new Bed())
}
console.log(newHospital.listOfbeds)