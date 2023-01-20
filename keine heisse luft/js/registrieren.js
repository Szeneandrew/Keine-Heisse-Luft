console.log("Hello Registrierung");

function registrieren(){

    let benutzername = document.querySelector("#benutzername").value;
    let firstname = document.querySelector("#firstname").value;
    let lastname = document.querySelector("#lastname").value;
    let email = document.querySelector("#email").value;
    let password = document.querySelector("#password").value;

    let formData = new FormData();
    formData.append('benutzername', benutzername);
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('password', password);

    fetch("https://369542-3.web.fhgr.ch/php/registrieren.php",
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
            setTimeout(()=>{
                window.location.href = "https://369542-3.web.fhgr.ch/login.html";
            }, 800);

        } else {
            
            nachricht.style.color = "red";


        }

        })
}