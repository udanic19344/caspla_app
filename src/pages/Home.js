import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Footer from "../components/Footer";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";

const Search = styled("div")(({ theme }) => ({
  alignItems: "center",
  borderRadius: 20,
  backgroundColor: "#E8E9EB",
  width: 500,
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  marginLeft: "15px",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    // paddingLeft: `calc(5px + ${theme.spacing(2)})`,
    // paddingRight: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),

    [theme.breakpoints.up("sm")]: {
      width: "45ch",
      "&:focus": {
        width: "45ch",
      },
    },
  },
}));
const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

const Home = () => {
  const [button1Color, setButton1Color] = useState(true);
  const [button2Color, setButton2Color] = useState(false);
  const [button3Color, setButton3Color] = useState(false);

  function changeButton1Color() {
    setButton1Color(true);
    setButton2Color(false);
    setButton3Color(false);
  }
  function changeButton2Color() {
    setButton1Color(false);
    setButton2Color(true);
    setButton3Color(false);
  }
  function changeButton3Color() {
    setButton1Color(false);
    setButton2Color(false);
    setButton3Color(true);
  }

  return (
    <div>
      <Navbar />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        hegiht="100vh"
      >
        <Box
          component="img"
          sx={{
            marginTop: 10,
            height: 100,
            width: 200,
          }}
          alt="Caspla"
          src="/CasplaApp.png"
        />
        <Search alignItems="center">
          <StyledInputBase inputProps={{ "aria-label": "search" }} />
          <HelpCenterOutlinedIcon style={{ marginRight: "10px" }} />
        </Search>
        <div>
          <Stack spacing={1} alignItems="center" marginTop="40px">
            <Stack direction="row" spacing={4} alignItems="center">
              <Chip
                style={{
                  backgroundColor: button1Color ? "#3F4D5F" : "#E6E8EA",
                  color: button1Color ? "#FFFFFF" : "#000000",
                }}
                label="Talents"
                component="a"
                href="#basic-chip"
                variant="outlined"
                clickable
                onClick={() => changeButton1Color()}
              />
              <Chip
                style={{
                  backgroundColor: button2Color ? "#3F4D5F" : "#E6E8EA",
                  color: button2Color ? "#FFFFFF" : "#000000",
                }}
                label="Production"
                component="a"
                href="#basic-chip"
                variant="outlined"
                clickable
                onClick={() => changeButton2Color()}
              />
              <Chip
                style={{
                  backgroundColor: button3Color ? "#3F4D5F" : "#E6E8EA",
                  color: button3Color ? "#FFFFFF" : "#000000",
                }}
                label="Link 3"
                component="a"
                href="#basic-chip"
                variant="outlined"
                clickable
                onClick={() => changeButton3Color()}
              />
            </Stack>
          </Stack>
        </div>

        <Card
          style={{
            width: "900px",
            height: "500",
            backgroundColor: "#E8E9EB",
            marginTop: 20,
          }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Caspla
            </Typography>
            <Typography variant="h5" component="div">
              be{bull}nev{bull}o{bull}lent
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Footer />
    </div>
  );
};

export default Home;
