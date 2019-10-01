import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import TagButton from "./TagButton";
const useStyles = makeStyles(themes => ({
  card: {
    minHeight: "1px",
    maxWidth: 400,
    flex: "0 0 25%",
    paddingLeft: "15px",
    paddingRight: "15px",
    position: "relative",
    backgroundColor: "#f3f3f3"
  },
  title: {
    fontSize: "1rem",
    color: "373a3c",
    fontFamily: "Source Sans Pro",
    lineHeight: "1.5",
    boxSizing: "inherit"
  },
  div: {
    paddingLeft: 100
  }
}));
function PopularTags() {
  const classes = useStyles();
  return (
    <div className={classes.div}>
      {" "}
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title} variant="h5" component="h2">
            Popular Tags
          </Typography>
        </CardContent>
        <CardActions>
          <TagButton name="butt"></TagButton>
          <TagButton name="dragons"></TagButton>
          <TagButton name="test"></TagButton>
        </CardActions>
        <CardActions>
          <TagButton name="traning"></TagButton>
          <TagButton name="tags"></TagButton>
          <TagButton name="as"></TagButton>
          <TagButton name="coffee"></TagButton>
        </CardActions>
        <CardActions>
          <TagButton name="animation"></TagButton>
          <TagButton name="cars"></TagButton>
          <TagButton name="flowers"></TagButton>
          <TagButton name="baby"></TagButton>
        </CardActions>
        <CardActions>
          <TagButton name="money"></TagButton>
          <TagButton name="caramel"></TagButton>
          <TagButton name="japan"></TagButton>
          <TagButton name="happiness"></TagButton>
        </CardActions>
        <CardActions>
          <TagButton name="clean"></TagButton>
          <TagButton name="sugar"></TagButton>
          <TagButton name="sushi"></TagButton>
          <TagButton name="well"></TagButton>
        </CardActions>
        <CardActions>
          <TagButton name="cookies"></TagButton>
        </CardActions>
      </Card>
    </div>
  );
}
export default PopularTags;
