<?php
include_once('../../app/functions.php');
print_r($_POST);
$domain = 'siteminibase.seo-time.ru';
$formKey = 'lead';
if (isset($_POST[$formKey]) AND count($_POST[$formKey])) {

    $subject = 'EazyBreezy Form - Срочно перезвонить!';
    $message = arrayToMessage($_POST[$formKey]);

    $headers = 'From: noreply@' . $domain . "\r\n" .
        'Reply-To: noreply@' . $domain . "\r\n" .
        'X-Mailer: PHP/' . phpversion();

    foreach ($recipients as $to) {
        mail($to, $subject, $message, $headers);
    }
}