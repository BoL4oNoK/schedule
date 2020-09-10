const MAIN_URL = 'https://rs-react-schedule.firebaseapp.com/api/team/7/';

const urls = {
  GET_EVENTS: `${MAIN_URL}events`,
  POST_EVENT: `${MAIN_URL}event`,
  USE_EVENT_BY_ID: `${MAIN_URL}event/`,
  GET_ORGANIZERS: `${MAIN_URL}organizers`,
  ADD_NEW_ORGANIZER: `${MAIN_URL}organizer`,
  USE_ORGANIZER_BY_ID: `${MAIN_URL}organizer/`,
};

const GIT_LINK = 'https://github.com/';

const userModal = {
  MODAL_TITLE: 'Задание',
  ONLINE: 'Online',
  DATE_FORMAT: 'DD-MM-YYYY HH:mm',
};

const map = {
  KEY: '4a07d892-7c5e-4508-8c23-e8d6632ff3d9',
};

export {
  GIT_LINK,
  urls,
  userModal,
  map,
};