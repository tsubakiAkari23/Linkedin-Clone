import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => {
    return <div className="sidebar-recentItem">
      <span className="sidebar-hash">#</span>
      <p>{topic}</p>
    </div>;
  };

  return (
    <div className="sidebar">
      <div className="sidebar-top">
        <img
          src="https://images.unsplash.com/photo-1553984840-b8cbc34f5215?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <Avatar className="sidebar-avatar" />
        <h2>S Sandhya</h2>
        <h4>sandy.vishi2398@gmail.com</h4>
      </div>
      <div className="sidebar-stats">
        <div className="sidebar-stat">
          <p>Who viewed you</p>
          <p className="sidebar-statNumber">2,543</p>
        </div>
        <div className="sidebar-stat">
          <p>Views on post</p>
          <p className="sidebar-statNumber">1,234</p>
        </div>
      </div>
      <div className="sidebar-bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programming")}
        {recentItem("softwareengineering")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
