import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import "./HeaderOption.css";

function HeaderOption({ avatar, Icon, title, handleclick }) {
  const user = useSelector(selectUser);
  return (
    <div className="header-option" onClick={handleclick}>
      {Icon && <Icon className="headerOption-icon" />}
      {avatar && (
        <Avatar className="headerOption-avatar" src={user?.photoUrl} alt="">
          {" "}
          {user?.email[0]}
        </Avatar>
      )}
      <h3 className="headerOption-title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
