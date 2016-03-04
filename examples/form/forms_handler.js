/**
 * Пример JS обработчика форм
 * Created by yevgeny-zakharov on 04.03.2016.
 */


// Функция мерцания элемента. Для привлечения внимания.
function blink(form, selector) {
    jQuery(form).find(selector).fadeOut(200);
    jQuery(form).find(selector).fadeIn(200);
    jQuery(form).find(selector).fadeOut(200);
    jQuery(form).find(selector).fadeIn(200);
}

$(function () {
    // Селекторы ключевых элементов формы с которыми будем взаимодействовать
    var selectorButton = '.sendLead'; // Кнопка
    var selectorForm = '.leadForm'; // Тело формы
    var selectorStatusBlock = '#statusForm'; // Пустой блок для статуса (успех или ошибка)
    var selectorPhone = '#phone'; // Телефон

    // Когда клик по кнопке "Отправить"
    $(selectorButton).click(function () {

        // Инициируем объекты отталкиваясь от нажатой кнопки "Отправить",
        // чтобы этот обработчик можно было повесить на несколько форм
        var sendButton = $(this); // Объект кнопки "Отправить"
        var form = $(sendButton).parents(selectorForm); // Объект текущей формы, отталкиваясь от нажатой кнопки
        var phone = $(form).find(selectorPhone); // Объект инпута "Ваш номер", отталкиваясь от текущей формы

        // Переменная с номером телефона
        var phone_value = $(phone).val();
        // Обрезаем все лишние символы которые ввёл пользователь чтобы определить корректную длину телефона
        phone_value = phone_value.replace(/[ \-()+]/g, "");
        var phone_length = phone_value.length; // Длина телефона

        // Если длина телефона 10, 11 или 12
        if (phone_length == 10 || phone_length == 11 || phone_length == 12) {

            // Сериализуем форму для отправки
            var serialize_form = jQuery(form).serialize();

            jQuery.ajax({
                type: "POST",
                url: "forms_handler.php",
                data: serialize_form,
                context: document.body
            }).done(function (success) {

                // Если в ответе fors_handler.php мы получили error
                if (success == 'error') {
                    $(form).find(selectorStatusBlock).html('<hr><div class="alert alert-danger" role="alert" style="text-align: center;">К сожалению, произошла ошибка. <br>Пожалуйста, попробуйте ещё раз</div>');

                } else { // Если error'а не было

                    $(form).find(selectorStatusBlock).html('<hr><div class="alert alert-success" role="alert" style="text-align: center;">Данные отправлены. В ближайшее время мы свяжемся с Вами</div>');

                    // Отключаем форму
                    jQuery(sendButton).attr('disabled', 'disabled').text('Отправлено');
                    jQuery(form).find('input,textarea').attr('disabled', 'disabled');

                    console.log(success);
                    $('#post').text(success);
                }


                // Удаляем "border: '1px solid red;" у инпута "Ваш телефон"
                jQuery(phone).removeAttr('style');
            });
        } else { // Если длинна телефона не 10,11 или 12
            $(phone).css('border', '1px solid red');
            // Мигание
            blink(form, selectorPhone);
        }
    });
});