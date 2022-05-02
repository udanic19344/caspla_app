import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";

export default function Navbar() {
  const [setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  return (
    <div>
      <AppBar
        position="static"
        style={{
          boxShadow: "none",
          backgroundColor: "white",
          alignItems: "end",
        }}
      >
        <Toolbar style={{ display: "flex" }}>
          <Button style={{ color: "black" }} variant="h6">
            Logout
          </Button>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Caspla" src="/public/favicon.ico" />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </AppBar>
      <hr style={{ margin: 0 }} />
    </div>
  );
}
