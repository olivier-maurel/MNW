<?php
session_start();
include "../applications/connect.php";
include "../applications/access.php";
include "../applications/logs.php";

$query = $pdo->query('
    SELECT *
    FROM logs
    ORDER BY created_at DESC;
');
$bdd = $query->fetchAll();

$ua = getBrowser();

    //echo($ua['name']);
    //echo($ua['version']);
    //echo($ua['platform']);
    //echo($ua['pattern']);

    //var_dump($_SERVER['HTTP_USER_AGENT']);
    echo(preg_match('/linux/i',$_SERVER['HTTP_USER_AGENT']));
$template = "securityView";
include "../templates/layoutAdmin.phtml";