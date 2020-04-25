import React from 'react';

import Copyright from '../components/copyright'

import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


const useStyles = makeStyles((theme) => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(10, 0, 6),
    // height: '80vh'
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

export default function Album(props) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Track your books
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
            A personal library - allows you log your books, whom you lent them to, when you lent them. Add and delete books. Search based on whom you lent them to.
              Yours, don&apos;t forget them.
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button onClick={() => props.history.push("/signup")} variant="contained" color="primary">
                    Start your library
                  </Button>
                </Grid>
                <Grid item>
                  <Button onClick={() => props.history.push("/login")} variant="outlined" color="primary">
                    Login
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>

      {/* Footer */}
      <footer className={classes.footer}>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}