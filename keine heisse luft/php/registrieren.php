<?php

require('config.php');

$email = $_POST["email"];
$benutzername = $_POST["benutzername"];
$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$password = $_POST["password"];

//Wenn nichts in "Passwort" eingegeben wurde, dann würde ein reiner password_hash den leeren String hashen.
//Somit würde allerdings der Code später nicht erkennen, ob die Passwort Variable ursprünglich leer war, da ja der Hash ja trotzdem ein String wäre
//Das würde dazu führen, dass es User "ohne" Passwörter geben würde.
//Um das zu verhindern, überprüft if else Statement, ob die Variable leer ist.
//Erst wenn tatsächlich ein Passwort angegeben wird, wird dieses also gehasht.
if ($password == '') {

    //Nichts machen

} else {

    $password = password_hash($password, PASSWORD_DEFAULT); 

}

//Überprüft ob $email bereits in der Datenbank existiert
$sql = ("SELECT * FROM user WHERE email = ?");
$stmt = $pdo->prepare($sql);
$exists = $stmt->execute([$email]);
$array = $stmt->fetchAll();

//Überprüft ob $username bereits in der Datenbank existiert
$sql = ("SELECT * FROM user WHERE username = ?");
$stmt = $pdo->prepare($sql);
$existsUser = $stmt->execute([$benutzername]);
$arrayUser = $stmt->fetchAll();


//Alle Möglichkeiten durchgehen, ob alle Felder ausgefüllt und Benutzername/Email bereits existieren
//empty($var) prüft, ob etwas in die Felder eingeben wurde oder nicht
if (empty($password)) {

    echo '{
        "success" : false,
        "message" : "Bitte fülle alle Felder aus!"
    }';

} else if (empty($email)) {

    echo '{
        "success" : false,
        "message" : "Bitte fülle alle Felder aus!"
    }';

} else if (empty($benutzername)) {

    echo '{
        "success" : false,
        "message" : "Bitte fülle alle Felder aus!"
    }';;

} else if (empty($firstname)) {

    echo '{
        "success" : false,
        "message" : "Bitte fülle alle Felder aus!"
    }';

} else if (empty($lastname)) {

    echo '{
        "success" : false,
        "message" : "Bitte fülle alle Felder aus!"
    }';

//empty Funktion gibt true oder false aus. Also wird abgeglichen ob true == false oder false == false ist.
//Falls false == false, dann wird Funktion wiederum als true ausgeben und ausgeführt
} else if ((empty($arrayUser)) == false) {

    echo '{
        "success" : false,
        "message" : "Dieser Benutzername existiert bereits!"
    }';

//Falls weder Benutzername noch Email existiert, Registrierung durchführen
} else if (empty($array)) {

    $sql = "INSERT INTO user (username, firstname, lastname, email, password) VALUES (:Username, :Firstname, :Lastname, :Email, :Password)";

    $stmt = $pdo->prepare($sql);

    $erfolg = $stmt->execute(array('Username' => $benutzername, 'Firstname' => $firstname, 'Lastname' => $lastname, 'Email' => $email, 'Password' => $password));

    if ($erfolg) {

        echo '{
            "success" : true,
            "message" : "Registrierung erfolgreich!"
        }';

    }

//Falls all das nicht zutrifft, bleibt nur noch Möglichkeit übrig, dass Email bereits existiert
} else {

    echo '{
        "success" : false,
        "message" : "Diese Email existiert bereits!"
    }';

}