<?php
session_start();
if (isset($_SESSION['username']) || isset($_SESSION['identity'])) {
    unset($_SESSION);
    session_destroy();
    header('Location: ../index.php');
}