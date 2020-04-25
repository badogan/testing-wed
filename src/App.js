import React, { useState, useEffect } from "react";
import { Route } from "react-router-dom";

import API from "./APIsHelpers/API";

import CssBaseline from "@material-ui/core/CssBaseline";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Header from "./pages/Header";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";
import ShowPage from "./pages/ShowPage";

function App(props) {
  const [user, setUser] = useState(null);
  const [books, setBooks] = useState(null);
  const [showBook, setShowBook] = useState(null);

  const handleShowBook = showBook => {
    setShowBook(showBook);
    props.history.push("/show");
  };

  const updateUser = user => {
    setUser(user);
    getAllBooks(user._id).then(() => props.history.push("/main"));
  };

  const getAllBooks = id => {
    return new Promise(resolve =>
      API.getAllBooks(id).then(data => {
        if (data.status === "success") {
          setBooks(data.data.data);
          resolve();
        }
      })
    );
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Header />

      <Route
        exact
        path="/"
        render={routerProps => {
          return <LandingPage {...routerProps} />;
        }}
      />

      <Route
        exact
        path="/login"
        render={routerProps => {
          return (
            <LoginPage {...routerProps} user={user} updateUser={updateUser} />
          );
        }}
      />

      <Route
        exact
        path="/signup"
        render={routerProps => {
          return (
            <SignupPage {...routerProps} user={user} updateUser={updateUser} />
          );
        }}
      />

      <Route
        exact
        path="/main"
        render={routerProps => {
          return (
            <MainPage
              {...routerProps}
              books={books}
              handleShowBook={handleShowBook}
              user={user}
              getAllBooks={getAllBooks}
            />
          );
        }}
      />

      <Route
        exact
        path="/show"
        render={routerProps => {
          return (
            <ShowPage
              {...routerProps}
              book={showBook}
              user={user}
              updateUser={updateUser}
            />
          );
        }}
      />
    </React.Fragment>
  );
}

export default App;
