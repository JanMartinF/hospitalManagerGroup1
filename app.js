console.log("testing the commit feature")
var listOfAllHospitals=[]
if(JSON.parse(localStorage.getItem("listOfAllHospitals") ||"[]")){
    listOfAllHospitals=JSON.parse(localStorage.getItem("hospitalList") ||"[]");
}
window.onload = function () {
    localStorage.setItem("hasCodeRunBefore",true);
    if (localStorage.getItem("hasCodeRunBefore")) { // TODO insert: ' === null' before live service
        class Hospital {
            constructor(name = 'defaultName', region='defaultRegion', maxAmountBeds = 40, listOfbeds = []){
                this.name = name;
                this.region = region;
                this.maxAmountBeds = maxAmountBeds;
                this.listOfbeds = listOfbeds;
            }
        }
        class Bed{
            constructor(departureDate = new Date().getTime()){
                this.departureDate = departureDate;
            }
        }
        hospital1 = new Hospital('KrankenhausSektor1', 'Sektor1', 40, []);
        console.log("testing the commit feature 2");
        hospital2 = new Hospital('KrankenhausSektor2', 'Sektor2', 40, []);
        hospital3 = new Hospital('KrankenhausSektor3', 'Sektor3', 40, []);
        hospital4 = new Hospital('KrankenhausSektor4', 'Sektor4', 40, []);
        hospital5 = new Hospital('KrankenhausSektor5', 'Sektor5', 40, []);
        hospital6 = new Hospital('KrankenhausSektor6', 'Sektor6', 40, []);

        listOfAllHospitals = [hospital1, hospital2, hospital3, hospital4, hospital5, hospital6]

        testBed = new Bed();

        localStorage.setItem("hospitalList", JSON.stringify(listOfAllHospitals))  
    }
}

function fill_beds(){
    let new_beds_filled = document.getElementById("filled_beds").value;
    console.log(new_beds_filled);
    let remaining_beds = listOfAllHospitals[0].maxAmountBeds - new_beds_filled;
    document.getElementById("remaining_beds_label").innerHTML = parseInt(remaining_beds);
    console.log(new_beds_filled);
    console.log(remaining_beds);
}

//test
let TestName = listOfAllHospitals[0]
//Testfix
console.log(TestName.name) 