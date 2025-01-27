import styles from "../../styles/Thirdweb.module.css";
import React from "react";

export default function ThirdwebGuideFooter() {
  const url = "https://orderoftheartisans.org";
  return (
    <>
      <div
        style={{
          position: "fixed",
          bottom: -120,
          right: -80,
          height: 300,
          width: 150,
          border: "1px solid #eaeaea",
          transform: "rotate(45deg)",
          backgroundColor: " #262935",
          cursor: "pointer",
        }}
        role="button"
        onClick={() => window.open(url, "_blank")}
      />

      <div
        style={{
          position: "fixed",
          bottom: 10,
          right: 14,
        }}
      >
        <img
          src={"/oota.png"}
          alt="orderoftheartisans.org"
          width={100}
          height={100}
          role="button"
          style={{ cursor: "pointer" }}
          onClick={() => window.open(url, "_blank")}
        />
      </div>
    </>
  );
}
