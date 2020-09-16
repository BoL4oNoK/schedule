import { changeConfirmLocale } from 'antd/lib/modal/locale';
import { TIME_ZONES } from '../constants/constants';

const addCurrentTimeToEvents = (events, appTimeZone) => events.map(event => {
  const appTimeZoneValue = TIME_ZONES.find(el => el.name === appTimeZone).value;
  const currentDateObj = new Date(+new Date(event.dateTime) + (+appTimeZoneValue - +event.timeZone) * 3600 * 1000)
  const [date, time ] = currentDateObj.toLocaleString().slice(0,-3).split(', ')
  return {...event, currentTime: time, currentDate: date, currentDateObj }
}).sort((a, b) => a.currentDateObj - b.currentDateObj);

export default addCurrentTimeToEvents;