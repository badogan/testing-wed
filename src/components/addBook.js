import React, { useState } from "react";

import API from "../APIsHelpers/API";
import SearchResults from "./searchResults";

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

export default function AddBook(props) {
  const classes = useStyles();

  const [title, setTitle] = useState(null);
  const [coverURL, setCoverURL] = useState(null);

  // New Code
  const [searchedBooks, setSearchedBooks] = useState();
  const handleSearchBook = e => {
    API.searchBook({
      title: title
    })
      .then(res => res.json())
      .then(data => {
        // console.log("data.data: ", data.data);
        if (data.status === "success") {
          setSearchedBooks(data.data.data);
        }
      });
  };
  //

  const handleAddBook = (title, coverURL) => {
    setTitle(title);
    setCoverURL(coverURL);
    API.addBook(props.user._id, {
      title,
      coverURL
    }).then(data => {
      console.log("new book returned data: ", data);
      if (data.status === "success") {
        props.getAllBooks(props.user._id);
        props.setAddBookInit(false);
      }
    });
  };

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
                onChange={e => setTitle(e.target.value)}
                required
                id="bookName"
                name="bookName"
                label="Book Name"
                fullWidth
              />
            </Grid>

            <Button
              onClick={e => {
                e.preventDefault();
                handleSearchBook();
              }}
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Search Book
            </Button>
            <Button
              onClick={() => props.setAddBookInit(false)}
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Cancel
            </Button>
          </Grid>
        </form>
        {true && props.addBookInit && searchedBooks && (
          <SearchResults
            tileData={searchedBooks}
            handleAddBook={handleAddBook}
          />
        )}
      </Container>
    </React.Fragment>
  );
}
