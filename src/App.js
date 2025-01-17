import React from "react";
import { Grid } from "@material-ui/core";

import Details from "./components/Details/Details";
import Main from "./components/Main/Main";
import useStyles from "./styles";

const App = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      className={classes.grid}
      display="flex"
      direction="row"
      alignItems="center"
      justifyContent="center"
      sx={{ height: "100vh"  }}
    >
      <Grid item xs={12} sm={4}>
        <Details title="Income" />
      </Grid>
      <Grid item xs={12} sm={3}>
        <Main />
      </Grid>
      <Grid item xs={12} sm={4}>
        <Details title="Expense" />
      </Grid>
    </Grid>
  );
};

export default App;
