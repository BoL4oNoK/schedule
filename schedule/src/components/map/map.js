import {map} from '../../constants/constants';

const {
  KEY,
} = map;

async function createMap(town, isStreet, street, house) {
  const road = street.replace(/\s+/g, '+');
  const res = await fetch(`https://geocode-maps.yandex.ru/1.x/?format=json&apikey=${KEY}&geocode=${town},+${isStreet}+${road},+дом+${house}`);
  const data = await res.json();
  const location = data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(' ');
  const [longitude, latitude] = location;
  return {
    longitude,
    latitude
  };
}

export default createMap;