class Rectangle {
    constructor(height, width) {
      this.height = height;
      this.width = width;
    }
    get area() {
        return this.calcArea();
    }
    calcArea(){
        return this.height * this.width
    }
  }

var sampleRect = new Rectangle(10,10)

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
    constructor(name = 'defaultName', region='defaultRegion', amountBeds = 12, listOfbeds = []){
        this.name = name;
        this.region = region;
        this.amountBeds = amountBeds;
        this.listOfbeds = listOfbeds;
    }
    get numberOfBeds() {
        return this.showBedAmount();
    }
    showBedAmount(){
        return this.amountBeds
    }
}
var sampleBed1 = new Bed('testBed1')
var sampleBed2 = new Bed('testBed2')
var sampleBed3 = new Bed('testbed3')

var sampleHospital = new Hospital()

// sampleHospital.listOfbeds.push(sampleBed1, sampleBed2, sampleBed3)
sampleBed1.pushToHospital(sampleHospital)
console.log(sampleHospital.listOfbeds[0].patientName)
console.log(sampleHospital.listOfbeds[0].belongsTo.name)
