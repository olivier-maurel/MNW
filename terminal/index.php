<?php
include 'applications/connect.php';
$query = $pdo->query('
    SELECT *
    FROM terminal
');
$easteregg = $query->fetchAll();
$egg1 = $easteregg[0]['easteregg'];
$egg2 = $easteregg[1]['easteregg'];
$egg3 = $easteregg[2]['easteregg'];

include 'indexView.phtml';