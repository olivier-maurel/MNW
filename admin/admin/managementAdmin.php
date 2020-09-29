<?php
session_start();
include "../applications/connect.php";
include "../applications/access.php";



$template = "management";
include "../templates/layoutAdmin.phtml";