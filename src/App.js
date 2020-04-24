import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { maxHeight } from "@material-ui/system";
// import "./App.css";
// import Button from "./components/button/button";
// import Hello from "./components/hello/hello";
// import ButtonMUI from "./components/button-MUI/button-MUI";
// import Hook from './components/loginForm/loginForm'

const useStyles = makeStyles(theme => ({
  paperStyle: {
    height: maxHeight,
    // backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    // backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center"
  },
  header: {
    marginTop: 100
  }
}));

function App() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <Paper height="100%" className={classes.paperStyle} elevation={3}>
        <Typography
          className={classes.header}
          color="primary"
          gutterBottom="true"
          variant="h3"
          align="center"
        >
          I WANT MY BOOK BACK
        </Typography>
        <Grid container direction="row" justify="left" alignItems="center">
          <Typography color="secondary" variant="h5" align="left">
            Keep track of your books!
          </Typography>
          <Typography color="secondary" variant="h5" align="center">
            dnm 2
          </Typography>
        </Grid>
      </Paper>
      {/* <div className="App"> */}
      {/* <header className="App-header"> */}
      {/* <Button label='click me please'/> */}
      {/* <ButtonMUI /> */}
      {/* <Hello /> */}
      {/* <Hook/> */}
      {/* </header> */}
      {/* </div> */}
    </React.Fragment>
  );
}

export default App;
