import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import { makeStyles } from '@material-ui/core/styles';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  inputSearch: {
    borderRadius: '22px !important',
    background: '#FFF',
  },
}));

const SearchBar = ({ searchOptions }) => {
  const styles = useStyles();

  return (
    <form>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={8} md={6} lg={6}>
          <TextField
            label={searchOptions ? `${searchOptions.label}` : ''}
            variant='outlined'
            fullWidth
            InputProps={{
              startAdornment: (
                <InputAdornment position='start'>
                  <SearchRoundedIcon />
                </InputAdornment>
              ),
              classes: {
                root: styles.inputSearch,
              },
            }}
          />
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchBar;
