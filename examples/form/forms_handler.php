<?php
include_once('../../app/functions.php');
$domain = 'siteminibase.seo-time.ru';
$formKey = 'lead';

print_r($_POST);

// Если в $_POST массиве есть элемент с ключом lead и он не пустой
if (isset($_POST[$formKey]) AND count($_POST[$formKey])) {
    $subject = 'EazyBreezy Form - Срочно перезвонить!';

    // Формируем текст из массива
    $message = arrayToMessage($_POST[$formKey]);
    $headers = 'From: noreply@' . $domain . "\r\n" .
        'Reply-To: noreply@' . $domain . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    // Рассылаем всем получателям из массива
    foreach ($recipients as $to) {
        mail($to, $subject, $message, $headers);
    }
}