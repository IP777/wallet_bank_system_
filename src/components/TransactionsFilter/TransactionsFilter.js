import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

function MonthSelect() {
  const classes = useStyles();
  const [month, setPeriod] = React.useState('');

  const handleChange = (event) => {
    setPeriod(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Месяц</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={month}
          onChange={handleChange}
          label="Месяц"
        >
          <MenuItem value="Месяц">
            <em>Месяц</em>
          </MenuItem>
          <MenuItem value={1}>Январь</MenuItem>
          <MenuItem value={2}>Февраль</MenuItem>
          <MenuItem value={3}>Март</MenuItem>
          <MenuItem value={4}>Апрель</MenuItem>
          <MenuItem value={5}>Май</MenuItem>
          <MenuItem value={6}>Июнь</MenuItem>
          <MenuItem value={7}>Июль</MenuItem>
          <MenuItem value={8}>Август</MenuItem>
          <MenuItem value={9}>Сентябрь</MenuItem>
          <MenuItem value={10}>Октябрь</MenuItem>
          <MenuItem value={11}>Ноябрь</MenuItem>
          <MenuItem value={12}>Декабрь</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

function YearSelect() {
  const classes = useStyles();
  const [year, setPeriod] = React.useState('');

  const handleChange = (event) => {
    setPeriod(event.target.value);
  };

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Год</InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={year}
          onChange={handleChange}
          label="Год"
        >
          <MenuItem value="Год">
            <em>Год</em>
          </MenuItem>
          <MenuItem value={2010}>2000</MenuItem>
          <MenuItem value={2011}>2000</MenuItem>
          <MenuItem value={2012}>2000</MenuItem>
          <MenuItem value={2013}>2000</MenuItem>
          <MenuItem value={2014}>2014</MenuItem>
          <MenuItem value={2015}>2015</MenuItem>
          <MenuItem value={2016}>2016</MenuItem>
          <MenuItem value={2017}>2017</MenuItem>
          <MenuItem value={2018}>2018</MenuItem>
          <MenuItem value={2019}>2019</MenuItem>
          <MenuItem value={2020}>2020</MenuItem>
          <MenuItem value={2021}>2021</MenuItem>
          <MenuItem value={2022}>2022</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}

export { MonthSelect, YearSelect };
