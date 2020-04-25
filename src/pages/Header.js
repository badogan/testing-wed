import React from "react";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import LocalLibraryOutlinedIcon from '@material-ui/icons/LocalLibraryOutlined';

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
    fontSize: '200%'
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="relative">
        <Toolbar>
          <LocalLibraryOutlinedIcon className={classes.icon} />
          <Typography variant="h4" color="inherit" noWrap>
              I Want My Book Back!
          </Typography>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}
