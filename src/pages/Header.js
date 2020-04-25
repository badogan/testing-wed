import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
// import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import LocalLibraryOutlinedIcon from "@material-ui/icons/LocalLibraryOutlined";
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';


const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
    fontSize: "250%"
  },
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));

export default function Header({user,handleLogout}) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <LocalLibraryOutlinedIcon className={classes.icon} color='inherit'/>
          <Typography variant="h5" className={classes.title}>
            I WANT MY BOOK BACK!
          </Typography>
          {user && <Button onClick={() => handleLogout()} color="inherit">Logout</Button>}
        </Toolbar>
      </AppBar>
    </div>
  );
}
