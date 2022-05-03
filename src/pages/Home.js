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
import Tag from "../components/Tag";

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

  const getSearchData = (e) => {
    console.log(e);
  };

  return (
    <div>
      <Navbar />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        height="100vh"
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
        <Search alignItems="center" onKeyDown={getSearchData}>
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

        {/* <Card
          style={{
            width: "900px",
            height: "500",
            backgroundColor: "#E8E9EB",
            marginTop: 20,
          }}
        >
          <CardContent style={{ position: "relative" }}>
            <p style={{ position: "absolute", top: "-10px" }}>絞り込み条件</p>
          </CardContent>
        </Card> */}
        <div
          style={{
            backgroundColor: "#F2F3F5",
            minWidth: "300px",
            minHeight: "100px",
            position: "relative",
            marginTop: "50px",
          }}
        >
          <p style={{ position: "absolute", top: "-13px", left: "10px" }}>
            絞り込み条件
          </p>

          <Grid container spacing={2} style={{ marginTop: "5px" }}>
            <Grid item xs={2}>
              <p>Gender</p>
              <Tag tagName={"Male"} />
              <Tag tagName={"Female"} />
            </Grid>
            <Grid item xs={4}>
              <p>Age</p>
              <Tag tagName={"20"} />
              <Tag tagName={"30"} />
              <Tag tagName={"40"} />
              <Tag tagName={"50"} />
            </Grid>
            <Grid item xs={6}>
              <p>Category</p>
              <Tag tagName={"Male"} />
              <Tag tagName={"Female"} />
              <Tag tagName={"Male"} />
              <Tag tagName={"Female"} />
              <Tag tagName={"Male"} />
              <Tag tagName={"Female"} />
            </Grid>
          </Grid>
        </div>
      </Grid>
      <Footer />
    </div>
  );
};

export default Home;
