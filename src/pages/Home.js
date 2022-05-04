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
        <div
          style={{
            marginTop: "8vh",
            width: "23%",
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-end",
          }}
        >
          <img
            alt="Caspla"
            src="/Caspla.png"
            style={{ width: "500px", height: "100px" }}
          />
          {showTalents === true && (
            <b>
              <p
                style={{
                  marginBottom: "8px",
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#815296",
                }}
              >
                Talents
              </p>
            </b>
          )}

          {showProduction === true && (
            <p
              style={{ marginBottom: "8px", fontSize: "17px", fontWeight: 500 }}
            >
              Productions
            </p>
          )}
        </div>
        <div
          style={{
            marginTop: "4%",
            position: "relative",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "center",
            width: "47%",
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
              padding: "17px",
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
                  width: "165px",
                  height: "37px",
                  borderRadius: "20px",
                  border: "none",
                }}
                label="タレント検索"
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
                  width: "165px",
                  height: "37px",
                  borderRadius: "20px",
                  border: "none",
                }}
                label="プロダクション検索"
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
                  width: "165px",
                  height: "37px",
                  borderRadius: "20px",
                  border: "none",
                }}
                label="オーディション検索"
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
            <b>
              <p
                style={{
                  position: "absolute",
                  top: "-13px",
                  left: "27px",
                  color: "#3F4D5F",
                }}
              >
                絞り込み条件
              </p>
            </b>

            <div style={{ display: "flex" }}>
              <div style={{ margin: "15px" }}>
                <p
                  style={{
                    textAlign: "left",
                    color: "#AAAAAA",
                    fontSize: "12px",
                  }}
                >
                  性別
                </p>
                <Divider
                  variant="inset"
                  style={{ top: "10px", position: "relative", left: "5" }}
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
                    tagName={"男性"}
                  />
                  <Tag tagName={"女性"} />
                </div>
              </div>
              <div style={{ margin: "10px" }}>
                <p
                  style={{
                    textAlign: "left",
                    color: "#AAAAAA",
                    fontSize: "12px",
                  }}
                >
                  年齢
                </p>
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
                  <Tag tagName={"10歳未満"} />
                  <Tag tagName={"10代"} />
                  <Tag tagName={"20代"} />
                  <Tag tagName={"3O代"} />
                  <Tag tagName={"40代"} />
                  <Tag tagName={"50代"} />
                  <Tag tagName={"60歳以上"} />
                </div>
              </div>
              <div style={{ margin: "15px" }}>
                <p
                  style={{
                    textAlign: "left",
                    color: "#AAAAAA",
                    fontSize: "12px",
                  }}
                >
                  活動区分
                </p>
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
                  <Tag tagName={"俳優・女優"} />
                  <Tag tagName={"芸人"} />
                  <Tag tagName={"モデル"} />
                  <Tag tagName={"子役"} />
                  <Tag tagName={"ミュージシャン"} />
                  <Tag tagName={"ル"} />
                  <Tag tagName={"グラビアアイドル"} />
                  <Tag tagName={"声優"} />
                  <Tag tagName={"ナレーター"} />
                  <Tag tagName={"司会・MC・リポーター"} />
                  <Tag tagName={"文化人・専門家"} />
                  <Tag tagName={"ダンサー"} />
                  <Tag tagName={"コンパニオン"} />
                  <Tag tagName={"パーツモデル"} />
                  <Tag tagName={"スポーツ選手"} />
                  <Tag tagName={"インフルエンサー"} />
                  <Tag tagName={"その他"} />
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
            <b>
              <p
                style={{
                  position: "absolute",
                  top: "-13px",
                  left: "27px",
                  color: "#3F4D5F",
                }}
              >
                絞り込み条件
              </p>
            </b>

            <div style={{ display: "flex" }}>
              <div>
                <div>
                  <p
                    style={{
                      textAlign: "left",
                      color: "#AAAAAA",
                      fontSize: "12px",
                    }}
                  >
                    ャンル
                  </p>
                  <Divider
                    variant="inset"
                    style={{ bottom: "26%", position: "relative", left: "0" }}
                  />
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    flexWrap: "wrap",
                  }}
                >
                  <Tag tagName={"タレント"} />
                  <Tag tagName={"俳優・女優 "} />
                  <Tag tagName={"芸人"} />
                  <Tag tagName={"モデル"} />
                  <Tag tagName={"子役"} />
                  <Tag tagName={"ミュージシャン"} />
                  <Tag tagName={"アイドル"} />
                  <Tag tagName={"グラビアアイドル"} />
                  <Tag tagName={"シミア"} />
                  <Tag tagName={"声優"} />
                  <Tag tagName={"アナラン手ー"} />
                  <Tag tagName={"文化人"} />
                  <Tag tagName={"スポーツ選手"} />
                  <Tag tagName={"外国人"} />
                  <Tag tagName={"スエキストラ"} />
                  <Tag tagName={"動物"} />
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
