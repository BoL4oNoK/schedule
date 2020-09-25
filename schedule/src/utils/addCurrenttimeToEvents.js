import { TIME_ZONES } from '../constants/constants';

const addCurrentTimeToEvents = (events, appTimeZone) => events.map(event => {
  const appTimeZoneValue = TIME_ZONES.find(el => el.name === appTimeZone).value;
  const currentDateObj = new Date(+new Date(event.dateTime) + (+appTimeZoneValue - +event.timeZone) * 3600 * 1000);
  let deadlineObj = {};
  if (event.deadlineDateTime) {
    const currentDeadlineDateObj = new Date(+new Date(event.deadlineDateTime) + (+appTimeZoneValue - +event.timeZone) * 3600 * 1000);
    const [deadlineDate, deadlineTime] = currentDeadlineDateObj.toLocaleString().slice(0,-3).split(', ');
    deadlineObj = {currentDeadlineDateObj, currentDeadlineDate: deadlineDate, currentDeadlineTime: deadlineTime};
  }
  const [date, time ] = currentDateObj.toLocaleString().slice(0,-3).split(', ');
  return {...event, currentTime: time, currentDate: date, currentDateObj, ...deadlineObj };
}).sort((a, b) => a.currentDateObj - b.currentDateObj);

export default addCurrentTimeToEvents;