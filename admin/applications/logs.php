<?php

function addLogs($description, $info_ip, $info_computer) {
    include 'connect.php';
    $query = $pdo->prepare('
        INSERT INTO `logs` 
        (`id`, `description`, `info_ip`, `info_computer`, `created_at`) 
        VALUES (NULL, :description, :info_ip, :info_computer, :created_at);');
    $query->execute([
        ':description'      => $description,
        ':info_ip'          => $info_ip,
        ':info_computer'    => $info_computer,
        ':created_at'       => date_create()->format('Y-m-d H:i:s'),
    ]);
}

function addLogsErrors($logs_error) {
    include 'connect.php';
    if ($logs_error > 2) {
        $query = $pdo->query('
            SELECT max(id) FROM logs');
        $id_logs = $query->fetch();
        $query  = $pdo->prepare('
        UPDATE `logs` SET `description` = :newDesc WHERE `logs`.`id` = :id; '); 
        $query->execute([
            ':newDesc'  => 'Tentative d\'instrusion dans la zone admin (' . $logs_error . ' tentatives)',
            ':id'       => $id_logs['max(id)'],
        ]);
    }
    else {
        $bdd = $pdo->prepare('
            INSERT INTO `logs` (`id`, `description`, `info_ip`, `info_computer`, `created_at`) VALUES (NULL, :description, :info_ip, :info_computer, :created_at); ');
        $bdd->execute([
            ':description'      => 'Tentative d\'instrusion dans la zone admin (' . $logs_error . ' tentatives)',
            ':info_ip'          => 'Adresse Ip concernée : ' . $_SERVER['REMOTE_ADDR'],
            ':info_computer'    => 'Information de la machine : ' . $_SERVER['HTTP_USER_AGENT'],
            ':created_at'       => date_create()->format('Y-m-d H:i:s'),
        ]);
    } 
}

function getBrowser()
{
    $u_agent = $_SERVER['HTTP_USER_AGENT'];
    $bname = 'Unknown';
    $platform = 'Unknown';
    $version= "";

    if (preg_match('/linux/i', $u_agent)) {
        $platform = 'linux';
    }
    elseif (preg_match('/macintosh|mac os x/i', $u_agent)) {
        $platform = 'mac';
    }
    elseif (preg_match('/windows|win32/i', $u_agent)) {
        $platform = 'windows';
    }
   
    if(preg_match('/MSIE/i',$u_agent) && !preg_match('/Opera/i',$u_agent))
    {
        $bname = 'Internet Explorer';
        $ub = "MSIE";
    }
    elseif(preg_match('/Firefox/i',$u_agent))
    {
        $bname = 'Mozilla Firefox';
        $ub = "Firefox";
    }
    elseif(preg_match('/Chrome/i',$u_agent))
    {
        $bname = 'Google Chrome';
        $ub = "Chrome";
    }
    elseif(preg_match('/Safari/i',$u_agent))
    {
        $bname = 'Apple Safari';
        $ub = "Safari";
    }
    elseif(preg_match('/Opera/i',$u_agent))
    {
        $bname = 'Opera';
        $ub = "Opera";
    }
    elseif(preg_match('/Netscape/i',$u_agent))
    {
        $bname = 'Netscape';
        $ub = "Netscape";
    }
   
    $known = array('Version', $ub, 'other');
    $pattern = '<browser>' . join('|', $known) .
    '<version>';
    if (!preg_match_all($pattern, $u_agent, $matches)) {
    }
   
    $i = count($matches['browser']);
    if ($i != 1) {
        if (strripos($u_agent,"Version") < strripos($u_agent,$ub)){
            $version= $matches['version'][0];
        }
        else {
            $version= $matches['version'][1];
        }
    }
    else {
        $version= $matches['version'][0];
    }
   
    if ($version==null || $version=="") {$version="?";}
   
    return array(
        'userAgent' => $u_agent,
        'name'      => $bname,
        'version'   => $version,
        'platform'  => $platform,
        'pattern'    => $pattern
    );
} 