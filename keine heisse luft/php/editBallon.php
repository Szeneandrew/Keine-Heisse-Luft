<?php

session_start();
require('config.php');

//Holt die User-ID der Session
if (isset($_SESSION['userID'])) {

        $userID = $_SESSION['userID'];

        }


//Holt Userdaten von den js-Feldern ins php
$bild = $_POST["bild"];
$titel = $_POST["titel"];
$adresse = $_POST["adresse"];
$beschreibung = $_POST["beschreibung"];
$price = $_POST["price"];


//IF(LENGTH) um leere Strings in der Datenbank zu vermeiden
$sql = "UPDATE balloon SET bild=IF(LENGTH('$bild')=0, bild, ?), titel=IF(LENGTH('$titel')=0, titel, ?), adresse=IF(LENGTH('$adresse')=0, adresse, ?), price=IF(LENGTH('$price')=0, price, ?), beschreibung=IF(LENGTH('$beschreibung')=0, beschreibung, ?) WHERE user =?";
$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute([$bild, $titel, $adresse, $price, $beschreibung, $userID]);

if ($erfolg) {

        print_r('Änderungen wurden gespeichert!');
    
    } else {
    
        print_r($erfolg);
        print_r('Da ist was schief gelaufen!');
    };