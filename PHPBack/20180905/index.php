<?php

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

if (isset($_GET['reg'])) 
{
if ($_GET['registration'] =='tru') 
	{

	
	}
}
echo '1';

if ( $curl = curl_init () ) //������������� ������
{

echo 'ok';

    curl_setopt ($curl, CURLOPT_URL, 'http://127.0.0.1/default.aspx');//��������� ����� ��������
	
	curl_setopt($curl, CURLOPT_PORT, 4444);

    curl_setopt ($curl, CURLOPT_RETURNTRANSFER, 1);

    curl_setopt ($curl, CURLOPT_POST, true);

	$jsonParameters = json_encode(array('Type'=>"dataType",'Count'=>3));
    curl_setopt ($curl, CURLOPT_POSTFIELDS, "jpss".$jsonParameters."jpse");

    curl_setopt ($curl, CURLOPT_HEADER, 0);

    $result = curl_exec ($curl);//���������� �������

    curl_close ($curl);//�������� ������

	echo $result;
  }
?>