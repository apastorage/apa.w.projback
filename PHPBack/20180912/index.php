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

if (isset($_GET['reg'])) 
{
echo '<div id="loginDiv">
Registration in the SYSTEM
<br/>
<br/>
<form action="login.php" method="post">
    <label>Login:</label><br/>
  <input name="login" type="text" size="15" maxlength="15" style="border: none; background-color: #7df9ff;"><br/>
    <label>Password:</label><br/>
	<input name="password" type="password" size="15" maxlength="15" style="border: none; background-color: #7df9ff;"><br/><br/>
  <input type="image" name="image" src="data/img/okButton.png"  style="border: none; background-color: #7df9ff; width: 50px;">
</form>

<a href="#">Recover Password </a>
</div>';
}
else
{
echo '<div id="loginDiv">
Please login to the SYSTEM
<br/>
<br/>
<form action="login.php" method="post">
    <label>Login:</label><br/>
  <input name="login" type="text" size="15" maxlength="15" style="border: none; background-color: #7df9ff;"><br/>
    <label>Password:</label><br/>
	<input name="password" type="password" size="15" maxlength="15" style="border: none; background-color: #7df9ff;"><br/><br/>
  <input type="image" name="image" src="data/img/okButton.png"  style="border: none; background-color: #7df9ff; width: 50px;">
</form>

<a href="#">Recover Password </a> <a href="index.php?reg=reg">Register </a>
</div>';
}
?>

</body>
</html>