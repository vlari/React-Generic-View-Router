import React from 'react';
import { useEffect, useContext } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import FormContainer from '../FormContainer';
import SearchContainer from '../SearchContainer';
import getResourceSetting from '../../../services/settingService';
import HealthContext from '../../../context/healthContext';
import { get } from '../../../services/dataService';

const useStyles = makeStyles({
  managerLayout: {
    marginTop: '2%',
  },
});

const Manager = () => {
  const { resource } = useParams();
  const healthContext = useContext(HealthContext);
  const history = useHistory();
  const styles = useStyles();

  useEffect(() => {
    if (!resource) {
      history.push({ pathname: '/manager/appointments' });
    } else {
      const setting = getResourceSetting(resource);
      healthContext.setResourceState(false);

      get(setting.dataPath).then(
        (response) => {
          console.info('my response ', response);

          healthContext.setResources(response);
          healthContext.setResource({ id: null });
          healthContext.setSettings(setting);
          healthContext.setResourceState(true);
        },
        (error) => {
          healthContext.setResourceState(true);
          healthContext.setErrorResponse(error);
        }
      );
    }
  }, [resource]);

  return (
    <Grid container spacing={6} className={styles.managerLayout}>
      <Grid item md={6} lg={6}>
        <FormContainer />
      </Grid>
      <Grid item md={6} lg={6}>
        <SearchContainer />
      </Grid>
    </Grid>
  );
};

export default Manager;
