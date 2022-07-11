import { Avatar } from "@mui/material";
import React from "react";
import { selectUser } from "../features/userSlice";
import { useSelector } from "react-redux";

import "./Sidebar.css";

function Sidebar() {
  const user = useSelector(selectUser);
  const recentItems = (topic) => {
    return (
      <div className="sidebar__recentItems">
        <span className="recentItems__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img
          src="https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=829&q=80"
          alt="gradient cover"
        />

        <Avatar src={user.photoURL}>{user.email[0]}</Avatar>
        <h3>{user.displayName}</h3>
        <h5>{user.email}</h5>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who's viewed on your profile</p>
          <p className="sidebar__stat--number">199</p>
        </div>
        <div className="sidebar__stat">
          <p>Impressions of your posts</p>
          <p className="sidebar__stat--number">1,200</p>
        </div>
      </div>
      <div className="sidebar__section">
        <div className="sidebar__section--part">
          <p>Access exclusive tools & insights</p>
          <p>Try Premium Free, Get Hired Faster.</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItems("React JS")}
        {recentItems("Firebase")}
        {recentItems("Developers Community")}
        {recentItems("Usama Ahmed")}
        {recentItems("Hyderabad Sindh")}
      </div>
    </div>
  );
}

export default Sidebar;
