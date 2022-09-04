import { Avatar } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../../redux/userSlice";
import "./Sidebar.css";

function Sidebar() {
  //reusable function to create a list
  const user = useSelector(selectUser);
  const recentItem = (topic) => (
    <div className="sidebar__recentItem">
      <span className="sidebar__hash">#</span>
      <p> {topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1541701494587-cb58502866ab?ixlibG90by1wYWdlfHx8fGVufDB8
          fHx8&auto=format&fit=crop&w=870&q=80"
          alt=""
        />
        {/* //if user has a photoUrl, show it */}
        <Avatar src={user.photoUrl} className="sidebar__avatar">
          {/* //if user hasnot a photoUrl, show the first letter of their name */}
          {user.displayName[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">7,666</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">6,443</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("Mongo DB")}
        {recentItem("Express JS")}
        {recentItem("React JS")}
        {recentItem("Node JS")}
      </div>
    </div>
  );
}

export default Sidebar;
