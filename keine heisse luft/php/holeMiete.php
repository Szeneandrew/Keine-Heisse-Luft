<?php

session_start();
require('config.php');

//Holt die User-ID der Session
if (isset($_SESSION['userID'])) {

        $userID = $_SESSION['userID'];

        }

//INNER JOIN Statement, um aus Tabelle "balloon" und "miete" die relevanten Informationen einzugeben und abzugleichen
$sql = "

SELECT e.ID, e.titel, e.bild, e.price, fs.date, fs.ID
FROM balloon e
INNER JOIN miete fs
ON e.ID = fs.balloon_ID
WHERE fs.mieter_ID = $userID

";

$stmt = $pdo->prepare($sql);

$success = $stmt->execute();

if ($success) {

    $resultateArray = $stmt->fetchAll();

    $jsonArray = json_encode($resultateArray);

    print_r($jsonArray);
}