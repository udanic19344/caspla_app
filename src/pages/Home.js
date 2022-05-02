import React from "react";
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

const Search = styled("div")(({ theme }) => ({
  alignItems: "center",
  borderRadius: 20,
  backgroundColor: "#E8E9EB",
  width: 700,
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),

    [theme.breakpoints.up("sm")]: {
      width: "10ch",
      "&:focus": {
        width: "40ch",
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
  return (
    <div>
      <Navbar />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
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
          <StyledInputBase
            placeholder="Search…"
            inputProps={{ "aria-label": "search" }}
          />
        </Search>
        <div>
          <Stack spacing={1} alignItems="center" marginTop="40px">
            <Stack direction="row" spacing={4} alignItems="center">
              <Chip
                label="Clickable Link"
                component="a"
                href="#basic-chip"
                variant="outlined"
                clickable
              />
              <Chip
                label="Clickable Link"
                component="a"
                href="#basic-chip"
                variant="outlined"
                clickable
              />
              <Chip
                label="Clickable Link"
                component="a"
                href="#basic-chip"
                variant="outlined"
                clickable
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
    </div>
  );
};

export default Home;
