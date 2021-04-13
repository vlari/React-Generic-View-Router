import { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';

import FormFactory from '../../FormFactory';
import HealthContext from '../../../context/healthContext';
import formBackground from '../../../assets/images/form-background.svg';
import ProgressBar from '../../ProgressBar';

const useStyles = makeStyles((theme) => ({
  cardLayout: {
    boxShadow: '1px 1px 22px -20px rgba(0,0,0,0.64)',
    borderRadius: '22px',
    background: '#FFD0D5',
  },
  cardImage: {
    width: '100%',
    height: '265px',
    display: 'block',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    objectFit: 'contain',
  },
  formCardContent: {
    borderTop: '1px solid #FFD0D5',
    borderTopLeftRadius: '20px',
    borderTopRightRadius: '20px',
    background: '#FFFFFF',
    padding: '30px',
  },
}));

const FormContainer = () => {
  const healthContext = useContext(HealthContext);
  const styles = useStyles();

  return (
    <Grid container>
      <Grid item xs={12}>
        <Card className={styles.cardLayout}>
          <img
            className={styles.cardImage}
            src={formBackground}
            alt='form-background'
          />
          <CardContent className={styles.formCardContent}>
            {healthContext.isResourceLoaded ? (
              <Grid item container justify='center' xs={12} md={12}>
                <FormFactory />
              </Grid>
            ) : (
              <Grid
                alignItems='center'
                justify='center'
                item
                container
                xs={12}
                md={12}
              >
                <ProgressBar />
              </Grid>
            )}
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default FormContainer;
