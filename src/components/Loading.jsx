import React from "react";
import { RotatingLines } from "react-loader-spinner";

const Loading = () => {
  return (
    <div className="d-flex justify-content-center vh-100 align-items-center">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="200"
        visible={true}
      />
    </div>
  );
};

export default Loading;
