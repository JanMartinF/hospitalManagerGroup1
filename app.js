var listOfAllHospitals = [];
if(JSON.parse(localStorage.getItem("listOfAllHospitals") || "[]")){
    listOfAllHospitals = JSON.parse(localStorage.getItem("hospitalList") || "[]");
}

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
        hospital1 = new Hospital('KrankenhausSektor1', 'Sektor1', 40, []);
        hospital2 = new Hospital('KrankenhausSektor2', 'Sektor2', 40, []);
        hospital3 = new Hospital('KrankenhausSektor3', 'Sektor3', 40, []);
        hospital4 = new Hospital('KrankenhausSektor4', 'Sektor4', 40, []);
        hospital5 = new Hospital('KrankenhausSektor5', 'Sektor5', 40, []);
        hospital6 = new Hospital('KrankenhausSektor6', 'Sektor6', 40, []);

        listOfAllHospitals = [hospital1, hospital2, hospital3, hospital4, hospital5, hospital6];

        testBed = new Bed();
        localStorage.setItem('hospitalList', JSON.stringify(listOfAllHospitals));
        localStorage.setItem('hasCodeRunBefore', true)
    }
}
function change_pageIndex(){
    window.location.href = 'index.html';
}
function change_page2(){
    window.location.href = 'screen2.html';
}
function change_page3(){
    window.location.href = 'screen3.html';
}
function testFuncJan(){

}
console.log(listOfAllHospitals[0].name);
let viewportWidth = document.documentElement.clientWidth;
let viewportHeight = document.documentElement.clientHeight;
console.log('width: ', viewportWidth, ', height: ', viewportHeight);
var canvas = document.getElementById('canvas2').width = viewportWidth*0.9;
canvas = document.getElementById('canvas2').height = viewportHeight*0.8;
if(document.getElementById('screen2header')){
    /** @type {CanvasRenderingContext2D} */
    let viewportWidth = document.documentElement.clientWidth;
    let viewportHeight = document.documentElement.clientHeight;
    let canvas = document.getElementById('canvas2');
    let ctx = canvas.getContext("2d");
    /** @type {CanvasRenderingContext2D} */
    for(let i=0; i<listOfAllHospitals[0].maxAmountBeds; i++){
        if(i<listOfAllHospitals[0].listOfbeds.length){
            ctx.fillStyle = "#FF0000";
            ctx.fillRect(50*i,50*i,20,20);
            console.log(i);
        }else{
            ctx.fillStyle = "#000000";
            let margin = 40;
            let widthBedRect = document.getElementById('canvas2').width/20;
            let heightBedRect =  document.getElementById('canvas2').height/6;
            let positionY = Math.floor(((margin+widthBedRect)*i)/document.getElementById('canvas2').width);
            let bedsPerRow = Math.floor(document.getElementById('canvas2').width/(margin+widthBedRect))
            ctx.fillRect(((widthBedRect+margin)*(i-(positionY*bedsPerRow+1))),(heightBedRect+margin)*positionY,widthBedRect,heightBedRect);
            console.log(bedsPerRow);
        }
        console.log(document.getElementById('canvas2').width)
        // for(let j=0; j<listOfAllHospitals[0].listOfbeds.length; j++){

        // }

    }
    console.log(listOfAllHospitals)
    oiohasdlhnasld = listOfAllHospitals[0]
    console.log(oiohasdlhnasld.name)
}
