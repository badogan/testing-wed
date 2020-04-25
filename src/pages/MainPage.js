import React, { useState, useEffect } from "react";

import Copyright from "../components/copyright";
import ListBook from "../components/listBook";
import AddBook from "../components/addBook";
import SearchBook from "../components/searchInput";

import { makeStyles } from "@material-ui/core/styles";

import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 0)
  },
  heroButtons: {
    marginTop: theme.spacing(4)
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8)
  },
  card: {
    height: "100%",
    display: "flex",
    flexDirection: "column"
  },
  cardMedia: {
    paddingTop: "56.25%" // 16:9
  },
  cardContent: {
    flexGrow: 1
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));

export default function MainPage({ books, getAllBooks, user, handleShowBook }) {
  const classes = useStyles();

  const [searchFilter, setSearchFilter] = useState("");
  const [addBookInit, setAddBookInit] = useState(false);

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        <Container className={classes.cardGrid} maxWidth="md">
          <SearchBook setSearchFilter={setSearchFilter} />

          {!addBookInit && (
            <Container className={classes.cardGrid} maxWidth="md">
              <form className={classes.form} noValidate>
                <Grid container spacing={3}>
                  <Button
                    onClick={() => setAddBookInit(true)}
                    variant="contained"
                    color="primary"
                  >
                    Add a new book to library
                  </Button>
                </Grid>
              </form>
            </Container>
          )}

          {addBookInit && (
            <AddBook
              setAddBookInit={setAddBookInit}
              getAllBooks={getAllBooks}
              user={user}
            />
          )}
          <Grid container spacing={4}>
            {books &&
              books
                .filter(book =>
                  searchFilter === ""
                    ? book
                    : book.lentTo && book.lentTo.startsWith(searchFilter)
                    ? book
                    : null
                )
                .map((book, index) => (
                  <ListBook
                    key={index}
                    book={book}
                    handleShowBook={handleShowBook}
                  />
                ))}
          </Grid>
        </Container>
      </main>

      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}
