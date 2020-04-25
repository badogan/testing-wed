import React, {useState} from "react";
import API from "../APIsHelpers/API";

import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2)
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6)
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
  submit: {
    margin: theme.spacing(3, 0, 2),
    marginRight: theme.spacing(1),
    marginLeft: theme.spacing(1)
  }
}));

export default function ShowPage(props) {
  const classes = useStyles();

  const [initLendingProcess,setInitLendingProcess] = useState(false)
  const [toBeLentTo,setToBeLentTo] = useState(null)

  const { coverURL, title, _id, lentTo } = props.book;

  const deleteBook = () => {
    API.deleteBook(props.user._id, props.book._id).then(data => {
      if (data.status === 204) {
        props.updateUser(props.user);
      }
    });
  };

  const handleReturnBook = () => {
    API.patchBook(props.user._id, props.book._id, {
      lentTo: null
    }).then(data => {
      console.log('returned data NOW IS: ',data)
      if (data.status === 200) {
        props.updateUser(props.user)
      }
    });
  };

  const handleLentTo = () => {
    API.patchBook(props.user._id, props.book._id, {
      lentTo: toBeLentTo
    }).then(data => {
      if (data.status === 200) {
        props.updateUser(props.user)
      }
    });
  };


  return (
    <React.Fragment>
      <CssBaseline />
      <Grid item key={props.book} xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={coverURL}
            title={title}
            alt={title}
          />

          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {title}
            </Typography>
            <Typography>Book Id: {_id}</Typography>
            {lentTo && <Typography>Lent To: {lentTo}</Typography>}

            {initLendingProcess && <TextField
                onChange={e => setToBeLentTo(e.target.value)}
                required
                id="lendTo"
                name="lendTo"
                label="Lend To"
                fullWidth
              />}
              {initLendingProcess && <Button
              onClick={() => handleLentTo()}
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Lend book
            </Button>}
            {initLendingProcess && <Button
              onClick={()=>setInitLendingProcess(false)}
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Cancel
            </Button>}
          </CardContent>
          <CardActions>
            {lentTo ? (
              <Button onClick={()=>handleReturnBook()} size="small" color="primary">
                {lentTo} returned the book!
              </Button>
            ) : (
              <Button onClick={()=>setInitLendingProcess(true)} size="small" color="primary">
                somebody will borrow the book!
              </Button>
            )}
            <Button onClick={() => deleteBook()} size="small" color="secondary">
              Remove from library
            </Button>
            <Button
              onClick={() => props.history.push("/main")}
              size="small"
              color="primary"
            >
              Return to list
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </React.Fragment>
  );
}
