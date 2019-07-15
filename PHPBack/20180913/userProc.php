<?php
echo "1";
ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

$requestStatus = false;
$requestText = "";
echo "2";

if (isset($_POST['type'])) 
{ 
	echo "3";
	$type = $_POST['type'];
	switch($type) 
	{
		case "reg":
			$requestStatus = true;
			if (isset($_POST['login'])) 
			{ 
				$login = $_POST['login']; 
			}
			else
			{
				$requestStatus = false;
			}
			
			if (isset($_POST['password'])) 
			{
				$password=$_POST['password']; 
			}
			else
			{
				$requestStatus = false;
			}
			
			if (isset($_POST['rePassword'])) 
			{
				$rePassword=$_POST['rePassword']; 
			}
			else
			{
				$requestStatus = false;
			}
			
			if (isset($_POST['recoverPassword'])) 
			{
				$recoverPassword=$_POST['recoverPassword']; 
			}
			else
			{
				$requestStatus = false;
			}
			
			if (isset($_POST['reRecoverPassword'])) 
			{
				$reRecoverPassword=$_POST['reRecoverPassword']; 
			}
			else
			{
				$requestStatus = false;
			}
			
			if($requestStatus)
			{
				$jsonParameters = json_encode(array('login'=>$login,'password'=>$password, 'rePassword'=>$rePassword, 'recoverPassword'=>$recoverPassword, 'reRecoverPassword'=>$reRecoverPassword));
				$requestText = "jpss;Type=".$type.";".$jsonParameters.";jpse";
			}
			
		break;
		case "login":
			$requestStatus = true;
			if (isset($_POST['login'])) 
			{ 
				$login = $_POST['login']; 
			}
			else
			{
				$requestStatus = false;
			}
			
			if (isset($_POST['password'])) 
			{
				$password=$_POST['password']; 
			}
			else
			{
				$requestStatus = false;
			}
			
			if($requestStatus)
			{
				$jsonParameters = json_encode(array('login'=>$login,'password'=>$password));
				$requestText = "jpss;Type=".$type.";".$jsonParameters.";jpse";
			}
		break;
	}

if($requestStatus)
{
	//echo 'Request status = '.$requestStatus.' Request text:'.$requestText;
	
	if ( $curl = curl_init () ) //инициализация сеанса
	{
		curl_setopt ($curl, CURLOPT_URL, 'http://127.0.0.1/default.aspx');//указываем адрес страницы
		
		curl_setopt($curl, CURLOPT_PORT, 4444);

		curl_setopt ($curl, CURLOPT_RETURNTRANSFER, 1);

		curl_setopt ($curl, CURLOPT_POST, true);

		curl_setopt ($curl, CURLOPT_POSTFIELDS, $requestText);

		curl_setopt ($curl, CURLOPT_HEADER, 0);

		$result = curl_exec ($curl);

		curl_close ($curl); 

		echo $result;
	  }
}
	
}
?>