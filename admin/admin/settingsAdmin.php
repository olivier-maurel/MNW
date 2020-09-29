<?php
session_set_cookie_params(0);
session_start();
include '../applications/connect.php';
include '../applications/access.php';
include '../applications/logs.php';

$query  = $pdo->query('SELECT * FROM user_admin');
$bdd    = $query->fetchAll();

if (isset($_POST['submitPass'])) {
    $oldPass    = $_POST['verif_password'];
    $newPass    = $_POST['new_password'];
    $verifPass  = $_POST['verif_new_password'];
    $password   = $bdd[0]['password'];
    if (!empty($oldPass) && !empty($newPass) && !empty($verifPass)) {
        if (password_verify($oldPass, $password) && $verifPass === $newPass) {
            $query  = $pdo->prepare('UPDATE user_admin 
                SET password = REPLACE(password, :oldPass, :newPass)');
            $query->execute([
                ':oldPass' => $password,
                ':newPass' => password_hash($newPass, PASSWORD_DEFAULT),
            ]);
            $description    = 'Modification du mot de passe';
            $info_ip        = 'Adresse Ip concernée : ' . $_SERVER['REMOTE_ADDR'];
            $info_computer  = 'Information de la machine : ' . $_SERVER['HTTP_USER_AGENT'];
            addLogs($description, $info_ip, $info_computer);
        } else {
            echo('MDP INCORRECT');
        }
    } else {
        echo('MDP NON REMPLI');
    }
}

if (isset($_POST['submitEmail'])) {
    $oldEmail       = $_POST['verif_email'];
    $newEmail       = $_POST['new_email'];
    $verifEmail     = $_POST['verif_new_email'];
    $email          = $bdd[0]['email'];
    if (!empty($oldEmail) && !empty($newEmail) && !empty($verifEmail)) {
        if ($oldEmail === $email && $verifPass === $newPass) {
            $query  = $pdo->prepare('UPDATE user_admin 
                SET email = REPLACE(email, :oldEmail, :newEmail)');
            $query->execute([
                ':oldEmail' => $email,
                ':newEmail' => $newEmail,
            ]);
            $description    = 'Modification de l\'adresse email';
            $info_ip        = 'Adresse Ip concernée : ' . $_SERVER['REMOTE_ADDR'];
            $info_computer  = 'Information de la machine : ' . $_SERVER['HTTP_USER_AGENT'];
            addLogs($description, $info_ip, $info_computer);
        } else {
            echo('EMAIL INCORRECT');
        }
    } else {
        echo('CHAMPS NON REMPLIS');
    }
}

$title = 'Paramètres';
$template = 'settingsView';
include '../templates/layoutAdmin.phtml';