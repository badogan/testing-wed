import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6)
  }
}));


export default function ListBook({book,handleShowBook}) {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Grid item key={book} xs={12} sm={6} md={4}>
        <Card className={classes.card}>
          <CardMedia
          onClick={() => handleShowBook(book)}
            className={classes.cardMedia}
            image={book.coverURL}
            title={book.title}
            alt={book.title}
          />

          <CardContent className={classes.cardContent}>
            <Typography gutterBottom variant="h5" component="h2">
              {book.title}
            </Typography>
            <Typography>
              Lent To: {book.lentTo}
            </Typography>
          </CardContent>
          <CardActions>
            <Button onClick={() => handleShowBook(book)} size="small" color="primary">
              View Book
            </Button>
            <Button size="small" color="primary">
              Lent to: {book.lentTo ? book.lentTo : 'Nobody'}
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </React.Fragment>
  );
}
