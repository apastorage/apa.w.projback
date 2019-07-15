<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=windows-1251" />

<script type="text/javascript" src="data/js/jquery.js"></script>
<link href='http://fonts.googleapis.com/css?family=Orbitron' rel='stylesheet' type='text/css'>
<link rel="stylesheet" type="text/css" href="data/css/main_page.css" />
<script type="text/javascript" src="data/js/jkmegamenu.js"></script>
<script type="text/javascript">

//jkmegamenu.definemenu("anchorid", "menuid", "mouseover|click")
jkmegamenu.definemenu("megaanchor", "megamenu1", "mouseover")

</script>
	<title>  OWRA </title>
</head>
<body ID="mainPage-body" >

<?php

ini_set('error_reporting', E_ALL);
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);

if (isset($_GET['type'])) 
{ 
	$type = $_GET['type'];
	switch ($type) 
	{
		case "reg":
			echo '<div id="loginDiv">
				Registration in the OWRA SYSTEM
				<br/>
				<br/>
				<form action="userProc.php" method="post">
					<input type="hidden" name="type" value="'.$type.'">
					<label class="formCaption">Please set Login:</label>
					<br/>
					<input name="login" type="text" size="40" maxlength="25" style="border: none; background-color: #7df9ff;">
					<br/>
					<label class="formFieldHint">Login must be unique in the SYSTEM</label>
					<br/>
					<br/>
					<label class="formCaption">Please set Password:</label>
					<br/>
					<input name="password" type="password" size="40" maxlength="25" style="border: none; background-color: #7df9ff;">
					<br/>
					<label class="formFieldHint">Password must be at least 8 characters long</label>
					<br/>
					<br/>
					<label class="formCaption">Please confirm Password:</label>
					<br/>
					<input name="rePassword" type="password" size="40" maxlength="25" style="border: none; background-color: #7df9ff;">
					<br/>
					<label class="formFieldHint">Password fields must mutch</label>
					<br/>
					<br/>
					<label class="formCaption">Please set Recover Password:</label>
					<br/>
					<input name="recoverPassword" type="password" size="40" maxlength="25" style="border: none; background-color: #7df9ff;">
					<br/>
					<label class="formFieldHint">Tt helps for recovering your main password</label>
					<br/>
					<br/>
					<label class="formCaption">Please confirm Recover Password:</label>
					<br/>
					<input name="reRecoverPassword" type="password" size="40" maxlength="25" style="border: none; background-color: #7df9ff;">
					<br/>
					<label class="formFieldHint">Recover Password fields must mutch</label>
					<br/>
					<br/>
					<input type="image" name="image" src="data/img/okButton.png"  style="border: none; background-color: #7df9ff; width: 50px; height: 30px;">
					<input type="image" name="image" src="data/img/cancelButton.png"  style="border: none; align: right; background-color: #7df9ff; width: 100px; height: 30px;">
				</form>
				<a href="index.php">Login </a>
				<a href="index.php?type=recover">Recover Password </a>
				</div>';
			break;
		case 1:
			echo "i равно 1";
			break;
		case 2:
			echo "i равно 2";
			break;
	}

}
else
{
echo '<div id="loginDiv">
Please login to the SYSTEM
<br/>
<br/>
<form action="userProc.php" method="post">
	<input type="hidden" name="type" value="login">
    <label>Login:</label><br/>
  <input name="login" type="text" size="15" maxlength="15" style="border: none; background-color: #7df9ff;"><br/>
    <label>Password:</label><br/>
	<input name="password" type="password" size="15" maxlength="15" style="border: none; background-color: #7df9ff;"><br/><br/>
  <input type="image" name="image" src="data/img/okButton.png"  style="border: none; background-color: #7df9ff; width: 50px;">
</form>

<a href="index.php?type=recover">Recover Password </a> <a href="index.php?reg=reg">Register </a>
</div>';
}
?>

</body>
</html>