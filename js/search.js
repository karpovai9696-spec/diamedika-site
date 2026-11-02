/* Клиентский поиск по сайту «Диамедика» */
(function () {
  'use strict';

  var PAGES = [
    { url: 'altufyevo.html', title: 'Центр «Алтуфьево» — Диамедика', description: 'Центр гемодиализа у м. Алтуфьево: адрес, телефон, услуги.', keywords: 'алтуфьево илимская 9 центр' },
    { url: 'perovo.html', title: 'Центр «Перово» — Диамедика', description: 'Центр гемодиализа у м. Перово: адрес, телефон, услуги.', keywords: 'перово центр гемодиализ' },
    { url: 'prazhskaya.html', title: 'Центр «Пражская» — Диамедика', description: 'Центр гемодиализа у м. Пражская: адрес, телефон, услуги.', keywords: 'пражская варшавское шоссе центр' },
    { url: 'shpilovskaya.html', title: 'Центр «Шипиловская» — Диамедика', description: 'Центр гемодиализа на Шипиловской: адрес, телефон, услуги.', keywords: 'шипиловская центр гемодиализ' },
    { url: 'index.html', title: 'Главная — Диамедика', description: 'Клиника амбулаторного гемодиализа в Москве: 4 центра, ОМС, гостевой диализ.', keywords: 'диализ гемодиализ диамедика москва омс центр' },
    { url: 'o-klinike.html', title: 'О клинике — Диамедика', description: 'История, подход и инфраструктура сети «Диамедика».', keywords: 'о клинике история диамедика москва' },
    { url: 'uslugi.html', title: 'Услуги — Диамедика', description: 'Программный и гостевой диализ, консультация нефролога.', keywords: 'услуги гемодиализ гостевой диализ нефролог' },
    { url: 'gostevoj-dializ.html', title: 'Гостевой диализ — Диамедика', description: 'Сеансы гемодиализа для пациентов, временно находящихся в Москве.', keywords: 'гостевой диализ москва омс' },
    { url: 'rezhim-i-grafik-raboty.html', title: 'Режим и график работы — Диамедика', description: 'График работы и запись в центры «Диамедика».', keywords: 'режим график расписание запись' },
    { url: 'vidy-i-usloviya-pomoschi.html', title: 'Виды и условия помощи по ОМС — Диамедика', description: 'Виды помощи по полису ОМС.', keywords: 'омс помощь условия гемодиализ' },
    { url: 'pravila-zapisi.html', title: 'Правила записи — Диамедика', description: 'Как записаться на консультацию и диализ.', keywords: 'запись правила документы консультация' },
    { url: 'platnye-uslugi.html', title: 'Платные услуги — Диамедика', description: 'Информация о платных услугах.', keywords: 'платные услуги цены' },
    { url: 'besplatnye-konsultacii.html', title: 'Бесплатные консультации — Диамедика', description: 'Бесплатные консультации нефролога.', keywords: 'бесплатно консультация нефролог' },
    { url: 'medikamentoznoe-obespechenie.html', title: 'Медикаментозное обеспечение — Диамедика', description: 'Лекарственное обеспечение и назначения врача.', keywords: 'лекарства препараты обеспечение' },
    { url: 'pokazateli-dostupnosti.html', title: 'Показатели доступности и качества — Диамедика', description: 'Показатели доступности и качества помощи.', keywords: 'качество доступность показатели' },
    { url: 'anketa-ocenki-kachestva.html', title: 'Анкета оценки качества — Диамедика', description: 'Оценка качества услуг.', keywords: 'анкета качество оценка отзыв' },
    { url: 'rezultaty-nezavisimoj-ocenki.html', title: 'Результаты независимой оценки — Диамедика', description: 'Результаты независимой оценки качества.', keywords: 'независимая оценка качество bus.gov.ru' },
    { url: 'usloviya-i-poryadok.html', title: 'Условия и порядок оказания помощи — Диамедика', description: 'Порядок оказания медицинской помощи.', keywords: 'условия порядок помощь' },
    { url: 'prava-grazhdan.html', title: 'Права граждан — Диамедика', description: 'Права пациентов в сфере охраны здоровья.', keywords: 'права пациенты 323-фз' },
    { url: 'dopolnitelnaya-informaciya.html', title: 'Дополнительная информация — Диамедика', description: 'Дополнительная информация и документы.', keywords: 'документы информация пациенты' },
    { url: 'pravila-vnutrennego-rasporyadka.html', title: 'Правила внутреннего распорядка — Диамедика', description: 'Правила для пациентов центра.', keywords: 'правила распорядок' },
    { url: 'nabor-socialnyh-uslug.html', title: 'Набор социальных услуг — Диамедика', description: 'Социальные услуги и льготы.', keywords: 'социальные услуги льготы нсу' },
    { url: 'poleznoe.html', title: 'Полезное: гемодиализ и фистула — Диамедика', description: 'Материалы о гемодиализе, фистуле и питании.', keywords: 'полезное гемодиализ фистула питание' },
    { url: 'strahovye-kompanii.html', title: 'Страховые компании — Диамедика', description: 'Страховые компании в системе ОМС.', keywords: 'страховые компании омс полис согаз капитал' },
    { url: 'programma-gos-garantii.html', title: 'Программа государственных гарантий — Диамедика', description: 'Программа госгарантий бесплатной помощи.', keywords: 'программа госгарантии омс' },
    { url: 'novosti.html', title: 'Новости и полезные статьи — Диамедика', description: 'Новости центров и статьи о здоровье почек.', keywords: 'новости статьи полезное' },
    { url: 'rukovodstvo.html', title: 'Руководство — Диамедика', description: 'Руководство клиники «Диамедика».', keywords: 'руководство директор нуриев' },
    { url: 'svedeniya-o-medrabotnikah.html', title: 'Сведения о медицинских работниках — Диамедика', description: 'Заведующие центрами и врачи-нефрологи.', keywords: 'медработники врачи нефрологи сотрудники' },
    { url: 'vakansii.html', title: 'Вакансии — Диамедика', description: 'Вакансии в центрах «Диамедика».', keywords: 'вакансии работа врач медсестра' },
    { url: 'nadzornye-organy.html', title: 'Надзорные органы — Диамедика', description: 'Контакты надзорных органов.', keywords: 'надзор росздравнадзор роспотребнадзор' },
    { url: 'dostizheniya-i-nagrady.html', title: 'Достижения и награды — Диамедика', description: 'Достижения центров «Диамедика».', keywords: 'достижения награды' },
    { url: 'licenzii.html', title: 'Лицензии и документы — Диамедика', description: 'Лицензия и реквизиты ООО «Диамедика».', keywords: 'лицензия документы реквизиты' },
    { url: 'kontakty.html', title: 'Контакты — Диамедика', description: 'Адреса и телефоны четырех центров в Москве.', keywords: 'контакты адрес телефон центры' },
    { url: 'politika-obrabotki-pdn.html', title: 'Политика обработки ПДн — Диамедика', description: 'Политика обработки персональных данных.', keywords: 'политика персональные данные' },
    { url: 'soglasie-na-obrabotku-pdn.html', title: 'Согласие на обработку ПДн — Диамедика', description: 'Согласие на обработку персональных данных.', keywords: 'согласие персональные данные' },
    { url: 'search.html', title: 'Поиск по сайту — Диамедика', description: 'Поиск по страницам сайта.', keywords: 'поиск найти' },
    { url: 'sitemap.html', title: 'Карта сайта — Диамедика', description: 'Все разделы сайта.', keywords: 'карта сайта разделы' }
  ];

  function normalize(value) {
    return value.toLowerCase().replace(/ё/g, 'е').trim();
  }

  function init() {
    var form = document.querySelector('.search-form');
    if (!form) return;
    var input = document.getElementById('site-search');
    var results = document.getElementById('search-results');
    var empty = document.getElementById('search-empty');
    var count = document.querySelector('.search-count');

    function render(query) {
      var words = normalize(query).split(/\s+/).filter(Boolean);
      if (!words.length) {
        results.innerHTML = '';
        if (count) count.textContent = '';
        empty.hidden = true;
        return;
      }
      var found = [];
      PAGES.forEach(function (page) {
        var haystack = normalize(page.title + ' ' + page.description + ' ' + page.keywords);
        var score = words.reduce(function (sum, word) {
          return sum + (haystack.indexOf(word) !== -1 ? 1 : 0);
        }, 0);
        if (score) found.push({ page: page, score: score });
      });
      found.sort(function (a, b) { return b.score - a.score; });
      results.innerHTML = found.map(function (item) {
        return '<article class="search-result"><h2>' + item.page.title +
          '</h2><p>' + item.page.description + '</p><a href="' + item.page.url +
          '">Перейти →</a></article>';
      }).join('');
      empty.hidden = found.length > 0;
      if (count) count.textContent = found.length ? 'Найдено: ' + found.length : '';
    }

    form.addEventListener('submit', function (event) {
      event.preventDefault();
      var query = input.value;
      var url = new URL(window.location.href);
      if (query.trim()) url.searchParams.set('q', query.trim());
      else url.searchParams.delete('q');
      history.replaceState(null, '', url.pathname + url.search);
      render(query);
    });
    input.addEventListener('input', function () { render(input.value); });

    var params = new URLSearchParams(window.location.search);
    if (params.get('q')) {
      input.value = params.get('q');
      render(input.value);
    }
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
