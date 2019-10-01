import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import { IoLogoGithub } from "react-icons/io";
const useStyles = makeStyles(theme => ({
  footer: {
    textAlign: "center",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "60px",
    width: "100%",
    fontFamily: "Source Sans Pro",
    color: "#fff",
    fontWeight: "lighter"
  },
  container: {
    backgroundColor: "#485563"
  },
  logo_font: {
    fontFamily: "Source Sans Pro",
    color: "#fff",
    fontWeight: "lighter"
  }
}));

const Footer = () => {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.container}>
        <br />
        <a
          href="https://github.com/gothinkster/angularjs-realworld-example-app"
          target="_blank"
        >
          <Typography className={classes.logo_font} variant="h6" gutterBottom>
            <IoLogoGithub></IoLogoGithub> Fork on GitHub
          </Typography>
        </a>
        <br />
      </div>
    </div>
  );
};

export default Footer;
