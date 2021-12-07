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
    get numberOfBeds() {
        return this.showBedAmount();
    }
    showBedAmount(){
        return this.amountBeds
    }
}

let amountHospitals = 12
let amountBeds = 200
let sampleArray = []
let superArray = []
for (let i = 0; i < amountHospitals; i++) {
    sampleArray = []
    sampleArray.push('hospitalNbr'+i.toString())
    sampleArray.push (new Hospital('sampleName','defaultRegion', i, []))
    superArray.push(sampleArray)
}

function searchForHospital(searchString){
    for(let i=0; i < superArray.length; i++){
        if(superArray[i][0] == searchString){
            console.log(superArray[i][1])
            return superArray[i][1]
        }
    }
}
searchForHospital('hospitalNbr5')

var sampleBed1 = new Bed('testBed1')
var sampleBed2 = new Bed('testBed2')
var sampleBed3 = new Bed('testbed3')

var sampleHospital = new Hospital()

sampleBed1.pushToHospital(sampleHospital)

let hosDic = {}
hosDic["sampleHos1"] = new Hospital()
console.log('the following might be cool')
console.log(hosDic.sampleHos1)

