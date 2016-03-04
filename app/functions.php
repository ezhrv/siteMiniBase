<?php
/**
 * Файл с функциями и переменными проекта
 * User: yevgeny-zakharov
 * Date: 04.03.2016
 * Time: 10:44
 */
include_once("config.php");
/**
 * Выводит шаблон из папки template-parts
 * @param $name
 */
function get_template_part($name)
{
    global $A_PATH;
    require_once($A_PATH . '/template-parts/' . $name);
}

/**
 * Из массива делает текст, который можно отправить по почте. Клиенту или себе.
 */
function arrayToMessage($array)
{
    $text = print_r($array, true);
    //$text = str_replace(array('[',']',')','(','Array'), "", $text);
    return $text;
}