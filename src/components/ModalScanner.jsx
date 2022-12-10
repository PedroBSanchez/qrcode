import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import QrReader from "react-qr-scanner";

import "./ModalScanner.css";

const ModalScanner = (props) => {
  const [scannerResult, setScannerResult] = React.useState("");

  const handleScan = (data) => {
    setScannerResult(data);
  };

  const handleError = (err) => {
    console.error(err);
  };

  const previewStyle = {
    height: 240,
    width: 320,
  };

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      animation={true}
    >
      <Modal.Header closeButton>
        <Modal.Title
          id="contained-modal-title-vcenter"
          className="modal-text modal-title"
        >
          Scanner QRCode
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <QrReader
          delay={100}
          style={previewStyle}
          onError={() => {
            handleError();
          }}
          onScan={(data) => {
            handleScan(data);
          }}
        />
        <p>Result: {scannerResult}</p>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-danger" onClick={props.onHide}>
          Cancel
        </Button>
        <Button
          className="btn-success"
          onClick={() => {
            console.log("Teste");
          }}
        >
          Confirm
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalScanner;
