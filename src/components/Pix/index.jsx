import React, { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import pix from '../../public/assets/img/pix.jpg';
import styles from './Pix.module.scss';

export default function Pix() {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.pix}>
      <Button onClick={openModal}>Pix</Button>
      <Modal show={showModal} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Pague com Pix</Modal.Title>
        </Modal.Header>
        <div className={styles.pix__imagem}>
        <Modal.Body>
          <img src={pix} alt="Pague com Pix" />
          <h3>Chave (83) 98706-1400</h3>
        </Modal.Body>
        </div>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Fechar
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
