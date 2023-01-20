<?php

session_start();
require('config.php');

//Holt die User-ID der Session
if (isset($_SESSION['userID'])) {

        $userID = $_SESSION['userID'];

        }


$titel = $_POST["titel"];
$adresse = $_POST["adresse"];
$price = $_POST["price"];
$beschreibung = $_POST["beschreibung"];


$sql = "INSERT INTO balloon (titel, price, adresse, beschreibung, user) VALUES (:Titel, :Price, :Adresse, :Beschreibung, :User)";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute(array('Titel' => $titel, 'Price' => $price, 'Adresse' => $adresse, 'Beschreibung' => $beschreibung, 'User' => $userID));

if ($erfolg) {

    print_r('Ballon erfolgreich erstellt!');

} else {

    print_r($erfolg);
};