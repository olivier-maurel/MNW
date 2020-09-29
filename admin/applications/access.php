<?php
if (isset($_SESSION['username']) && isset($_SESSION['identity'])) {

    $query = $pdo->query('SELECT username, id FROM user_admin');
    $login = $query->fetchAll();

    if (($_SESSION['username'] == $login[0]['username']) && ($_SESSION['identity'] == $login[0]['id'])) {
        
    } else {
        header('Location: ../index.php');
    }

} else {
    header('Location: ../index.php');
}
