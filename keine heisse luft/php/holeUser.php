<?php

//echo "userID";

session_start();
require('config.php');

//Holt die User-ID der Session
if (isset($_SESSION['userID'])) {

        $userID = $_SESSION['userID'];

        }

//Selected alles aus der 'user' Datenbank des eingeloggten Users.
$sql = "SELECT * FROM user WHERE ID = '$userID'";

$stmt = $pdo->prepare($sql);

$success = $stmt->execute();

if ($success) {

    $resultateArray = $stmt->fetchAll();

    $jsonArray = json_encode($resultateArray);

    print_r($jsonArray);
}