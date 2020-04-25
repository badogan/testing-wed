import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(0)
  },
  cardGrid: {
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0)
  },
}));

export default function SearchInput({setSearchFilter}) {
  const classes = useStyles();

  return (
    <Container className={classes.cardGrid} maxWidth="md">

    <div className={`${classes.margin}`}>
      <Grid container spacing={2} alignItems="center">
        <Grid item >
          <AccountCircle />
        </Grid>
        <Grid item>
          <TextField
          onChange={(e)=>setSearchFilter(e.target.value)}
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
