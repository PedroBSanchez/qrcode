import React from "react";
import QRCode from "react-qr-code";
const QRCodeGen = () => {
  return (
    <QRCode
      size={256}
      style={{ height: "150", maxWidth: "100%", width: "100%" }}
      value={"teste"}
      viewBox={`0 0 256 256`}
    />
  );
};

export default QRCodeGen;
