import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import { makeStyles } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import homeBackgroundImage from '../../assets/homeImage.svg';

const useStyles = makeStyles((theme) => ({
  managerLayout: {
    marginTop: '2%',
  },
  welcomeCard: {
    ...theme.customStyles.cardLayout,
    background: theme.palette.primary.main,
    color: '#FFFFFF',
  },
  welcomeMessageContainer: {
    paddingTop: '5%',
  },
  homeImage: {
    width: '100%',
  },
  HeaderTitle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  title: {
    color: '#FFFFFF',
  },
}));

const Home = (props) => {
  const { paramName } = useParams();
  const history = useHistory();
  const styles = useStyles();
  const theme = useTheme();
  const isSmallDevice = useMediaQuery(theme.breakpoints.down('xs'));

  useEffect(() => {
    if (!paramName) {
      history.push({ pathname: '/home' });
    }
  }, []);

  return (
    <Grid
      container
      spacing={6}
      justify='center'
      alignItems='center'
      className={styles.managerLayout}
    >
      <Grid item xs={12} sm={12} md={10} lg={10}>
        <Card className={styles.welcomeCard}>
          <CardContent>
            <Grid container>
              <Grid item xs={12} sm={6} md={6} lg={6}>
                <img
                  src={homeBackgroundImage}
                  alt='welcome'
                  className={styles.homeImage}
                />
              </Grid>
              <Grid
                className={styles.welcomeMessageContainer}
                item
                xs={12}
                sm={6}
                md={6}
                lg={6}
              >
                <Typography
                  variant={isSmallDevice ? 'h4' : 'h2'}
                  align='left'
                  className={styles.HeaderTitle}
                  display='block'
                >
                  Welcome!
                </Typography>
                <Typography
                  variant={isSmallDevice ? 'subtitle1' : 'h4'}
                  align='left'
                  className={styles.title}
                >
                  Are you ready for health management?
                </Typography>
                <br/>
                <Button variant='contained' color='secondary'>
                  Go
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Home;
