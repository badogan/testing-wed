import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import SigninSide from "./pages/SigninSide";
import Header from "./pages/Header";
import LandingPage from './pages/LandingPage'

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      {null && <SigninSide />}
      <LandingPage/>
    </React.Fragment>
  );
}

export default App;
