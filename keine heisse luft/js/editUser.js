//Holt UPDATE Statement aus editUser.php
function editUser() {

    event.preventDefault()

    console.log('edit user');
    // Formulardaten in Body übertragen
    let profilbild = document.querySelector('#profilbild').value;
    let username = document.querySelector('#username').value;
    let firstname = document.querySelector('#firstname').value;
    let lastname = document.querySelector('#lastname').value;
    let email = document.querySelector('#email').value;
    let password = document.querySelector('#password').value;

    let formData = new FormData();
    formData.append('bild', profilbild);
    formData.append('username', username);
    formData.append('firstname', firstname);
    formData.append('lastname', lastname);
    formData.append('email', email);
    formData.append('password', password);


    fetch("https://369542-3.web.fhgr.ch/php/editUser.php",
    {
        body: formData,
        method: "post",

    })

        .then((response) => {

            return response.text();

        })

        .then((data) => {

        console.log(data);
        let nachricht = document.querySelector("#nachrichtProfil");
            nachricht.textContent = data

            nachricht.style.color = "green";

        })

}