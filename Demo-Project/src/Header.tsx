import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: "#ffffff",
    maxWidth: "100^%",
    boxShadow: "none"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  abeld: {
    color: "0d0d0d"
  },
  disabeld: {
    color: "#b2aaaa"
  },
  title: {
    flexGrow: 1,
    color: "#5CB85C",
    fontWeight: "bolder",
    fontFamily: "Titillium Web"
  }
}));
function Header({
  loginFlage,
  userName
}: {
  loginFlage: boolean;
  userName?: string;
}) {
  const flage = loginFlage;
  const classes = useStyles();
  const [Homestyle, setHomestyle] = useState(classes.abeld);
  const [Singinstyle, setSinginstyle] = useState(classes.disabeld);
  const [Singupstyle, setSingupstyle] = useState(classes.disabeld);
  const Homehandelclick = (event: any) => {
    setHomestyle(classes.abeld);
    setSinginstyle(classes.disabeld);
    setSingupstyle(classes.disabeld);
  };
  const Singinhandelclick = (event: any) => {
    setHomestyle(classes.disabeld);
    setSinginstyle(classes.abeld);
    setSingupstyle(classes.disabeld);
  };

  const Singuphandelclick = (event: any) => {
    setHomestyle(classes.disabeld);
    setSinginstyle(classes.disabeld);
    setSingupstyle(classes.abeld);
  };
  //loged in succsecfully
  if (!flage) {
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              <Link style={{ textDecoration: "none" }} to="/">
                <Button className={classes.title}>conduit</Button>
              </Link>
            </Typography>
            <Link style={{ textDecoration: "none" }} to="/">
              <Button className={Homestyle} onClick={Homehandelclick}>
                Home
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/login">
              <Button className={Singinstyle} onClick={Singinhandelclick}>
                Sing in
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/register">
              <Button className={Singupstyle} onClick={Singuphandelclick}>
                Sing up
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
  //wihout log in
  else {
    return (
      <div className={classes.root}>
        <AppBar className={classes.appBar} position="static">
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              <Link style={{ textDecoration: "none" }} to="/">
                <Button className={classes.title}>conduit</Button>
              </Link>
            </Typography>
            <Link style={{ textDecoration: "none" }} to="/">
              <Button className={Homestyle} onClick={Homehandelclick}>
                Home
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/login">
              <Button className={Singinstyle} onClick={Singinhandelclick}>
                New Article
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/register">
              <Button className={Singupstyle} onClick={Singuphandelclick}>
                Settings
              </Button>
            </Link>
            <Link style={{ textDecoration: "none" }} to="/register">
              <Button className={Singupstyle} onClick={Singuphandelclick}>
                {userName}
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default Header;
