/* Форма записи «Диамедика»: валидация и подготовка письма без backend. */
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
    var message = form.querySelector('[name="message"]');
    var consent = form.querySelector('[name="consent"]');
    var valid = name.value.trim().length > 1 && phone.value.trim().length >= 6 && consent.checked;

    if (!valid) {
      if (error) error.hidden = false;
      return;
    }

    var subject = 'Заявка на консультацию — Диамедика';
    var body = 'Имя: ' + name.value.trim() +
      '\nТелефон: ' + phone.value.trim() +
      '\nКомментарий: ' + (message && message.value.trim() ? message.value.trim() : '—');
    var mailto = 'mailto:info@diamedika.ru?subject=' +
      encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);

    var link = document.createElement('a');
    link.href = mailto;
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    link.remove();

    if (success) {
      success.innerHTML = 'Открываем почтовый клиент для отправки заявки. ' +
        'Если он не открылся — позвоните <a href="tel:+74994550528">+7 (499) 455-05-28</a>.';
      success.hidden = false;
    }
    form.reset();
  });
})();
