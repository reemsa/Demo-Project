import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
interface IProps {
  appName: string;
  token: boolean;
}
const useStyles = makeStyles(theme => ({
  banner: {
    textAlign: "center",
    left: "0",
    right: "0",
    position: "absolute",
    height: "200px"
  },
  container: {
    color: "#FFF",
    backgroundColor: "#5CB85C"
  },
  logo_font: {
    fontWeight: "bold",
    paddingTop: "20px",
    fontFamily: "Titillium Web"
  },
  para: {
    fontWeight: "lighter"
  }
}));

const Banner = ({ appName, token }: IProps) => {
  const classes = useStyles();
  if (token) {
    return null;
  }
  return (
    <Container fixed style={{ height: "200px" }}>
      <div className={classes.banner}>
        <div className={classes.container}>
          <br />
          <Typography className={classes.logo_font} variant="h3" gutterBottom>
            {appName.toLowerCase()}
          </Typography>
          <Typography className={classes.para} variant="h6" gutterBottom>
            A place to share your knowledge.
          </Typography>
          <br />
        </div>
      </div>
    </Container>
  );
};

export default Banner;
