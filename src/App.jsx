import React from "react";
import "./App.css";
import QRCode from "react-qr-code";
import ModalGenerate from "./components/ModalGenerate";
import ModalScanner from "./components/ModalScanner";

function App() {
  const [showModalGenerate, setShowModalGenerate] = React.useState(false);
  const [showModalScanner, setShowModalScanner] = React.useState(false);

  return (
    <div className="container-fluid background">
      <div className="row text-center mt-5">
        <h1 className="text-title-qrcode">QR Code</h1>
      </div>
      <div className="row text-center justify-content-center mt-5">
        <div className="col-md-4">
          <button
            className="button-qrcode"
            onClick={() => {
              setShowModalGenerate(true);
            }}
          >
            Generate
          </button>
        </div>
        <div className="col-md-4">
          <button
            className="button-qrcode"
            onClick={() => {
              setShowModalScanner(true);
            }}
          >
            Scanner
          </button>
        </div>
      </div>
      <ModalGenerate
        show={showModalGenerate}
        onHide={() => setShowModalGenerate(false)}
      />
      <ModalScanner
        show={showModalScanner}
        onHide={() => setShowModalScanner(false)}
      />
    </div>
  );
}

export default App;
