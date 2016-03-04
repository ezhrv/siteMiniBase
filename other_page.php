<?php
/**
 * Любая другая страница
 * User: yevgeny-zakharov
 * Date: 04.03.2016
 * Time: 11:19
 */
include_once('app/functions.php');
?>
<!DOCTYPE html>
<html lang="ru">

<head>
    <?= get_template_part('head.php'); ?>
</head>

<body id="flat">

<?= get_template_part('header.php'); ?>

<p>CONTENT</p>

<?= get_template_part('footer.php'); ?>
<?= get_template_part('modals.php'); ?>

</body>
</html>

