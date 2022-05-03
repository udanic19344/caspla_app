import React from "react";
import Footer from "../components/Footer";
import NaveBar from "../components/Navbar";
import Tag from "../components/Tag";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";

const SearchTalentsResults = (props) => {
  return (
    <>
      <NaveBar />
      <div style={{ height: "20vh" }}></div>

      <div
        class="container"
        style={{
          width: "700px",
          backgroundColor: "#F2F3F5",
          padding: "20px",
          borderRadius: 5,
        }}
      >
        <div class="row">
          <div
            class="col-3"
            style={{ display: "flex", justifyContent: "center", padding: "0" }}
          >
            <div
              style={{
                width: "150px",
                height: "150px",
                backgroundColor: "#CFD2D7",
                borderRadius: "75px",
              }}
            ></div>
          </div>
          <div class="col" style={{ margin: "auto 0" }}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "5px",
              }}
            >
              <h5
                style={{
                  textAlign: "start",
                  margin: "auto 0",
                  color: "#8B5F9E",
                  fontWeight: "bold",
                }}
              >
                萬波きゃすぷら子 {props.name}
              </h5>
              <div style={{ display: "flex" }}>
                <Tag tagName={"Tag"} />

                <HelpCenterOutlinedIcon
                  style={{
                    margin: "auto 0",
                    padding: "5px",
                    backgroundColor: "#FFFFFF",
                    borderRadius: "50px",
                    marginLeft: "5px",
                  }}
                />
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
