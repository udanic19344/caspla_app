import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

export default function Footer() {
  return (
    <Paper sx={{ bottom: 0, left: 0, right: 0 }}>
      <Box
        sx={{
          width: "100%",
          height: 170,
          backgroundColor: "#815296",
          marginTop: 30,
        }}
      >
        <Grid container direction={"row"} spacing={2}>
          <Grid item>
            <Typography marginLeft={10} variant="h5" color="#FFFFFF">
              <a href="/" style={{ color: "#FFFFFF" }}>
                Main
              </a>
            </Typography>
          </Grid>
          <Grid item>
            <Typography marginLeft={10} variant="h5" color="#FFFFFF">
              <a href="/searchTalentsResults" style={{ color: "#FFFFFF" }}>
                SearchTalentsResults
              </a>
            </Typography>
          </Grid>
        </Grid>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="left"
          justifyContent="left"
          // marginLeft={10}
        >
          <Box
            component="img"
            align="left"
            marginLeft={10}
            sx={{
              marginTop: 2,
              height: 50,
              width: 100,
            }}
            alt="Caspla"
            src="/CasplaApp.png"
          />
          <p
            style={{
              color: "#FFFFFF",
            }}
          >
            @ {new Date().getFullYear()} Caspla
          </p>
        </Grid>
      </Box>
    </Paper>
  );
}
