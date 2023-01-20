<?php

session_start();
require('config.php');

//Holt die User-ID der Session
if (isset($_SESSION['userID'])) {

        $userID = $_SESSION['userID'];

        }

//holt Datum und ballon-ID von balloneAnzeigen.js        
$date = $_POST["date"];
$ballonID = $_POST["ballonID"];


//kontrolliert, ob Miete bei ausgewählt zum eingegebenen Datum bereits vorhanden ist
$sql = ("SELECT * FROM miete WHERE date = ? AND balloon_ID = ?");
$stmt = $pdo->prepare($sql);
$exists = $stmt->execute([$date, $ballonID]);
$array = $stmt->fetchAll();


//Falls nicht eingeloggt, Fehlermeldung ausgeben
if (empty($userID)) {

    echo '{
        "success": false,
        "message" : "Du bist noch nicht eingeloggt!"
    }';

//Falls kein Datum angegeben wurde, Fehlermeldung ausgeben
} else if (empty($date)) {

    echo '{
        "success": false,
        "message" : "Bitte gib ein gültiges Datum an!"
    }';

//Falls SQL-Statement leer zurück kommt -> noch keine Miete zu diesem Datum auf diesem Ballon vorhande -> Miete in Auftrag geben
} else if (empty($array)) {

    $sql = ("INSERT INTO miete (date, mieter_ID, balloon_ID) SELECT ?, ?, ?");
    $stmt = $pdo->prepare($sql);
    $stmt->execute([$date, $userID, $ballonID]);

    echo '{
        "success": true,
        "message" : "Ballon wurde gemietet!"
    }';
    
//Falls schon Datum auf diesem Ballon festgelegt -> Fehlermeldung ausgeben
} else {

    echo '{
        "success": false,
        "message" : "An diesem Datum ist der Ballon leider nicht mehr verfügbar"
    }';

}