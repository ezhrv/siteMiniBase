<?php
include_once('../../app/functions.php');
$domain = 'siteminibase.seo-time.ru';
$formKey = 'lead';

print_r($_POST);

// ���� � $_POST ������� ���� ������� � ������ lead � �� �� ������
if (isset($_POST[$formKey]) AND count($_POST[$formKey])) {
    $subject = 'EazyBreezy Form - ������ �����������!';

    // ��������� ����� �� �������
    $message = arrayToMessage($_POST[$formKey]);
    $headers = 'From: noreply@' . $domain . "\r\n" .
        'Reply-To: noreply@' . $domain . "\r\n" .
        'X-Mailer: PHP/' . phpversion();
    // ��������� ���� ����������� �� �������
    foreach ($recipients as $to) {
        mail($to, $subject, $message, $headers);
    }
}