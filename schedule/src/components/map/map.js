function createMap(town, isStreet, street, house) {
  //town название города
  //isStreet будет select это улица, проспект, площадь или переулок
  //street название улицы
  //house номер дома
  const road = street.replace(/\s+/g, '+');
  const key = '4a07d892-7c5e-4508-8c23-e8d6632ff3d9';
  fetch(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${key}&geocode=${town},+${isStreet}+${road},+дом+${house}`)
  .then((resp) => resp.json())
  .then((data) => {
    const location = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos;
    const locationReverse = location.split(' ').reverse();
    const latitude = locationReverse[0];
    const longitude = locationReverse[1];
  });
}

export default createMap;
