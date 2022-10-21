ymaps.ready(init);
let value;
async function init() {
  
  const myMap = new ymaps.Map('map', {
    center: [59.936844, 30.309675],
    zoom: 9,
  }, {
    searchControlProvider: 'yandex#search',
  });
  myMap.controls.remove('geolocationControl'); // удаляем геолокацию
  myMap.controls.remove('searchControl'); // удаляем поиск
  myMap.controls.remove('trafficControl'); // удаляем контроль трафика
  myMap.controls.remove('typeSelector'); // удаляем тип
  myMap.controls.remove('rulerControl'); // удаляем контрол правил

  const response = await fetch('/db', {
    method: 'GET',
  });
  const data = await response.json();

  data.articles.forEach((article) => ymaps.geocode(article.address).then((res) => {
    //  const placemark = new ymaps.Placemark({
    //     balloonContent:`
    //     <a class="articleLink" href=`/${article.id}`></a>
    //     `
    //  })
    // Выбираем первый результат геокодирования.
    const firstGeoObject = res.geoObjects.get(0);
    // Координаты геообъекта.
    const coords = firstGeoObject.geometry.getCoordinates();
    // Область видимости геообъекта.
    const bounds = firstGeoObject.properties.get('boundedBy');

    firstGeoObject.options.set('preset', 'islands#darkBlueDotIconWithCaption');
    // Получаем строку с адресом и выводим в иконке геообъекта.
   // firstGeoObject.properties.set('iconCaption', firstGeoObject.getAddressLine());

    // Добавляем первый найденный геообъект на карту.
    myMap.geoObjects.add(firstGeoObject)
  }));
}
