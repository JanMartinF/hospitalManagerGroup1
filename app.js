
// -> Variablen die vorab definiert werden müssen
let page = parseInt(localStorage.getItem("page"));
let updated = localStorage.getItem("lsUpdated");

// Deklaration von Funktionen
function bettenUpdate(){
    let b1Input = document.getElementById("Bett1input").value;
    let b2Input = document.getElementById("Bett2input").value;
    let b3Input = document.getElementById("Bett3input").value;
    localStorage.setItem("lsUpdated", 1);

    if (b1Input == 1) {
        localStorage.setItem("kh1b1", 1);
    } else {
        localStorage.setItem("kh1b1", 0);
    }

    if (b2Input == 1) {
        localStorage.setItem("kh1b2", 1);
    } else {
        localStorage.setItem("kh1b2", 0);
    }

    if (b3Input == 1) {
        localStorage.setItem("kh1b3", 1);
    } else {
        localStorage.setItem("kh1b3", 0);
    }
}


function updateReset(){
    localStorage.setItem("lsUpdated", 0);
}

// -> Eingabe von neuen Belegungen mit Hilfe des localStorage


// -> erforderlichen Daten / Funktionen für Screen One (index.html)
function setupScreenOne() {

    //Funktion zur Erstellung der Bettenbelegung in KH1 wird deklariert
    function betBelKh(){
        if(updated == 1){
        // <-- Abfrage, ob es ein Update gab. Wenn ja (1), dann nachfolgend die
        // Key-Value-Paare im localStorage abfragen und im Objekt überschreiben,
        // anstatt sie zu erstellen/überschreiben
            aK1.b1 = aK1.b1 + parseInt(localStorage.getItem("kh1b1"));
            aK1.b2 = aK1.b2 + parseInt(localStorage.getItem("kh1b2"));
            aK1.b3 = aK1.b3 + parseInt(localStorage.getItem("kh1b3"));
        } else {
            localStorage.setItem("kh1b1", aK1.b1);
            localStorage.setItem("kh1b2", aK1.b2);
            localStorage.setItem("kh1b3", aK1.b3);
        }
    }

    class AK {
        constructor(name, betGes, b1, b2, b3){
            this.name = name;
            this.betGes = betGes;
            this.b1 = b1;
            this.b2 = b2;
            this.b3 = b3;
        }
        get auslastung(){
            return this.berechneAuslastung().toFixed(0);
        }
        berechneAuslastung(){
            let resultAuslastung = (this.b1 + this.b2 + this.b3) / (this.betGes/100);
            return resultAuslastung;
        }
        get belegung(){
            return this.belGesamt();
        }
        belGesamt(){
            if(localStorage.getItem("kh1b1")){

            }
            let summeBetBel = (this.b1 + this.b2 + this.b3);
            return summeBetBel;
        }
    }

    let aK1 = new AK("AKH Celle", 3, 1, 0, 0);

    // Funktion zur Erstellung der Bettenbelegung in KH1 wird ausgeführt

    betBelKh();


    document.getElementById("akhName").innerHTML = aK1.name;
    document.getElementById("bettenGesamt").innerHTML = aK1.betGes;
    document.getElementById("bettenBelegt").innerHTML = aK1.belegung;
    document.getElementById("auslastung").innerHTML = aK1.auslastung + "%";

}

// -> erforderlichen Daten / Funktionen für Screen Two (screen2.html)
function setupScreenTwo() {

// erstelle Objekt "Betten"
    let Betten = {
        b1: localStorage.getItem("kh1b1"),
        b2: localStorage.getItem("kh1b2"),
        b3: localStorage.getItem("kh1b3"),
        belegungB1: function(){
            if (this.b1 == 0) {
                return "lightgrey";
            } else {
                return "red";
            }
        },
        belegungB2: function(){
            if (this.b2 == 0) {
                return "lightgrey";
            } else {
                return "red";
            }
        },
        belegungB3: function(){
            if (this.b3 == 0) {
                return "lightgrey";
            } else {
                return "red";
            }
        },
    }

    let canvas2 = document.getElementById("canvas2");
    let ctx2 = canvas2.getContext("2d");

    ctx2.fillStyle = Betten.belegungB1();
    ctx2.fillRect(20,20, 60, 100);

    ctx2.fillStyle = Betten.belegungB2();
    ctx2.fillRect(100,20, 60, 100);

    ctx2.fillStyle = Betten.belegungB3();
    ctx2.fillRect(180,20, 60, 100);


}

// -> erforderlichen Daten / Funktionen für Screen Three (screen3.html)
function setupScreenThree() {

        if (localStorage.getItem("kh1b1") == 1) {
            document.getElementById("statusB1").innerHTML = "Bett 1 (belegt)";
        }
        if (localStorage.getItem("kh1b2") == 1) {
            document.getElementById("statusB2").innerHTML = "Bett 2 (belegt)";
        }
        if (localStorage.getItem("kh1b3") == 1) {
            document.getElementById("statusB3").innerHTML = "Bett 3 (belegt)";
        }


}




// -> orientierungsPunkt für den entsprechenden Skript-Bereich, welcher auf den jeweiligen Screens ausgeführt werden soll.
if (page == 1) {
    console.log(page);
    setupScreenOne();
} else if (page == 2) {
    console.log(page);
    setupScreenTwo();
} else if (page == 3) {
    console.log(page);
    setupScreenThree();
}

// -> Screenübergreifende Funktionen (Bsp. Menu)
function change_page1() {
    localStorage.setItem("page", "1");
    window.location.href = "index.html";
}
function change_page2() {
    localStorage.setItem("page","2");
    window.location.href = "screen2.html";
}
function change_page3() {
    localStorage.setItem("page","3");
    window.location.href = "screen3.html";
}
