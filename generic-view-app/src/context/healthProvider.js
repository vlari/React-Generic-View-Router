import { useReducer } from 'react';
import healthReducer from './healthReducer';
import HealthContext from './healthContext';
import {
  SET_SETTINGS,
  SET_RESOURCE,
  SET_RESOURCES,
  SET_RESOURCE_STATE,
  LOAD_FAILED,
} from './states';

const HealthProvider = (props) => {
  const initialState = {
    resources: [],
    selectedResource: { id: null },
    isResourceLoaded: false,
    settings: {},
    error: null,
  };

  const [state, dispatch] = useReducer(healthReducer, initialState);

  const setSettings = async (setting) => {
    dispatch({
      type: SET_SETTINGS,
      payload: setting,
    });
  };

  const setResources = async (resources) => {
    dispatch({
      type: SET_RESOURCES,
      payload: resources,
    });
  };

  const setResource = async (selectedResource) => {
    dispatch({
      type: SET_RESOURCE,
      payload: selectedResource,
    });
  };

  const setResourceState = async (resourceState) => {
    dispatch({
      type: SET_RESOURCE_STATE,
      payload: resourceState,
    });
  };

  const setError = async (responseError) => {
    dispatch({
      type: LOAD_FAILED,
      payload: responseError,
    });
  };

  return (
    <HealthContext.Provider
      value={{
        settings: state.settings,
        resources: state.resources,
        isResourceLoaded: state.isResourceLoaded,
        selectedResource: state.selectedResource,
        error: state.error,
        setSettings,
        setResources,
        setResource,
        setResourceState,
        setError,
      }}
    >
      {props.children}
    </HealthContext.Provider>
  );
};

export default HealthProvider;
