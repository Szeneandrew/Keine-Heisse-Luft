//Führt logout.php und löscht somit die aktuelle Usersession
function logout() {

    fetch("https://369542-3.web.fhgr.ch/php/logout.php",{

    })

        .then((response) => {

            return response.text();

        })
        .then(() => { 

            //Leitet den User zur Loginpage weiter, wenn logout.php ausgeführt wird
            window.location.href = "https://369542-3.web.fhgr.ch/login.html";

        })

}