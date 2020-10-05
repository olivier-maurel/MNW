<?php
$pdo = new PDO(
    'mysql:host=localhost; dbname=MNW_admin',
    '############',
    '############',
    [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    ]
);

$query = $pdo->query('
    SET NAMES utf8
');
