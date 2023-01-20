//Schmeisst User aus der Session, indem Funktion auth.php ausführt
function auth() {

    let formData=new FormData();
    formData.append("submit", true)

    fetch("https://369542-3.web.fhgr.ch/php/auth.php",{
        body: formData,
        method: "post"
    })

        .then((response) => {

            return response.json();

        })
        .then((data) => { 

            console.log(data);

            //Wenn auth.php erkennt, dass User nicht mehr eingeloggt ist, wird er an Loginpage weitergeleitet.
            if (data.status === "logged out") {

                window.location.href = "https://369542-3.web.fhgr.ch/login.html";

            }

        })

}


auth();