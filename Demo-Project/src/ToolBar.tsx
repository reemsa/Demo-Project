import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
const useStyles = makeStyles(theme => ({
  title: {
    paddingBottom: "20px",
    paddingTop: "20px",
    paddingRight: "25px",
    color: "#5CB85C",
    borderBottom: "2px solid #5CB85C"
  },
  toolBar: {
    borderBottom: "1px solid rgba(0, 0, 0, 0.1)"
  },
  disabledTitle: {
    paddingBottom: "20px",
    paddingTop: "20px",
    paddingRight: "25px",
    color: "#aaa"
  },
  content: {
    paddingLeft: "25px",
    paddingTop: "20px"
  }
}));

export default function ToolBar({ propsdata }: { propsdata: any }) {
  const classes = useStyles();
  const [yourStyle, setyourStyle] = useState(classes.title);
  const [globalStyle, setglobalStyle] = useState(classes.disabledTitle);
  const [data, setData] = useState(propsdata);
  const yourFeedhandelclick = () => {
    setyourStyle(classes.title);
    setglobalStyle(classes.disabledTitle);
    setData(propsdata);
  };
  const globalFeedhandelclick = () => {
    setyourStyle(classes.disabledTitle);
    setglobalStyle(classes.title);
    setData("bye");
  };
  return (
    <div>
      <div>
        <Toolbar className={classes.toolBar}>
          <Typography
            variant="body2"
            className={yourStyle}
            onClick={yourFeedhandelclick}
          >
            Your feed
          </Typography>
          <Typography
            variant="body2"
            className={globalStyle}
            onClick={globalFeedhandelclick}
          >
            Global feed
          </Typography>
        </Toolbar>
      </div>
      <div className={classes.content}>{data}</div>
    </div>
  );
}
