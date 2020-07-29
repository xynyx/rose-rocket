import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { connect } from "react-redux";

import moment from "moment";
moment().format();

const useStyles = makeStyles(theme => ({
  root: {
    float: "right",
    display: "flex",
    alignItems: "center",
    width: 500,
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 175,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function YearSelect() {
  const classes = useStyles();

  const [year, setYear] = useState(moment().year());

  const handleChange = e => {
    setYear(e.target.value);
  };

  const yearList = () => {
    const years = [];

    for (let i = 2000; i <= moment().year(); i++) {
      years.push(i);
    }

    return years.map(year => (
      <MenuItem key={year} value={year}>
        {year}
      </MenuItem>
    ));
  };

  return (
    <FormControl variant="outlined" className={classes.formControl}>
      <InputLabel>Year</InputLabel>
      <Select value={year} onChange={handleChange} label="Year">
        {yearList()}
      </Select>
    </FormControl>
  );
}
