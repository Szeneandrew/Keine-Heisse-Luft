<?php

require('config.php');

//Holt Variabeln von Textfeldern-Eingaben in login.js
$email = $_POST["email"];
$password = $_POST["password"];

//SELECT Statement, um korrekte Email zu holen für Login
$sql = "SELECT * FROM user WHERE email = '$email'";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

//Falls Statement ausgeführt wird, wird nachstehender Code ausgeführt, sonst gibt es einen Error aus
if ($erfolg) {

    $array = $stmt->fetchAll();

    $anzahlResultate = count($array);

    //Wenn in der Datenbank übereinstimmende Email vorhanden sind, wird zuerst eingebenes Passwort abgeglichen
    if ($anzahlResultate == 1) {

        $dbPassword = $array[0]['password'];
        $userID = $array[0]['ID'];
        $username = $array[0]['username'];
        $timestamp = time();

        pruefepassword($password, $dbPassword, $userID);
        //Wenn Passwort übereinstimmt, wird Session kreiert
        createSession($userID, $timestamp, $username);

        echo '{
            "success": true,
            "message": "Login erfolgreich"
        }';

    } else {

        echo '{
            "success": false,
            "message": "Kein Konto auf dieser Email!"
        }';
        
    }
    
} else {
    
    echo '{
        "success": false,
        "message": "Ups! Da ist etwas schiefgelaufen."
    }';
    
}

function pruefepassword($password, $dbPassword, $userID)
{

    //Schaut ob das gehashte Passwort mit dem eingebenen Passwort übereinstimmt
    if (password_verify($password, $dbPassword)) {


    } else {

        echo '{
            "success": false,
            "message": "Passwort inkorrekt!"
        }';

        //Stoppt gesamte Funktion
        exit();


    }
}


//Kreiert eine Usersession, um zu erkennen, ob ein User eingeloggt ist, oder nicht
function createSession($userID, $timestamp, $name) {
    session_start();
    $_SESSION['userID'] = $userID;
    $_SESSION['name'] = $name;
    $_SESSION['timestamp'] = $timestamp;
}