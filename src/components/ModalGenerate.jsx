import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

import "./ModalGenerate.css";
import QRCodeGen from "./QRCodeGen";

const ModalGenerate = (props) => {
  const [qrCodeText, setQRCodeText] = React.useState("");

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
          Generate QRCode
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h3 className="modal-text modal-title">Write text:</h3>
        <Form.Control
          type="text"
          placeholder="Normal text"
          onChange={(e) => setQRCodeText(e?.target?.value)}
        />
        <div className="mt-3">
          <QRCodeGen />
        </div>
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-danger" onClick={props.onHide}>
          Cancel
        </Button>
        <Button
          className="btn-success"
          onClick={() => {
            console.log("salvesalve");
          }}
        >
          Generate
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalGenerate;
