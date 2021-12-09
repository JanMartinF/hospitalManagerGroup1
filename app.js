console.log("testing the commit feature")

window.onload = function () {
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
        hospital1 = new Hospital('KrankenhausSektor1', 'Sektor1', 40, [])
        hospital2 = new Hospital('KrankenhausSektor2', 'Sektor2', 40, [])
        hospital3 = new Hospital('KrankenhausSektor3', 'Sektor3', 40, [])
        hospital4 = new Hospital('KrankenhausSektor4', 'Sektor4', 40, [])
        hospital5 = new Hospital('KrankenhausSektor5', 'Sektor5', 40, [])
        hospital6 = new Hospital('KrankenhausSektor6', 'Sektor6', 40, [])

        listOfAllHospitals = [hospital1, hospital2, hospital3, hospital4, hospital5, hospital6]

        testBed = new Bed()
    }
}
