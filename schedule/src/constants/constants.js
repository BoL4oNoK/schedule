
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
  MODAL_TITLE: 'Task',
  TASK_DESCTIPTION: 'Description task',
  URL_DESCTIPTION: 'Description URL',
  LOCATION: 'Location',
  ONLINE: 'Online',
  DATE_FORMAT: 'DD-MM-YYYY HH:mm',
};

const map = {
  KEY: '4a07d892-7c5e-4508-8c23-e8d6632ff3d9',
};

const TABLE_COLUMNS = ['date', 'time', 'type', 'name', 'place', 'description', 'descriptionUrl', 'organizer', 'comment'];

const COLUMNS_TEXT = {
  descriptionLink: 'Description Link',
  editButtonName: 'Edit',
  onlineStatus: 'Online',
}

const USERS = {
  student: 'Student', 
  mentor: 'Mentor'
};

const VIEWS_FOR_SCHEDULE = {
  table: 'table',
  list: 'list',
  calendar: 'calendar'
}

const ADD_NEW_EVENT_BUTTON_NAME = 'Add new event';

const TASKS_TYPES = ['codewars', 'test', 'deadline', 'jsTask', 'htmlTask', 'codeJam', 'interview'];

const HIDE_BUTTON_NAME = {
  hideRowsButtonName: 'Hide Rows',
  showRowsButtonName: 'Show All Rows',
};

export {
  GIT_LINK,
  urls,
  mentorModal,
  GIT_AVATAR,
  userModal,
  map,
  TABLE_COLUMNS,
  USERS,
  VIEWS_FOR_SCHEDULE,
  COLUMNS_TEXT,
  ADD_NEW_EVENT_BUTTON_NAME,
  TASKS_TYPES,
  HIDE_BUTTON_NAME
};

