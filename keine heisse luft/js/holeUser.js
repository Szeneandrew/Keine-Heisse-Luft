console.log("Hallo Userkonto");


loggedIn();

function loggedIn() {

    fetch("https://369542-3.web.fhgr.ch/php/auth.php")

        .then((response) => {

            return response.json();

        })
        .then((data) => { 

            if (data.status === "logged in") {

                //Zeige individuelle Userdaten an
                displayUser();
                displayBallon();
                holeMiete();

            } else {

                //verstecke und deaktiviere "bearbeiten" Button
                document.getElementById("editkonto").disabled = true;
                document.getElementById("editkonto").style.visibility = 'hidden';

                //Ändere "Profil" zu "Du bist noch nicht eingeloggt"
                let profil = document.querySelector(".seitentitel");
                profil.innerHTML = "Du bist noch nicht eingeloggt.";

            }

        })

}


//Zeigt Userdaten auf konto.html an
function displayUser() {

    fetch("https://369542-3.web.fhgr.ch/php/holeUser.php")

        .then((res) => {

            return res.json();

        })

        .then((data) => {

    console.log(data);

                //Profilbildanzeige
                profilBildSelect();

                function profilBildSelect() {
    
                    //Falls Bild in der Datenbank vorhanden, zeige benutzerdefiniertes Bild
                    if (data[0].bild !== "") {

                        console.log(data[0].bild);
                        let bild = document.querySelector("#profilbild");
                        bild.src = data[0].bild;
    
                    //Falls kein Bild vorhanden, mache nichts, zeige das "default" Icon
                    } else {
    
                        console.log("kein Bild vorhanden!");
    
                    }
    
                }

                //Ändert HTML pragraph-tags zu den respektiven Daten
                let username = document.querySelector("#username");
                username.innerHTML = data[0].username;

                let firstname = document.querySelector("#firstname");
                firstname.innerHTML = data[0].firstname;

                let lastname = document.querySelector("#lastname");
                lastname.innerHTML = data[0].lastname;

                let email = document.querySelector("#email");
                email.innerHTML = data[0].email;

})
}


//Zeigt individuelle Ballondaten auf konto.html an
function displayBallon() {

    fetch("https://369542-3.web.fhgr.ch/php/holeBallon.php")

        .then((res) => {

            return res.json();

        })

        .then((data) => {

            //falls Ballon vorhanden, zeige Daten an
            if (data[0] !== undefined){

                //Bildanzeige Ballon
                ballonBildSelect();

                function ballonBildSelect() {

                    //Falls Bild in der Datenbank vorhanden, zeige benutzerdefiniertes Bild
                    if (data[0].bild !== "") {

                        //console.log(data[0].bild);
                        let bild = document.querySelector("#ballonbild");
                        bild.src = data[0].bild;

                    //Falls kein Bild vorhanden, mache nichts, zeige das "default" Icon
                    }

                }

                //restlicher Code wird weiterhin normal ausgeführt
                let ballonart = document.querySelector("#ballonart");
                ballonart.innerHTML = data[0].titel;

                let preis = document.querySelector("#preis");
                preis.innerHTML = data[0].price + ' CHF pro Tag';

                let standort = document.querySelector("#standort");
                standort.innerHTML = data[0].adresse;

                let beschreibung = document.querySelector("#beschreibung");
                beschreibung.innerHTML = data[0].beschreibung;

                //falls Ballon vorhanden, soll der User nicht die Möglichkeit dazu haben, einen neuen zu kreieren.
                document.getElementById("ballonErstellen").disabled = true;
                document.getElementById("ballonErstellen").style.visibility = 'hidden';

            
            //falls Ballon nicht vorhanden, schlage "Submit" vor
            } else {

                let deinBallon = document.querySelector("#deinBallon");
                deinBallon.innerHTML = "Hier könnte dein Ballon sein.";

            }

})

}


//Holle Mietdaten der Ballone von Tabelle "mieten", welche von eingeloggtem User gemietet wurden
function holeMiete() {

    fetch("https://369542-3.web.fhgr.ch/php/holeMiete.php")

        .then((res) => {

            return res.json();

        })


        .then((data) => {

        if (data == '') {

            let mietBallon = document.querySelector(".mietBallon");
            mietBallon.innerHTML = "Du hast noch keinen Ballon gemietet!";

        } else {

            displayMiete(data);

        }

})


//Zeige gemietete Ballone des eingeloggtem User an
function displayMiete(data) {

    data.forEach(ballon => {
        
        //Variabeln definieren, um später im innerHTML benutzen
        let ballonContainer = document.createElement("div");
        let ballonBild = ballon.bild;
        let ballonDate = ballon.date;
        let ballonID = ballon.ID;
        let ballonTitel = ballon.titel;
        let ballonPrice = ballon.price;
        let id = 'ballon' + ballonID;

        //Zeigt Bild in innerHTML an, falls eines in der Datenbank eingefügt ist
        bilderAnzeigen();
        function bilderAnzeigen(){

            if (ballon.bild == ''){
        
                    ballonBild = "images/Ballon_Icon.jpg";

                }

        }

        //Erstellt für jeden Ballon in der "balloon" Tabelle ein eigenes HTML-Feld auf der Frontpage
        ballonContainer.innerHTML =

            '<div class="ballon">' +
            '<div class="column">' + '<h2 class="ballontitel">' + ballon.titel + '</h2>' +
            '<img class="ballon-image" src="' + ballonBild + '">' +
            '<div class="ballontext">' + '<p class="ballonbeschreibung" >' + 'gemietet am: ' + ballon.date + '</p>' + 
            '<form>' + '<button type="submit" onclick="mieteStornieren(event, ' + ballonID + ')" class="mieteButton">' + 'Miete' + 'stornieren' + '</button>' + '</form>' +
            '<p> <b> <span id="ballon_' + ballon.ID + '">  </span> <b> </p>' + '</div>' +
            '</div>' + '</div>';

        document.getElementById("liste-ballon").appendChild(ballonContainer);

        });

}

}


//Holt DELETE Statement aus mieteStornieren.php
function mieteStornieren(event, ballonID){
    event.preventDefault();


    console.log("storniert!");

    let formData = new FormData();
    formData.append('ballonID', ballonID);

    fetch("https://369542-3.web.fhgr.ch/php/mieteStornieren.php",
    {
        body: formData,
        method: "post",

    })

        .then((response) => {

            return response.json();

        })
        .then((data) => {

        let nachricht = document.querySelector("#nachrichtStornieren");
        nachricht.textContent = data.message
        
        if (data.success === true) {
            
            nachricht.style.color = "green";
            setTimeout(()=>{
                window.location.href = "https://369542-3.web.fhgr.ch/konto.html";
            }, 2000);


        } else {

            nachricht.style.color = "red";
            setTimeout(()=>{
                window.location.href = "https://369542-3.web.fhgr.ch/konto.html";
            }, 2000);


        }

        })

}