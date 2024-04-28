import React from "react";
import './modal.css';
import ModalBootstrap from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Modal = ({ isOpen, onClose }) => {
  return (
    <ModalBootstrap show={isOpen} onHide={onClose}>
      <ModalBootstrap.Header closeButton>
        <ModalBootstrap.Title>Абонемент на два месяца</ModalBootstrap.Title>
      </ModalBootstrap.Header>
      <ModalBootstrap.Body>
        <h3>Включает все процедуры на протяжении 2 месяцев:</h3>
        <p>- 16-этапная чистка<br />
          - Мезотерапия<br />
          - Витамин С<br />
          - Средний пилинг</p>
      </ModalBootstrap.Body>
      <ModalBootstrap.Footer>
        <Button variant="secondary" onClick={onClose}>
          Закрыть
        </Button>
      </ModalBootstrap.Footer>
    </ModalBootstrap>
  );
};

export default Modal;
