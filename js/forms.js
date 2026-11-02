/* Форма записи «Диамедика»: локальная валидация без отправки на сервер. */
(function () {
  'use strict';
  var form = document.getElementById('appointment-form');
  if (!form) return;
  var error = document.getElementById('form-error');
  var success = document.getElementById('form-success');

  form.addEventListener('submit', function (event) {
    event.preventDefault();
    if (error) error.hidden = true;
    if (success) success.hidden = true;

    var name = form.querySelector('[name="name"]');
    var phone = form.querySelector('[name="phone"]');
    var consent = form.querySelector('[name="consent"]');
    var valid = name.value.trim().length > 1 && phone.value.trim().length >= 6 && consent.checked;

    if (!valid) {
      if (error) error.hidden = false;
      return;
    }
    if (success) success.hidden = false;
    form.reset();
  });
})();
