function neuerBallon(){

    console.log("Neuer Ballon erstellen!");

    let titel = document.querySelector("#titel").value;
    let adresse = document.querySelector("#adresse").value;
    let price = document.querySelector("#price").value;
    let beschreibung = document.querySelector("#beschreibung").value;


    let formData = new FormData();
    formData.append('titel', titel);
    formData.append('adresse', adresse);
    formData.append('price', price);
    formData.append('beschreibung', beschreibung);

    fetch("https://369542-3.web.fhgr.ch/php/neuerBallon.php",
    {
        body: formData,
        method: "post",

    })

        .then((response) => {

            return response.text();

        })
        .then((data) => {

        document.querySelector('#nachricht').innerHTML = data;

        })

}