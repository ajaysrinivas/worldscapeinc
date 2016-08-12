<?php
session_start();

if ($_SESSION["code"] == $_POST["captcha"]) {
 
$name = htmlspecialchars($_POST['name']);
$lname = htmlspecialchars($_POST['lname']);
$email = htmlspecialchars($_POST['email']);
$number = htmlspecialchars($_POST['number']);
$subject = htmlspecialchars($_POST['subject']);
$msg = htmlspecialchars($_POST['message']);


$message = 'First Name: ' . $name. '<br/>';
$message .= 'Last Name: ' . $lname. '<br/>';
$message .= 'Email ID: ' . $email. '<br/>';
$message .= 'Contact Us: ' . $number. '<br/>';
$message .= 'Subject: ' . $subject. '<br/>';
$message .= 'Description: ' . $msg;

         $to = "damian@dewsoftware.com";
       
//        $header = "From:$email \r\n";
//          $header .= "MIME-Version: 1.0\r\n";
//        $header .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$header  = 'MIME-Version: 1.0' . "\r\n";
	$header .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";
	$header .= "From: $email" . "\r\n";

       $retval = mail ($to,$subject,$message,$header);
echo "success";
}
else
{
echo "error";
}
      
?>
