/**
 * Пример JS обработчика форм
 * Created by yevgeny-zakharov on 04.03.2016.
 */


jQuery.fn.exists = function () {
    return this.length > 0;
}

// Функция мерцания элемента. Для привлечения внимания.
function blink(form, selector) {
    jQuery(form).find(selector).fadeOut(200);
    jQuery(form).find(selector).fadeIn(200);
    jQuery(form).find(selector).fadeOut(200);
    jQuery(form).find(selector).fadeIn(200);
}

// проверка email'а на корректность
function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
