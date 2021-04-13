import {
  LOAD_FAILED,
  SET_SETTINGS,
  SET_RESOURCES,
  SET_RESOURCE,
  SET_RESOURCE_STATE,
} from './states';

const reducer = (state, action) => {
  switch (action.type) {
    case SET_SETTINGS:
      return {
        ...state,
        settings: action.payload,
      };
    case SET_RESOURCES:
      return {
        ...state,
        resources: action.payload,
      };
    case SET_RESOURCE:
      return {
        ...state,
        selectedResource: action.payload,
      };
    case SET_RESOURCE_STATE:
      return {
        ...state,
        isResourceLoaded: action.payload,
      };
    case LOAD_FAILED:
      return {
        ...state,
        error: action.payload,
      };
    default:
      break;
  }
};

export default reducer;
