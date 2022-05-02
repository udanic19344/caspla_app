import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ width: "100%", height: 170, backgroundColor: "#a167c9" }}>
      <Grid container marginLeft={10} direction={"row"} spacing={2}>
        <Grid item>
          <Typography variant="h5" color="#FFFFFF">
            Main
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" color="#FFFFFF">
            Main
          </Typography>
        </Grid>
      </Grid>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="left"
        justifyContent="left"
        marginLeft={10}
      >
        <Box
          component="img"
          align="left"
          sx={{
            marginTop: 2,
            height: 50,
            width: 100,
          }}
          alt="Caspla"
          src="/CasplaApp.png"
        />
      </Grid>
    </Box>
  );
}
