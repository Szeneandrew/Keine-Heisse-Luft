<?php

session_start();
require('config.php');

//Holt die User-ID der Session
if (isset($_SESSION['userID'])) {

        $ID = $_SESSION['userID'];

        }


$bild = $_POST["bild"];
$username = $_POST["username"];
$firstname = $_POST["firstname"];
$lastname = $_POST["lastname"];
$email = $_POST["email"];
$password = $_POST["password"];


//Passwort nur hashen, wenn tatsächlich eines eingegeben wird
//Verhindert, dass ein leerer String gehasht wird und so als neues Passwort in die Datenbank gespeichert wird
if ($password == '') {

    //Nichts machen

} else {

    $password = password_hash($password, PASSWORD_DEFAULT); 

}



//IF(LENGTH) um leere Strings in der Datenbank zu vermeiden
$sql = "UPDATE user SET bild=IF(LENGTH('$bild')=0, bild, ?), username=IF(LENGTH('$username')=0, username, ?), firstname=IF(LENGTH('$firstname')=0, firstname, ?), lastname=IF(LENGTH('$lastname')=0, lastname, ?), email=IF(LENGTH('$email')=0, email, ?), password=IF(LENGTH('$password')=0, password, ?) WHERE ID =?";
$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute([$bild, $username, $firstname, $lastname, $email, $password, $ID]);

if ($erfolg) {

        print_r('Änderungen wurden gespeichert!');

    } else {
    
        print_r($erfolg);
        print_r('Da ist was schief gelaufen!');
    };