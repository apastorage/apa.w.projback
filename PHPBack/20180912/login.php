<?php

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

if (isset($_POST['login'])) 
{ 
	$login = $_POST['login']; 
	echo "ok";
	if ($login == '') 
	{ 
		unset($login);
		echo "uns";
	} 
}

if (isset($_POST['password'])) 
{ 
	$password=$_POST['password']; 
	echo "ok";
	if ($password =='') 
	{ 
		unset($password);
		echo "uns";
	}
}
if ( $curl = curl_init () ) //инициализация сеанса
{

echo 'ok';

    curl_setopt ($curl, CURLOPT_URL, 'http://127.0.0.1/default.aspx');//указываем адрес страницы
	
	curl_setopt($curl, CURLOPT_PORT, 4444);

    curl_setopt ($curl, CURLOPT_RETURNTRANSFER, 1);

    curl_setopt ($curl, CURLOPT_POST, true);

	$jsonParameters = json_encode(array('login'=>$login,'password'=>$password));
	
    curl_setopt ($curl, CURLOPT_POSTFIELDS, "jpss;Type=LD;".$jsonParameters.";jpse");

    curl_setopt ($curl, CURLOPT_HEADER, 0);

    $result = curl_exec ($curl);//выполнение запроса

    curl_close ($curl);//закрытие сеанса

	echo $result;
  }

?>