import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  submitButton: theme.customStyles.formButtonSubmit,
  removeButtom: theme.customStyles.formButtonRemove,
  patientForm: {
    width: '100%',
  },
}));

const PatientForm = () => {
  const [value, setValue] = useState('female');
  const styles = useStyles();

  const onGenderChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <form className={styles.patientForm}>
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
          <Grid item xs={12}>
            <FormControl component='fieldset'>
              <FormLabel component='legend'>Gender</FormLabel>
              <RadioGroup
                aria-label='gender'
                name='gender'
                value={value}
                onChange={onGenderChange}
              >
                <FormControlLabel
                  value='female'
                  control={<Radio color='primary' />}
                  label='Female'
                />
                <FormControlLabel
                  value='male'
                  control={<Radio color='primary' />}
                  label='Male'
                />
              </RadioGroup>
            </FormControl>
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

export default PatientForm;
