<?php
session_start();
include '../applications/connect.php';
include '../applications/access.php';


// if (isset($_SESSION['username']) && isset($_SESSION['identity'])) {

//     $query = $pdo->query('SELECT username, id FROM user_admin');
//     $login = $query->fetchAll();

//     if (($_SESSION['username'] == $login[0]['username']) && ($_SESSION['identity'] == $login[0]['id'])) {
//         echo($_SESSION['username']);
//         echo($login[0]['username']);
//     } else {
//         header('Location: ../index.php');
//     }

// } else {
//     header('Location: ../index.php');
// }

$title = 'Aperçu';
$template = 'index';
include '../templates/layoutAdmin.phtml';