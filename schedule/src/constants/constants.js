
const MAIN_URL = 'https://rs-react-schedule.firebaseapp.com/api/team/7/';

const mentorModal = {
  eventTypes: {
    web: "Web/JS",
    android: "Android",
    ios: "IOS",
    qa: "QA",
  },
  timezone: {
    kaliningrad: "Kaliningrad (GMT +2)",
    warsaw: "Warsaw (GMT +3)",
    minsk: "Minsk (GMT +3)",
  },
  isOnline: {
    online: "Online",
    offline: "Offline",
  },
  streetType: {
    avenue: "Проспект",
    street: "Улица",
    lane: "Переулок",
  },
};


const urls = {
  GET_EVENTS: `${MAIN_URL}events`,
  POST_EVENT: `${MAIN_URL}event`,
  USE_EVENT_BY_ID: `${MAIN_URL}event/`,
  GET_ORGANIZERS: `${MAIN_URL}organizers`,
  ADD_NEW_ORGANIZER: `${MAIN_URL}organizer`,
  USE_ORGANIZER_BY_ID: `${MAIN_URL}organizer/`,
};

const GIT_LINK = 'https://github.com/';

export {
  GIT_LINK,
  urls,
  mentorModal
};

