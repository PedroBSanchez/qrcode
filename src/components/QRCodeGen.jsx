import React from "react";
import QRCode from "react-qr-code";
const QRCodeGen = ({ value }) => {
  return (
    <QRCode
      size={256}
      style={{ height: "150", maxWidth: "100%", width: "100%" }}
      value={value}
      viewBox={`0 0 256 256`}
    />
  );
};

export default QRCodeGen;
