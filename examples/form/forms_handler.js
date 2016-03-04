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

$(function() {
    var selectorButton = '.sendLead';
    var selectorForm = '.leadForm';
    var selectorStatusBlock = '#status';
    var selectorPhone = '#phone';

   $(selectorButton).click(function() {

       var sendButton = $(this);
       var form = $(sendButton).parents(selectorForm);
       var phone = $(form).find(selectorPhone);

       var phone_value = $(phone).val();
       phone_value = phone_value.replace(/[ \-()+]/g, "");
       var phone_length = phone_value.length;

       if (phone_length == 10 || phone_length == 11 || phone_length == 12) {

           jQuery(phone).removeAttr('style');

           var serialize_form = jQuery(form).serialize();

           jQuery.ajax({
               type: "POST",
               url: "forms_handler.php",
               data: serialize_form,
               context: document.body
           }).done(function (success) {
               if (success == 'error') {

                   $(form).find('#statusForm').html('<hr><div class="alert alert-danger" role="alert" style="text-align: center;">К сожалению, произошла ошибка. <br>Пожалуйста, попробуйте ещё раз</div>');

               } else {
                   $(form).find('#statusForm').html('<hr><div class="alert alert-success" role="alert" style="text-align: center;">Данные отправлены. В ближайшее время мы свяжемся с Вами</div>');

                   jQuery(sendButton).attr('disabled', 'disabled').text('Отправлено');
                   jQuery(form).find('input,textarea').attr('disabled', 'disabled');

                   console.log(success);
                   $('#post').text(success);
               }
           });
       } else {
           $(phone).css('border', '1px solid red');
           blink(form, selectorPhone);
       }
   });
});