export const UserAction = {
  UPDATE_POINT: 'UPDATE_POINT',
  ADD_POINT: 'ADD_POINT',
  DELETE_POINT: 'DELETE_POINT',
};

export const FilterType = {
  EVERYTHING: 'everything',
  FUTURE: 'future',
  PAST: 'past',

};

export const UpdateType = {
  PATCH: 'PATCH',
  MINOR: 'MINOR',
  MAJOR: 'MAJOR',
  INIT: 'INIT'
};

export const SortType = {
  SORT_DAY: 'sort-day',
  SORT_TIME: 'sort-time',
  SORT_PRICE: 'sort-price'
};

export const MenuItem = {
  TABLE: 'TABLE',
  STATS: 'STATS'
};

export const RenderPosition = {
  BEFOREBEGIN: 'beforebegin',
  AFTERBEGIN: 'afterbegin',
  BEFOREEND: 'beforeend',
  AFTEREND: 'afterend'
};

export const Mode = {
  DEFAULT: 'DEFAULT',
  EDITING: 'EDITING',
};

export const State = {
  SAVING: 'SAVING',
  DELETING: 'DELETING',
  ABORTING: 'ABORTING'
};

export const NoWaypointsTextType = {
  [FilterType.EVERYTHING]: 'Click New Event to create your first point',
  [FilterType.PAST]: 'There are no past events now',
  [FilterType.FUTURE]: 'There are no future events now'
};

export const Method = {
  GET: 'GET',
  PUT: 'PUT',
  POST: 'POST',
  DELETE: 'DELETE'
};

export const ChartConfiguration = {
  CHART_PADDING_LEFT: 50,
  FONT_SIZE: 13,
  TITLE_FONT_SIZE: 23,
  SCALE_Y_AXES_TICKS_PADDING: 5,
  BAR_THICKNESS: 44,
  MIN_BAR_LENGTH: 50,
};

export const pricesByTypes = {
  'TAXI': 0,
  'BUS': 0,
  'TRAIN': 0,
  'SHIP': 0,
  'DRIVE': 0,
  'FLIGHT': 0,
  'CHECK-IN': 0,
  'SIGHTSEEING': 0,
  'RESTAURANT': 0,
};

export const countTypesNumber = {
  'TAXI': 0,
  'BUS': 0,
  'TRAIN': 0,
  'SHIP': 0,
  'DRIVE': 0,
  'FLIGHT': 0,
  'CHECK-IN': 0,
  'SIGHTSEEING': 0,
  'RESTAURANT': 0,
};

export const countTypesInMs = {
  'TAXI': 0,
  'BUS': 0,
  'TRAIN': 0,
  'SHIP': 0,
  'DRIVE': 0,
  'FLIGHT': 0,
  'CHECK-IN': 0,
  'SIGHTSEEING': 0,
  'RESTAURANT': 0,
};

export const arrayLabel = ['🚕 TAXI', '🚌 BUS', '🚂 TRAIN', '🛳 SHIP', '🚗 DRIVE', '✈️ FLIGHT', '🏨 CHECK-IN', '🏛 SIGHTSEEING', '🍴RESTAURANT'];
