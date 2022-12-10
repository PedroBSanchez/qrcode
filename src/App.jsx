import React from "react";
import "./App.css";
import QRCode from "react-qr-code";
import ModalGenerate from "./components/ModalGenerate";

function App() {
  const [showModalGenerate, setShowModalGenerate] = React.useState(false);
  const [showModalScanner, setShowModalScanner] = React.useState(false);

  return (
    <div className="container-fluid background">
      <div className="row text-center justify-content-center mt-5">
        <div className="col-md-4">
          <button
            className="button-qrcode"
            onClick={() => {
              setShowModalGenerate(true);
            }}
          >
            Gerar QRCode
          </button>
        </div>
        <div className="col-md-4">
          <button className="button-qrcode">Scanner QRCode</button>
        </div>
      </div>
      <ModalGenerate
        show={showModalGenerate}
        onHide={() => setShowModalGenerate(false)}
      />
    </div>
  );
}

export default App;
