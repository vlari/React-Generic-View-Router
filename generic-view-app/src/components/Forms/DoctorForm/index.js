import { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  submitButton: theme.customStyles.formButtonSubmit,
  removeButtom: theme.customStyles.formButtonRemove,
  doctorForm: {
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  selectFormControl: {
    margin: theme.spacing(1),
    minWidth: 300,
  },
}));

const DoctorForm = () => {
  const [value, setValue] = useState('female');
  const [age, setAge] = useState('');
  const styles = useStyles();

  const onGenderChange = (event) => {
    setValue(event.target.value);
  };

  const onSpecialtyChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <>
      <form>
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
              label='Office'
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
          <Grid item xs={12}>
            <FormControl
              variant='outlined'
              className={styles.selectFormControl}
            >
              <InputLabel id='demo-simple-select-outlined-label'>
                Specialty
              </InputLabel>
              <Select
                labelId='demo-simple-select-outlined-label'
                id='demo-simple-select-outlined'
                value={age}
                onChange={onSpecialtyChange}
                label='Age'
              >
                <MenuItem value=''>
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
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

export default DoctorForm;
