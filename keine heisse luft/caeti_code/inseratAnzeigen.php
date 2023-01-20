<?php

require("config.php");

$sql = "SELECT inserat.*, users.* FROM inserat INNER JOIN users ON inserat.users_id = users.id";

$stmt = $pdo->prepare($sql);

$erfolg = $stmt->execute();

if ($erfolg) {

    $array = $stmt->fetchAll();

    $jsonArray = json_encode($array);

    print_r($jsonArray);
}