import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
}));

export default function SearchInput() {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">

    <div className={`${classes.margin}`}>
      <Grid container spacing={1} alignItems="center">
        <Grid item >
          <AccountCircle />
        </Grid>
        <Grid>
          <TextField
            id="outlined-search"
            label="Search whom you lent your books to"
            type="search"
            variant="outlined"
          />
        </Grid>
      </Grid>
    </div>
    </Container>

  );
}
