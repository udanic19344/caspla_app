import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Avatar from "@mui/material/Avatar";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";

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
          height: "90px",
          padding: "1% 1% ",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <b>
            <a
              href="/"
              style={{
                color: "#3F4D5F",
                variant: "p",
                textDecoration: "none",
                marginRight: "26px",
                letterSpacing: "3px",
              }}
            >
              新規登録
            </a>
          </b>

          <a href="#" style={{ textDecoration: "none" }}>
            <div
              style={{
                width: "55px",
                height: "55px",
                backgroundColor: "#3F4D5F",
                borderRadius: "75px",
                padding: "10% 5% 5% 2%",
                alignContent: "center",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <HelpCenterOutlinedIcon
                style={{
                  color: "#FFFFFF",
                }}
              />
              <div
                style={{
                  color: "#FFFFFF",
                  fontSize: "10px",
                }}
              >
                ログイン
              </div>
            </div>
          </a>
        </div>
      </AppBar>
      <hr style={{ margin: 0 }} />
    </div>
  );
}
