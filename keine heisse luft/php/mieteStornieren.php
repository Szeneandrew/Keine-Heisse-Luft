<?php

session_start();
require('config.php');

//Holt die User-ID der Session
if (isset($_SESSION['userID'])) {

        $userID = $_SESSION['userID'];

        }


$balloonID = $_POST["ballonID"];
//$date = $_POST["ballonDate"];

$sql = "

DELETE FROM miete 
WHERE mieter_ID = $userID
AND ID = $balloonID


";

$stmt = $pdo->prepare($sql);

$success = $stmt->execute();

if ($success) {

    echo '{
        "success" : true,
        "message" : "Ballon storniert!"
    }';

} else {

    echo '{
        "success" : false,
        "message" : "Da ist etwas schief gelaufen!"
    }';
}