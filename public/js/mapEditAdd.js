ymaps.ready(init);
let value;
const exitingValue = document.querySelector('#address')
function init() {
  let myPlacemark;
  ymaps.geocode(exitingValue.value).then((res) => {
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
    myMap.geoObjects.add(firstGeoObject);
 })
  
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

  // Слушаем клик на карте.
  myMap.events.add('click', (e) => {
    const coords = e.get('coords');
    // Если метка уже создана – просто передвигаем ее.
    if (myPlacemark) {
      myPlacemark.geometry.setCoordinates(coords);
    }
    // Если нет – создаем.
    else {
      myPlacemark = createPlacemark(coords);
      myMap.geoObjects.add(myPlacemark);
      // Слушаем событие окончания перетаскивания на метке.
      myPlacemark.events.add('dragend', () => {
        getAddress(myPlacemark.geometry.getCoordinates());
      });
    }
    getAddress(coords);
  });

  // Создание метки.
  function createPlacemark(coords) {
    return new ymaps.Placemark(coords, {
      iconCaption: 'поиск...',
    }, {
      preset: 'islands#violetDotIconWithCaption',
      draggable: true,
    });
  }

  // Определяем адрес по координатам (обратное геокодирование).
  function getAddress(coords) {
    myPlacemark.properties.set('iconCaption', 'поиск...');
    ymaps.geocode(coords).then((res) => {
      const firstGeoObject = res.geoObjects.get(0);

      myPlacemark.properties
        .set({
          // Формируем строку с данными об объекте.
          iconCaption: [
            // Название населенного пункта или вышестоящее административно-территориальное образование.
            firstGeoObject.getLocalities().length ? firstGeoObject.getLocalities() : firstGeoObject.getAdministrativeAreas(),
            // Получаем путь до топонима, если метод вернул null, запрашиваем наименование здания.
            firstGeoObject.getThoroughfare() || firstGeoObject.getPremise(),
          ].filter(Boolean).join(', '),

          // В качестве контента балуна задаем строку с адресом объекта.
          balloonContent: firstGeoObject.getAddressLine(),

        });
      value = firstGeoObject._xalEntities.addressLine;
      const divchik = document.querySelector('#address');
      divchik.value = value;
    });
  }
}
