import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

export const IdleTimeOutPopup = ({showModal, handleClose, handleLogout, remainingTime}) => {

    return (
        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>You have become a zombie!</Modal.Title>
            </Modal.Header>
            <Modal.Body>Your time is running out. Do you want to be revived?</Modal.Body>
            <Modal.Footer>
            <Button variant="danger" onClick={handleLogout}>
                Die out
            </Button>
            <Button variant="primary" onClick={handleClose}>
                Revive me
            </Button>
            </Modal.Footer>
        </Modal>
    )
}
