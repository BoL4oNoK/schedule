
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
const GIT_AVATAR = 'https://avatars.githubusercontent.com/';

const userModal = {
  MODAL_TITLE: 'Задание',
  ONLINE: 'Online',
  DATE_FORMAT: 'DD-MM-YYYY HH:mm',
};

const map = {
  KEY: '4a07d892-7c5e-4508-8c23-e8d6632ff3d9',
};

const TABLE_COLUMNS = ['Date', 'Time', 'Name', 'Place', 'Broadcast URL', 'Organizer', 'Details URL', 'Comment'];

const USERS = {
  student: 'Student', 
  mentor: 'Mentor'
};

export {
  GIT_LINK,
  urls,
  mentorModal,
  GIT_AVATAR,
  userModal,
  map,
  TABLE_COLUMNS,
  USERS
};

