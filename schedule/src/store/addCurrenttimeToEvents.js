const addCurrentTimeToEvents = (events, appTimeZone) => events.map(event => {
  const [date, time ] = new Date(+new Date(event.dateTime) + (+appTimeZone - +event.timeZone) * 3600 * 1000)
  .toLocaleString().slice(0,-3).split(', ')
  return {...event, currentTime: time, currentDate: date }
})

export default addCurrentTimeToEvents;