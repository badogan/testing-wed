import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import SigninSide from "./pages/SigninSide";
import Header from "./pages/Header";

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Header/>
      <SigninSide />
    </React.Fragment>
  );
}

export default App;
