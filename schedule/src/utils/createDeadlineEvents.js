const createDeadlineEvents = (events) => {
    const eventsBase = events.map((eventElement, index) => {
        return {eventId: index, ...eventElement};
    });

    const eventsLength = eventsBase.length;
    const eventsDeadlines = [];
    eventsBase.forEach((eventElement, index) => {
        if (eventElement.deadlineDateTime) {
            eventsDeadlines.push({
                ...eventElement,
                eventId: eventsLength + index,
                eventIndex: index,
                dateTime: eventElement.deadlineDateTime,
                type: "deadline",
                deadlineDateTime: null,
            });
        }
    });

    return [...eventsBase, ...eventsDeadlines];
};

export default createDeadlineEvents;
