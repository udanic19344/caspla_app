import React from "react";
import Footer from "../components/Footer";
import NaveBar from "../components/Navbar";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

const SearchTalentsResults = () => {
  return (
    <>
      <NaveBar />

      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={4}>
            <Item>xs=4</Item>
          </Grid>
          <Grid item xs={8}>
            <Item>xs=8</Item>
          </Grid>
        </Grid>
      </Box>

      <Footer />
    </>
  );
};

export default SearchTalentsResults;
