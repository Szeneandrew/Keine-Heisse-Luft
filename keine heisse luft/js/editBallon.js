function editBallon() {

    event.preventDefault()

    console.log('edit ballon');
    // Formulardaten in Body übertragen
    let bild = document.querySelector('#bild').value;
    let titel = document.querySelector('#titel').value;
    let adresse = document.querySelector('#adresse').value;
    let beschreibung = document.querySelector('#beschreibung').value;
    let price = document.querySelector('#price').value;

    let formData = new FormData();

    formData.append('bild', bild);
    formData.append('titel', titel);
    formData.append('adresse', adresse);
    formData.append('beschreibung', beschreibung);
    formData.append('price', price);

    

    fetch("https://369542-3.web.fhgr.ch/php/editBallon.php",
    {
        body: formData,
        method: "post",

    })

        .then((response) => {

            return response.text();

        })

        .then((data) => {

        console.log(data);
        let nachricht = document.querySelector("#nachrichtBallon");
            nachricht.textContent = data

            nachricht.style.color = "green";

        })

}

//Je nachdem, ob User Ballon hat oder nicht, soll Bearbeitungsmöglichkeit sichtbar sein
displayBallon();

function displayBallon() {

    fetch("https://369542-3.web.fhgr.ch/php/holeBallon.php")

        .then((res) => {

            return res.json();

        })

        .then((data) => {

            //falls kein Ballon vorhanden, zeige Ballonbearbeitung nicht an
            if (data[0] == undefined){

                console.log(data);

                //Gesamtes Ballon bearbeiten div nicht anzeigen
                document.getElementById("bearbeiteBallon").style.visibility = 'hidden';
                //Ballon Bearbeitungs-Button deaktivieren
                document.getElementById("editBallon").disabled = true;


            }

})

}