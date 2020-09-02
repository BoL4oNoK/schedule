import urls from '../constants/constants';

const {
  GET_EVENTS,
  POST_EVENT,
  USE_EVENT_BY_ID,
  GET_ORGANIZERS,
  ADD_NEW_ORGANIZER,
  USE_ORGANIZER_BY_ID,
} = urls;

const getEvents = async () => {
  const response = await fetch(GET_EVENTS, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  const data = await response.json();
  return data;
};

const postEvent = async (event) => {
  const rawResponse = await fetch(POST_EVENT, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(event)
  });

  const content = await rawResponse.json();
  return content;
};

const getEventById = async (eventId) => {
  const response = await fetch(`${USE_EVENT_BY_ID}${eventId}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  const data = await response.json();
  return data;
};

const updateEventById = async (eventId) => {
  const response = await fetch(`${USE_EVENT_BY_ID}${eventId}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
    },
  });

  const data = await response.json();
  return data;
};

const deleteEventById = async (eventId) => {
  const response = await fetch(`${USE_EVENT_BY_ID}${eventId}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
    },
  });

  const data = await response.json();
  return data;
};

const getOrganizers = async () => {
  const response = await fetch(GET_ORGANIZERS, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  const data = await response.json();
  return data;
};

const postNewOrganizer = async (organizer) => {
  const rawResponse = await fetch(ADD_NEW_ORGANIZER, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(organizer)
  });

  const content = await rawResponse.json();
  return content;
};

const getOrganizerById = async (organizerId) => {
  const response = await fetch(`${USE_ORGANIZER_BY_ID}${organizerId}`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
    },
  });

  const data = await response.json();
  return data;
};

const updateOrginizerById = async (organizerId) => {
  const response = await fetch(`${USE_ORGANIZER_BY_ID}${organizerId}`, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
    },
  });

  const data = await response.json();
  return data;
}

const deleteOrganizerById = async (organizerId) => {
  const response = await fetch(`${USE_ORGANIZER_BY_ID}${organizerId}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
    },
  });

  const data = await response.json();
  return data;
};

export {
  getEvents,
  postEvent,
  getEventById,
  updateEventById,
  deleteEventById,
  getOrganizers,
  postNewOrganizer,
  updateOrginizerById,
  getOrganizerById,
  deleteOrganizerById,
};