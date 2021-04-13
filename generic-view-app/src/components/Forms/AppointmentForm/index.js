import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from '@material-ui/pickers';

const useStyles = makeStyles((theme) => ({
  submitButton: theme.customStyles.formButtonSubmit,
  removeButtom: theme.customStyles.formButtonRemove,
  patientForm: {
    width: '100%',
  },
}));

const AppointmentForm = () => {
  const [selectedDate, setSelectedDate] = useState(
    new Date('2014-08-18T21:11:54')
  );
  const styles = useStyles();

  const handleDateChange = (date) => {
    setSelectedDate(date);
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
              id='outlined-basic'
              label='Doctor'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={10} md={10} lg={10}>
            <TextField
              id='outlined-basic'
              label='Email'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={4} sm={4} md={4} lg={4}>
            <TextField
              id='outlined-basic'
              label='Phone'
              variant='outlined'
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={10} md={10} lg={10}>
            <TextField
              fullWidth
              id='outlined-basic'
              label='Hospital address'
              variant='outlined'
            />
          </Grid>
          <Grid item xs={12} sm={10} md={10} lg={10}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <Grid container justify='flex-start'>
                <KeyboardDatePicker
                  disableToolbar
                  variant='inline'
                  format='MM/dd/yyyy'
                  margin='normal'
                  id='date-picker-inline'
                  label='Date'
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                    'aria-label': 'change date',
                  }}
                />
              </Grid>
            </MuiPickersUtilsProvider>
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

export default AppointmentForm;
