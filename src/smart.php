<?php
 
 use PHPMailer\PHPMailer\PHPMailer;
 use PHPMailer\PHPMailer\Exception;
 use PHPMailer\PHPMailer\SMTP;
 
require 'phpmailer/src/Exception.php';
require 'phpmailer/src/PHPMailer.php';
require 'phpmailer/src/SMTP.php';

$firstname = $_POST['firstname'];
$lastname = $_POST['lastname'];
$email = $_POST['email'];
$comment = $_POST['comment'];

// require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer();
$mail->CharSet = 'utf-8';

$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.yandex.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'k0gut-pavel@yandex.ru';                 // Наш логин
$mail->Password = 'iwfdolznzyxclyzi';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';  	                          // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('k0gut-pavel@yandex.ru', 'Личный сайт');   // От кого письмо 
$mail->addAddress('k0gut-pavel@yandex.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Данные читателя с личного сайта';
$mail->Body    = '
		Пользователь оставил комментарий <br> 
	Имя: ' . $firstname . ' <br>
	Фамилия: ' . $lastname . ' <br>
	Email: ' . $email . ' <br> 
	Комментарий: ' . $comment;

if(!$mail->send()) {
    return false;
} else {
    return true;
}

?>