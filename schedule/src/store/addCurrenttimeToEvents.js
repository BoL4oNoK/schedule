const addCurrentTimeToEvents = (events, appTimeZone) => events.map(event => {
  const currentDateObj = new Date(+new Date(event.dateTime) + (+appTimeZone - +event.timeZone) * 3600 * 1000)
  const [date, time ] = currentDateObj.toLocaleString().slice(0,-3).split(', ')
  return {...event, currentTime: time, currentDate: date, currentDateObj }
}).sort((a, b) => a.currentDateObj - b.currentDateObj);

export default addCurrentTimeToEvents;