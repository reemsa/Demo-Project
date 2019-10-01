import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles(themes => ({
  button: {
    color: "#fff",
    backgroundColor: "#818a91",
    paddingRight: "0.6em",
    paddingLeft: "0.6em",
    borderRadius: "10rem",
    fontSize: "0.8rem",
    paddingBottom: "0.1rem",
    paddingTop: "0.1rem",
    marginBottom: "0.2rem",
    marginRight: "0.1rem"
  }
}));
function TagButton({ name }: { name: string }) {
  const classes = useStyles();
  return (
    <div>
      <Button className={classes.button} size="small">
        {name}
      </Button>
    </div>
  );
}
export default TagButton;
