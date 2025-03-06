import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import smuLogo from "/Users/aubreighdaculug/Desktop/SMU Alumni/SMU-Alumni/frontend/src/Assets/smulogo.png"; // Updated logo import

function HomePage() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login"); // Redirect to login/signup immediately
  }, [navigate]);

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
        minHeight: "100vh",
        background: "linear-gradient(to bottom, #ffffff, #cbd5e1)",
        color: "#1a202c",
      }}
    >
      <AppBar position="static" style={{ backgroundColor: "#ffffff", boxShadow: "none" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <img src={smuLogo} alt="SMU Alumni Logo" style={{ height: "50px", marginRight: "10px" }} />
            <Typography variant="h6" style={{ color: "#1a202c", fontWeight: "500" }}>SMU Alumni</Typography>
          </div>
          <div>
            <Button onClick={() => navigate("/login")} variant="outlined" style={{ borderColor: "#1a202c", color: "#1a202c" }}>
              <b>Log In</b>
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default HomePage;
