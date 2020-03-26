import React from 'react';
import { Button, Modal } from 'react-bootstrap';

export const IdleTimeOutPopup = ({showModal, handleRevive, handleDieOut, remainingTime}) => {

    return (
        <Modal show={showModal} onHide={handleRevive}>
            <Modal.Body>
              <Modal.Title>You have become a zombie!</Modal.Title>
              <h6>Your time is running out. Do you want to be revived?</h6>
              <div class="container">
                <Button variant="danger" onClick={handleDieOut}>
                    Die out
                </Button>{' '}
                <Button variant="success" onClick={handleRevive}>
                    Revive me
                </Button>
              </div>
            </Modal.Body>
        </Modal>
    )
}
