const MAIN_URL = "https://rs-react-schedule.firebaseapp.com/api/team/7/";

const MENTOR_MODAL = {
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
  DATE_FORMAT: "YYYY-MM-DD HH:mm",
};

const urls = {
  GET_EVENTS: `${MAIN_URL}events`,
  POST_EVENT: `${MAIN_URL}event`,
  USE_EVENT_BY_ID: `${MAIN_URL}event/`,
  GET_ORGANIZERS: `${MAIN_URL}organizers`,
  ADD_NEW_ORGANIZER: `${MAIN_URL}organizer`,
  USE_ORGANIZER_BY_ID: `${MAIN_URL}organizer/`,
};

const GIT_LINK = "https://github.com/";
const GIT_AVATAR = "https://avatars.githubusercontent.com/";

const userModal = {
  MODAL_TITLE: "Task",
  TASK_DESCTIPTION: "Description task",
  URL_DESCTIPTION: "Description URL",
  LOCATION: "Location",
  ONLINE: "Online",
  DATE_FORMAT: "DD-MM-YYYY HH:mm",
};

const map = {
  KEY: "4a07d892-7c5e-4508-8c23-e8d6632ff3d9",
};

const TABLE_COLUMNS = [
  "date",
  "time",
  "type",
  "name",
  "place",
  "description",
  "descriptionUrl",
  "organizer",
  "comment",
];

const COLUMNS_TEXT = {
  descriptionLink: "Description Link",
  editButtonName: "Edit",
  deleteButtonName: "Delete",
  onlineStatus: "Online",
};

const USERS = {
  student: "Student",
  mentor: "Mentor",
};

const VIEWS_FOR_SCHEDULE = {
  table: "table",
  list: "list",
  calendar: "calendar",
};

const ADD_NEW_EVENT_BUTTON_NAME = "Add new event";

const TASKS_TYPES = [
  "codewars",
  "test",
  "deadline",
  "jsTask",
  "htmlTask",
  "codeJam",
  "interview",
  "selfeducation",
];

const TIME_ZONES = [
  { name: "Europe/London", value: "+1" },
  { name: "Europe/Warsaw", value: "+2" },
  { name: "Europe/Kiev", value: "+3" },
  { name: "Europe/Minsk", value: "+3" },
  { name: "Europe/Moscow", value: "+3" },
  { name: "Europe/Volgograd", value: "+4" },
  { name: "Asia/Yekaterinburg", value: "+5" },
  { name: "Asia/Tashkent", value: "+5" },
  { name: "Asia/Tbilisi", value: "+4" },
];

const HEADERS_FOR_TABLE_CSV = [
  { label: "Date", key: "currentDate" },
  { label: "Time", key: "currentTime" },
  { label: "Type", key: "type" },
  { label: "Name", key: "name" },
  { label: "Place", key: "place" },
  { label: "Description", key: "description" },
  { label: "Description URL", key: "descriptionUrl" },
  { label: "Organizer", key: "organizer" },
  { label: "Comment", key: "comment" },
];

const HIDE_BUTTON_NAME = {
  hideRowsButtonName: "Hide Rows",
  showRowsButtonName: "Show All Rows",
};

const DOWNLOAD_BUTTONS_NAME = {
  downloadCsvButtonName: "Download CSV",
  downloadPdfButtonName: "Download PDF",
};

const DefaultEditState = {
  description: "",
  place: "",
  dateTime: "",
  organizer: "",
  comment: "",
  descriptionUrl: "",
  type: "",
  deadlineDateTime: "",
  timeZone: "",
  name: "",
  id: "",
};

const IMPAIRED_SWITCH_TITLE = 'Version for the visually impaired';

const LIST_DESCRIPTION_URL_LINK_TITLE = 'Description URL';

const CALENDAR_VIEW_LIMITS = {
  warningTitle: 'Window Size',
  warningDescription: 'Sorry, this window size not available for calendar.',
  widthLimit: 800,
};

export {
  GIT_LINK,
  urls,
  MENTOR_MODAL,
  GIT_AVATAR,
  userModal,
  map,
  TABLE_COLUMNS,
  USERS,
  VIEWS_FOR_SCHEDULE,
  COLUMNS_TEXT,
  ADD_NEW_EVENT_BUTTON_NAME,
  TASKS_TYPES,
  TIME_ZONES,
  HIDE_BUTTON_NAME,
  DOWNLOAD_BUTTONS_NAME,
  HEADERS_FOR_TABLE_CSV,
  IMPAIRED_SWITCH_TITLE,
  LIST_DESCRIPTION_URL_LINK_TITLE,
  CALENDAR_VIEW_LIMITS,
  DefaultEditState,
};
