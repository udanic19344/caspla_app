import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import Stack from "@mui/material/Stack";
import Footer from "../components/Footer";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";
import Tag from "../components/Tag";
import Divider from "@mui/material/Divider";

const Home = () => {
  const [button1Color, setButton1Color] = useState(true);
  const [button2Color, setButton2Color] = useState(false);
  const [button3Color, setButton3Color] = useState(false);
  const [showTalents, setShowTalents] = useState(true);
  const [showProduction, setShowProduction] = useState(false);
  const [showLink3, setShowLink3] = useState(false);

  // tag state
  const [male, setMale] = useState(false);

  function changeButton1Color() {
    setButton1Color(true);
    setButton2Color(false);
    setButton3Color(false);
    setShowTalents(true);
    setShowProduction(false);
    setShowLink3(false);
  }
  function changeButton2Color() {
    setButton1Color(false);
    setButton2Color(true);
    setButton3Color(false);
    setShowTalents(false);
    setShowProduction(true);
    setShowLink3(false);
  }
  function changeButton3Color() {
    setButton1Color(false);
    setButton2Color(false);
    setButton3Color(true);
    setShowTalents(false);
    setShowProduction(false);
    setShowLink3(true);
  }

  function maleTagStateChange() {
    setMale(!male);
    console.log("jgcfasc");
  }

  return (
    <div>
      <Navbar />
      <div
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        style={{
          // height: "54vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          flexWrap: "nowrap",
        }}
      >
        <Box
          component="img"
          sx={{
            marginTop: "15vh",
            height: 100,
            width: 200,
          }}
          alt="Caspla"
          src="/CasplaApp.png"
        />
        <div
          style={{
            marginTop: "4%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            width: "45%",
            minWidth: "275px",
          }}
        >
          <input
            class="form-control me-2"
            // type="search"
            aria-label="Search"
            onKeyPress={(ev) => {
              if (ev.key === "Enter") {
                ev.preventDefault();
                console.log(ev.target.value);
              }
            }}
            style={{
              outline: "none",
              borderRadius: "50px",
              backgroundColor: "#F2F3F5",
              boxShadow: "none",
              border: "none",
            }}
          ></input>
          <HelpCenterOutlinedIcon
            style={{
              marginRight: "10px",
              position: "absolute",
              right: "1%",
              color: "#815296",
            }}
          />
        </div>
        <div>
          <Stack spacing={1} alignItems="center" marginTop="40px">
            <Stack direction="row" spacing={4} alignItems="center">
              <Chip
                style={{
                  backgroundColor: button1Color ? "#3F4D5F" : "#E6E8EA",
                  color: button1Color ? "#FFFFFF" : "#000000",
                  width: "130px",
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
                  width: "130px",
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
                  width: "130px",
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
        {showTalents === true && (
          <div
            style={{
              backgroundColor: "#F2F3F5",
              minWidth: "300px",
              width: "70%",
              position: "relative",
              marginTop: "50px",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <p style={{ position: "absolute", top: "-13px", left: "10px" }}>
              絞り込み条件
            </p>

            <div style={{ display: "flex" }}>
              <div style={{ margin: "10px" }}>
                <p style={{ textAlign: "left" }}>性別</p>
                <Divider
                  variant="inset"
                  style={{ bottom: "27%", position: "relative", left: "0" }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Tag
                    onClick={() => maleTagStateChange()}
                    state={male}
                    tagName={"male"}
                  />
                  <Tag tagName={"female"} />
                </div>
              </div>
              <div style={{ margin: "10px" }}>
                <p style={{ textAlign: "left" }}>Age</p>
                <Divider
                  variant="inset"
                  style={{ bottom: "27%", position: "relative", left: "0" }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                  }}
                >
                  <Tag tagName={"male"} />
                  <Tag tagName={"female"} />
                  <Tag tagName={"male"} />
                  <Tag tagName={"female"} />
                  <Tag tagName={"male"} />
                  <Tag tagName={"female"} />
                  <Tag tagName={"male"} />
                </div>
              </div>
              <div style={{ margin: "10px" }}>
                <p style={{ textAlign: "left" }}>Category</p>
                <Divider
                  variant="inset"
                  style={{ bottom: "27%", position: "relative", left: "0" }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                  }}
                >
                  <Tag tagName={"male"} />
                  <Tag tagName={"female"} />
                  <Tag tagName={"male"} />
                  <Tag tagName={"female"} />
                  <Tag tagName={"male"} />
                  <Tag tagName={"female"} />
                  <Tag tagName={"male"} />
                  <Tag tagName={"female"} />
                  <Tag tagName={"male"} />
                  <Tag tagName={"female"} />
                  <Tag tagName={"male"} />
                  <Tag tagName={"fedcdsdvsdvmale"} />
                </div>
              </div>
            </div>
          </div>
        )}

        {showProduction === true && (
          <div
            style={{
              backgroundColor: "#F2F3F5",
              minWidth: "300px",
              width: "70%",
              position: "relative",
              marginTop: "50px",
              padding: "10px",
              borderRadius: "5px",
            }}
          >
            <p style={{ position: "absolute", top: "-13px", left: "10px" }}>
              絞り込み条件
            </p>

            <div style={{ display: "flex" }}>
              {/* <div style={{ margin: "10px" }}>
                <p style={{ textAlign: "left" }}>性別</p>
                <Divider
                  variant="inset"
                  style={{ bottom: "27%", position: "relative", left: "0" }}
                />
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                  }}
                >
                  <Tag tagName={"male"} />
                  <Tag tagName={"female"} />
                </div>
              </div> */}
              {/* <div style={{ margin: "10px" }}>
                <p style={{ textAlign: "left" }}>Age</p>
                <Divider
                  variant="inset"
                  style={{ bottom: "27%", position: "relative", left: "0" }}
                />
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                  }}
                >
                  <Tag tagName={"male"} />
                  <Tag tagName={"female"} />
                  <Tag tagName={"male"} />
                  <Tag tagName={"female"} />
                  <Tag tagName={"male"} />
                  <Tag tagName={"female"} />
                  <Tag tagName={"male"} />
                </div>
              </div> */}
              <div>
                <div>
                  <p style={{ textAlign: "left" }}>Category</p>
                  <Divider
                    variant="inset"
                    style={{ top: "-26%", position: "relative", left: "0" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                  }}
                >
                  <Tag tagName={"male"} />
                  <Tag tagName={"female"} />
                  <Tag tagName={"male"} />
                  <Tag tagName={"female"} />
                  <Tag tagName={"male"} />
                  <Tag tagName={"female"} />
                  <Tag tagName={"male"} />
                  <Tag tagName={"female"} />
                  <Tag tagName={"male"} />
                  <Tag tagName={"female"} />
                  <Tag tagName={"male"} />
                  <Tag tagName={"female"} />
                  <Tag tagName={"male"} />
                  <Tag tagName={"female"} />
                  <Tag tagName={"male"} />
                  <Tag tagName={"female"} />
                  <Tag tagName={"male"} />
                  <Tag tagName={"female"} />
                  <Tag tagName={"male"} />
                  <Tag tagName={"female"} />
                  <Tag tagName={"male"} />
                  <Tag tagName={"female"} />
                  <Tag tagName={"male"} />
                  <Tag tagName={"female"} />
                </div>
              </div>
            </div>
          </div>
        )}

        {showLink3 === true && (
          <div
            style={{
              backgroundColor: "#F2F3F5",
              minWidth: "300px",
              width: "70%",
              position: "relative",
              marginTop: "50px",
              padding: "10px",
              borderRadius: "5px",
            }}
          ></div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Home;
