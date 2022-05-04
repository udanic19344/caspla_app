import React from "react";
import Footer from "../components/Footer";
import NaveBar from "../components/Navbar";
import Tag from "../components/Tag";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";

const SearchTalentsResults = (props) => {
  return (
    <>
      <NaveBar />
      <div style={{ height: "10vh" }}></div>

      <div
        class="container"
        style={{
          width: "69.9%",
          backgroundColor: "#F2F3F5",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <div style={{ display: "flex" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              padding: "0",
            }}
          >
            <div
              style={{
                width: "164px",
                height: "164px",
                backgroundColor: "#CFD2D7",
                borderRadius: "100px",
                marginLeft: "14px",
                marginTop: "14px",
                marginBottom: "14px",
                marginRight: "14px",
              }}
            ></div>
          </div>
          <div style={{ marginLeft: "19px", marginRight: "19px" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "28px",
              }}
            >
              <h3
                style={{
                  textAlign: "start",
                  margin: "0",
                  color: "#8B5F9E",
                  fontWeight: "bold",
                }}
              >
                萬波きゃすぷら子 {props.name}
              </h3>
              <div style={{ display: "flex", alignItems: "center" }}>
                <Tag tagName={"モデル"} style={{ marginRight: "50px" }} />
                <Tag tagName={"アイドル"} />
                <Tag tagName={"女優"} />

                <div
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "25px",
                    backgroundColor: "#ffffff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginLeft: "10px",
                  }}
                >
                  <HelpCenterOutlinedIcon style={{ color: "#87909B" }} />
                </div>
              </div>
            </div>
            <p
              style={{
                textAlign: "start",
                margin: "0 0 5px 0",
                color: "#8F97A2",
              }}
            >
              Casplako Mamnami {props.type}
            </p>
            <p
              style={{
                textAlign: "start",
                margin: "auto 0",
                fontSize: "15px",
                color: "#3F4D5F",
                fontWeight: "500",
              }}
            >
              キャストのプロフィール要約キャストのプロフィール要約キャストのプロフィール要約キャストのプロフ
              ィール要約キャストのプロフィール要約キャストのプロフィール要約.....{" "}
              <span>
                <a href="#" style={{ textDecoration: "none" }}>
                  続きを読む
                </a>
              </span>
              {props.discription}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default SearchTalentsResults;
