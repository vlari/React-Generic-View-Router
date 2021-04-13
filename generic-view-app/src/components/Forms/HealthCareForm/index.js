import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  submitButton: theme.customStyles.formButtonSubmit,
  removeButtom: theme.customStyles.formButtonRemove,
  healthCareForm: {
    width: '100%',
  },
}));

const HealthCareForm = () => {
  const styles = useStyles();

  return (
    <>
      <form className={styles.healthCareForm}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={10} md={10} lg={10}>
            <TextField
              id='outlined-basic'
              label='Service Name'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid
            container
            alignItems='center'
            justify='center'
            spacing={3}
            direction='column'
          >
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Button variant='contained' color='primary'>
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};

export default HealthCareForm;
