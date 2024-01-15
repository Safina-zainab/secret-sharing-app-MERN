import React from "react";
import { Grid, Typography, Button } from "@mui/material";
import home from "../assets/home.png";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Grid container sx={{ height: "80vh" }}>
        <Grid
          item
          lg={5}
          sm={5}
          sx={{
            backgroundImage: `url(${home})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            display: { xs: "none", sm: "block" },
          }}
        ></Grid>
        <Grid item lg={5} sm={5}>
          <Typography
            variant="h4"
            component="div"
            sx={{
              flexGrow: 1,
              color: "#6d1b7b",
              marginTop: "40%",
              marginLeft: "21%",
            }}
          >
            Welcome to Secret Sharing App
          </Typography>
          <Button
            component={NavLink}
            to="/login"
            style={({ isActive }) => {
              return { backgroundColor: isActive ? "#6d1b7e" : "#6d1b7b" };
            }}
            sx={{
                marginLeft: "55%",
                marginTop:'10%',
                padding:'10px',
              backgroundColor: "#6d1b7b",
              color: "#ffff",
              textTransform: "none",
            }}
          >
            Get Started!
          </Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
