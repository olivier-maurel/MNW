<?php
session_start();
include "applications/connect.php";


if (isset($_SESSION['username']) && isset($_SESSION['identity'])) {
    header('Location: admin/previewAdmin.php');
}

$query = $pdo->query('
    SELECT 
        id,
        username, 
        password 
    FROM 
        user_admin
');
$login = $query->fetchAll(PDO::FETCH_ASSOC);

$identity       = $login[0]['id'];
$username       = $login[0]['username'];
$password       = $login[0]['password'];
$username_POST  = $_POST['username'];
$password_POST  = password_verify($_POST['password'], $password);



if (isset($_POST['submit']))
{
    if ($username === $username_POST && $password_POST == true)
    {
        session_regenerate_id(true);
        $_SESSION['username'] = $username;
        $_SESSION['identity'] = $identity;
        unset($_SESSION['logs_error']);
        header('Location: admin/previewAdmin.php');
        exit();
    } else if ($_SESSION['logs_error'] > 0){
        $_SESSION['logs_error']++;
        include 'applications/logs.php';
        addLogsErrors($_SESSION['logs_error']);
    } else {
        $_SESSION['logs_error'] = 1;
    }
}
var_dump($_SESSION['logs_error']);
var_dump($_SERVER['HTTP_USER_AGENT']);

$template = "index";
include "templates/layout.phtml";