import React from "react";

export default function Spinner() {
  return (
    <div>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ width: "90vw", height: " 90vh" }}
      >
        <div
          className="spinner-border"
          style={{ width: "4rem", height: " 4rem" }}
        />
        <div className=" pt-4 mx-3">
          <h1> ...Wait... </h1>
        </div>
      </div>
    </div>
  );
}
