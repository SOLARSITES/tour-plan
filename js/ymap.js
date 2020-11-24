ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map(
    "map",
    {
      center: [7.576, 79.805],
      zoom: 14,
    },
    {
      searchControlProvider: "yandex#search",
    }
  );
  myMap.geoObjects.add(
    new ymaps.Placemark(
      [7.574496534422895, 79.80360422600879],
      {
        balloonContent: "<strong>GRAND HILTON HOTEL</strong>",
        iconCaption: "GRAND HILTON HOTEL",
      },
      {
        preset: "islands#greenDotIconWithCaption",
      }
    )
  );
}
