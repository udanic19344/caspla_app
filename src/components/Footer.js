import * as React from "react";
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined";

export default function Footer() {
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        marginTop: "6%",
        backgroundColor: "#815296",
        flexDirection: "column",
        padding: "3% 8% 0% 8%",
      }}
    >
      <div
        style={{
          display: "flex",
        }}
      >
        <a
          href="/"
          style={{
            color: "#FFFFFF",
            textDecoration: "none",
            padding: "0% 3% 0% 0%",
          }}
        >
          CASPLAとは
        </a>

        <a
          href="/SearchTalentsResults"
          style={{
            color: "#FFFFFF",
            textDecoration: "none",
            padding: "0% 3% 0% 0%",
          }}
        >
          利用規約
        </a>

        <a
          href="/"
          style={{
            color: "#FFFFFF",
            textDecoration: "none",
            padding: "0% 3% 0% 0%",
          }}
        >
          プライバシーポリシー
        </a>

        <a
          href="/"
          style={{
            color: "#FFFFFF",
            textDecoration: "none",
            padding: "0% 3% 0% 0%",
          }}
        >
          情報セキュリティ方針
        </a>

        <a
          href="/"
          style={{
            color: "#FFFFFF",
            textDecoration: "none",
            padding: "0% 3% 0% 0%",
          }}
        >
          反社基本方針
        </a>

        <a
          href="/"
          style={{
            color: "#FFFFFF",
            textDecoration: "none",
            padding: "0% 3% 0% 0%",
          }}
        >
          ヘルプ
        </a>

        <a
          href="/"
          style={{
            color: "#FFFFFF",
            textDecoration: "none",
            padding: "0% 3% 0% 0%",
          }}
        >
          お問い合わせ
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          margin: "3% 0% ",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <img
            alt="Caspla"
            src="/CasplaFooter.png"
            style={{ width: "30%", margin: "0% 3% 0% 0%", width: "50%" }}
          ></img>
          <p
            style={{
              color: "#FFFFFF",
              margin: "0px",
            }}
          >
            @ {new Date().getFullYear()} Caspla
          </p>
        </div>
        <div>
          <HelpCenterOutlinedIcon
            style={{
              marginRight: "10px",
              color: "#FFFFFF",
            }}
          />
          <HelpCenterOutlinedIcon
            style={{
              marginRight: "10px",
              color: "#FFFFFF",
            }}
          />
          <HelpCenterOutlinedIcon
            style={{
              marginRight: "10px",
              color: "#FFFFFF",
            }}
          />
        </div>
      </div>
    </div>
  );
}
