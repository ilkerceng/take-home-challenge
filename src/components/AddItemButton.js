import React from "react";
import IconButton from "@material-ui/core/IconButton";
import AddCircleOutlineOutlinedIcon from "@material-ui/icons/AddCircleOutlineOutlined";
import { green } from "@material-ui/core/colors";

const AddItemButton = ({ color = green, onClick, ...otherButtonProps }) => {
  return (
    <IconButton {...otherButtonProps} onClick={onClick}>
      <AddCircleOutlineOutlinedIcon style={{ color: color[500] }} />
    </IconButton>
  );
};

export default AddItemButton;
