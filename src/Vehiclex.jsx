import React from "react";

export const FindVehicles = () => {
  return (
    <div style={{ paddingTop: "100px" }} className="container">
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", top: 39, width: "100%" }}>
          <h1 className="text-center fw-bold pb-4">Find vehicles near you</h1>
        </div>
        <img src="img/map.png" alt="..." />
      </div>
    </div>
  );
};
export default FindVehicles ;