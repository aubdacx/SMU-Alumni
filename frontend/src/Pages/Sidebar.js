import React from "react";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Typography } from "@mui/material";
import { Group, Work, Event, Report, Security, Settings, Logout } from "@mui/icons-material";
import "./Sidebar.css"; 

const SidebarMenu = () => {
  return (
    <Sidebar 
      className="custom-sidebar" 
      style={{ 
        width: "250px",
        height: "100vh",
        position: "fixed",
        top: "0",
        left: "0",
        display: "flex",
        flexDirection: "column",
        paddingBottom: "60px" // Ensures no overlap with logout
      }}
    >
      {/* Sidebar Header */}
      <div style={{ padding: "20px", textAlign: "center" }}>
        <Typography variant="h6" style={{ color: "black" }}><b>ADMIN</b></Typography>
        <Typography variant="body2" style={{ color: "gray" }}></Typography>
      </div>

      {/* Main Menu */}
      <Menu style={{ flexGrow: 1 }}>
        <MenuItem icon={<Group />}>Alumni Management</MenuItem>
        <MenuItem icon={<Work />}>Job Listings</MenuItem>
        <MenuItem icon={<Event />}>Events & News</MenuItem>
        <MenuItem icon={<Report />}>Analytics & Reports</MenuItem>
        <MenuItem icon={<Security />}>Security</MenuItem>
        <MenuItem icon={<Settings />}>Settings</MenuItem>
      </Menu>

      {/* Log Out Button at the VERY Bottom */}
      <div style={{
        position: "absolute",
        bottom: "0",
        width: "100%",
      }}>
        <Menu>
          <MenuItem icon={<Logout />} style={{ color: "red" }}>Log Out</MenuItem>
        </Menu>
      </div>
      
    </Sidebar>
  );
};

export default SidebarMenu;
