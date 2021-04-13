import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  submitButton: theme.customStyles.formButtonSubmit,
  removeButtom: theme.customStyles.formButtonRemove,
  hospitalForm: {
    width: '100%',
  },
}));

const HospitalForm = () => {
  const styles = useStyles();

  return (
    <>
      <form className={styles.hospitalForm}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={10} md={10} lg={10}>
            <TextField
              id='outlined-basic'
              label='Name'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={10} md={10} lg={10}>
            <TextField
              fullWidth
              id='outlined-basic'
              label='Address'
              variant='outlined'
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

export default HospitalForm;
