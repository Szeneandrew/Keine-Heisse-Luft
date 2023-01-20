//Zeigt alle Ballone aus Datenbank-Tabelle "balloon" auf index.html an
holeBallon();

function holeBallon() {

    fetch("https://369542-3.web.fhgr.ch/php/balloneAnzeigen.php")

        .then((res) => {

            return res.json();

        })


        .then((data) => {

        balloneAnzeigen(data);

        })


//Holt die Ballondaten aus Tabelle und erstellt ein innerHTML für jeden Ballon
function balloneAnzeigen(data) {

    data.forEach(ballon => {
        
        let ballonContainer = document.createElement("div");
        let ballonBild = ballon.bild;
        let ballonID = ballon.ID;
        let id = 'ballon' + ballonID;

        //Setzt variable für aktuelles Datum, um Datepicker zu sperren
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0');
        let yyyy = today.getFullYear();
        //Formatiert Datumvariable kompatibel für html-Datepicker
        today = yyyy + '-' + mm + '-' + dd;

        bilderAnzeigen();
        function bilderAnzeigen(){

            if (ballon.bild == ''){
        
                    ballonBild = "images/Ballon_Icon.jpg";

                }

        }

        ballonContainer.innerHTML =

            '<div class="ballon">' +
            '<div class="column">' + '<h2 class="ballontitel">' + ballon.titel + '</h2>' +
            '<img class="ballon-image" src="' + ballonBild + '">' +
            '<div class="ballontext">' + '<p class="ballonbeschreibung" >' + ballon.beschreibung + '</p>' + 
            '📍 <a target="_blank" href="https://www.google.com/maps/search/?api=1&query='+ ballon.adresse + '">' + ballon.adresse + '</a> <br>' +
            '<form>' + '<label for="date">' + 'Miete:' + '</label>' + '<input type="date" id="' + id + '" class="date" name="date" min="' + today + '">' + '<br>' + '<button type="submit" onclick="mieten(event, ' + ballonID + ', ' + id + ')" class="mieteButton">' + 'Ballon' + ' mieten' + '</button>' + '</form>' +
            '<p> <b> <span id="ballon_' + ballon.ID + '">  </span> <b> </p>' + '</div>' +
            '</div>' + '</div>';

        document.getElementById("liste-ballon").appendChild(ballonContainer);

        });

}

}


//Führt onClick Button Funktion aus, indem er miete.php holt und SELECT Statement ausführt
function mieten(event, ballonID, id){
    event.preventDefault();


    console.log("gemietet!");
    let date = id.value;

    //Zeige Datum als europäisches Format an, falls ein Datum gewählt wurde
    if (date !== '') {

        dateArray = Array.from(date);
        let year = dateArray.slice(0, 4);
        let yyyy = year.join("");
        let month = dateArray.slice(5, 7);
        let mm = month.join("");
        let day = dateArray.slice(8);
        let dd = day.join("");
    
        date = dd + '.' + mm + '.' + yyyy;

    }
    /////////////////////////////////

    let formData = new FormData();
    formData.append('date', date);
    formData.append('ballonID', ballonID);

    fetch("https://369542-3.web.fhgr.ch/php/miete.php",
    {
        body: formData,
        method: "post",

    })

        .then((response) => {

            return response.json();

        })
        .then((data) => {

        let nachricht = document.querySelector("#nachricht");
        nachricht.textContent = data.message

        if (data.success === true) {

            nachricht.style.color = "green";

        } else {
            
            nachricht.style.color = "red";

        }

        })

}