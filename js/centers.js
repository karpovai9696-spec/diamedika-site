/* Переключатель центров «Диамедика»: меняет подпись, телефон и адрес. */
(function () {
  'use strict';
  var KEY = 'diamedika_center';
  var CENTERS = {
    altufyevo: {
      label: 'Москва · м. Алтуфьево',
      phone: '+7 (499) 116-00-83',
      tel: '+74991160083',
      address: 'г. Москва, ул. Илимская, д. 9'
    },
    perovo: {
      label: 'Москва · м. Перово',
      phone: '+7 (499) 948-04-56',
      tel: '+74999480456',
      address: 'г. Москва, 1-й проезд Перова Поля, д. 9, стр. 2'
    },
    prazhskaya: {
      label: 'Москва · м. Пражская',
      phone: '+7 (499) 290-38-29',
      tel: '+74992903829',
      address: 'г. Москва, Варшавское шоссе, д. 129, корп. 2'
    },
    shpilovskaya: {
      label: 'Москва · м. Шипиловская',
      phone: '+7 (495) 393-28-73',
      tel: '+74953932873',
      address: 'г. Москва, ул. Шипиловская, д. 34, корп. 1'
    }
  };

  function setText(el, value) {
    if (el) el.textContent = value;
  }

  function update(key) {
    var c = CENTERS[key];
    if (!c) return;
    setText(document.querySelector('.city-select__text'), c.label);
    var headerPhone = document.querySelector('.header-phone');
    if (headerPhone) {
      headerPhone.href = 'tel:' + c.tel;
      setText(headerPhone, c.phone);
    }
    var footerPhone = document.querySelector('.footer-phone');
    if (footerPhone) {
      footerPhone.href = 'tel:' + c.tel;
      var footerPhoneText = footerPhone.querySelector('span');
      if (footerPhoneText) setText(footerPhoneText, c.phone);
    }
    setText(document.querySelector('.footer-address span'), c.address);

    var options = document.querySelectorAll('#city-menu [data-center]');
    for (var i = 0; i < options.length; i++) {
      var option = options[i];
      var current = option.getAttribute('data-center') === key;
      option.classList.toggle('is-current', current);
      if (current) option.setAttribute('aria-current', 'page');
      else option.removeAttribute('aria-current');
    }
  }

  var stored = null;
  try { stored = localStorage.getItem(KEY); } catch (e) {}
  if (stored && CENTERS[stored]) update(stored);

  var links = document.querySelectorAll('#city-menu [data-center]');
  for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
      var key = this.getAttribute('data-center');
      if (!CENTERS[key]) return;
      try { localStorage.setItem(KEY, key); } catch (e) {}
      update(key);
    });
  }
})();
