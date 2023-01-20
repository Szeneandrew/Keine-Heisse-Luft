console.log("Hello Login");

//Holt SELECT Statement aus login.php
function login() {

    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;
    

    let formData = new FormData();
    formData.append('email', email);
    formData.append('password', password);

    fetch("https://369542-3.web.fhgr.ch/php/login.php",
        {
            body: formData,
            method: "post",
        })

        .then((response) => {

            return response.json();

        })
        .then((data) => {

            //Führt Login aus
            console.log(data);
            let nachricht = document.querySelector("#nachricht");
            nachricht.textContent = data.message

            //Falls JSON success als false ausgeben wird, zeige die im php angebene Nachricht in rot an.
            if (data.success === false) {

                nachricht.style.color = "red";

            //Falls success als true ausgeben wird, zeig sie in grün an und leite auf die Landingpage weiter, um User wissen zu lassen, dass er eingeloggt it.
            } else {

                nachricht.style.color = "green";
                setTimeout(()=>{
                    window.location.href = "https://369542-3.web.fhgr.ch/index.html";
                }, 800);

            }

        })
}