import addCurrentTimeToEvents from './addCurrenttimeToEvents';
import createDeadlineEvents from './createDeadlineEvents';

const updateEventDataObjects = (data, timezone) => {
    return addCurrentTimeToEvents(
        createDeadlineEvents(data),
        timezone,
    )
};

export default updateEventDataObjects;