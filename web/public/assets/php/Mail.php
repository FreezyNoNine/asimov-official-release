<!DOCTYPE html>
<html lang="fr" xmlns="http://www.w3.org/1999/xhtml">
<head>
<title>Asimov</title>
</head>
<body>

<?php
$mail = 'kallouchwisam@gmail.com'; 
if (!preg_match("#^[a-z0-9._-]+@(hotmail|live|msn).[a-z]{2,4}$#", $mail)) // On filtre les serveurs qui pr�sentent des bogues.
	$EOL = "\r\n";
else
	$EOL = "\n";

$message_txt = "";

$sujet = "Demande d'info Asimov.com";

$replynom = $_POST['name'];
$replymail = $_POST['email'];
$header = "MIME-Version: 1.0".$EOL;
$header.= "Content-Type: text/html;".$EOL;
$header.= "From: \"Info\"<kallouchwisam@gmail.com>".$EOL;
$header.= "Reply-to: \"$replynom\"<$replymail>"."\r\n";
//===== Creation du message.
$message = $EOL.$message_txt.$EOL;
$text = $_POST['message'];
$res = $_POST['res'];
$country = getLocationInfoByIp();
$message.= $EOL.$replynom." : ".$replymail."<br/>".$text.$EOL."<br/>Pays : ".$country['country'].$EOL."<br/>Ville : ".$country['city'].$EOL;;
//===== Envoi de l'e-mail.
if($text != "" OR $page != ""){
	if($res == 7){
		mail($mail,$sujet,$message,$header);
		echo ("
			<div class='ButtonRetourCentrer' style='text-align:center;'>
				<h1>Votre email est envoyé à : kallouchwisam@gmail.com</h1> 
				<h2><a href='../../views/accueil.ejs' class='boutton'>Retour au site</a></h2>
			</div>"
		);
	}
	else {
		echo ("
			<div class='ButtonRetourCentrer' style='text-align:center;'>
				<h1>The result of 5 + 2 is not equal to $res</h1> 
				<h2><a href='../../views/accueil.ejs' class='boutton'>Retour au site</a></h2>
			</div>"
		);
	}
}

function getLocationInfoByIp(){
    $client  = @$_SERVER['HTTP_CLIENT_IP'];
    $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
    $remote  = @$_SERVER['REMOTE_ADDR'];
    $result  = array('country'=>'', 'city'=>'');
    if(filter_var($client, FILTER_VALIDATE_IP)){
        $ip = $client;
    }elseif(filter_var($forward, FILTER_VALIDATE_IP)){
        $ip = $forward;
    }else{
        $ip = $remote;
    }
    $ip_data = @json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=".$ip));    
    if($ip_data && $ip_data->geoplugin_countryName != null){
        $result['country'] = $ip_data->geoplugin_countryCode;
        $result['city'] = $ip_data->geoplugin_city;
    }
    return $result;
}

?>

</body>