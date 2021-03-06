import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
//need it to show user photo when get from database
import CardMedia from "@material-ui/core/CardMedia";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import LikeButton from "../LikeButton";

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 1000,
    boxShadow: "none",
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
  },
  avatar: {
    backgroundColor: red[500]
  }
}));

function ArticleCard() {
  const classes = useStyles();
  const userName = "reem";
  const title = "it is about good person";
  const articleName = "reem article";
  const date = "September 14, 2016";
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <LikeButton number={0}></LikeButton>
          </IconButton>
        }
        title={userName}
        subheader={date}
      />

      <CardContent>
        <Typography variant="h5" color="textPrimary" component="p">
          {articleName}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {title}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Typography variant="caption" color="textSecondary">
          read more...
        </Typography>
      </CardActions>
    </Card>
  );
}
export default ArticleCard;
