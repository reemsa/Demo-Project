import React, { useState } from "react";
import { Button } from "reactstrap";
import { IoIosHeart } from "react-icons/io";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles(themes => ({
  like: {
    backgroundColor: "transparent",
    color: "#5CB85C",
    border: "solid",
    borderRightColor: "#5CB85C",
    borderLeftColor: "#5CB85C",
    borderTopColor: "#5CB85C",
    borderBottomColor: "#5CB85C",
    fontSize: " 0.875rem"
  },
  onHover: {
    backgroundColor: "#5CB85C",
    color: "#fff",
    border: "solid",
    borderColor: "#5CB85C",
    fontSize: " 0.875rem"
  }
}));
const LikeButton = ({ number }: { number: number }) => {
  const classes = useStyles();
  const [style, setStyle] = useState(classes.like);
  const handelhover = () => {
    setStyle(classes.onHover);
  };
  const handelout = () => {
    setStyle(classes.like);
  };

  return (
    <div>
      <Button
        className={style}
        onMouseEnter={handelhover}
        onMouseOut={handelout}
      >
        <IoIosHeart></IoIosHeart>
        {number}
      </Button>
    </div>
  );
};
export default LikeButton;
