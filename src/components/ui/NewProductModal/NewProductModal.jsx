import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import NewProductForm from "../../NewProductForm/NewProductForm";
import "./NewProductModal.css";

function NewProductModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button
        className="add-product-btn"
        id="add-product-btn"
        onClick={handleShow}
      >
        Add product
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="modal-title">Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <NewProductForm />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button
            className="add-product-btn"
            id="add-product-submit"
            onClick={handleClose}
          >
            Add product
          </Button> */}
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default NewProductModal;
