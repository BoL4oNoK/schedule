const addCurrentTimeToEvents = (events, appTimeZone) => events.map(event => 
  ({...event, currentTime: new Date(+new Date(event.dateTime) + (+appTimeZone - +event.timeZone) * 3600 * 1000) }))

export default addCurrentTimeToEvents;