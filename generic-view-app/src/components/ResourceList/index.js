import { useContext } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import Avatar from '@material-ui/core/Avatar';
import HealthContext from '../../context/healthContext';
import ListIconFactory from '../ListIconFactory';

const useStyles = makeStyles((theme) => ({
  resourceList: {
    listStyleType: 'none',
  },
  cardLayout: {
    border: 'none',
    borderRadius: '22px',
    boxShadow: 'none',
    background: theme.palette.background.default,
    transition: 'background 0.5s, transform 0.5s',
    '&:hover': {
      background: '#f8fafe',
      boxShadow: '1px 1px 22px -20px rgba(0,0,0,0.64)',
      cursor: 'pointer',
    },
  },
  cardSelected: {
    transform: 'scale(1.1)',
    background: '#FFFFFF',
    boxShadow: '1px 1px 22px -20px rgba(0,0,0,0.64)',
    cursor: 'pointer',
  },
  avatarIcon: {
    background: '#ffccd1',
  },
  listDivider: {
    marginTop: '10px',
    marginBottom: '10px',
  },
  cardText: {
    color: '#404040',
  },
}));

const ResourceList = () => {
  const healthContext = useContext(HealthContext);
  const styles = useStyles();
  const selectedStyle = [styles.cardLayout, styles.cardSelected].join(' ');

  const listIcon = (
    <ListIconFactory settingName={healthContext.settings.settingName} />
  );

  const resourceList = healthContext.resources.map((resource, index) => (
    <li key={index}>
      <Card
        className={
          resource.id === healthContext.selectedResource.id
            ? `${selectedStyle}`
            : styles.cardLayout
        }
        onClick={() => handleSelectedResource(resource)}
      >
        <CardContent>
          <Grid item container alignItems='center' spacing={3}>
            <Grid item md={2}>
              <Avatar className={styles.avatarIcon}>{listIcon}</Avatar>
            </Grid>
            <Grid item md={8}>
              <Grid item container>
                <Grid item xs={12}>
                  <Typography variant='h6' className={styles.cardText}>
                    {resource[healthContext.settings.detail.name]}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant='subtitle1' className={styles.cardText}>
                    {resource[healthContext.settings.detail.description]}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </li>
  ));

  const handleSelectedResource = (resource) => {
    healthContext.setResource(resource);
  };

  return (
    <ul className={styles.resourceList}>
      {resourceList.length ? resourceList : null}
      <Divider className={styles.listDivider} variant='middle' />
    </ul>
  );
};

export default ResourceList;
