import React, { useState } from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(() => ({
  button: {
    color: "#5CB85C",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    position: "relative",
    float: "left",
    padding: "0.5rem 0.75rem",
    marginLeft: "-1px",
    textDecoration: "none"
  },
  click: {
    color: "#fff",
    backgroundColor: "#5CB85C",
    border: "1px solid #ddd",
    position: "relative",
    float: "left",
    padding: "0.5rem 0.75rem",
    marginLeft: "-1px",
    textDecoration: "underline"
  },
  div: {
    maxWidth: 1000,
    paddingTop: 20,
    paddingLeft: 20,
    position: "relative"
  }
}));
function PageNumbers() {
  const classes = useStyles();
  let pageNum = 50;
  var arrButtons = [];
  const handelClick = (event: any) => {
    let id = event.target.id;
    let element = document.getElementById(id);
    for (let i = 1; i <= pageNum; i++) {
      if (i != id) {
        let el = document.getElementById(i.toString());
        if (el) {
          el.className = classes.button;
        }
      }
    }
    if (element != null) {
      element.className = classes.click;
    }
  };
  for (let i = 1; i <= pageNum; i++) {
    arrButtons.push(
      <button
      key={i.toString()}
        id={i.toString()}
        className={classes.button}
        onClick={handelClick}
      >
        {i}
      </button>
    );
  }
  return <div className={classes.div}>{arrButtons}</div>;
}
export default PageNumbers;
