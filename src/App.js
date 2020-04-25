import React from "react";
import { Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import Header from "./pages/Header";
import LandingPage from "./pages/LandingPage";
import MainPage from "./pages/MainPage";

function App() {
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
          return <LoginPage {...routerProps} />;
        }}
      />

      <Route
        exact
        path="/signup"
        render={routerProps => {
          return <SignupPage {...routerProps} />;
        }}
      />

      <Route
        exact
        path="/main"
        render={routerProps => {
          return <MainPage {...routerProps} />;
        }}
      />
    </React.Fragment>
  );
}

export default App;
