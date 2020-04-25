import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1)
  }
}));

export default function AddBook() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Container className={classes.cardGrid} maxWidth="md">
        <Typography variant="h6" gutterBottom>
          Add a new book
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                required
                id="bookName"
                name="bookName"
                label="Book Name"
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="bookCoverURL"
                name="bookCoverURL"
                label="Book Cover URL"
                fullWidth
              />
            </Grid>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Add Book
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Cancel
            </Button>
          </Grid>
        </form>
      </Container>
    </React.Fragment>
  );
}
