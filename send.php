<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];
$phone = $_POST['phone'];
$message = $_POST['message'];
$newsletter_email = $_POST['newsletter_email'];

// Формирование самого письма
$title = "Новое обращение с сайта Best Tour Plan";
$body = "
<h2>Новое обращение</h2>
<b>Имя:</b> $name<br>
<b>Телефон:</b> $phone<br><br>
<b>Сообщение:</b><br>$message
";

// Формирование письма для блока NEWSLETTER
if ($newsletter_email) {
$title = "Подписка на новости сайта Best Tour Plan";
$body = "
<h2>Подписка на новости</h2>
<b>E-mail:</b> $newsletter_email<br>
";
}

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    // $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'revelatio@gmail.com'; // Логин на почте
    $mail->Password   = 'diamfadwekupztma'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('revelatio@gmail.com', 'Revelatio'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('glo.php.mail@ex.ua');

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title;
$mail->Body = $body;

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";}
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
header('Location: thankyou.html');

// Отображение результата для блока NEWSLETTER
if ($newsletter_email) {
header('Location: subscribed.html');
}

// Отображение результата для случая дебага
// echo json_encode(["result" => $result, "resultfile" => $rfile, "status" => $status]);
