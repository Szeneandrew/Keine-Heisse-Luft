<?php

$host = "localhost";
$user = "369542_3_1";
$password = "GLkaIw2QVZnx";
$dbname = "369542_3_1";

$pdo = new PDO('mysql:host='. $host . '; dbname=' . $dbname . ';charset=utf8', $user, $password);
$pdo->exec("set names utf8");