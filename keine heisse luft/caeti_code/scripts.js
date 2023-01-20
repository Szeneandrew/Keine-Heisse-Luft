inseratAnzeigen();

    function inseratAnzeigen() {

        fetch("https://imtowns3.chappuiscaetano.ch/php/inseratAnzeigen.php")

            .then((res) => {

                return res.json();

            })

            .then((data) => {

            console.log(data);

            inseratAnzeigen(data);

            })



    function inseratAnzeigen(data) {

        data.forEach(inserat => {

            console.log(data.inserat);
            if (data.inserat == 0){

                console.log(data.inserat);
                document.querySelector(".ballon-image").src = "images/Ballon_Icon.jpg";

            }

        

            let inseratContainer = document.createElement("div");
            inseratContainer.innerHTML =
                '<div class="container">' +

                    '<div class="form-group">' 
                
                        + '<h1>' + inserat.vorname + ' ' + inserat.nachname + '</h1>' 

                        + '<h4>' + 'Beschreibung' + '</h4>'
                     
                        + '<p>' + inserat.beschreibung + '</p>' 

                        + '<br>'  

                        + '<h4>' + 'Gegenleistung' + '</h4>'

                        + '<p>' + inserat.gegenleistung +'</p>' 

                        + '<br>'  

                        + '<h4>' + 'Adresse' + '</h4>'

                        + '<a target="_blank" href="https://www.google.com/maps/search/?api=1&query='+ inserat.adresse + '">' + inserat.adresse + '</a>' 
                        
                        // + '<p> <span id="inserat' + inserat.ID + '">  </span> </p>'

                        + '<form id="mieten' + inserat.ID + '">' 
                        + '<button onclick="mieten(event,' +"'"+ inserat.email +"'"+ ')" class="mieteButton">' + 'Inserat' + ' mieten' + '</button>'            
                        + '</form>'

                        + '<br>'  + '<br>'  + '<br>' 

                     + '</div>' 
                     
                + '</div>';

                '<link rel="stylesheet" href="css/style.css">';

            document.getElementById("liste-inserat").appendChild(inseratContainer);

         });

         

    }

}

function mieten(event, email) {
    event.preventDefault();
    window.location.href = `mailto:${email}?`;
}
